-- ======================================================================
-- SANTARA.ID — ENTERPRISE DATABASE ARCHITECTURE (POSTGRESQL / SUPABASE)
-- Dirancang untuk Skalabilitas Inklusi Finansial UMKM Surabaya & Bank BRI
-- ======================================================================

-- 1. EXTENSIONS & ENUMS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE role_type AS ENUM ('UMKM_MERCHANT', 'LOCAL_SUPPLIER', 'BULK_SUPPLIER', 'CUSTOMER', 'COURIER_OPANG', 'COURIER_SIBOYO', 'AGEN_BRILINK_ADMIN');
CREATE TYPE supplier_tier_type AS ENUM ('LOCAL_MARKET', 'BULK_WHOLESALE');
CREATE TYPE delivery_slot_type AS ENUM ('SUBUH_05_07', 'PAGI_08_10', 'SORE_15_17');
CREATE TYPE group_status_type AS ENUM ('COLLECTING', 'TARGET_REACHED', 'TIERED_FALLBACK', 'SUPPLIER_COMMITTED', 'DISPATCHED', 'COMPLETED', 'CANCELLED');
CREATE TYPE escrow_status_type AS ENUM ('UNPAID', 'HELD_IN_ESCROW', 'RELEASED_TO_SUPPLIER', 'REFUNDED_TO_BUYER');
CREATE TYPE order_hilir_type AS ENUM ('PREPAID_QRIS', 'COD_AGENBRILINK');
CREATE TYPE order_hilir_status AS ENUM ('PAID_PENDING_KITCHEN', 'COOKING', 'IN_TRANSIT_COURIER', 'ARRIVED_AT_PICKUP_POINT', 'COMPLETED', 'EXPIRED_CANCELLED');

-- 2. USERS & PROFILES
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    role role_type NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    bri_account_number VARCHAR(30),
    bri_cif VARCHAR(30),
    bri_merchant_id VARCHAR(30),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. UMKM PROFILES (MERCHANTS)
CREATE TABLE IF NOT EXISTS umkm_merchants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    business_name VARCHAR(150) NOT NULL,
    business_category VARCHAR(100) NOT NULL, -- 'Penyetan', 'Kantin Kampus', 'Katering', dll
    subdistrict_surabaya VARCHAR(100) NOT NULL, -- 'Mulyorejo', 'Gubeng', 'Rungkut', dll
    address_detail TEXT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    qris_static_string TEXT,
    rewards_qris_count_monthly INT DEFAULT 0,
    has_active_kur_facility BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. SUPPLIER PROFILES (LOCAL PASAR & BULK WHOLESALE)
CREATE TABLE IF NOT EXISTS suppliers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    supplier_name VARCHAR(150) NOT NULL,
    tier supplier_tier_type NOT NULL,
    market_base_location VARCHAR(150) NOT NULL, -- 'Pasar Keputran', 'Pasar Pucang', 'Pengepul Krian'
    default_moq_kg INT DEFAULT 1,
    min_delivery_point_kg INT DEFAULT 1,
    on_time_delivery_score DECIMAL(3, 2) DEFAULT 5.00,
    is_pasar_id_partner BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. COMMODITY CATALOG (HULU)
CREATE TABLE IF NOT EXISTS commodities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    supplier_id UUID REFERENCES suppliers(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL, -- 'Daging Ayam Broiler', 'Beras Premium', 'Cabai Rawit Merah'
    category VARCHAR(100) NOT NULL,
    price_per_kg DECIMAL(12, 2) NOT NULL,
    tiered_price_sub_moq DECIMAL(12, 2), -- Harga jika target MOQ kurang sedikit (Tiered fallback)
    unit VARCHAR(20) DEFAULT 'kg',
    available_stock_kg INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. SANTARA GROUP (COLLECTIVE MOQ POOLING)
CREATE TABLE IF NOT EXISTS group_procurements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    commodity_id UUID REFERENCES commodities(id),
    target_moq_kg INT NOT NULL,
    current_accumulated_kg INT DEFAULT 0,
    status group_status_type DEFAULT 'COLLECTING',
    target_price_per_kg DECIMAL(12, 2) NOT NULL,
    tiered_price_per_kg DECIMAL(12, 2),
    cut_off_time TIMESTAMP WITH TIME ZONE NOT NULL, -- H-1 Pukul 14.00 WIB
    scheduled_delivery_date DATE NOT NULL,
    delivery_slot delivery_slot_type NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. GROUP PLEDGES (UMKM PARTICIPATION)
CREATE TABLE IF NOT EXISTS group_procurement_pledges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    group_procurement_id UUID REFERENCES group_procurements(id) ON DELETE CASCADE,
    umkm_id UUID REFERENCES umkm_merchants(id),
    pledged_kg INT NOT NULL,
    unit_price_agreed DECIMAL(12, 2) NOT NULL,
    total_amount DECIMAL(14, 2) NOT NULL,
    escrow_status escrow_status_type DEFAULT 'UNPAID',
    bri_partner_reference_no VARCHAR(100) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. PICKUP POINTS (AGEN BRILINK KELURAHAN)
CREATE TABLE IF NOT EXISTS pickup_points (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agen_brilink_name VARCHAR(150) NOT NULL, -- 'AgenBRILink Toko Berkah'
    coordinator_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    subdistrict VARCHAR(100) NOT NULL,
    address_detail TEXT NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    active_packages_count INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

-- 9. CUSTOMER ORDERS (HILIR B2C & COD)
CREATE TABLE IF NOT EXISTS customer_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_phone VARCHAR(20) NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    umkm_id UUID REFERENCES umkm_merchants(id),
    pickup_point_id UUID REFERENCES pickup_points(id),
    pickup_token VARCHAR(20) UNIQUE NOT NULL, -- '#STR-204'
    order_type order_hilir_type NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    cod_fee DECIMAL(10, 2) DEFAULT 0,
    status order_hilir_status DEFAULT 'PAID_PENDING_KITCHEN',
    assigned_courier_type VARCHAR(50), -- 'SIBOYO_KURIR' atau 'OPANG'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    pickup_deadline TIMESTAMP WITH TIME ZONE NOT NULL
);

-- 10. REALTIME TRIGGER: Auto-Update Kuota Group Procurement
CREATE OR REPLACE FUNCTION update_group_procurement_total()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE group_procurements
    SET current_accumulated_kg = (
        SELECT COALESCE(SUM(pledged_kg), 0)
        FROM group_procurement_pledges
        WHERE group_procurement_id = NEW.group_procurement_id
    )
    WHERE id = NEW.group_procurement_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_group_total
AFTER INSERT OR UPDATE OR DELETE ON group_procurement_pledges
FOR EACH ROW EXECUTE FUNCTION update_group_procurement_total();

-- 11. SEED DATA SURABAYA PILOT
INSERT INTO pickup_points (agen_brilink_name, coordinator_name, phone_number, subdistrict, address_detail, latitude, longitude)
VALUES 
('AgenBRILink Toko Berkah', 'H. Agus', '081234567890', 'Gubeng', 'Jl. Dharmawangsa No. 42, Surabaya', -7.275443, 112.757821),
('AgenBRILink Toko Rezeki', 'Ibu Fatimah', '081298765432', 'Mulyorejo', 'Jl. Mulyorejo Baru No. 12, Surabaya', -7.264121, 112.784532);
