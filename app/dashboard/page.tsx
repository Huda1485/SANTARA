'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Store,
  ShoppingBag,
  Truck,
  Bike,
  ShieldCheck,
  Building2,
  TrendingUp,
  Clock,
  MapPin,
  QrCode,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  Plus,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  ChevronsUpDown,
  Eye,
  Settings,
  Database,
  Lock,
  Boxes,
  Users,
  Sparkles,
  Cpu,
  Coins,
  FileText,
  Star,
  Check,
  X,
  Phone,
  Wallet,
  Package,
  Layers,
  Award,
  BarChart3,
  Calendar,
  CreditCard,
  SlidersHorizontal,
  ExternalLink,
  RefreshCw,
  SendHorizontal,
  CheckSquare,
  Sun,
  Moon,
  HelpCircle,
  Info,
  Shield,
  Download,
  Share2,
  Calculator,
  UserCheck,
  MessageSquare,
  Bot,
  PieChart,
  Sliders,
  Send,
  ThumbsUp,
  Navigation
} from 'lucide-react';

export default function DashboardPage() {
  // ==========================================================================
  // 1. THEME STATE (DUAL-TONE SYSTEM: MODE TERANG VS MODE GELAP)
  // ==========================================================================
  const [isDarkMode, setIsDarkMode] = useState(false); // Default: Mode Terang

  // ==========================================================================
  // 2. ACTIVE ROLE & SUB-TAB STATE
  // ==========================================================================
  const [activeRole, setActiveRole] = useState<'umkm' | 'supplier' | 'ojek' | 'bank_bri'>('umkm');
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);

  // Admin BRI Sub-Role: 'admin' (Operasional) vs 'super_admin' (Pusat Kendali BUMN)
  const [adminSubRole, setAdminSubRole] = useState<'admin' | 'super_admin'>('super_admin');

  // Sub-tabs per role
  const [umkmTab, setUmkmTab] = useState<'etalase' | 'pesanan' | 'kurir' | 'ai_asisten' | 'kulakan' | 'kur_bri' | 'komunitas'>('etalase');
  const [supplierTab, setSupplierTab] = useState<'katalog' | 'po_masuk' | 'ai_analisis' | 'escrow' | 'komunitas'>('katalog');
  const [ojekTab, setOjekTab] = useState<'radar' | 'orderan' | 'otp' | 'dompet'>('radar');
  const [adminTab, setAdminTab] = useState<'analitik' | 'database' | 'rekapitulasi' | 'penyaluran_kur' | 'radar_pangan' | 'fraud_security' | 'kelola'>('analitik');

  // Ref untuk Role Switcher Click Outside
  const roleSwitcherRef = useRef<HTMLDivElement>(null);
  const mobileRoleSwitcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const inSidebar = roleSwitcherRef.current && roleSwitcherRef.current.contains(target);
      const inMobile = mobileRoleSwitcherRef.current && mobileRoleSwitcherRef.current.contains(target);
      if (!inSidebar && !inMobile) {
        setShowRoleSwitcher(false);
      }
    };
    if (showRoleSwitcher) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showRoleSwitcher]);

  // Real-time Clock
  const [timeStr, setTimeStr] = useState('15:30:00');
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Global Toast Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // ==========================================================================
  // 3. DATA: UMKM (WARUNG BAROKAH BU ENDANG)
  // ==========================================================================
  const [orderFilter, setOrderFilter] = useState<'semua' | 'siap_antar' | 'dalam_pengiriman' | 'selesai'>('semua');
  
  // Produk UMKM dengan data autentik, narasi lengkap, dan spesifikasi komprehensif
  const [products, setProducts] = useState([
    {
      id: 'PRD-001',
      name: 'Paket Rawon Daging Suroboyo (Kuah Hitam Gurih + Sambal Terasi)',
      category: 'Kuliner Siap Saji',
      price: 28000,
      costPrice: 16500,
      stock: 65,
      sold: 1420,
      rating: 4.9,
      reviewsCount: 312,
      image: '/images/rawon_daging_surabaya.jpg',
      description: 'Paket kuliner khas legendaris Surabaya dengan kuah kaldu sapi pekat berbumbu kluwek Jawa Timur pilihan. Dibuat menggunakan potongan daging sapi sandung lamur empuk yang dimasak lambat (slow-cooked) selama 4 jam dengan racikan rempah warisan keluarga Bu Endang. Disajikan lengkap bersama sambal terasi matang pedas gurih, tauge pendek segar, potongan jeruk nipis, dan taburan bawang goreng renyah.',
      specifications: [
        { label: 'Bahan Baku Utama', value: 'Daging sapi lokal Surabaya, kluwek matang, daun jeruk, serai, bawang merah, bawang putih' },
        { label: 'Porsi Bersih', value: '350 gram per porsi mangkok lengkap (Daging 120g + Kuah Kaldu 230ml)' },
        { label: 'Daya Simpan', value: '12 jam suhu ruang hangat, 48 jam di lemari pendingin (chiller)' },
        { label: 'Sertifikasi & Legalitas', value: 'Sertifikat Halal Kemenag RI ID351100029104, Izin Edar P-IRT Dinkes Kota Surabaya' },
        { label: 'Kemasan Pengiriman', value: 'Wadah thinwall food-grade anti-bocor tahan panas microwave dilapisi besek bambu ramah lingkungan' },
        { label: 'Metode Pembayaran', value: 'QRIS BRImo Settlement Langsung H+0, Transfer Rekening BritAma, Tunai di Tempat' }
      ],
      salesHistory: [
        { time: 'Hari ini 13:10 WIB', buyer: 'Ibu Ratna Kumala', qty: '4 Porsi', total: 'Rp 112.000', via: 'QRIS BRImo' },
        { time: 'Hari ini 11:45 WIB', buyer: 'Bpk. Bagus Kurniawan', qty: '2 Porsi', total: 'Rp 56.000', via: 'QRIS BCA' },
        { time: 'Kemarin 18:30 WIB', buyer: 'Keluarga Bpk. Santoso', qty: '6 Porsi', total: 'Rp 168.000', via: 'Tunai Kasir' }
      ]
    },
    {
      id: 'PRD-002',
      name: 'Sambal Klotok Ikan Asin Cumi Toples Kaca 200g Higienis',
      category: 'Olahan & Bumbu',
      price: 25000,
      costPrice: 14000,
      stock: 140,
      sold: 890,
      rating: 4.8,
      reviewsCount: 194,
      image: '/images/peken_kuliner_sambal.jpg',
      description: 'Sambal kemasan siap saji khas pesisir Jawa Timur dengan paduan cabai rawit merah segar, ikan asin klotok gurih renyah, dan potongan cumi asin empuk. Dimasak matang dengan minyak kelapa pilihan tanpa bahan pengawet kimia berbahaya. Cocok sebagai lauk praktis pendamping nasi panas.',
      specifications: [
        { label: 'Bahan Baku Utama', value: 'Cabai rawit merah, ikan asin klotok Kenjeran, cumi asin, bawang merah, minyak kelapa' },
        { label: 'Berat Bersih', value: '200 gram (Toples Kaca Segel Induksi Alumunium Foil)' },
        { label: 'Daya Simpan', value: '30 hari suhu ruang (segel tertutup), 3 bulan dalam lemari pendingin setelah dibuka' },
        { label: 'Sertifikasi & Legalitas', value: 'Sertifikasi Halal MUI Jatim, Uji Laboratorium Bebas Formalin Dinkes' },
        { label: 'Kemasan Pengiriman', value: 'Toples kaca tebal dengan bubble wrap ganda dan kardus karton kokoh' },
        { label: 'Metode Pembayaran', value: 'QRIS Dinamis, BRIVA E-Commerce, BRImo' }
      ],
      salesHistory: [
        { time: 'Hari ini 12:45 WIB', buyer: 'Ibu Linda Susanti', qty: '2 Toples', total: 'Rp 50.000', via: 'QRIS Mandiri' },
        { time: 'Kemarin 16:15 WIB', buyer: 'Warung Bu Siti Rungkut', qty: '10 Toples', total: 'Rp 250.000', via: 'BRIVA BRI' }
      ]
    },
    {
      id: 'PRD-003',
      name: 'Besek Bambu Tradisional Ramah Lingkungan (18x18 cm)',
      category: 'Kemasan & Wadah',
      price: 3500,
      costPrice: 2100,
      stock: 420,
      sold: 3100,
      rating: 5.0,
      reviewsCount: 520,
      image: '/images/peken_kemasan_besek.jpg',
      description: 'Wadah kotak besek anyaman bambu alami berkualitas hasil kerajinan pengrajin bambu binaan Bank BRI di Jawa Timur. Bersih, higienis, bebas bahan pemutih atau zat kimia sintesis. Digunakan sebagai kemasan ramah lingkungan untuk nasi berkatan, oleh-oleh, atau hampers kuliner khas Nusantara.',
      specifications: [
        { label: 'Bahan Baku Utama', value: 'Bambu apus tua pilihan hasil panen pengrajin binaan' },
        { label: 'Ukuran Dimensi', value: '18 cm x 18 cm x 8 cm (Ukuran Sedang Standar Kuliner Nasi Kotak)' },
        { label: 'Karakteristik', value: 'Bebas kaporit/pemutih kimia, memiliki sirkulasi udara alami anti-basi' },
        { label: 'Sertifikasi & Legalitas', value: 'Sertifikasi Ramah Lingkungan Komunitas Hijau Jawa Timur' },
        { label: 'Kemasan Pengiriman', value: 'Kemasan ikatan per 50 pcs dilapisi plastik tebal anti air' },
        { label: 'Metode Pembayaran', value: 'Semua Metode QRIS & Transfer Bank BRI' }
      ],
      salesHistory: [
        { time: 'Hari ini 12:50 WIB', buyer: 'Bpk. Hendro Wicaksono', qty: '50 Pcs', total: 'Rp 175.000', via: 'QRIS BRImo' },
        { time: 'Kemarin 09:20 WIB', buyer: 'Catering Berkah Mulyosari', qty: '200 Pcs', total: 'Rp 700.000', via: 'BRIVA' }
      ]
    },
    {
      id: 'PRD-004',
      name: 'Spikoe Lapis Kuno Mentega Wijsman 20x10 cm',
      category: 'Oleh-Oleh Khas',
      price: 75000,
      costPrice: 48000,
      stock: 24,
      sold: 430,
      rating: 4.9,
      reviewsCount: 98,
      image: '/images/spikoe_lapis_surabaya.jpg',
      description: 'Kue lapis kuno khas Surabaya dengan tekstur selembut sutra dan aroma harum mentega Wijsman Belanda yang khas. Menggunakan resep otentik klasik dua lapis (kuning dan cokelat) yang dipadukan dengan selai stroberi segar premium di tengahnya. Sangat cocok untuk hantaran keluarga dan cinderamata khas Surabaya.',
      specifications: [
        { label: 'Bahan Baku Utama', value: 'Mentega Wijsman, kuning telur ayam segar, tepung terigu protein sedang, cokelat bubuk Belanda, selai stroberi' },
        { label: 'Ukuran Dimensi', value: 'Panjang 20 cm x Lebar 10 cm x Tinggi 6 cm (Berat Bersih ~650 gram)' },
        { label: 'Daya Simpan', value: '5 hari suhu ruang sejuk, 14 hari di dalam lemari pendingin' },
        { label: 'Sertifikasi & Legalitas', value: 'Sertifikat Halal Kemenag RI, Izin P-IRT Kota Surabaya' },
        { label: 'Kemasan Pengiriman', value: 'Hardbox karton gold eksklusif dengan pisau pemotong plastik dan kantong spunbond' },
        { label: 'Metode Pembayaran', value: 'QRIS BRImo, GoPay, OVO, ShopeePay, Tunai' }
      ],
      salesHistory: [
        { time: 'Hari ini 11:15 WIB', buyer: 'Keluarga Bpk. Santoso', qty: '2 Kotak', total: 'Rp 150.000', via: 'QRIS GoPay' },
        { time: 'Kemarin 14:00 WIB', buyer: 'Ibu Maya Dharmawangsa', qty: '3 Kotak', total: 'Rp 225.000', via: 'BRImo' }
      ]
    }
  ]);

  // Selected product state untuk Modal Detail (Kelola)
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  // Pop-up Tambah Produk State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdCategory, setNewProdCategory] = useState('Kuliner Siap Saji');
  const [newProdPrice, setNewProdPrice] = useState('28000');
  const [newProdCostPrice, setNewProdCostPrice] = useState('16500');
  const [newProdStock, setNewProdStock] = useState('50');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [newProdImage, setNewProdImage] = useState('/images/rawon_daging_surabaya.jpg');

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) {
      showToast('Mohon masukkan nama produk!');
      return;
    }
    const newId = `PRD-00${products.length + 1}`;
    const pPrice = parseInt(newProdPrice) || 25000;
    const pCost = parseInt(newProdCostPrice) || Math.round(pPrice * 0.6);
    const pStock = parseInt(newProdStock) || 30;

    const newProd = {
      id: newId,
      name: newProdName.trim(),
      category: newProdCategory,
      price: pPrice,
      costPrice: pCost,
      stock: pStock,
      sold: 0,
      rating: 5.0,
      reviewsCount: 1,
      image: newProdImage,
      description: newProdDesc.trim() || `${newProdName.trim()} berkualitas pilihan Warung Barokah Bu Endang siap saji higienis.`,
      specifications: [
        { label: 'Bahan Baku Utama', value: 'Bahan pilihan segar lokal Jawa Timur' },
        { label: 'Standar Porsi', value: '1 kemasan standar kuliner siap saji' },
        { label: 'Daya Simpan', value: '12 jam suhu ruang, 48 jam pendingin' },
        { label: 'Legalitas & Sertifikasi', value: 'Standar P-IRT & Halal Kemenag RI' },
        { label: 'Metode Pembayaran', value: 'QRIS BRImo H+0 & Tunai Kasir' }
      ],
      salesHistory: [
        { time: 'Baru ditambahkan', buyer: 'Siap tayang di etalase', qty: `${pStock} Stok`, total: `Rp ${pPrice.toLocaleString('id-ID')}`, via: 'SANTARA Mart' }
      ]
    };

    setProducts([newProd, ...products]);
    setShowAddProductModal(false);
    setNewProdName('');
    setNewProdDesc('');
    showToast(`Produk "${newProd.name}" berhasil dipublikasikan ke etalase toko!`);
  };

  const handleUpdateProductStockAndPrice = (prodId: string, updatedStock: number, updatedPrice: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === prodId) {
        const updated = { ...p, stock: updatedStock, price: updatedPrice };
        if (selectedProduct && selectedProduct.id === prodId) {
          setSelectedProduct(updated);
        }
        return updated;
      }
      return p;
    }));
    showToast(`Perubahan stok & harga untuk ${prodId} berhasil disimpan!`);
  };

  const [umkmOrders, setUmkmOrders] = useState([
    {
      id: '#ORD-9401',
      buyer: 'Ibu Ratna Kumala',
      phone: '0812-3490-8812',
      address: 'Jl. Kertajaya Indah Timur No. 18, Surabaya',
      items: '4x Rawon Daging + 2x Sambal Klotok',
      total: 'Rp 162.000',
      status: 'siap_antar',
      kurir: 'Menunggu Alokasi Driver',
      time: '13:25 WIB'
    },
    {
      id: '#ORD-9398',
      buyer: 'Bpk. Hendro Wicaksono',
      phone: '0857-1928-3301',
      address: 'Perumahan Galaxy Bumi Permai Blok A3',
      items: '50x Besek Bambu Eco-Friendly',
      total: 'Rp 175.000',
      status: 'dalam_pengiriman',
      kurir: 'Cak Sugeng (Vario L 4821 XY)',
      time: '12:50 WIB'
    },
    {
      id: '#ORD-9382',
      buyer: 'Keluarga Bpk. Santoso',
      phone: '0821-9981-4421',
      address: 'Jl. Rungkut Asri Barat No. 8',
      items: '2x Spikoe Kuno Surabaya',
      total: 'Rp 150.000',
      status: 'selesai',
      kurir: 'Telah Diterima (OTP 4819 Cocok)',
      time: '11:15 WIB'
    }
  ]);

  // Dispatch Kurir Otomatis (Sistem Random Pick dari Pool Driver)
  const [isDispatching, setIsDispatching] = useState(false);
  const driverPool = [
    { name: 'Cak Sugeng', motor: 'Honda Vario 125', plat: 'L 4821 XY', rating: 4.95, phone: '0813-9820-4412', jarak: '0.4 km', estimasi: '3 menit' },
    { name: 'Cak Dul Kholik', motor: 'Yamaha Jupiter MX', plat: 'L 3910 AB', rating: 4.90, phone: '0857-3012-9844', jarak: '0.8 km', estimasi: '5 menit' },
    { name: 'Pak Slamet Supriadi', motor: 'Honda Beat ESP', plat: 'L 5520 CD', rating: 4.92, phone: '0821-4491-0021', jarak: '0.6 km', estimasi: '4 menit' },
    { name: 'Cak Joko Purnomo', motor: 'Honda Scoopy FI', plat: 'L 6104 OP', rating: 4.88, phone: '0812-7781-3329', jarak: '1.1 km', estimasi: '7 menit' }
  ];

  const [activeAssignedDriver, setActiveAssignedDriver] = useState<typeof driverPool[0] | null>(driverPool[0]);

  const handleCallCourierRandom = (targetOrderId?: string) => {
    setIsDispatching(true);
    setTimeout(() => {
      // Pemilihan acak oleh sistem dispatch SANTARA
      const randomDriver = driverPool[Math.floor(Math.random() * driverPool.length)];
      setActiveAssignedDriver(randomDriver);
      setIsDispatching(false);

      const targetId = targetOrderId || '#ORD-9401';
      setUmkmOrders(prev => prev.map(o => {
        if (o.id === targetId || (targetOrderId === undefined && o.status === 'siap_antar')) {
          return { ...o, status: 'dalam_pengiriman', kurir: `${randomDriver.name} (${randomDriver.motor} • ${randomDriver.plat})` };
        }
        return o;
      }));
      showToast(`Sistem menugaskan ${randomDriver.name} (${randomDriver.plat}) untuk menjemput pesanan!`);
    }, 1200);
  };

  // Wholesale Items Komoditas Pasar Keputran
  const [kulakanItems] = useState([
    {
      id: 'KUL-001',
      name: 'Beras IR-64 Ramos Medium Super (50 kg)',
      origin: 'Pasar Induk Keputran Blok B12',
      normalPrice: 780000,
      wholesalePrice: 640000,
      savings: 'Hemat 18%',
      minOrder: '1 Sak (50 kg)',
      image: '/images/peken_bapokting_sembako.jpg'
    },
    {
      id: 'KUL-002',
      name: 'Minyak Goreng Sawit Higienis (Jerigen 20 Liter)',
      origin: 'Distributor Rungkut Industri',
      normalPrice: 350000,
      wholesalePrice: 290000,
      savings: 'Hemat 17%',
      minOrder: '1 Jerigen (20 L)',
      image: '/images/minyak_goreng_jerigen.jpg'
    },
    {
      id: 'KUL-003',
      name: 'Gula Pasir Kristal Putih (Karung 50 kg)',
      origin: 'Pabrik Gula Kebonagung Hub',
      normalPrice: 880000,
      wholesalePrice: 750000,
      savings: 'Hemat 15%',
      minOrder: '1 Karung (50 kg)',
      image: '/images/gula_pasir_sak.jpg'
    },
    {
      id: 'KUL-004',
      name: 'Bawang Merah Probolinggo Super Kering (Koli 25 kg)',
      origin: 'Petani Binaan BRI Probolinggo',
      normalPrice: 950000,
      wholesalePrice: 700000,
      savings: 'Hemat 26%',
      minOrder: '1 Koli (25 kg)',
      image: '/images/peken_pangan_keputran.jpg'
    }
  ]);

  // KUR Loan Simulator State
  const [kurAmount, setKurAmount] = useState(25000000);
  const [kurTenor, setKurTenor] = useState(12);
  const kurMonthly = Math.round((kurAmount + (kurAmount * 0.03 * (kurTenor / 12))) / kurTenor);
  const kurTotalBunga = Math.round(kurAmount * 0.03 * (kurTenor / 12));

  // Komunitas UMKM Forum Threads
  const [umkmThreads, setUmkmThreads] = useState([
    {
      id: 1,
      author: 'Bu Endang (Warung Barokah)',
      time: '10 menit lalu',
      title: 'Info Harga Cabai Rawit Pasar Keputran Hari Ini',
      content: 'Pagi dulur-dulur warung, tadi subuh belanja cabai rawit merah turun jadi Rp 42.000/kg di Pintu B Keputran. Yang mau kulakan bareng yuk kumpul kuota.',
      likes: 18,
      replies: 6
    },
    {
      id: 2,
      author: 'Pak Bambang (Soto Ayam Lamongan MERR)',
      time: '1 jam lalu',
      title: 'Pengalaman Pengajuan KUR Mikro 25 Juta via LinkUMKM',
      content: 'Alhamdulillah kemarin diajukan lewat portal Santara, tadi pagi disurvei Mas Aditya Mantri BRI Manyar dan langsung ACC pencairan ke BritAma tanpa ribet agunan tambahan.',
      likes: 34,
      replies: 12
    }
  ]);
  const [newThreadContent, setNewThreadContent] = useState('');

  const handlePostThread = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newThreadContent.trim()) return;
    const thread = {
      id: umkmThreads.length + 1,
      author: 'Bu Endang (Warung Barokah)',
      time: 'Baru saja',
      title: 'Diskusi Baru Sesama Warung Surabaya',
      content: newThreadContent,
      likes: 1,
      replies: 0
    };
    setUmkmThreads([thread, ...umkmThreads]);
    setNewThreadContent('');
    showToast('Pesan berhasil dibagikan ke Forum Komunitas UMKM!');
  };

  // ==========================================================================
  // 4. DATA: SUPPLIER B2B (SENTRA GROSIR PASAR KEPUTRAN)
  // ==========================================================================
  const [b2bInventory] = useState([
    { sku: 'BRS-64', name: 'Beras Ramos Super (50 kg)', price: 'Rp 640.000 / sak', stock: '24.5 Ton', image: '/images/peken_bapokting_sembako.jpg' },
    { sku: 'MYK-20L', name: 'Minyak Sawit Higienis (20 L)', price: 'Rp 290.000 / jerigen', stock: '12.400 L', image: '/images/minyak_goreng_jerigen.jpg' },
    { sku: 'BWG-25K', name: 'Bawang Merah Kering (25 kg)', price: 'Rp 700.000 / koli', stock: '8.2 Ton', image: '/images/peken_pangan_keputran.jpg' },
    { sku: 'GLA-50K', name: 'Gula Pasir Putih (50 kg)', price: 'Rp 750.000 / karung', stock: '15.0 Ton', image: '/images/gula_pasir_sak.jpg' }
  ]);

  const [b2bPurchaseOrders, setB2bPurchaseOrders] = useState([
    {
      poId: 'PO-SBY-441',
      buyer: 'Paguyuban Warung Mulyorejo (14 Warung)',
      item: '20 Sak Beras IR-64 Ramos (1 Ton)',
      image: '/images/peken_bapokting_sembako.jpg',
      total: 'Rp 12.800.000',
      status: 'Siap Kirim Truk',
      dispatched: false
    },
    {
      poId: 'PO-SBY-440',
      buyer: 'Sentra Wisata Kuliner (SWK) Dharmawangsa',
      item: '4 Jerigen Minyak Sawit (80 L)',
      image: '/images/minyak_goreng_jerigen.jpg',
      total: 'Rp 1.160.000',
      status: 'Proses Muat',
      dispatched: false
    }
  ]);

  const handleDispatchTruck = (poId: string) => {
    setB2bPurchaseOrders(prev => prev.map(po => {
      if (po.poId === poId) return { ...po, dispatched: true, status: 'Dalam Perjalanan Truk' };
      return po;
    }));
    showToast(`Truk logistik resmi diberangkatkan untuk ${poId}!`);
  };

  // ==========================================================================
  // 5. DATA: OJEK KURIR (CAK SUGENG) - MOBILE FIRST
  // ==========================================================================
  const [driverOnline, setDriverOnline] = useState(true);
  const [otpInput, setOtpInput] = useState('');
  const [driverBalance, setDriverBalance] = useState(285000);

  const [activeDriverJob, setActiveDriverJob] = useState({
    id: 'JOB #SBY-842',
    pickup: 'Gudang PT Sentra Pangan Nusantara (Hub Margomulyo)',
    destination: 'Warung Barokah Bu Endang (Jl. Manyar No. 44)',
    items: '2 Sak Beras (50 kg) + 2 Jerigen Minyak',
    distance: '3.8 km (12 menit)',
    fee: 35000,
    status: 'Menuju Lokasi Antar'
  });

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput === '4819' || otpInput.length === 4) {
      setDriverBalance(prev => prev + 35000);
      setOtpInput('');
      showToast('Serah-terima Berhasil! Ongkos Rp 35.000 langsung cair ke Rekening BRI.');
      setOjekTab('dompet');
    } else {
      showToast('PIN OTP Salah! Minta 4 digit OTP dari pemilik warung.');
    }
  };

  // ==========================================================================
  // 6. DATA: ADMIN BRI (ADMIN & SUPER ADMIN)
  // ==========================================================================
  const [adminSearch, setAdminSearch] = useState('');
  const [adminEntityFilter, setAdminEntityFilter] = useState<'all' | 'umkm' | 'supplier' | 'ojek'>('all');

  const masterDatabase = [
    { id: 'BRI-UMKM-01', name: 'Warung Barokah Bu Endang', role: 'umkm', omzet: 'Rp 34.200.000', saldo: 'Rp 18.450.000', status: 'Terverifikasi LinkUMKM' },
    { id: 'BRI-SUP-01', name: 'PT Sentra Pangan Nusantara', role: 'supplier', omzet: 'Rp 482.000.000', saldo: 'Rp 92.400.000', status: 'Terverifikasi Prioritas' },
    { id: 'BRI-OJK-01', name: 'Cak Sugeng (Vario L 4821 XY)', role: 'ojek', omzet: 'Rp 8.650.000', saldo: 'Rp 285.000', status: 'Terverifikasi KTP & BRI' },
    { id: 'BRI-UMKM-02', name: 'Toko Kelontong Berkah Dharmawangsa', role: 'umkm', omzet: 'Rp 58.100.000', saldo: 'Rp 24.300.000', status: 'AgenBRILink Aktif' }
  ];

  const filteredDatabase = masterDatabase.filter(item => {
    const matchFilter = adminEntityFilter === 'all' || item.role === adminEntityFilter;
    const matchSearch = item.name.toLowerCase().includes(adminSearch.toLowerCase()) || item.id.toLowerCase().includes(adminSearch.toLowerCase());
    return matchFilter && matchSearch;
  });

  // ==========================================================================
  // 7. DUAL-TONE THEME STYLING TOKENS
  // ==========================================================================
  // Mode Terang: Background Slate-50 / Putih, Tombol & Ikon Gradasi Biru Tua -> Biru Muda
  // Mode Gelap: Background Gradasi Biru Tua / Gelap, Tombol Terang (Putih) Tulisan Gelap Kontras
  const s = {
    // Background Surface
    bgContainer: isDarkMode 
      ? 'bg-gradient-to-br from-[#050B17] via-[#0A1628] to-[#001D40] text-slate-100' 
      : 'bg-[#F8FAFC] text-slate-900',
    sidebar: isDarkMode 
      ? 'bg-[#0A1326]/95 border-r border-slate-800' 
      : 'bg-white border-r border-slate-200/90 shadow-xs',
    header: isDarkMode 
      ? 'bg-[#0A1326]/90 border-b border-slate-800 text-white' 
      : 'bg-white/95 border-b border-slate-200 text-slate-900 shadow-xs',
    
    // Cards (Sejajar, Rapi, Sesuai Tema)
    card: isDarkMode 
      ? 'bg-[#0C1730]/90 border border-slate-700/60 shadow-lg rounded-2xl' 
      : 'bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.03)] rounded-2xl',
    cardSub: isDarkMode 
      ? 'bg-[#070E1E] border border-slate-800 rounded-xl' 
      : 'bg-slate-50 border border-slate-200/80 rounded-xl',
    
    // Buttons
    btnPrimary: isDarkMode 
      ? 'bg-white hover:bg-slate-100 text-[#002D62] font-bold shadow-md transition-all' 
      : 'bg-gradient-to-r from-[#002D62] via-[#00529C] to-[#0284C7] hover:from-[#001D40] hover:to-[#003E7E] text-white font-semibold shadow-sm transition-all',
    btnSecondary: isDarkMode 
      ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15 font-medium transition-all' 
      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium transition-all shadow-xs',
    
    // Sidebar Active Item
    navActive: isDarkMode 
      ? 'bg-white text-[#002D62] font-bold shadow-md' 
      : 'bg-gradient-to-r from-[#002D62] to-[#00529C] text-white font-semibold shadow-xs',
    navInactive: isDarkMode 
      ? 'text-slate-400 hover:text-white hover:bg-white/[0.04]' 
      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70',
    
    // Clean Badges
    badgeNeutral: isDarkMode 
      ? 'bg-white/10 text-slate-300 border border-white/10' 
      : 'bg-slate-100 text-slate-700 border border-slate-200 font-medium',
    badgeActive: isDarkMode ? 'bg-[#002D62] text-white' : 'bg-white/20 text-white',
    
    // Typography
    textHeading: isDarkMode ? 'text-white' : 'text-slate-900',
    textMuted: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    border: isDarkMode ? 'border-slate-800' : 'border-slate-200/90'
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} ${s.bgContainer} font-sans flex antialiased selection:bg-[#002D62] selection:text-white relative transition-colors duration-200`}>
      
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-[100] max-w-md bg-[#002D62] text-white p-4 rounded-2xl shadow-2xl border border-sky-400/40 flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed font-medium">
            {toastMessage}
          </div>
          <button onClick={() => setToastMessage(null)} className="text-slate-300 hover:text-white ml-auto">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ====================================================================== */}
      {/* 1. LEFT SIDEBAR (SEJAJAR, RAPI, TIDAK BANYAK IKON MENUMPUK)            */}
      {/* ====================================================================== */}
      <aside className={`w-80 ${s.sidebar} flex flex-col justify-between shrink-0 hidden md:flex sticky top-0 h-screen z-30 select-none transition-colors duration-200`}>
        
        <div className="overflow-y-auto flex-1">
          
          {/* Header Brand Santara */}
          <div className={`p-5 pb-4 border-b ${s.border} flex items-center`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#002D62] to-[#0284C7] p-2 flex items-center justify-center shadow-xs shrink-0">
                <img 
                  src="/images/santara-icon.svg" 
                  alt="Logo Santara" 
                  className="w-full h-full object-contain filter brightness-0 invert" 
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`font-black text-xl tracking-tight ${s.textHeading} leading-none`}>SANTARA</span>
                </div>
                <div className={`text-[10px] ${s.textMuted} font-medium mt-0.5`}>
                  Inovasi BRImo Challenge 2026
                </div>
              </div>
            </div>
          </div>

          {/* Sub Navigation Menus */}
          <div className="p-4 space-y-6">
            
            {/* ROLE 1: UMKM NAVIGATION */}
            {activeRole === 'umkm' && (
              <>
                <div>
                  <div className={`text-[10px] font-bold tracking-wider uppercase ${s.textMuted} px-3 mb-2`}>
                    Operasional Toko
                  </div>
                  <nav className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setUmkmTab('etalase')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                        umkmTab === 'etalase' ? s.navActive : s.navInactive
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Store className="w-4 h-4 shrink-0 opacity-80" />
                        <span>Santara Mart &amp; QRIS Toko</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUmkmTab('pesanan')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                        umkmTab === 'pesanan' ? s.navActive : s.navInactive
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <ShoppingBag className="w-4 h-4 shrink-0 opacity-80" />
                        <span>Santara Order (Pesanan Masuk)</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        umkmTab === 'pesanan' ? s.badgeActive : s.badgeNeutral
                      }`}>
                        12
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUmkmTab('kurir')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                        umkmTab === 'kurir' ? s.navActive : s.navInactive
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Truck className="w-4 h-4 shrink-0 opacity-80" />
                        <span>Santara Express (Dispatch Kurir)</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUmkmTab('ai_asisten')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                        umkmTab === 'ai_asisten' ? s.navActive : s.navInactive
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Bot className="w-4 h-4 shrink-0 opacity-80" />
                        <span>Santara AI Penasihat Bisnis</span>
                      </div>
                    </button>
                  </nav>
                </div>

                <div>
                  <div className={`text-[10px] font-bold tracking-wider uppercase ${s.textMuted} px-3 mb-2`}>
                    Pengadaan &amp; Komunitas
                  </div>
                  <nav className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setUmkmTab('kulakan')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                        umkmTab === 'kulakan' ? s.navActive : s.navInactive
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Boxes className="w-4 h-4 shrink-0 opacity-80" />
                        <span>Sentra Kulakan Sembako B2B</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUmkmTab('kur_bri')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                        umkmTab === 'kur_bri' ? s.navActive : s.navInactive
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Coins className="w-4 h-4 shrink-0 opacity-80" />
                        <span>BRImo Usaha &amp; KUR Mikro BRI</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUmkmTab('komunitas')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                        umkmTab === 'komunitas' ? s.navActive : s.navInactive
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 shrink-0 opacity-80" />
                        <span>Guyub Warung (Komunitas UMKM)</span>
                      </div>
                    </button>
                  </nav>
                </div>
              </>
            )}

            {/* ROLE 2: SUPPLIER NAVIGATION */}
            {activeRole === 'supplier' && (
              <div>
                <div className={`text-[10px] font-bold tracking-wider uppercase ${s.textMuted} px-3 mb-2`}>
                  Pasokan Grosir B2B
                </div>
                <nav className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setSupplierTab('katalog')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      supplierTab === 'katalog' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Boxes className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Gudang Pasokan Komoditas</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSupplierTab('po_masuk')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      supplierTab === 'po_masuk' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Package className="w-4 h-4 shrink-0 opacity-80" />
                      <span>PO Borongan Klaster UMKM</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      supplierTab === 'po_masuk' ? s.badgeActive : s.badgeNeutral
                    }`}>
                      2 PO
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSupplierTab('ai_analisis')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      supplierTab === 'ai_analisis' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Bot className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Radar Pasokan AI Pangan</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSupplierTab('escrow')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      supplierTab === 'escrow' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 shrink-0 opacity-80" />
                      <span>BRI Escrow Vault &amp; Settlement</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSupplierTab('komunitas')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      supplierTab === 'komunitas' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Users className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Sentra Distributor Jawa Timur</span>
                    </div>
                  </button>
                </nav>
              </div>
            )}

            {/* ROLE 3: OJEK KURIR NAVIGATION */}
            {activeRole === 'ojek' && (
              <div>
                <div className={`text-[10px] font-bold tracking-wider uppercase ${s.textMuted} px-3 mb-2`}>
                  Operasi Logistik
                </div>
                <nav className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setOjekTab('radar')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      ojekTab === 'radar' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Navigasi Rute Maps Terpadu</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOjekTab('orderan')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      ojekTab === 'orderan' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Bike className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Antrian Muatan Express</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOjekTab('otp')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      ojekTab === 'otp' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <QrCode className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Validasi Serah Terima OTP</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOjekTab('dompet')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      ojekTab === 'dompet' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Wallet className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Dompet Mitra BritAma BRI</span>
                    </div>
                  </button>
                </nav>
              </div>
            )}

            {/* ROLE 4: ADMIN BRI NAVIGATION (7 FITUR PERBANKAN LENGKAP & KOMPLEKS) */}
            {activeRole === 'bank_bri' && (
              <div>
                <div className={`text-[10px] font-bold tracking-wider uppercase ${s.textMuted} px-3 mb-2`}>
                  Kendali Admin BRI (7 Fitur)
                </div>
                <nav className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setAdminTab('analitik')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      adminTab === 'analitik' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <BarChart3 className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Pusat Analitik Eksekutif BRI</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminTab('database')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      adminTab === 'database' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Master Database LinkUMKM</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminTab('rekapitulasi')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      adminTab === 'rekapitulasi' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Kliring Escrow BRIAPI</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminTab('penyaluran_kur')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      adminTab === 'penyaluran_kur' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <CreditCard className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Penyaluran KUR Mikro BRI</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminTab('radar_pangan')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      adminTab === 'radar_pangan' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Boxes className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Radar Logistik Pangan BUMN</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminTab('fraud_security')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      adminTab === 'fraud_security' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Deteksi Fraud GPS &amp; Keamanan</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAdminTab('kelola')}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-all ${
                      adminTab === 'kelola' ? s.navActive : s.navInactive
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Sliders className="w-4 h-4 shrink-0 opacity-80" />
                      <span>Tata Kelola &amp; Validasi Mitra</span>
                    </div>
                  </button>
                </nav>
              </div>
            )}

          </div>

        </div>

        {/* Profile Button & Role Switcher di Bagian Bawah Sidebar */}
        <div ref={roleSwitcherRef} className={`p-3.5 border-t ${s.border} ${isDarkMode ? 'bg-[#080E1C]' : 'bg-slate-50/80'} relative transition-colors`}>
          
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowRoleSwitcher(prev => !prev);
            }}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-left group shadow-xs ${
              showRoleSwitcher 
                ? 'bg-[#002D62]/10 border border-[#002D62]' 
                : isDarkMode 
                  ? 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10' 
                  : 'bg-white hover:bg-slate-50 border border-slate-200'
            }`}
            title="Klik profil untuk mengganti peran portal"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#002D62] to-[#0284C7] flex items-center justify-center font-bold text-xs text-white shrink-0">
                {activeRole === 'umkm' && 'WB'}
                {activeRole === 'supplier' && 'SP'}
                {activeRole === 'ojek' && 'CS'}
                {activeRole === 'bank_bri' && 'BRI'}
              </div>
              <div className="min-w-0 flex-1">
                <div className={`text-xs font-bold ${s.textHeading} leading-tight truncate`}>
                  {activeRole === 'umkm' && 'Warung Barokah Bu Endang'}
                  {activeRole === 'supplier' && 'PT Sentra Pangan Nusantara'}
                  {activeRole === 'ojek' && 'Cak Sugeng (Vario L 4821)'}
                  {activeRole === 'bank_bri' && 'Admin BRI'}
                </div>
                <div className={`text-[11px] ${s.textMuted} mt-0.5 flex items-center gap-1.5`}>
                  <span>
                    {activeRole === 'umkm' && 'Pelaku UMKM'}
                    {activeRole === 'supplier' && 'Supplier B2B'}
                    {activeRole === 'ojek' && 'Driver Express'}
                    {activeRole === 'bank_bri' && (adminSubRole === 'super_admin' ? 'Super Admin' : 'Admin')}
                  </span>
                  <span>•</span>
                  <span className="text-[10px] text-[#002D62] dark:text-sky-400 font-medium underline decoration-dotted">Ganti Peran</span>
                </div>
              </div>
            </div>
            <ChevronsUpDown className={`w-4 h-4 ${s.textMuted} group-hover:${s.textHeading} shrink-0 ml-1 transition-colors`} />
          </button>

          {/* Role Switcher Popover Panel */}
          {showRoleSwitcher && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className={`absolute bottom-full mb-2.5 left-2.5 right-2.5 ${isDarkMode ? 'bg-[#0D182E] border-slate-700' : 'bg-white border-slate-200'} rounded-xl p-2.5 shadow-xl border z-50 animate-in fade-in zoom-in-95`}
            >
              <div className={`text-[10px] font-bold ${s.textMuted} uppercase tracking-wider px-2 py-1 mb-1`}>
                Pilih Peran Portal:
              </div>
              <div className="space-y-1 text-xs">
                
                {/* 1. UMKM */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveRole('umkm');
                    setShowRoleSwitcher(false);
                    showToast('Beralih ke Portal Toko UMKM');
                  }}
                  className={`w-full p-2 rounded-lg flex items-center justify-between text-left transition-all ${
                    activeRole === 'umkm'
                      ? 'bg-[#002D62] text-white font-bold'
                      : isDarkMode ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#002D62] text-white flex items-center justify-center font-bold text-[9px] border border-white/20">WB</span>
                    <span>Toko UMKM (Warung Barokah)</span>
                  </div>
                  {activeRole === 'umkm' && <Check className="w-4 h-4 text-white" />}
                </button>

                {/* 2. SUPPLIER */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveRole('supplier');
                    setShowRoleSwitcher(false);
                    showToast('Beralih ke Portal Supplier B2B');
                  }}
                  className={`w-full p-2 rounded-lg flex items-center justify-between text-left transition-all ${
                    activeRole === 'supplier'
                      ? 'bg-[#002D62] text-white font-bold'
                      : isDarkMode ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#002D62] text-white flex items-center justify-center font-bold text-[9px] border border-white/20">SP</span>
                    <span>Supplier B2B (PT Sentra Pangan Nusantara)</span>
                  </div>
                  {activeRole === 'supplier' && <Check className="w-4 h-4 text-white" />}
                </button>

                {/* 3. OJEK */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveRole('ojek');
                    setShowRoleSwitcher(false);
                    showToast('Beralih ke Portal Ojek Kurir');
                  }}
                  className={`w-full p-2 rounded-lg flex items-center justify-between text-left transition-all ${
                    activeRole === 'ojek'
                      ? 'bg-[#002D62] text-white font-bold'
                      : isDarkMode ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#002D62] text-white flex items-center justify-center font-bold text-[9px] border border-white/20">CS</span>
                    <span>Ojek Kurir (Cak Sugeng)</span>
                  </div>
                  {activeRole === 'ojek' && <Check className="w-4 h-4 text-white" />}
                </button>

                {/* 4. ADMIN BRI */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveRole('bank_bri');
                    setShowRoleSwitcher(false);
                    showToast('Beralih ke Portal Admin BRI');
                  }}
                  className={`w-full p-2 rounded-lg flex items-center justify-between text-left transition-all ${
                    activeRole === 'bank_bri'
                      ? 'bg-[#002D62] text-white font-bold'
                      : isDarkMode ? 'hover:bg-white/5 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#002D62] text-white flex items-center justify-center font-bold text-[9px] border border-white/20">BRI</span>
                    <span>Admin BRI</span>
                  </div>
                  {activeRole === 'bank_bri' && <Check className="w-4 h-4 text-white" />}
                </button>

              </div>
            </div>
          )}

          {/* Tombol Kembali ke Beranda di Bawah Profil */}
          <div className="pt-2">
            <Link
              href="/"
              className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                isDarkMode 
                  ? 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

        </div>

      </aside>

      {/* ====================================================================== */}
      {/* 2. MAIN CONTENT AREA (CLEAN, SEJAJAR, MOBILE-FRIENDLY)                 */}
      {/* ====================================================================== */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className={`h-16 px-4 sm:px-8 ${s.header} backdrop-blur-md border-b flex items-center justify-between shrink-0 sticky top-0 z-20 transition-colors`}>
          
          <div className="flex items-center gap-3 text-xs">
            <Link 
              href="/" 
              className={`flex items-center gap-1.5 ${s.textMuted} hover:${s.textHeading} font-medium transition-colors`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </Link>
            <span className={isDarkMode ? 'text-slate-600' : 'text-slate-300'}>/</span>
            <div className={`font-semibold ${s.textHeading} flex items-center gap-2`}>
              <span>
                {activeRole === 'umkm' && 'Portal Toko UMKM'}
                {activeRole === 'supplier' && 'Portal Supplier B2B'}
                {activeRole === 'ojek' && 'Portal Ojek Kurir'}
                {activeRole === 'bank_bri' && 'Portal Admin BRI'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* Real-time Clock */}
            <div className={`hidden sm:flex items-center gap-1.5 ${s.textMuted} font-mono px-3 py-1.5 rounded-lg ${s.cardSub} border ${s.border}`}>
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{timeStr} WIB</span>
            </div>

            {/* Mode Switcher: Terang / Gelap */}
            <button
              type="button"
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                showToast(`Beralih ke ${!isDarkMode ? 'Mode Gelap' : 'Mode Terang'}`);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all border ${
                isDarkMode 
                  ? 'bg-slate-900 text-white border-slate-700 hover:bg-slate-800' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-xs'
              }`}
              title="Ganti Mode Tampilan"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Mode Terang</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Mode Gelap</span>
                </>
              )}
            </button>

            {/* Mobile Role Switcher */}
            <div ref={mobileRoleSwitcherRef} className="md:hidden relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowRoleSwitcher(!showRoleSwitcher);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${isDarkMode ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-800 border-slate-200'} border text-xs font-semibold shadow-xs`}
              >
                <span>Ganti Peran</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showRoleSwitcher && (
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className={`absolute right-0 top-11 w-64 ${isDarkMode ? 'bg-[#0D182E] border-slate-700' : 'bg-white border-slate-200'} rounded-xl p-2.5 shadow-xl border z-50`}
                >
                  <div className="space-y-1 text-xs">
                    <button
                      type="button"
                      onClick={() => { setActiveRole('umkm'); setShowRoleSwitcher(false); }}
                      className={`w-full p-2 rounded-lg text-left ${activeRole === 'umkm' ? 'bg-[#002D62] text-white font-semibold' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      Toko UMKM
                    </button>
                    <button
                      type="button"
                      onClick={() => { setActiveRole('supplier'); setShowRoleSwitcher(false); }}
                      className={`w-full p-2 rounded-lg text-left ${activeRole === 'supplier' ? 'bg-[#002D62] text-white font-semibold' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      Supplier B2B
                    </button>
                    <button
                      type="button"
                      onClick={() => { setActiveRole('ojek'); setShowRoleSwitcher(false); }}
                      className={`w-full p-2 rounded-lg text-left ${activeRole === 'ojek' ? 'bg-[#002D62] text-white font-semibold' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      Ojek Kurir
                    </button>
                    <button
                      type="button"
                      onClick={() => { setActiveRole('bank_bri'); setShowRoleSwitcher(false); }}
                      className={`w-full p-2 rounded-lg text-left ${activeRole === 'bank_bri' ? 'bg-[#002D62] text-white font-semibold' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      Admin BRI
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </header>

        {/* Mobile Horizontal Sub-Navigation Bar (Simple, Rapi, Mudah Diakses di Ponsel) */}
        <div className={`md:hidden px-4 py-2.5 border-b ${s.border} ${isDarkMode ? 'bg-[#0A1326]' : 'bg-white'} overflow-x-auto flex items-center gap-2 shrink-0`}>
          {activeRole === 'umkm' && (
            <>
              <button
                type="button"
                onClick={() => setUmkmTab('etalase')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  umkmTab === 'etalase' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Santara Mart &amp; QRIS
              </button>
              <button
                type="button"
                onClick={() => setUmkmTab('pesanan')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-all ${
                  umkmTab === 'pesanan' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                <span>Santara Order</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                  umkmTab === 'pesanan' ? 'bg-white text-[#002D62]' : 'bg-[#002D62] text-white'
                }`}>12</span>
              </button>
              <button
                type="button"
                onClick={() => setUmkmTab('kurir')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  umkmTab === 'kurir' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Santara Express
              </button>
              <button
                type="button"
                onClick={() => setUmkmTab('kur_bri')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  umkmTab === 'kur_bri' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                BRImo &amp; KUR Mikro
              </button>
              <button
                type="button"
                onClick={() => setUmkmTab('kulakan')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  umkmTab === 'kulakan' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Pasar B2B &amp; Grosir Sembako
              </button>
              <button
                type="button"
                onClick={() => setUmkmTab('ai_asisten')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  umkmTab === 'ai_asisten' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Santara AI Penasihat
              </button>
              <button
                type="button"
                onClick={() => setUmkmTab('komunitas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  umkmTab === 'komunitas' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Guyub Warung
              </button>
            </>
          )}

          {activeRole === 'supplier' && (
            <>
              <button
                type="button"
                onClick={() => setSupplierTab('katalog')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  supplierTab === 'katalog' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Gudang Pasokan
              </button>
              <button
                type="button"
                onClick={() => setSupplierTab('po_masuk')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  supplierTab === 'po_masuk' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                <span>PO Borongan</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                  supplierTab === 'po_masuk' ? 'bg-white text-[#002D62]' : 'bg-[#002D62] text-white'
                }`}>2</span>
              </button>
              <button
                type="button"
                onClick={() => setSupplierTab('ai_analisis')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  supplierTab === 'ai_analisis' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Radar AI Pangan
              </button>
              <button
                type="button"
                onClick={() => setSupplierTab('escrow')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  supplierTab === 'escrow' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                BRI Escrow Vault
              </button>
              <button
                type="button"
                onClick={() => setSupplierTab('komunitas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  supplierTab === 'komunitas' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Sentra Distributor
              </button>
            </>
          )}

          {activeRole === 'ojek' && (
            <>
              <button
                type="button"
                onClick={() => setOjekTab('radar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  ojekTab === 'radar' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Navigasi Maps
              </button>
              <button
                type="button"
                onClick={() => setOjekTab('orderan')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  ojekTab === 'orderan' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Muatan Express
              </button>
              <button
                type="button"
                onClick={() => setOjekTab('otp')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  ojekTab === 'otp' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Validasi OTP
              </button>
              <button
                type="button"
                onClick={() => setOjekTab('dompet')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 ${
                  ojekTab === 'dompet' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Dompet BritAma
              </button>
            </>
          )}

          {activeRole === 'bank_bri' && (
            <>
              <button
                type="button"
                onClick={() => setAdminTab('analitik')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  adminTab === 'analitik' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Pusat Analitik
              </button>
              <button
                type="button"
                onClick={() => setAdminTab('database')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  adminTab === 'database' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Database LinkUMKM
              </button>
              <button
                type="button"
                onClick={() => setAdminTab('rekapitulasi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  adminTab === 'rekapitulasi' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Kliring BRIAPI
              </button>
              <button
                type="button"
                onClick={() => setAdminTab('penyaluran_kur')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  adminTab === 'penyaluran_kur' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Penyaluran KUR Mikro
              </button>
              <button
                type="button"
                onClick={() => setAdminTab('radar_pangan')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  adminTab === 'radar_pangan' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Radar Pangan BUMN
              </button>
              <button
                type="button"
                onClick={() => setAdminTab('fraud_security')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  adminTab === 'fraud_security' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Deteksi Fraud GPS
              </button>
              <button
                type="button"
                onClick={() => setAdminTab('kelola')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  adminTab === 'kelola' ? s.btnPrimary : s.btnSecondary
                }`}
              >
                Tata Kelola Mitra
              </button>
            </>
          )}
        </div>

        {/* Dynamic Workspace Container */}
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6 flex-1">
          
          {/* ================================================================== */}
          {/* A. ROLE 1: TOKO UMKM (WARUNG BAROKAH BU ENDANG)                    */}
          {/* ================================================================== */}
          {activeRole === 'umkm' && (
            <div className="space-y-6">
              
              {/* Header Status Bar (4 Cards Sejajar Rapi, Tanpa Ikon Menumpuk) */}
              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                <div className={`${s.card} p-4 sm:p-5 flex flex-col justify-between h-full min-h-[110px]`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Saldo Rekening BRI</div>
                  <div className={`text-lg min-[420px]:text-xl sm:text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>Rp 18.450.000</div>
                  <div className={`text-xs ${s.textMuted} mt-1.5`}>Tersimpan aman di BRI</div>
                </div>

                <div className={`${s.card} p-4 sm:p-5 flex flex-col justify-between h-full min-h-[110px]`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Omzet Penjualan QRIS</div>
                  <div className={`text-lg min-[420px]:text-xl sm:text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>Rp 34.200.000</div>
                  <div className={`text-xs ${s.textMuted} mt-1.5`}>428 Transaksi Sukses</div>
                </div>

                <div className={`${s.card} p-4 sm:p-5 flex flex-col justify-between h-full min-h-[110px]`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Pesanan Masuk Aktif</div>
                  <div className={`text-lg min-[420px]:text-xl sm:text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>12 Order Siap</div>
                  <div className={`text-xs ${s.textMuted} mt-1.5`}>3 Sedang diantar Kurir</div>
                </div>

                <div className={`${s.card} p-4 sm:p-5 flex flex-col justify-between h-full min-h-[110px]`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Efisiensi Kulakan Grosir</div>
                  <div className={`text-lg min-[420px]:text-xl sm:text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>28% Terpangkas</div>
                  <div className={`text-xs ${s.textMuted} mt-1.5`}>Konsolidasi Sentra Pangan Jatim</div>
                </div>
              </div>

              {/* Sub-Tab 1: ETALASE PRODUK & QRIS (SEJAJAR SEMPURNA KIRI & KANAN) */}
              {umkmTab === 'etalase' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-8 flex flex-col justify-between space-y-4 h-full">
                    <div className={`flex items-center justify-between pb-3 border-b ${s.border}`}>
                      <div>
                        <h3 className={`text-base font-bold ${s.textHeading}`}>Katalog Produk Jualan Toko</h3>
                        <p className={`text-xs ${s.textMuted}`}>Produk yang tayang di aplikasi pembeli sekitar Surabaya.</p>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setShowAddProductModal(true)}
                        className={`${s.btnPrimary} px-3.5 py-2 rounded-lg text-xs flex items-center gap-1.5 shadow-sm`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Tambah Produk</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 items-stretch">
                      {products.map((p) => (
                        <div key={p.id} className={`${s.card} overflow-hidden flex flex-col justify-between h-full`}>
                          <div>
                            <div className="h-40 bg-slate-900 relative">
                              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                              <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] ${s.badgeNeutral}`}>
                                {p.category}
                              </span>
                            </div>
                            <div className="p-4 pb-1">
                              <h4 className={`font-bold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-slate-950'} leading-snug line-clamp-2`}>
                                {p.name}
                              </h4>
                              <div className="mt-2.5 flex items-baseline justify-between">
                                <span className={`text-base font-bold ${s.textHeading}`}>Rp {p.price.toLocaleString('id-ID')}</span>
                                <span className={`text-xs ${s.textMuted}`}>Stok: {p.stock} porsi</span>
                              </div>
                            </div>
                          </div>

                          {/* Tombol Kelola dengan jarak lapang, TIDAK DEMPET dengan garis pembatas */}
                          <div className="p-4 pt-3.5 mt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                            <div className={`font-semibold ${s.textHeading}`}>
                              Rating {p.rating} <span className={`${s.textMuted} font-normal`}>({p.sold} terjual)</span>
                            </div>
                            <button 
                              type="button"
                              onClick={() => setSelectedProduct(p)}
                              className={`${s.btnSecondary} px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs hover:border-[#002D62]`}
                            >
                              Kelola
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between space-y-4 h-full">
                    {/* Kartu QRIS Meja Kasir */}
                    <div className={`${s.card} p-5 space-y-4`}>
                      <div className={`flex items-center justify-between pb-2 border-b ${s.border}`}>
                        <h4 className={`font-bold text-sm ${s.textHeading}`}>QRIS Meja Kasir Toko</h4>
                        <span className={`text-[10px] ${s.badgeNeutral} px-2 py-0.5 rounded`}>ID102008</span>
                      </div>
                      <div className={`${s.cardSub} p-4 text-center space-y-3`}>
                        <div className="w-36 h-36 mx-auto bg-white p-2.5 rounded-lg border border-slate-200 shadow-inner flex items-center justify-center">
                          <QrCode className="w-28 h-28 text-slate-900" />
                        </div>
                        <p className={`text-xs ${s.textMuted}`}>Scan pakai BRImo atau e-wallet apa saja. Uang langsung masuk rekening BritAma.</p>
                        <button 
                          onClick={() => showToast('Berkas QR Standee PDF siap cetak berhasil diunduh!')}
                          className={`w-full py-2 rounded-lg ${s.btnPrimary} text-xs flex items-center justify-center gap-2`}
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Unduh Standee Meja (PDF)</span>
                        </button>
                      </div>
                    </div>

                    {/* Tampilan di Bawah Kode QRIS: Mutasi Transaksi Kasir Masuk Real-Time */}
                    <div className={`${s.card} p-5 space-y-4`}>
                      <div className={`flex items-center justify-between pb-2 border-b ${s.border}`}>
                        <h4 className={`font-bold text-sm ${s.textHeading}`}>Mutasi Kasir Masuk Hari Ini</h4>
                        <span className={`text-[10px] font-bold ${s.badgeNeutral} px-2 py-0.5 rounded`}>Real-Time</span>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div className={`p-2.5 rounded-lg border ${s.border} ${s.cardSub} flex items-center justify-between`}>
                          <div>
                            <div className={`font-semibold ${s.textHeading}`}>2x Rawon Daging + Es Teh</div>
                            <div className={`text-[11px] ${s.textMuted}`}>13:10 WIB • via BRImo</div>
                          </div>
                          <span className={`font-bold text-[#002D62] dark:text-sky-300`}>+Rp 64.000</span>
                        </div>

                        <div className={`p-2.5 rounded-lg border ${s.border} ${s.cardSub} flex items-center justify-between`}>
                          <div>
                            <div className={`font-semibold ${s.textHeading}`}>1x Sambal Klotok Toples 200g</div>
                            <div className={`text-[11px] ${s.textMuted}`}>12:45 WIB • via QRIS BCA</div>
                          </div>
                          <span className={`font-bold text-[#002D62] dark:text-sky-300`}>+Rp 25.000</span>
                        </div>

                        <div className={`p-2.5 rounded-lg border ${s.border} ${s.cardSub} flex items-center justify-between`}>
                          <div>
                            <div className={`font-semibold ${s.textHeading}`}>1x Spikoe Kuno Mentega</div>
                            <div className={`text-[11px] ${s.textMuted}`}>11:15 WIB • via GoPay</div>
                          </div>
                          <span className={`font-bold text-[#002D62] dark:text-sky-300`}>+Rp 75.000</span>
                        </div>
                      </div>

                      <div className={`p-3 rounded-xl bg-slate-100 dark:bg-white/5 border ${s.border} flex items-center justify-between text-xs`}>
                        <span className={s.textMuted}>Total Kas Masuk QRIS:</span>
                        <span className={`font-black text-sm ${s.textHeading}`}>Rp 164.000</span>
                      </div>

                      <div className={`text-[11px] ${s.textMuted} pt-1 leading-relaxed`}>
                        MDR 0% Usaha Mikro, dana langsung cair ke rekening BritAma.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 2: PESANAN MASUK */}
              {umkmTab === 'pesanan' && (
                <div className={`${s.card} p-6 space-y-5`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b ${s.border}`}>
                    <div>
                      <h3 className={`text-base font-bold ${s.textHeading}`}>Daftar Pesanan Masuk Pembeli</h3>
                      <p className={`text-xs ${s.textMuted}`}>Notifikasi real-time pesanan pelanggan siap diproses dan dikirim.</p>
                    </div>

                    {/* Satu Tombol Dropdown Pemilihan Kategori Status Pesanan */}
                    <div className="relative inline-block self-start sm:self-auto">
                      <select
                        value={orderFilter}
                        onChange={(e) => setOrderFilter(e.target.value as any)}
                        className={`text-xs font-semibold py-2 pl-3.5 pr-8 rounded-xl border transition-all cursor-pointer appearance-none ${
                          isDarkMode
                            ? 'bg-[#0D182E] text-white border-slate-700 hover:border-slate-600'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 shadow-xs'
                        }`}
                      >
                        <option value="semua">Semua Status Pesanan</option>
                        <option value="siap_antar">Siap Antar</option>
                        <option value="dalam_pengiriman">Dalam Kirim</option>
                        <option value="selesai">Selesai</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {umkmOrders
                      .filter(o => orderFilter === 'semua' || o.status === orderFilter)
                      .map((ord, idx) => (
                        <div key={idx} className={`p-4 rounded-xl border ${s.border} ${s.cardSub} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs">
                              <span className={`font-mono font-bold ${s.textHeading}`}>{ord.id}</span>
                              <span className={s.textMuted}>•</span>
                              <span className={s.textMuted}>{ord.time}</span>
                            </div>
                            <div className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{ord.buyer} ({ord.phone})</div>
                            
                            {/* Menu Pesanan Jelas, Tebal, dan Kontras Tinggi (Dark Font pada Light Mode) */}
                            <div className={`py-2 px-3 rounded-xl ${isDarkMode ? 'bg-slate-800/90 border-slate-700' : 'bg-slate-100 border-slate-200'} border my-1.5`}>
                              <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} block`}>
                                Menu Pesanan Pelanggan:
                              </span>
                              <div className={`text-sm sm:text-base font-black ${isDarkMode ? 'text-white' : 'text-slate-950'} tracking-tight mt-0.5`}>
                                {ord.items}
                              </div>
                            </div>

                            <div className={`text-[11px] ${s.textMuted}`}>{ord.address}</div>
                          </div>
                          <div className="flex items-center gap-4 shrink-0">
                            <div className="text-right">
                              <div className={`text-[10px] ${s.textMuted}`}>Total:</div>
                              <div className={`text-base font-bold ${s.textHeading}`}>{ord.total}</div>
                            </div>
                            {ord.status === 'siap_antar' ? (
                              <button 
                                onClick={() => handleCallCourierRandom(ord.id)}
                                disabled={isDispatching}
                                className={`${s.btnPrimary} px-4 py-2 rounded-lg text-xs flex items-center gap-2`}
                              >
                                <Truck className="w-3.5 h-3.5" />
                                <span>{isDispatching ? 'Mencari...' : 'Panggil Kurir'}</span>
                              </button>
                            ) : (
                              <span className={`text-xs font-semibold ${s.textHeading}`}>{ord.kurir}</span>
                            )}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-Tab 3: LAYANAN KURIR PENGIRIMAN (FITUR TERSENDIRI DENGAN SISTEM RANDOM DISPATCH) */}
              {umkmTab === 'kurir' && (
                <div className="space-y-6">
                  {/* Header Dispatch Otomatis */}
                  <div className={`${s.card} p-6 flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-5 h-5 text-[#002D62] dark:text-sky-400" />
                        <h3 className={`text-base font-bold ${s.textHeading}`}>Sistem Dispatch Kurir Otomatis</h3>
                      </div>
                      <p className={`text-xs ${s.textMuted} mt-1 max-w-2xl`}>
                        Penugasan driver dilakukan secara acak dan otomatis oleh algoritma sistem berdasarkan radius terdekat dan kesiapan armada ojek sekitar.
                      </p>
                    </div>

                    <button
                      onClick={() => handleCallCourierRandom()}
                      disabled={isDispatching}
                      className={`${s.btnPrimary} py-2.5 px-5 rounded-xl text-xs flex items-center justify-center gap-2 shrink-0`}
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isDispatching ? 'animate-spin' : ''}`} />
                      <span>{isDispatching ? 'Algoritma Mencari Driver...' : 'Panggil Armada Otomatis'}</span>
                    </button>
                  </div>

                  {/* Grid 2 Kolom: Detail Driver Terpilih & Antrian Penjemputan */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Kolom Kiri: Driver Terpilih & Status Pengantaran */}
                    <div className={`lg:col-span-7 ${s.card} p-6 space-y-5 flex flex-col justify-between`}>
                      <div>
                        <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Armada Penjemput Terpilih</h4>
                          <span className={`text-[10px] font-bold ${s.badgeNeutral} px-2.5 py-1 rounded`}>
                            Alokasi Otomatis
                          </span>
                        </div>

                        {activeAssignedDriver && (
                          <div className="space-y-4 pt-3">
                            <div className={`p-4 rounded-xl border ${s.border} ${s.cardSub} flex items-center justify-between gap-4`}>
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#002D62] to-[#0284C7] flex items-center justify-center text-white font-bold text-base shadow-sm">
                                  {activeAssignedDriver.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <div className={`font-bold text-sm ${s.textHeading}`}>{activeAssignedDriver.name}</div>
                                  <div className={`text-xs ${s.textMuted}`}>{activeAssignedDriver.motor} • {activeAssignedDriver.plat}</div>
                                  <div className={`mt-1 text-[11px] font-semibold ${s.textHeading}`}>
                                    Rating {activeAssignedDriver.rating} <span className={`${s.textMuted} font-normal`}>({activeAssignedDriver.jarak} dari warung)</span>
                                  </div>
                                </div>
                              </div>

                              <button 
                                onClick={() => showToast(`Menghubungi ${activeAssignedDriver.name} (${activeAssignedDriver.phone})`)}
                                className={`${s.btnSecondary} px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 shrink-0`}
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>Hubungi</span>
                              </button>
                            </div>

                            {/* Alur Status Penjemputan Real-Time */}
                            <div className="space-y-2 text-xs">
                              <div className={`text-[11px] font-bold uppercase tracking-wider ${s.textMuted}`}>Status Operasi:</div>
                              <div className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-2`}>
                                <div className="flex items-center justify-between">
                                  <span className={`font-semibold ${s.textHeading}`}>Perjalanan Menuju Lokasi</span>
                                  <span className={`font-bold text-[#002D62] dark:text-sky-300`}>Estimasi {activeAssignedDriver.estimasi}</span>
                                </div>
                                <div className={`text-[11px] ${s.textMuted}`}>
                                  Driver telah menerima instruksi pengambilan untuk pesanan #ORD-9401. Siapkan paket makanan dan berikan 4 digit PIN OTP saat serah-terima.
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Box PIN OTP Serah Terima */}
                      <div className={`p-4 rounded-xl bg-[#002D62]/5 dark:bg-white/5 border ${s.border} flex items-center justify-between gap-4 mt-4`}>
                        <div>
                          <div className={`text-[10px] font-bold uppercase ${s.textMuted}`}>Kode Validasi Serah Terima:</div>
                          <div className={`font-mono text-xl font-black ${s.textHeading} tracking-widest mt-0.5`}>PIN: 4819</div>
                        </div>
                        <div className={`text-right text-xs ${s.textMuted}`}>
                          Berikan PIN ke driver saat paket diserahkan
                        </div>
                      </div>
                    </div>

                    {/* Kolom Kanan: Antrian Pesanan Siap Antar */}
                    <div className={`lg:col-span-5 ${s.card} p-6 space-y-4`}>
                      <div className={`pb-3 border-b ${s.border}`}>
                        <h4 className={`font-bold text-sm ${s.textHeading}`}>Antrian Pesanan Siap Kirim</h4>
                        <p className={`text-xs ${s.textMuted}`}>Daftar paket yang menunggu giliran penugasan driver.</p>
                      </div>

                      <div className="space-y-3">
                        {umkmOrders.map((ord, idx) => (
                          <div key={idx} className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-2 text-xs`}>
                            <div className="flex items-center justify-between">
                              <span className={`font-mono font-bold ${s.textHeading}`}>{ord.id}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                ord.status === 'siap_antar' ? 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200' :
                                ord.status === 'dalam_pengiriman' ? 'bg-[#002D62] text-white' :
                                s.badgeNeutral
                              }`}>
                                {ord.status === 'siap_antar' ? 'Siap Antar' :
                                 ord.status === 'dalam_pengiriman' ? 'Dalam Kirim' : 'Selesai'}
                              </span>
                            </div>
                            <div className={`font-semibold ${s.textHeading}`}>{ord.buyer}</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white">{ord.items}</div>
                            <div className={`text-[11px] ${s.textMuted} truncate`}>{ord.address}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 3: AI ASISTEN TOKO & REKAP OTOMATIS */}
              {umkmTab === 'ai_asisten' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Left: AI Rekomendasi Bisnis (7 Cols) */}
                  <div className={`lg:col-span-7 ${s.card} p-6 space-y-5`}>
                    <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        <Bot className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        <div>
                          <h3 className={`text-base font-bold ${s.textHeading}`}>AI Asisten Keputusan Warung</h3>
                          <p className={`text-xs ${s.textMuted}`}>Rekomendasi otomatis berbasis pola penjualan harian Anda.</p>
                        </div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] ${s.badgeNeutral}`}>
                        Update Real-Time
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className={`p-4 rounded-xl border ${s.border} ${s.cardSub} space-y-1.5`}>
                        <div className={`font-bold ${s.textHeading} flex items-center gap-1.5`}>
                          <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                          <span>Saran Penyesuaian Harga Rawon Daging</span>
                        </div>
                        <p className={`${s.textMuted} leading-relaxed`}>
                          Tingkat permintaan rawon daging sangat tinggi di jam makan siang. Harga dapat disesuaikan menjadi Rp 30.000 (+Rp 2.000) tanpa menurunkan konversi pembelian di wilayah Manyar.
                        </p>
                      </div>

                      <div className={`p-4 rounded-xl border ${s.border} ${s.cardSub} space-y-1.5`}>
                        <div className={`font-bold ${s.textHeading} flex items-center gap-1.5`}>
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span>Prediksi Waktu Lonjakan Pesanan</span>
                        </div>
                        <p className={`${s.textMuted} leading-relaxed`}>
                          Diprediksi terjadi lonjakan pesanan sebesar +45% pada pukul 11:30 - 13:00 WIB. Disarankan menyiapkan 25 porsi siap saji sebelum pukul 11:00.
                        </p>
                      </div>

                      <div className={`p-4 rounded-xl border ${s.border} ${s.cardSub} space-y-1.5`}>
                        <div className={`font-bold ${s.textHeading} flex items-center gap-1.5`}>
                          <Truck className="w-3.5 h-3.5 text-slate-500" />
                          <span>Rekomendasi Kulakan Bahan Pokok</span>
                        </div>
                        <p className={`${s.textMuted} leading-relaxed`}>
                          Stok Beras tersisa 12 kg (cukup untuk 2 hari). Kuota konsolidasi borongan Beras Klaster Mulyorejo tersisa 4 sak lagi untuk mendapatkan diskon 18%.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Rekapitulasi Otomatis (5 Cols) */}
                  <div className={`lg:col-span-5 ${s.card} p-6 space-y-5 flex flex-col justify-between`}>
                    <div>
                      <div className={`pb-3 border-b ${s.border}`}>
                        <h4 className={`font-bold text-sm ${s.textHeading}`}>Rekapitulasi Keuangan Otomatis</h4>
                        <p className={`text-xs ${s.textMuted}`}>Dihitung otomatis dari seluruh transaksi QRIS &amp; Tunai.</p>
                      </div>

                      <div className="space-y-3 pt-3 text-xs">
                        <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                          <span className={s.textMuted}>Total Pemasukan Kotor (Omzet):</span>
                          <span className={`font-bold ${s.textHeading}`}>Rp 34.200.000</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                          <span className={s.textMuted}>Estimasi Biaya Kulakan (HPP):</span>
                          <span className={`font-bold ${s.textHeading}`}>Rp 21.350.000</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                          <span className={s.textMuted}>Penghematan Belanja Grosir:</span>
                          <span className={`font-bold ${s.textHeading}`}>+Rp 2.450.000</span>
                        </div>
                        <div className="flex justify-between py-2 pt-3">
                          <span className={`font-bold ${s.textHeading}`}>Estimasi Laba Bersih Bulan Ini:</span>
                          <span className={`text-base font-bold ${s.textHeading}`}>Rp 12.850.000</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => showToast('Laporan Rekapitulasi Keuangan berhasil diunduh (PDF)!')}
                      className={`w-full py-2.5 rounded-lg ${s.btnPrimary} text-xs flex items-center justify-center gap-2`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh Laporan Rekap Keuangan</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-Tab 4: KULAKAN B2B GROSIR */}
              {umkmTab === 'kulakan' && (
                <div className="space-y-5">
                  <div className={`p-5 rounded-xl ${s.card} border-l-4 border-l-[#002D62] flex flex-col sm:flex-row items-center justify-between gap-4`}>
                    <div>
                      <div className={`text-xs font-bold text-[#002D62] dark:text-sky-300`}>Konsolidasi Klaster Warung Mulyorejo</div>
                      <h4 className={`text-base font-bold ${s.textHeading}`}>Patungan Beli Beras Grosir Langsung dari Petani</h4>
                      <p className={`text-xs ${s.textMuted}`}>Terkumpul 16 dari 20 Sak Beras (80%). Otomatis dapat potongan grosir 18%.</p>
                    </div>
                    <div className={`text-right shrink-0`}>
                      <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${s.badgeNeutral}`}>
                        80% Terkumpul
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    {kulakanItems.map((item) => (
                      <div key={item.id} className={`${s.card} p-4 flex flex-col justify-between`}>
                        <div>
                          <div className="h-32 rounded-lg overflow-hidden bg-slate-900 mb-3">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <h4 className={`font-semibold text-xs ${s.textHeading} line-clamp-2`}>{item.name}</h4>
                          <div className={`text-[10px] ${s.textMuted} mt-1`}>{item.origin}</div>
                          <div className="mt-2">
                            <span className={`text-[10px] ${s.textMuted} line-through block`}>Rp {item.normalPrice.toLocaleString('id-ID')}</span>
                            <span className={`text-sm font-bold ${s.textHeading}`}>Rp {item.wholesalePrice.toLocaleString('id-ID')}</span>
                          </div>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className={`text-[10px] ${s.badgeNeutral} px-2 py-0.5 rounded`}>{item.savings}</span>
                          <button 
                            onClick={() => showToast(`Pesanan kulakan ${item.name} berhasil diajukan!`)}
                            className={`${s.btnPrimary} px-3 py-1.5 rounded-md text-[11px]`}
                          >
                            Pesan
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-Tab 5: BRImo USAHA & KUR MIKRO BRI (LAYANAN FINANSIAL TERPADU BANK BRI) */}
              {umkmTab === 'kur_bri' && (
                <div className="space-y-6">
                  {/* Header Layanan Finansial BRI */}
                  <div className={`${s.card} p-6 border-l-4 border-l-[#002D62] space-y-2`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Coins className="w-5 h-5 text-[#002D62] dark:text-sky-400" />
                          <h3 className={`text-base font-bold ${s.textHeading}`}>BRImo Usaha &amp; Layanan Finansial Terpadu Bank BRI</h3>
                        </div>
                        <p className={`text-xs ${s.textMuted} mt-1 max-w-3xl leading-relaxed`}>
                          Seluruh akses keuangan perbankan resmi Bank BRI untuk UMKM: rekening tabungan usaha BritAma, pencairan kasir QRIS langsung H+0, pinjaman modal KUR Mikro subsidi pemerintah, hingga pembayaran tagihan kulakan grosir BRIVA.
                        </p>
                      </div>
                      <span className={`text-xs font-bold ${s.badgeNeutral} px-3 py-1.5 rounded-lg shrink-0 self-start md:self-auto`}>
                        Ekosistem LinkUMKM BRI
                      </span>
                    </div>
                  </div>

                  {/* 3 Kartu Keuangan Utama Terpadu (Sejajar & Jelas) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    {/* Kartu 1: Rekening BritAma Bisnis */}
                    <div className={`${s.card} p-5 flex flex-col justify-between space-y-4`}>
                      <div>
                        <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Rekening BritAma Bisnis Toko</div>
                        <div className={`text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>Rp 18.450.000</div>
                        <div className={`text-xs font-mono font-medium ${s.textHeading} mt-1`}>0012-01-084920-50-8</div>
                        <div className={`text-[11px] ${s.textMuted} mt-0.5`}>a.n. Warung Barokah Bu Endang (BRI Unit Manyar)</div>
                      </div>
                      <button 
                        onClick={() => showToast('Riwayat mutasi rekening BritAma berhasil dimuat!')}
                        className={`w-full py-2 rounded-lg ${s.btnSecondary} text-xs font-semibold`}
                      >
                        Cek Mutasi Rekening
                      </button>
                    </div>

                    {/* Kartu 2: Kasir QRIS H+0 Instant Settlement */}
                    <div className={`${s.card} p-5 flex flex-col justify-between space-y-4`}>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Kas Masuk QRIS Siap Cair</span>
                          <span className={`text-[9px] font-bold ${s.badgeNeutral} px-2 py-0.5 rounded`}>H+0 Instan</span>
                        </div>
                        <div className={`text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>Rp 1.840.000</div>
                        <div className={`text-xs ${s.textMuted} mt-1`}>18 transaksi kasir hari ini. Tanpa potongan biaya admin.</div>
                      </div>
                      <button 
                        onClick={() => showToast('Saldo kasir QRIS Rp 1.840.000 berhasil dicairkan ke rekening BritAma!')}
                        className={`w-full py-2 rounded-lg ${s.btnPrimary} text-xs font-semibold`}
                      >
                        Cairkan Saldo QRIS Sekarang
                      </button>
                    </div>

                    {/* Kartu 3: Plafon Pinjaman KUR Mikro */}
                    <div className={`${s.card} p-5 flex flex-col justify-between space-y-4`}>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Plafon Modal Usaha KUR</span>
                          <span className={`text-[9px] font-bold ${s.badgeNeutral} px-2 py-0.5 rounded`}>GRADE A</span>
                        </div>
                        <div className={`text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>Hingga Rp 50 Juta</div>
                        <div className={`text-xs ${s.textMuted} mt-1`}>Bunga subsidi pemerintah 3% / tahun. Tanpa agunan sertifikat.</div>
                      </div>
                      <button 
                        onClick={() => {
                          const simEl = document.getElementById('kur-simulator-section');
                          if (simEl) simEl.scrollIntoView({ behavior: 'smooth' });
                          showToast('Silakan atur simulasi pinjaman modal di bawah ini.');
                        }}
                        className={`w-full py-2 rounded-lg ${s.btnPrimary} text-xs font-semibold`}
                      >
                        Atur Simulasi Pinjaman
                      </button>
                    </div>
                  </div>

                  {/* Simulator & Pengajuan Modal Usaha KUR Mikro BRI */}
                  <div id="kur-simulator-section" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    <div className={`lg:col-span-7 ${s.card} p-6 space-y-5 flex flex-col justify-between`}>
                      <div>
                        <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                          <div>
                            <h4 className={`text-base font-bold ${s.textHeading}`}>Simulasi Pinjaman Modal Usaha (KUR Mikro BRI)</h4>
                            <p className={`text-xs ${s.textMuted}`}>Pilih besaran modal usaha yang dibutuhkan dan jangka waktu cicilan.</p>
                          </div>
                          <span className={`px-2.5 py-1 rounded text-xs font-bold ${s.badgeNeutral}`}>
                            Bunga 3% p.a.
                          </span>
                        </div>

                        <div className="space-y-4 text-xs pt-3">
                          <div>
                            <div className={`flex justify-between font-semibold ${s.textHeading} mb-2`}>
                              <span>Jumlah Modal yang Diajukan:</span>
                              <span className={`text-base font-bold ${s.textHeading}`}>Rp {kurAmount.toLocaleString('id-ID')}</span>
                            </div>
                            <input 
                              type="range" 
                              min={5000000} 
                              max={50000000} 
                              step={1000000}
                              value={kurAmount}
                              onChange={(e) => setKurAmount(parseInt(e.target.value))}
                              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#002D62]"
                            />
                            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                              <span>Minimal Rp 5.000.000</span>
                              <span>Maksimal Rp 50.000.000</span>
                            </div>
                          </div>

                          <div>
                            <div className={`flex justify-between font-semibold ${s.textHeading} mb-2`}>
                              <span>Lama Waktu Cicilan (Tenor):</span>
                              <span className={`text-sm font-bold ${s.textHeading}`}>{kurTenor} Bulan ({kurTenor / 12 >= 1 ? `${kurTenor / 12} Tahun` : 'Setengah Tahun'})</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                              {[6, 12, 24, 36].map((tTenor) => (
                                <button
                                  key={tTenor}
                                  type="button"
                                  onClick={() => setKurTenor(tTenor)}
                                  className={`py-2 rounded-lg text-xs font-semibold border transition-all ${
                                    kurTenor === tTenor ? 'bg-[#002D62] text-white border-[#002D62]' : s.btnSecondary
                                  }`}
                                >
                                  {tTenor} Bulan
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} flex flex-col sm:flex-row items-center justify-between gap-4`}>
                            <div>
                              <div className={`text-[11px] ${s.textMuted}`}>Estimasi Cicilan per Bulan:</div>
                              <div className={`text-2xl font-black ${s.textHeading} mt-0.5 tracking-tight`}>
                                Rp {kurMonthly.toLocaleString('id-ID')} <span className="text-xs font-normal text-slate-400">/ bulan</span>
                              </div>
                              <div className={`text-[11px] font-semibold text-[#002D62] dark:text-sky-300 mt-1`}>
                                Setara Rp {Math.round(kurMonthly / 30).toLocaleString('id-ID')} / hari dari hasil jualan warung
                              </div>
                            </div>
                            <button 
                              onClick={() => showToast('Pengajuan pinjaman modal Rp ' + kurAmount.toLocaleString('id-ID') + ' berhasil dikirim ke Mantri BRI!')}
                              className={`${s.btnPrimary} px-5 py-2.5 rounded-lg text-xs font-semibold shrink-0 shadow-sm`}
                            >
                              Ajukan Modal Sekarang
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 3 Keunggulan Sederhana */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                        <div className="space-y-0.5">
                          <div className={`font-bold ${s.textHeading}`}>1. Tanpa Agunan Fisik</div>
                          <p className={`text-[11px] ${s.textMuted}`}>Cukup riwayat jualan warung harian di SANTARA.</p>
                        </div>
                        <div className="space-y-0.5">
                          <div className={`font-bold ${s.textHeading}`}>2. Bunga Subsidi 3%</div>
                          <p className={`text-[11px] ${s.textMuted}`}>Sangat ringan, disubsidi langsung pemerintah.</p>
                        </div>
                        <div className="space-y-0.5">
                          <div className={`font-bold ${s.textHeading}`}>3. Didampingi Mantri</div>
                          <p className={`text-[11px] ${s.textMuted}`}>Pencairan cepat ke rekening BritAma di warung.</p>
                        </div>
                      </div>
                    </div>

                    {/* Kolom Kanan: Pembayaran Tagihan Grosir BRIVA & Kontak Mantri BRI */}
                    <div className={`lg:col-span-5 space-y-4 flex flex-col justify-between`}>
                      {/* Box 1: Pembayaran Tagihan Grosir BRIVA */}
                      <div className={`${s.card} p-5 space-y-3`}>
                        <div className={`pb-2 border-b ${s.border} flex items-center justify-between`}>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Bayar Tagihan Grosir (BRIVA)</h4>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${s.badgeNeutral}`}>Virtual Account</span>
                        </div>
                        <div className={`p-3.5 rounded-xl ${s.cardSub} border ${s.border} space-y-2 text-xs`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <div className={`font-bold ${s.textHeading}`}>PO-SBY-441: 20 Sak Beras IR-64</div>
                              <div className={`text-[11px] ${s.textMuted}`}>Supplier: Sentra Grosir Keputran B12</div>
                            </div>
                            <span className={`font-bold text-sm ${s.textHeading}`}>Rp 12.800.000</span>
                          </div>
                          <div className="text-[11px] font-mono text-slate-500">
                            No. BRIVA: 88812-081234908812
                          </div>
                          <button 
                            onClick={() => showToast('Pembayaran grosir Rp 12.800.000 via BRIVA BritAma berhasil!')}
                            className={`w-full py-2 rounded-lg ${s.btnPrimary} text-xs font-semibold mt-1`}
                          >
                            Bayar Sekarang via BRIVA
                          </button>
                        </div>
                      </div>

                      {/* Box 2: Kontak Mantri BRI Pendamping Usaha */}
                      <div className={`${s.card} p-5 space-y-3`}>
                        <div className={`pb-2 border-b ${s.border} flex items-center justify-between`}>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Mantri BRI Pendamping Warung</h4>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${s.badgeNeutral}`}>Petugas Resmi</span>
                        </div>
                        <div className="text-xs space-y-1 pt-1">
                          <div className={`font-bold text-sm ${s.textHeading}`}>Aditya Pratama, S.E.</div>
                          <div className={`text-[11px] ${s.textMuted}`}>NIP: 892014 • Kantor BRI Unit Manyar Kertoarjo Surabaya</div>
                          <p className={`text-[11px] ${s.textMuted} pt-1 leading-relaxed`}>
                            Siap membantu survei warung, konsultasi peningkatan plafon modal, dan aktivasi fitur BRImo.
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button 
                            onClick={() => showToast('Membuka chat WhatsApp dengan Mantri Aditya Pratama...')}
                            className={`${s.btnPrimary} py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5`}
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </button>
                          <button 
                            onClick={() => showToast('Menghubungi telepon Kantor BRI Unit Manyar (031-5942812)...')}
                            className={`${s.btnSecondary} py-2 rounded-lg text-xs font-semibold`}
                          >
                            Telepon Unit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 6: FORUM DISKUSI ANTAR-UMKM */}
              {umkmTab === 'komunitas' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className={`lg:col-span-8 ${s.card} p-6 space-y-5`}>
                    <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                      <div>
                        <h3 className={`text-base font-bold ${s.textHeading}`}>Forum Diskusi Sesama Pelaku UMKM Surabaya</h3>
                        <p className={`text-xs ${s.textMuted}`}>Wadah berbagi informasi harga pasar, tips jualan, dan gotong royong kuota kulakan.</p>
                      </div>
                    </div>

                    {/* Input Thread Baru */}
                    <form onSubmit={handlePostThread} className="space-y-3">
                      <textarea
                        rows={3}
                        value={newThreadContent}
                        onChange={(e) => setNewThreadContent(e.target.value)}
                        placeholder="Tulis pesan atau pertanyaan untuk sesama pedagang warung di Surabaya..."
                        className={`w-full p-3 rounded-xl ${s.cardSub} border ${s.border} text-xs focus:outline-none focus:border-[#002D62]`}
                      />
                      <div className="flex justify-end">
                        <button type="submit" className={`${s.btnPrimary} px-4 py-2 rounded-lg text-xs flex items-center gap-1.5`}>
                          <Send className="w-3.5 h-3.5" />
                          <span>Kirim ke Komunitas</span>
                        </button>
                      </div>
                    </form>

                    {/* Daftar Thread */}
                    <div className="space-y-3 pt-2">
                      {umkmThreads.map((tItem) => (
                        <div key={tItem.id} className={`p-4 rounded-xl border ${s.border} ${s.cardSub} space-y-2 text-xs`}>
                          <div className="flex items-center justify-between">
                            <span className={`font-semibold ${s.textHeading}`}>{tItem.author}</span>
                            <span className={s.textMuted}>{tItem.time}</span>
                          </div>
                          <h5 className={`font-bold ${s.textHeading}`}>{tItem.title}</h5>
                          <p className={`${s.textMuted} leading-relaxed`}>{tItem.content}</p>
                          <div className="flex items-center gap-4 pt-1 text-[11px]">
                            <button 
                              onClick={() => showToast('Anda menyukai kiriman ini!')}
                              className={`flex items-center gap-1 ${s.textMuted} hover:${s.textHeading}`}
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span>{tItem.likes} Menyukai</span>
                            </button>
                            <span className={s.textMuted}>{tItem.replies} Komentar</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`lg:col-span-4 ${s.card} p-6 space-y-4`}>
                    <h4 className={`font-bold text-sm ${s.textHeading}`}>Pedoman Gotong Royong</h4>
                    <ul className={`text-xs ${s.textMuted} space-y-2 leading-relaxed list-disc list-inside`}>
                      <li>Saling berbagi informasi harga komoditas terkini secara jujur.</li>
                      <li>Dilarang menawarkan produk ilegal atau informasi palsu.</li>
                      <li>Manfaatkan patungan konsolidasi agar seluruh warung binaan dapat harga grosir terendah.</li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ================================================================== */}
          {/* B. ROLE 2: SUPPLIER B2B (SENTRA GROSIR PASAR KEPUTRAN)             */}
          {/* ================================================================== */}
          {activeRole === 'supplier' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Saldo Brankas Escrow</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>Rp 184.500.000</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>100% Bebas Bon Macet</div>
                </div>

                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Stok Pasokan Gudang</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>42.8 Ton</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>Ready di Gudang Logistik B2B</div>
                </div>

                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>PO Borongan Masuk</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>2 Pesanan Besar</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>Konsolidasi Warung Mulyorejo</div>
                </div>

                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Konektivitas BRIAPI</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1 tracking-tight`}>99.98%</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>Kliring Otomatis H+0</div>
                </div>
              </div>

              {/* Tab 1: KATALOG */}
              {supplierTab === 'katalog' && (
                <div className={`${s.card} p-6 space-y-4`}>
                  <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                    <div>
                      <h3 className={`text-base font-bold ${s.textHeading}`}>Inventori Pasokan Bahan Pokok Gudang</h3>
                      <p className={`text-xs ${s.textMuted}`}>PT Sentra Pangan Nusantara &bull; Pergudangan Margomulyo Hub.</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className={`border-b ${s.border} ${s.textMuted} uppercase font-semibold text-[10px]`}>
                          <th className="py-3 px-3">Komoditas</th>
                          <th className="py-3 px-3">Kode SKU</th>
                          <th className="py-3 px-3">Harga Grosir</th>
                          <th className="py-3 px-3">Stok Tersedia</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${s.border}`}>
                        {b2bInventory.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-500/5">
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <span className={`font-semibold ${s.textHeading}`}>{item.name}</span>
                              </div>
                            </td>
                            <td className={`py-3 px-3 font-mono font-bold ${s.textHeading}`}>{item.sku}</td>
                            <td className={`py-3 px-3 ${s.textHeading}`}>{item.price}</td>
                            <td className={`py-3 px-3 font-semibold ${s.textHeading}`}>{item.stock}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 2: PO MASUK */}
              {supplierTab === 'po_masuk' && (
                <div className={`${s.card} p-6 space-y-4`}>
                  <div className={`pb-3 border-b ${s.border}`}>
                    <h3 className={`text-base font-bold ${s.textHeading}`}>Pesanan Borongan Klaster Masuk</h3>
                    <p className={`text-xs ${s.textMuted}`}>Notifikasi pesanan borongan masuk dari paguyuban warung binaan.</p>
                  </div>

                  <div className="space-y-3">
                    {b2bPurchaseOrders.map((po, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border ${s.border} ${s.cardSub} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                            <img src={po.image} alt={po.item} className="w-full h-full object-cover" />
                          </div>
                          <div className="space-y-0.5 text-xs">
                            <span className={`font-mono font-bold ${s.textHeading}`}>{po.poId}</span>
                            <div className={`font-semibold text-sm ${s.textHeading}`}>{po.buyer}</div>
                            <div className={s.textMuted}>{po.item}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className={`text-[10px] ${s.textMuted}`}>Total Nilai:</div>
                            <div className={`text-base font-bold ${s.textHeading}`}>{po.total}</div>
                          </div>
                          {!po.dispatched ? (
                            <button 
                              onClick={() => handleDispatchTruck(po.poId)}
                              className={`${s.btnPrimary} px-3.5 py-2 rounded-lg text-xs`}
                            >
                              Kirim Truk
                            </button>
                          ) : (
                            <span className={`text-xs font-semibold ${s.textHeading}`}>{po.status}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: AI ANALISIS PASAR & REKAP */}
              {supplierTab === 'ai_analisis' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className={`lg:col-span-7 ${s.card} p-6 space-y-4`}>
                    <div className={`pb-3 border-b ${s.border}`}>
                      <h3 className={`text-base font-bold ${s.textHeading}`}>AI Prediksi Permintaan Bahan Pokok</h3>
                      <p className={`text-xs ${s.textMuted}`}>Analisis kebutuhan pangan 31 kecamatan di Surabaya.</p>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} space-y-1`}>
                        <div className={`font-bold ${s.textHeading}`}>Proyeksi Permintaan Beras IR-64</div>
                        <p className={s.textMuted}>Kebutuhan beras di wilayah Surabaya Timur diperkirakan naik +15% menjelang akhir pekan. Disarankan menambah kuota alokasi armada ke rute Manyar dan Mulyorejo.</p>
                      </div>
                      <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} space-y-1`}>
                        <div className={`font-bold ${s.textHeading}`}>Stabilisasi Harga Minyak Goreng</div>
                        <p className={s.textMuted}>Pasokan minyak jerigen 20L mencukupi untuk 14 hari operasional seluruh warung binaan.</p>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${s.card} p-6 space-y-4 flex flex-col justify-between`}>
                    <div>
                      <h4 className={`font-bold text-sm ${s.textHeading}`}>Rekapitulasi Penjualan B2B Real-Time</h4>
                      <div className="space-y-2.5 pt-3 text-xs">
                        <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                          <span className={s.textMuted}>Total Penyaluran Pangan:</span>
                          <span className={`font-bold ${s.textHeading}`}>42.8 Ton</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                          <span className={s.textMuted}>Nilai Transaksi Selesai:</span>
                          <span className={`font-bold ${s.textHeading}`}>Rp 184.500.000</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className={s.textMuted}>Rata-rata Durasi Pengiriman:</span>
                          <span className={`font-bold ${s.textHeading}`}>45 Menit</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => showToast('Rekapitulasi pasokan real-time berhasil diunduh!')}
                      className={`w-full py-2.5 rounded-lg ${s.btnPrimary} text-xs`}
                    >
                      Unduh Rekap Real-Time
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 4: PENCAIRAN ESCROW */}
              {supplierTab === 'escrow' && (
                <div className={`${s.card} p-6 space-y-4`}>
                  <div className={`pb-3 border-b ${s.border}`}>
                    <h3 className={`text-base font-bold ${s.textHeading}`}>Pencairan Saldo ke Rekening Bank BRI</h3>
                    <p className={`text-xs ${s.textMuted}`}>Dana diteruskan otomatis begitu pembeli mengonfirmasi penerimaan barang.</p>
                  </div>
                  <div className={`p-5 rounded-xl ${s.cardSub} flex flex-col sm:flex-row items-center justify-between gap-4`}>
                    <div>
                      <div className={`text-[11px] ${s.textMuted}`}>Saldo Siap Ditarik:</div>
                      <div className={`text-3xl font-black ${s.textHeading} mt-1`}>Rp 184.500.000</div>
                      <div className={`text-xs ${s.textMuted} mt-1`}>Rekening BRI BritAma Bisnis #0018-01-098234-50-1</div>
                    </div>
                    <button 
                      onClick={() => showToast('Penarikan dana Rp 184.500.000 berhasil diproses!')}
                      className={`${s.btnPrimary} px-6 py-2.5 rounded-lg text-xs shrink-0`}
                    >
                      Tarik ke Rekening BRI
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 5: KOMUNITAS SUPPLIER */}
              {supplierTab === 'komunitas' && (
                <div className={`${s.card} p-6 space-y-4 text-xs`}>
                  <h3 className={`text-base font-bold ${s.textHeading}`}>Forum Komunikasi Antar-Distributor Pangan Jawa Timur</h3>
                  <p className={s.textMuted}>Koordinasi ketersediaan stok panen cabai, beras, dan logistik antar sentra pasar induk.</p>
                  <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} space-y-2`}>
                    <div className={`font-semibold ${s.textHeading}`}>Grosir Pangan Keputran &amp; Pabean</div>
                    <p className={s.textMuted}>Jalur pasokan dari sentra penggilingan padi Ngawi dan Probolinggo lancar, tidak ada kendala distribusi.</p>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ================================================================== */}
          {/* C. ROLE 3: OJEK KURIR (CAK SUGENG) - MOBILE FIRST EMPHASIS         */}
          {/* ================================================================== */}
          {activeRole === 'ojek' && (
            <div className="space-y-5">
              
              {/* Status Header: Mobile-Friendly Driver Strip */}
              <div className={`${s.card} p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4`}>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#002D62] to-[#0284C7] flex items-center justify-center font-bold text-white text-base shrink-0 shadow-sm">
                    CS
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${s.textHeading}`}>Cak Sugeng (Driver Express)</h3>
                    <p className={`text-xs ${s.textMuted}`}>Honda Vario 125 • Plat L 4821 XY</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200 dark:border-slate-800">
                  <div className="text-left sm:text-right">
                    <div className={`text-[10px] ${s.textMuted} uppercase font-bold`}>Status Armada</div>
                    <div className={`text-sm font-bold ${driverOnline ? 'text-[#002D62] dark:text-sky-300' : 'text-slate-400'}`}>
                      {driverOnline ? '● Online (Siap Antar)' : '○ Offline'}
                    </div>
                  </div>
                  <button
                    onClick={() => setDriverOnline(!driverOnline)}
                    className={`${s.btnSecondary} px-3.5 py-2 rounded-lg text-xs font-semibold`}
                  >
                    {driverOnline ? 'Ubah Offline' : 'Ubah Online'}
                  </button>
                </div>
              </div>

              {/* Driver KPI Cards (Sejajar & Touch-Friendly) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                <div className={`${s.card} p-4 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Saldo Dompet</div>
                  <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>Rp {driverBalance.toLocaleString('id-ID')}</div>
                  <div className={`text-[10px] ${s.textMuted} mt-1`}>Siap dicairkan ke BRI</div>
                </div>

                <div className={`${s.card} p-4 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Trip Selesai</div>
                  <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>8 Pengantaran</div>
                  <div className={`text-[10px] ${s.textMuted} mt-1`}>100% Validasi OTP</div>
                </div>

                <div className={`${s.card} p-4 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Jarak Hari Ini</div>
                  <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>32.4 km</div>
                  <div className={`text-[10px] ${s.textMuted} mt-1`}>Manyar &amp; Keputran</div>
                </div>

                <div className={`${s.card} p-4 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Rating Driver</div>
                  <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>
                    4.95 / 5.0
                  </div>
                  <div className={`text-[10px] ${s.textMuted} mt-1`}>Sangat Ramah</div>
                </div>
              </div>

              {/* Sub-Tab 1: RUTE GOOGLE MAPS (MOBILE-OPTIMIZED) */}
              {ojekTab === 'radar' && (
                <div className="space-y-4">
                  <div className={`${s.card} p-5 space-y-4`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className={`text-[10px] ${s.badgeNeutral} px-2 py-0.5 rounded font-bold`}>TUGAS PENGANTARAN AKTIF</span>
                        <h3 className={`text-base font-bold ${s.textHeading} mt-1`}>{activeDriverJob.id}</h3>
                      </div>
                      
                      {/* Big Navigation Button */}
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&origin=Gudang+Sentra+Pangan+Surabaya&destination=Warung+Barokah+Manyar+Surabaya&travelmode=two_wheeler"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${s.btnPrimary} w-full sm:w-auto py-3 px-5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md`}
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Buka Rute di Google Maps (Turn-by-Turn)</span>
                      </a>
                    </div>

                    {/* Step Polyline Summary */}
                    <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} space-y-2 text-xs`}>
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-300 shrink-0">
                          1
                        </div>
                        <div>
                          <div className={`text-[10px] ${s.textMuted} uppercase font-bold`}>Ambil Muatan:</div>
                          <div className={`font-semibold ${s.textHeading}`}>{activeDriverJob.pickup}</div>
                          <div className={s.textMuted}>{activeDriverJob.items}</div>
                        </div>
                      </div>

                      <div className="w-0.5 h-3 bg-slate-300 dark:bg-slate-700 ml-2" />

                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded bg-[#002D62] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                          2
                        </div>
                        <div>
                          <div className={`text-[10px] ${s.textMuted} uppercase font-bold`}>Tujuan Antar:</div>
                          <div className={`font-semibold ${s.textHeading}`}>{activeDriverJob.destination}</div>
                          <div className={`font-semibold text-[#002D62] dark:text-sky-300 mt-0.5`}>Ongkir: +Rp 35.000</div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Button to Enter OTP */}
                    <button
                      onClick={() => setOjekTab('otp')}
                      className={`w-full py-3 rounded-xl ${s.btnSecondary} text-xs font-bold flex items-center justify-center gap-2`}
                    >
                      <QrCode className="w-4 h-4" />
                      <span>Barang Sudah Sampai? Masukkan PIN OTP Disini</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-Tab 2: ORDERAN MUATAN BARU */}
              {ojekTab === 'orderan' && (
                <div className={`${s.card} p-5 space-y-4`}>
                  <h3 className={`text-base font-bold ${s.textHeading}`}>Antrian Orderan Muatan Siap Antar</h3>
                  <div className="space-y-3">
                    <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs`}>
                      <div className="space-y-1">
                        <div className={`font-bold ${s.textHeading}`}>Gudang Pangan Nusantara ➔ SWK Dharmawangsa</div>
                        <div className={s.textMuted}>Muatan: 4 Jerigen Minyak Sawit (80 Liter)</div>
                        <div className={s.textMuted}>Jarak: 4.5 km (15 menit)</div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-3">
                        <span className={`text-base font-bold ${s.textHeading}`}>+Rp 42.000</span>
                        <button 
                          onClick={() => showToast('Orderan berhasil diambil! Rute navigasi aktif.')}
                          className={`${s.btnPrimary} px-4 py-2 rounded-lg text-xs`}
                        >
                          Ambil Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 3: INPUT OTP SERAH TERIMA */}
              {ojekTab === 'otp' && (
                <div className={`${s.card} p-6 max-w-md mx-auto space-y-5 text-center`}>
                  <div>
                    <h3 className={`text-base font-bold ${s.textHeading}`}>Masukkan PIN OTP Serah Terima</h3>
                    <p className={`text-xs ${s.textMuted} mt-1`}>Minta 4 digit PIN kepada Bu Endang saat muatan telah diperiksa dan diserahkan.</p>
                  </div>

                  <form onSubmit={handleVerifyOtp} className="space-y-4">
                    <input 
                      type="text"
                      maxLength={4}
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value)}
                      placeholder="4819"
                      className={`w-44 mx-auto text-center font-mono font-bold text-3xl py-3 rounded-xl ${s.cardSub} border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none`}
                    />
                    <button
                      type="submit"
                      className={`w-full py-3 rounded-xl ${s.btnPrimary} text-xs font-bold`}
                    >
                      Konfirmasi OTP &amp; Cairkan Ongkir Rp 35.000
                    </button>
                  </form>
                </div>
              )}

              {/* Sub-Tab 4: DOMPET & PENARIKAN */}
              {ojekTab === 'dompet' && (
                <div className={`${s.card} p-6 max-w-lg mx-auto space-y-5`}>
                  <div>
                    <h3 className={`text-base font-bold ${s.textHeading}`}>Dompet Saldo Driver</h3>
                    <p className={`text-xs ${s.textMuted}`}>Penghasilan langsung ditransfer ke rekening BRI Anda tanpa potongan.</p>
                  </div>

                  <div className={`p-5 rounded-xl ${s.cardSub} space-y-3`}>
                    <div>
                      <div className={`text-xs ${s.textMuted}`}>Saldo Siap Tarik:</div>
                      <div className={`text-3xl font-black ${s.textHeading} mt-1`}>Rp {driverBalance.toLocaleString('id-ID')}</div>
                      <div className={`text-xs ${s.textMuted} mt-1`}>Bank BRI BritAma #0092-01-081249-50-4</div>
                    </div>
                    <button 
                      onClick={() => showToast('Penarikan saldo Rp 285.000 berhasil ditransfer ke rekening BRI!')}
                      className={`w-full py-2.5 rounded-lg ${s.btnPrimary} text-xs font-bold`}
                    >
                      Tarik Seluruh Saldo ke Rekening BRI
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* ================================================================== */}
          {/* D. ROLE 4: ADMIN BRI (ADMIN & SUPER ADMIN SWITCHER)                */}
          {/* ================================================================== */}
          {activeRole === 'bank_bri' && (
            <div className="space-y-6">
              
              {/* Sub-Role Selector: Admin vs Super Admin */}
              <div className={`${s.card} p-4 flex flex-col sm:flex-row items-center justify-between gap-4`}>
                <div>
                  <h3 className={`text-base font-bold ${s.textHeading}`}>Pusat Kendali Admin BRI</h3>
                  <p className={`text-xs ${s.textMuted}`}>Pengawasan tata kelola ekosistem rantai pasok dan pembiayaan KUR Mikro BUMN.</p>
                </div>

                {/* Switcher Tipe Akses Admin */}
                <div className={`flex items-center p-1 rounded-xl ${s.cardSub} border ${s.border} text-xs`}>
                  <button
                    type="button"
                    onClick={() => {
                      setAdminSubRole('admin');
                      showToast('Beralih ke Tipe Akses: Admin Operasional');
                    }}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      adminSubRole === 'admin' ? 'bg-[#002D62] text-white font-semibold shadow-xs' : s.textMuted
                    }`}
                  >
                    Admin Operasional
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAdminSubRole('super_admin');
                      showToast('Beralih ke Tipe Akses: Super Admin Eksekutif');
                    }}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      adminSubRole === 'super_admin' ? 'bg-[#002D62] text-white font-semibold shadow-xs' : s.textMuted
                    }`}
                  >
                    Super Admin Eksekutif
                  </button>
                </div>
              </div>

              {/* Status Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Total Arus Escrow BRI</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1`}>Rp 184.500.000</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>100% Kliring Otomatis Lancar</div>
                </div>

                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Entitas Terdaftar</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1`}>1.428 Pengguna</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>UMKM, Supplier, Driver</div>
                </div>

                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Sengketa (Dispute)</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1`}>0 Kasus</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>Verifikasi OTP di Lokasi</div>
                </div>

                <div className={`${s.card} p-5 flex flex-col justify-between`}>
                  <div className={`text-[10px] ${s.textMuted} font-bold uppercase`}>Akurasi AI Fraud</div>
                  <div className={`text-2xl font-bold ${s.textHeading} mt-1`}>99.98%</div>
                  <div className={`text-xs ${s.textMuted} mt-2`}>Integritas GPS Driver</div>
                </div>
              </div>

              {/* Tab 1: DASHBOARD ANALITIK & DIAGRAM */}
              {adminTab === 'analitik' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Diagram 1: Tren Arus Transaksi QRIS (7 Cols) */}
                  <div className={`lg:col-span-7 ${s.card} p-6 space-y-4`}>
                    <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                      <div>
                        <h4 className={`font-bold text-sm ${s.textHeading}`}>Tren Pertumbuhan Transaksi QRIS &amp; Escrow</h4>
                        <p className={`text-xs ${s.textMuted}`}>Volume transaksi per kuartal se-Surabaya (Tahun 2026).</p>
                      </div>
                      <span className={`text-[10px] ${s.badgeNeutral} px-2 py-0.5 rounded font-bold`}>Grafik Interaktif</span>
                    </div>

                    {/* Visual Bar Chart SVG */}
                    <div className="pt-2">
                      <div className="h-48 flex items-end justify-between gap-3 px-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                        {[
                          { label: 'Jan', val: 42, amount: 'Rp 42M' },
                          { label: 'Feb', val: 56, amount: 'Rp 56M' },
                          { label: 'Mar', val: 68, amount: 'Rp 68M' },
                          { label: 'Apr', val: 82, amount: 'Rp 82M' },
                          { label: 'Mei', val: 95, amount: 'Rp 95M' },
                          { label: 'Jun', val: 114, amount: 'Rp 114M' }
                        ].map((bar, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                            <span className={`text-[10px] font-bold ${s.textHeading} opacity-0 group-hover:opacity-100 transition-opacity`}>
                              {bar.amount}
                            </span>
                            <div 
                              style={{ height: `${bar.val * 1.3}px` }} 
                              className="w-full max-w-[42px] bg-gradient-to-t from-[#002D62] to-[#0284C7] rounded-t-lg transition-all group-hover:brightness-110"
                            />
                            <span className={`text-[10px] ${s.textMuted}`}>{bar.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className={`flex justify-between items-center pt-3 text-xs ${s.textMuted}`}>
                        <span>Rata-rata pertumbuhan volume: <strong>+24.8% per bulan</strong></span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Total YTD: Rp 457 Miliar</span>
                      </div>
                    </div>
                  </div>

                  {/* Diagram 2: Distribusi Wilayah 31 Kecamatan (5 Cols) */}
                  <div className={`lg:col-span-5 ${s.card} p-6 space-y-4`}>
                    <div className={`pb-3 border-b ${s.border}`}>
                      <h4 className={`font-bold text-sm ${s.textHeading}`}>Distribusi UMKM di 31 Kecamatan</h4>
                      <p className={`text-xs ${s.textMuted}`}>Konsentrasi warung dan mitra binaan Bank BRI Surabaya.</p>
                    </div>

                    <div className="space-y-3 text-xs pt-1">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={s.textMuted}>Surabaya Timur (Manyar, Mulyorejo, Gubeng)</span>
                          <span className={`font-semibold ${s.textHeading}`}>42% (600 UMKM)</span>
                        </div>
                        <div className="w-full h-2 rounded bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <div className="w-[42%] h-full bg-[#002D62] rounded" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={s.textMuted}>Surabaya Selatan (Wonokromo, Gayungan)</span>
                          <span className={`font-semibold ${s.textHeading}`}>28% (400 UMKM)</span>
                        </div>
                        <div className="w-full h-2 rounded bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <div className="w-[28%] h-full bg-[#00529C] rounded" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className={s.textMuted}>Surabaya Pusat &amp; Utara (Pabean, Tegalsari)</span>
                          <span className={`font-semibold ${s.textHeading}`}>30% (428 UMKM)</span>
                        </div>
                        <div className="w-full h-2 rounded bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <div className="w-[30%] h-full bg-[#0284C7] rounded" />
                        </div>
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg ${s.cardSub} text-[11px] ${s.textMuted} mt-3`}>
                      Tingkat kepatuhan pembayaran cicilan KUR Mikro di seluruh wilayah mencapai 99.8% (Kolektibilitas 1).
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: MANAJEMEN DATABASE PENGGUNA */}
              {adminTab === 'database' && (
                <div className={`${s.card} p-6 space-y-4`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b ${s.border}`}>
                    <div>
                      <h3 className={`text-base font-bold ${s.textHeading}`}>Master Database Pengguna Terpadu</h3>
                      <p className={`text-xs ${s.textMuted}`}>Daftar seluruh warung, supplier grosir, dan armada driver.</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative text-xs">
                        <Search className={`w-3.5 h-3.5 ${s.textMuted} absolute left-3 top-1/2 -translate-y-1/2`} />
                        <input 
                          type="text"
                          value={adminSearch}
                          onChange={(e) => setAdminSearch(e.target.value)}
                          placeholder="Cari nama atau ID..."
                          className={`pl-8 pr-3 py-1.5 rounded-lg ${s.cardSub} border ${s.border} text-xs focus:outline-none`}
                        />
                      </div>

                      <div className="flex items-center gap-1 text-xs">
                        {(['all', 'umkm', 'supplier', 'ojek'] as const).map(rf => (
                          <button
                            key={rf}
                            onClick={() => setAdminEntityFilter(rf)}
                            className={`px-2.5 py-1.5 rounded-md font-medium ${
                              adminEntityFilter === rf ? 'bg-[#002D62] text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            {rf === 'all' && 'Semua'}
                            {rf === 'umkm' && 'UMKM'}
                            {rf === 'supplier' && 'Supplier'}
                            {rf === 'ojek' && 'Driver'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className={`border-b ${s.border} ${s.textMuted} uppercase font-semibold text-[10px]`}>
                          <th className="py-3 px-3 whitespace-nowrap">ID Pengguna</th>
                          <th className="py-3 px-3 whitespace-nowrap">Nama Entitas</th>
                          <th className="py-3 px-3 whitespace-nowrap">Peran</th>
                          <th className="py-3 px-3 whitespace-nowrap">Omzet Bulanan</th>
                          <th className="py-3 px-3 whitespace-nowrap">Saldo Escrow</th>
                          <th className="py-3 px-3 whitespace-nowrap text-right">Status Verifikasi</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${s.border}`}>
                        {filteredDatabase.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-500/5">
                            <td className={`py-3.5 px-3 font-mono font-bold ${s.textHeading} whitespace-nowrap`}>{item.id}</td>
                            <td className={`py-3.5 px-3 font-semibold ${s.textHeading} whitespace-nowrap`}>{item.name}</td>
                            <td className="py-3.5 px-3 whitespace-nowrap">
                              <span className={`px-2 py-0.5 rounded text-[10px] ${s.badgeNeutral} uppercase whitespace-nowrap inline-block`}>
                                {item.role}
                              </span>
                            </td>
                            <td className={`py-3.5 px-3 ${s.textHeading} whitespace-nowrap`}>{item.omzet}</td>
                            <td className={`py-3.5 px-3 font-semibold ${s.textHeading} whitespace-nowrap`}>{item.saldo}</td>
                            <td className="py-3.5 px-3 whitespace-nowrap text-right">
                              <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${item.status.includes('Prioritas') ? 'bg-[#002D62] text-white' : s.badgeNeutral} whitespace-nowrap inline-block`}>
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 3: REKAPITULASI DANA ESCROW */}
              {adminTab === 'rekapitulasi' && (
                <div className={`${s.card} p-6 space-y-4`}>
                  <div className={`pb-3 border-b ${s.border}`}>
                    <h3 className={`text-base font-bold ${s.textHeading}`}>Rekapitulasi Rekening Penampung (Escrow) BRI</h3>
                    <p className={`text-xs ${s.textMuted}`}>Pengawasan arus dana kliring antara pembeli, penjual, dan kurir logistik.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} space-y-2`}>
                      <div className={s.textMuted}>Rekening Virtual Escrow Santara:</div>
                      <div className={`font-mono font-bold ${s.textHeading} text-sm`}>#7690-01-000001-30-0 (BRI Custody)</div>
                      <div className={`font-semibold ${s.textHeading}`}>Total Saldo Terkunci: Rp 184.500.000</div>
                    </div>

                    <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} space-y-2`}>
                      <div className={s.textMuted}>Laporan Sengketa &amp; Komplain:</div>
                      <div className={`font-bold ${s.textHeading} text-sm`}>0 Sengketa Aktif</div>
                      <div className={s.textMuted}>Semua serah-terima terverifikasi secara fisik menggunakan PIN OTP.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: MONITORING & PENYALURAN KUR MIKRO BRI (BANK-GRADE BUMN) */}
              {adminTab === 'penyaluran_kur' && (
                <div className="space-y-6">
                  {/* Top Stats KUR */}
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Total Realisasi KUR Santara</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>Rp 28.450.000.000</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Subsidi Bunga APBN 6% p.a.</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Debitur Aktif UMKM</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>1.240 Pelaku Usaha</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Surabaya &amp; Sekitarnya</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Rasio NPL (Kredit Macet)</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>0.02%</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Sehat &bull; Rekor Terendah</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>SLA Underwriting Digital</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>15 Menit Cair</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Skor Otomatis Arus Kas QRIS</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Kolom Kiri (7 Cols): Daftar Pengajuan KUR Mikro Terintegrasi */}
                    <div className={`lg:col-span-7 ${s.card} p-6 space-y-4`}>
                      <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                        <div>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Pipeline Pengajuan KUR Mikro Berbasis QRIS</h4>
                          <p className={`text-xs ${s.textMuted}`}>Persetujuan instan menggunakan skor perputaran transaksi di ekosistem Santara.</p>
                        </div>
                        <span className={`text-[10px] font-bold ${s.badgeNeutral} px-2.5 py-1 rounded`}>
                          Plafon s.d. Rp 50 Juta
                        </span>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-2`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className={`font-bold ${s.textHeading} text-sm`}>Warung Barokah Bu Endang</span>
                              <span className={`text-[11px] ${s.textMuted} block`}>Kuliner &bull; Jl. Gayungan PTT No. 14</span>
                            </div>
                            <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-[#002D62] text-white">Disetujui Otomatis</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Plafon Diajukan:</span>
                              <span className={`font-bold ${s.textHeading}`}>Rp 35.000.000</span>
                            </div>
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Omzet QRIS/Bln:</span>
                              <span className={`font-bold ${s.textHeading}`}>Rp 34.200.000</span>
                            </div>
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Skor Kelayakan:</span>
                              <span className="font-bold text-[#002D62] dark:text-sky-300">96/100 (Sangat Prima)</span>
                            </div>
                          </div>
                        </div>

                        <div className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-2`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className={`font-bold ${s.textHeading} text-sm`}>Soto Ayam Ambengan Cak Har</span>
                              <span className={`text-[11px] ${s.textMuted} block`}>Kuliner &bull; Jl. Dr. Ir. H. Soekarno No. 22</span>
                            </div>
                            <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-[#002D62] text-white">Disetujui Otomatis</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Plafon Diajukan:</span>
                              <span className={`font-bold ${s.textHeading}`}>Rp 50.000.000</span>
                            </div>
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Omzet QRIS/Bln:</span>
                              <span className={`font-bold ${s.textHeading}`}>Rp 62.500.000</span>
                            </div>
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Skor Kelayakan:</span>
                              <span className="font-bold text-[#002D62] dark:text-sky-300">98/100 (Sangat Prima)</span>
                            </div>
                          </div>
                        </div>

                        <div className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-2`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className={`font-bold ${s.textHeading} text-sm`}>Toko Beras &amp; Sembako Sumber Rejeki</span>
                              <span className={`text-[11px] ${s.textMuted} block`}>Ritel &bull; Jl. Pucang Anom Timur No. 8</span>
                            </div>
                            <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">Verifikasi Dokumen</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Plafon Diajukan:</span>
                              <span className={`font-bold ${s.textHeading}`}>Rp 25.000.000</span>
                            </div>
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Omzet QRIS/Bln:</span>
                              <span className={`font-bold ${s.textHeading}`}>Rp 28.100.000</span>
                            </div>
                            <div>
                              <span className={`${s.textMuted} block text-[10px]`}>Skor Kelayakan:</span>
                              <span className="font-bold text-[#002D62] dark:text-sky-300">91/100 (Prima)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Kolom Kanan (5 Cols): Parameter Scoring & Aksi BUMN */}
                    <div className={`lg:col-span-5 ${s.card} p-6 space-y-4 flex flex-col justify-between`}>
                      <div className="space-y-4">
                        <div className={`pb-3 border-b ${s.border}`}>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Metrik Kredit Berbasis Rantai Pasok</h4>
                          <p className={`text-xs ${s.textMuted}`}>Underwriting cerdas Bank BRI tanpa jaminan fisik (Non-Collateral).</p>
                        </div>

                        <div className="space-y-2.5 text-xs">
                          <div className={`p-3 rounded-xl ${s.cardSub} border ${s.border} flex items-center justify-between`}>
                            <span className={s.textMuted}>Arus Kas QRIS &bull; Bobot 40%</span>
                            <span className={`font-bold ${s.textHeading}`}>Skor 94/100</span>
                          </div>
                          <div className={`p-3 rounded-xl ${s.cardSub} border ${s.border} flex items-center justify-between`}>
                            <span className={s.textMuted}>Kedisiplinan Escrow &bull; Bobot 35%</span>
                            <span className={`font-bold ${s.textHeading}`}>Skor 98/100</span>
                          </div>
                          <div className={`p-3 rounded-xl ${s.cardSub} border ${s.border} flex items-center justify-between`}>
                            <span className={s.textMuted}>Siklus Kulakan &bull; Bobot 25%</span>
                            <span className={`font-bold ${s.textHeading}`}>Skor 92/100</span>
                          </div>
                        </div>

                        <div className={`p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border ${s.border} text-xs space-y-1`}>
                          <div className={`font-bold ${s.textHeading}`}>Simulasi Angsuran Tenor 24 Bulan:</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Plafon Rp 35.000.000 &bull; Bunga 6% Efektif &bull; Angsuran Rp 1.551.000 / bulan.
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => showToast('Laporan Rekapitulasi Penyaluran KUR Mikro BRI (PDF) berhasil diunduh!')}
                        className={`w-full py-2.5 rounded-xl ${s.btnPrimary} text-xs font-semibold flex items-center justify-center gap-2 mt-2`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh Rekapitulasi KUR (PDF)</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: PUSAT LOGISTIK & KETAHANAN PANGAN BUMN (DANANTARA & PASAR KEPUTRAN) */}
              {adminTab === 'radar_pangan' && (
                <div className="space-y-6">
                  {/* Top Stats Radar Pangan */}
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Cadangan Pangan Terpantau</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>3.850 Ton</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Gudang Sembako Jawa Timur</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Indeks Stabilitas Harga</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>98.4% Terkendali</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Deflasi Pangan -0.12%</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Rantai Pasok Dieliminasi</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>3 Tingkat Tengkulak</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Petani/Pabrik &rarr; Warung Langsung</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Cakupan Kelancaran Pasokan</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>31 Kecamatan</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Surabaya Bebas Kelangkaan</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Kolom Kiri (7 Cols): Pemantauan Komoditas Pangan Real-Time */}
                    <div className={`lg:col-span-7 ${s.card} p-6 space-y-4`}>
                      <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                        <div>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Monitoring Pasokan &amp; HET Sentra Pangan Nusantara</h4>
                          <p className={`text-xs ${s.textMuted}`}>Sinkronisasi harga borongan grosir dengan standar ketahanan pangan nasional.</p>
                        </div>
                        <span className={`text-[10px] font-bold ${s.badgeNeutral} px-2.5 py-1 rounded whitespace-nowrap`}>
                          Update Otomatis
                        </span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs min-w-[560px]">
                          <thead>
                            <tr className={`border-b ${s.border} ${s.textMuted} uppercase font-semibold text-[10px]`}>
                              <th className="py-2.5 px-3 whitespace-nowrap">Komoditas Pokok</th>
                              <th className="py-2.5 px-3 whitespace-nowrap">Cadangan Stok</th>
                              <th className="py-2.5 px-3 whitespace-nowrap">Harga Rata-Rata</th>
                              <th className="py-2.5 px-3 whitespace-nowrap">Fluktuasi</th>
                              <th className="py-2.5 px-3 whitespace-nowrap text-right">Status Pasokan</th>
                            </tr>
                          </thead>
                          <tbody className={`divide-y ${s.border}`}>
                            <tr className="hover:bg-slate-500/5">
                              <td className={`py-3 px-3 font-bold ${s.textHeading} whitespace-nowrap`}>Beras Medium IR-64</td>
                              <td className={`py-3 px-3 ${s.textHeading} whitespace-nowrap`}>1.450 Ton</td>
                              <td className={`py-3 px-3 font-semibold ${s.textHeading} whitespace-nowrap`}>Rp 12.800/kg</td>
                              <td className="py-3 px-3 text-slate-500 whitespace-nowrap">0.0% (Stabil)</td>
                              <td className="py-3 px-3 whitespace-nowrap text-right">
                                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#002D62] text-white whitespace-nowrap inline-block">
                                  Sangat Aman
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-500/5">
                              <td className={`py-3 px-3 font-bold ${s.textHeading} whitespace-nowrap`}>Minyak Goreng Sawit (Minyakita)</td>
                              <td className={`py-3 px-3 ${s.textHeading} whitespace-nowrap`}>520.000 Liter</td>
                              <td className={`py-3 px-3 font-semibold ${s.textHeading} whitespace-nowrap`}>Rp 15.500/liter</td>
                              <td className="py-3 px-3 text-slate-500 whitespace-nowrap">+0.2%</td>
                              <td className="py-3 px-3 whitespace-nowrap text-right">
                                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#002D62] text-white whitespace-nowrap inline-block">
                                  Sangat Aman
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-500/5">
                              <td className={`py-3 px-3 font-bold ${s.textHeading} whitespace-nowrap`}>Gula Pasir Konsumsi (BUMN Sugar)</td>
                              <td className={`py-3 px-3 ${s.textHeading} whitespace-nowrap`}>390 Ton</td>
                              <td className={`py-3 px-3 font-semibold ${s.textHeading} whitespace-nowrap`}>Rp 16.500/kg</td>
                              <td className="py-3 px-3 text-slate-500 whitespace-nowrap">0.0% (Stabil)</td>
                              <td className="py-3 px-3 whitespace-nowrap text-right">
                                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#002D62] text-white whitespace-nowrap inline-block">
                                  Sangat Aman
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-500/5">
                              <td className={`py-3 px-3 font-bold ${s.textHeading} whitespace-nowrap`}>Bawang Merah &amp; Cabai Rawit</td>
                              <td className={`py-3 px-3 ${s.textHeading} whitespace-nowrap`}>120 Ton</td>
                              <td className={`py-3 px-3 font-semibold ${s.textHeading} whitespace-nowrap`}>Rp 32.000/kg</td>
                              <td className="py-3 px-3 text-slate-500 whitespace-nowrap">+2.8% (Musiman)</td>
                              <td className="py-3 px-3 whitespace-nowrap text-right">
                                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 whitespace-nowrap inline-block">
                                  Perlu Pantau
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Kolom Kanan (5 Cols): Peringatan Logistik & Intervensi BUMN */}
                    <div className={`lg:col-span-5 ${s.card} p-6 space-y-4 flex flex-col justify-between`}>
                      <div className="space-y-4">
                        <div className={`pb-3 border-b ${s.border}`}>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Peringatan Dini Pasokan Pangan</h4>
                          <p className={`text-xs ${s.textMuted}`}>Sistem AI prediktif untuk mencegah lonjakan harga di level warung makan.</p>
                        </div>

                        <div className={`p-4 rounded-xl ${s.cardSub} border ${s.border} space-y-2 text-xs`}>
                          <div className={`font-bold ${s.textHeading}`}>Ketahanan Pasokan Jawa Timur: 45 Hari</div>
                          <p className={`${s.textMuted} leading-relaxed`}>
                            Cadangan komoditas beras, tepung terigu, dan minyak goreng di sentra grosir Surabaya berada pada level optimal untuk mengamankan 4.820 UMKM binaan.
                          </p>
                        </div>

                        <div className={`p-4 rounded-xl bg-slate-100 dark:bg-white/5 border ${s.border} space-y-2 text-xs`}>
                          <div className={`font-bold ${s.textHeading}`}>Kesiapan Intervensi Logistik BUMN:</div>
                          <p className={`${s.textMuted} leading-relaxed text-[11px]`}>
                            Armada logistik siap memasok tambahan 200 ton bahan pokok bila indeks permintaan melebihi batas 150% musiman.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 mt-2">
                        <button
                          type="button"
                          onClick={() => showToast('Sinkronisasi data HET Pangan Nasional berhasil diperbarui!')}
                          className={`w-full py-2.5 rounded-xl ${s.btnPrimary} text-xs font-semibold`}
                        >
                          Sinkronisasi HET Badan Pangan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 6: DETEKSI FRAUD & KEAMANAN GPS DRIVER */}
              {adminTab === 'fraud_security' && (
                <div className="space-y-6">
                  {/* Top Stats Fraud & Keamanan */}
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Tingkat Order Fiktif</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>0.00%</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>100% Bebas Manipulasi</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Akurasi Geofencing GPS</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>99.98%</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Validasi Radius &lt; 50 Meter</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Enkripsi Token Serah-Terima</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>AES-256 Bit</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Single-Use Dynamic PIN</div>
                    </div>
                    <div className={`${s.card} p-5 flex flex-col justify-between`}>
                      <div className={`text-[10px] ${s.textMuted} font-bold uppercase tracking-wider`}>Standar Kepatuhan</div>
                      <div className={`text-xl sm:text-2xl font-bold ${s.textHeading} mt-1`}>ISO 27001</div>
                      <div className={`text-xs ${s.textMuted} mt-1.5`}>Bank Indonesia Blueprint 2025</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Kolom Kiri (7 Cols): Audit Trail Keamanan Transaksi & GPS */}
                    <div className={`lg:col-span-7 ${s.card} p-6 space-y-4`}>
                      <div className={`pb-3 border-b ${s.border} flex items-center justify-between`}>
                        <div>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Log Audit Keamanan GPS &amp; Escrow Release</h4>
                          <p className={`text-xs ${s.textMuted}`}>Verifikasi berlapis sebelum dana escrow dicairkan ke rekening penjual.</p>
                        </div>
                        <span className={`text-[10px] font-bold ${s.badgeNeutral} px-2.5 py-1 rounded`}>
                          Real-Time Stream
                        </span>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-1.5`}>
                          <div className="flex items-center justify-between">
                            <span className={`font-mono font-bold ${s.textHeading}`}>TRX-2026-9041 &bull; 13:45 WIB</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#002D62] text-white">VALID &amp; AMAN</span>
                          </div>
                          <div className={`font-semibold ${s.textHeading}`}>Serah Terima Warung Barokah Bu Endang &rarr; Riko Wahyudi</div>
                          <div className={`${s.textMuted} text-[11px]`}>
                            GPS Driver Cak Sugeng: Cocok (Radius 14m dari titik pembeli) &bull; OTP: Terverifikasi Seketika.
                          </div>
                        </div>

                        <div className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-1.5`}>
                          <div className="flex items-center justify-between">
                            <span className={`font-mono font-bold ${s.textHeading}`}>TRX-2026-9040 &bull; 13:10 WIB</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#002D62] text-white">VALID &amp; AMAN</span>
                          </div>
                          <div className={`font-semibold ${s.textHeading}`}>Pembayaran QRIS Kasir Toko &bull; Rp 64.000</div>
                          <div className={`${s.textMuted} text-[11px]`}>
                            Dinamis QRIS BRImo &bull; Device Fingerprint Valid &bull; Rekening Penerima: BritAma Bu Endang.
                          </div>
                        </div>

                        <div className={`p-3.5 rounded-xl border ${s.border} ${s.cardSub} space-y-1.5`}>
                          <div className="flex items-center justify-between">
                            <span className={`font-mono font-bold ${s.textHeading}`}>TRX-2026-9039 &bull; 12:40 WIB</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#002D62] text-white">VALID &amp; AMAN</span>
                          </div>
                          <div className={`font-semibold ${s.textHeading}`}>PO Borongan Minyak Goreng &bull; Sentra Grosir Keputran</div>
                          <div className={`${s.textMuted} text-[11px]`}>
                            Verifikasi Barcode Truk Logistik &bull; Escrow Dana Rp 3.250.000 dilepas otomatis H+0.
                          </div>
                        </div>

                        <div className={`p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 ${s.cardSub} space-y-1.5`}>
                          <div className="flex items-center justify-between">
                            <span className={`font-mono font-bold ${s.textHeading}`}>SEC-ALERT-102 &bull; 11:15 WIB</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">TERTANGANI</span>
                          </div>
                          <div className={`font-semibold ${s.textHeading}`}>Percobaan Input OTP Salah 3x Dibatasi</div>
                          <div className={`${s.textMuted} text-[11px]`}>
                            Sistem anti brute-force membekukan sesi selama 15 menit &bull; Tidak ada kebocoran dana.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Kolom Kanan (5 Cols): Arsitektur Keamanan Berlapis */}
                    <div className={`lg:col-span-5 ${s.card} p-6 space-y-4 flex flex-col justify-between`}>
                      <div className="space-y-4">
                        <div className={`pb-3 border-b ${s.border}`}>
                          <h4 className={`font-bold text-sm ${s.textHeading}`}>Arsitektur Proteksi Berlapis</h4>
                          <p className={`text-xs ${s.textMuted}`}>Perlindungan menyeluruh seluruh transaksi perbankan dan fisik.</p>
                        </div>

                        <div className="space-y-3 text-xs">
                          <div className={`p-3 rounded-xl ${s.cardSub} border ${s.border} space-y-1`}>
                            <div className={`font-bold ${s.textHeading}`}>1. Geofencing GPS Radius Terkunci</div>
                            <p className={`${s.textMuted} text-[11px]`}>
                              Tombol verifikasi OTP hanya aktif saat smartphone pengemudi berada dalam radius maksimal 50 meter dari alamat toko/pembeli.
                            </p>
                          </div>

                          <div className={`p-3 rounded-xl ${s.cardSub} border ${s.border} space-y-1`}>
                            <div className={`font-bold ${s.textHeading}`}>2. BRIAPI Tokenization &amp; OAuth 2.0</div>
                            <p className={`${s.textMuted} text-[11px]`}>
                              Setiap pemanggilan API transfer escrow menggunakan token terenkripsi yang kadaluarsa dalam 300 detik.
                            </p>
                          </div>

                          <div className={`p-3 rounded-xl ${s.cardSub} border ${s.border} space-y-1`}>
                            <div className={`font-bold ${s.textHeading}`}>3. Anti-Order Fiktif &amp; AI Anomali</div>
                            <p className={`${s.textMuted} text-[11px]`}>
                              Algoritma machine learning mendeteksi pola transaksi tidak wajar, order berulang dalam interval detik, atau lokasi GPS yang direkayasa.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => showToast('Audit Keamanan Sistem Sukses: Seluruh parameter 100% Patuh Standar OJK & BI!')}
                        className={`w-full py-2.5 rounded-xl ${s.btnPrimary} text-xs font-semibold flex items-center justify-center gap-2 mt-2`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Jalankan Audit Keamanan Sistem</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 7: MANAJEMEN TAMPILAN & TATA KELOLA MITRA */}
              {adminTab === 'kelola' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className={`lg:col-span-6 ${s.card} p-6 space-y-4`}>
                    <div className={`pb-3 border-b ${s.border}`}>
                      <h4 className={`font-bold text-sm ${s.textHeading}`}>Manajemen Tampilan Banner Marketplace</h4>
                      <p className={`text-xs ${s.textMuted}`}>Kelola promosi dan pengumuman resmi yang tampil di aplikasi pembeli.</p>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className={`p-3 rounded-lg border ${s.border} ${s.cardSub} flex items-center justify-between`}>
                        <div>
                          <div className={`font-semibold ${s.textHeading}`}>Banner Subsidi KUR BRI 3%</div>
                          <div className={s.textMuted}>Tayang di Beranda Utama UMKM</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] ${s.badgeNeutral}`}>Aktif</span>
                      </div>

                      <div className={`p-3 rounded-lg border ${s.border} ${s.cardSub} flex items-center justify-between`}>
                        <div>
                          <div className={`font-semibold ${s.textHeading}`}>Banner Kulakan Sentra Pangan Jatim</div>
                          <div className={s.textMuted}>Tayang di Bagian Pengadaan</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] ${s.badgeNeutral}`}>Aktif</span>
                      </div>

                      <button 
                        onClick={() => showToast('Banner promosi baru berhasil diterbitkan!')}
                        className={`w-full py-2.5 rounded-lg ${s.btnPrimary} text-xs font-semibold`}
                      >
                        + Tambah Banner Baru
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${s.card} p-6 space-y-4 text-xs`}>
                    <div className={`pb-3 border-b ${s.border}`}>
                      <h4 className={`font-bold text-sm ${s.textHeading}`}>Verifikasi Toko &amp; Armada Baru</h4>
                      <p className={`text-xs ${s.textMuted}`}>Persetujuan pendaftaran mitra warung dan driver express.</p>
                    </div>

                    <div className="space-y-3">
                      <div className={`p-3 rounded-lg border ${s.border} ${s.cardSub} flex items-center justify-between`}>
                        <div>
                          <div className={`font-semibold ${s.textHeading}`}>Warung Pecel Bu Kris Gayungan</div>
                          <div className={s.textMuted}>KTP &amp; Rekening BritAma Cocok</div>
                        </div>
                        <button 
                          onClick={() => showToast('Warung Pecel Bu Kris berhasil diverifikasi!')}
                          className={`${s.btnPrimary} px-3 py-1 rounded-md text-xs`}
                        >
                          Setujui
                        </button>
                      </div>

                      <div className={`p-3 rounded-lg border ${s.border} ${s.cardSub} flex items-center justify-between`}>
                        <div>
                          <div className={`font-semibold ${s.textHeading}`}>Pak Joko (Honda Beat L 3912 AB)</div>
                          <div className={s.textMuted}>SIM C &amp; STNK Terverifikasi</div>
                        </div>
                        <button 
                          onClick={() => showToast('Driver Pak Joko berhasil disetujui!')}
                          className={`${s.btnPrimary} px-3 py-1 rounded-md text-xs`}
                        >
                          Setujui
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </main>

      {/* ====================================================================== */}
      {/* MODAL 1: DETAIL LENGKAP & SPESIFIKASI PRODUK (TANPA IKON SESUAI PERMINTAAN) */}
      {/* ====================================================================== */}
      {selectedProduct && (
        <div 
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`max-w-4xl w-full my-6 ${isDarkMode ? 'bg-[#0A1326] text-white border-slate-700' : 'bg-white text-slate-900 border-slate-200'} rounded-2xl shadow-2xl border overflow-hidden flex flex-col max-h-[92vh]`}
          >
            {/* Header Modal (Tanpa Ikon) */}
            <div className={`p-5 border-b ${s.border} flex items-center justify-between shrink-0`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Informasi Lengkap Produk
                </span>
                <h3 className={`text-base sm:text-lg font-bold ${s.textHeading} mt-0.5`}>
                  {selectedProduct.name}
                </h3>
              </div>
              <button 
                type="button"
                onClick={() => setSelectedProduct(null)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border ${
                  isDarkMode ? 'border-slate-700 hover:bg-white/10 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                } transition-colors`}
              >
                Tutup Halaman
              </button>
            </div>

            {/* Isi Konten Modal (Scrollable, 2 Kolom, Tanpa Ikon) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Kolom Kiri: Foto, Badges, Metrik Keuangan & Form Edit */}
                <div className="md:col-span-5 space-y-4">
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-full h-52 object-cover" 
                    />
                  </div>

                  {/* Badges Teks Tanpa Ikon */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded text-xs font-bold bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {selectedProduct.category}
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs font-bold bg-[#002D62] text-white">
                      ID: {selectedProduct.id}
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      Katalog Aktif
                    </span>
                  </div>

                  {/* Ringkasan Finansial & Performa Produk */}
                  <div className={`p-4 rounded-xl border ${s.border} ${s.cardSub} space-y-2.5 text-xs`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Analisis Nilai Produk:
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-200/70 dark:border-slate-800">
                      <span className={s.textMuted}>Harga Jual Pelanggan:</span>
                      <span className={`font-bold text-sm ${s.textHeading}`}>Rp {selectedProduct.price.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-200/70 dark:border-slate-800">
                      <span className={s.textMuted}>Estimasi Modal (HPP):</span>
                      <span className={`font-semibold ${s.textHeading}`}>Rp {selectedProduct.costPrice.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-200/70 dark:border-slate-800">
                      <span className={s.textMuted}>Margin Keuntungan Kotor:</span>
                      <span className={`font-bold ${s.textHeading}`}>
                        Rp {(selectedProduct.price - selectedProduct.costPrice).toLocaleString('id-ID')} ({Math.round(((selectedProduct.price - selectedProduct.costPrice) / selectedProduct.price) * 100)}%)
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-200/70 dark:border-slate-800">
                      <span className={s.textMuted}>Total Produk Terjual:</span>
                      <span className={`font-bold ${s.textHeading}`}>{selectedProduct.sold} Porsi</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className={s.textMuted}>Rating Kepuasan Pembeli:</span>
                      <span className={`font-bold ${s.textHeading}`}>{selectedProduct.rating} / 5.0 ({selectedProduct.reviewsCount} ulasan)</span>
                    </div>
                  </div>

                  {/* Form Pembaruan Stok & Harga */}
                  <div className={`p-4 rounded-xl border ${s.border} ${s.cardSub} space-y-3 text-xs`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Pengaturan Stok &amp; Harga:
                    </div>
                    <div>
                      <label className={`block font-semibold ${s.textHeading} mb-1`}>Stok Siap Jual:</label>
                      <input 
                        type="number"
                        defaultValue={selectedProduct.stock}
                        id={`edit-stock-${selectedProduct.id}`}
                        className={`w-full p-2 rounded-lg border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} text-xs focus:outline-none`}
                      />
                    </div>
                    <div>
                      <label className={`block font-semibold ${s.textHeading} mb-1`}>Harga Jual (Rp):</label>
                      <input 
                        type="number"
                        defaultValue={selectedProduct.price}
                        id={`edit-price-${selectedProduct.id}`}
                        className={`w-full p-2 rounded-lg border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} text-xs focus:outline-none`}
                      />
                    </div>
                    <button 
                      type="button"
                      onClick={() => {
                        const sVal = parseInt((document.getElementById(`edit-stock-${selectedProduct.id}`) as HTMLInputElement)?.value) || selectedProduct.stock;
                        const pVal = parseInt((document.getElementById(`edit-price-${selectedProduct.id}`) as HTMLInputElement)?.value) || selectedProduct.price;
                        handleUpdateProductStockAndPrice(selectedProduct.id, sVal, pVal);
                      }}
                      className={`w-full py-2 rounded-lg ${s.btnPrimary} text-xs font-semibold`}
                    >
                      Perbarui Stok &amp; Harga
                    </button>
                  </div>
                </div>

                {/* Kolom Kanan: Deskripsi Mendalam, Tabel Spesifikasi, Riwayat Transaksi */}
                <div className="md:col-span-7 space-y-5">
                  
                  {/* Penjelasan Lengkap Produk */}
                  <div className={`p-5 rounded-xl border ${s.border} ${s.cardSub} space-y-2`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Penjelasan &amp; Narasi Produk:
                    </div>
                    <p className={`text-xs ${s.textHeading} leading-relaxed`}>
                      {selectedProduct.description}
                    </p>
                    <p className={`text-[11px] ${s.textMuted} leading-relaxed pt-1`}>
                      Diproduksi higienis dengan resep tradisional khas Jawa Timur. Seluruh bahan baku pangan dipasok langsung dari sentra petani binaan Bank BRI melalui rantai pasok Pasar Induk Keputran Surabaya.
                    </p>
                  </div>

                  {/* Spesifikasi Teknis & Standar Pangan */}
                  <div className={`p-5 rounded-xl border ${s.border} ${s.cardSub} space-y-3 text-xs`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Spesifikasi &amp; Standar Pangan:
                    </div>
                    <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
                      {selectedProduct.specifications.map((spec, sIdx) => (
                        <div key={sIdx} className="py-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <span className={`${s.textMuted} font-medium shrink-0 sm:w-44`}>{spec.label}:</span>
                          <span className={`font-semibold ${s.textHeading} sm:text-right`}>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Riwayat Transaksi Penjualan Terakhir */}
                  <div className={`p-5 rounded-xl border ${s.border} ${s.cardSub} space-y-3 text-xs`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Riwayat Pesanan Terkini:
                    </div>
                    <div className="space-y-2">
                      {selectedProduct.salesHistory.map((sh, shIdx) => (
                        <div key={shIdx} className="p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                          <div>
                            <div className={`font-bold ${s.textHeading}`}>{sh.buyer}</div>
                            <div className={`text-[11px] ${s.textMuted}`}>{sh.time} • via {sh.via}</div>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold ${s.textHeading}`}>{sh.total}</div>
                            <div className={`text-[11px] ${s.textMuted}`}>{sh.qty}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Footer Modal (Tanpa Ikon) */}
            <div className={`p-4 px-6 border-t ${s.border} flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 ${isDarkMode ? 'bg-[#080E1C]' : 'bg-slate-50'}`}>
              <div className={`text-xs ${s.textMuted}`}>
                Status: Produk terdaftar resmi dalam ekosistem LinkUMKM Bank BRI.
              </div>
              <button 
                type="button"
                onClick={() => setSelectedProduct(null)}
                className={`px-5 py-2 rounded-lg ${s.btnPrimary} text-xs font-semibold`}
              >
                Tutup Halaman Detail
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================== */}
      {/* MODAL 2: POP-UP TAMBAH PRODUK BARU                                     */}
      {/* ====================================================================== */}
      {showAddProductModal && (
        <div 
          onClick={() => setShowAddProductModal(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`max-w-2xl w-full my-6 ${isDarkMode ? 'bg-[#0A1326] text-white border-slate-700' : 'bg-white text-slate-900 border-slate-200'} rounded-2xl shadow-2xl border overflow-hidden flex flex-col max-h-[92vh]`}
          >
            {/* Header Modal */}
            <div className={`p-5 border-b ${s.border} flex items-center justify-between shrink-0`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Etalase Warung
                </span>
                <h3 className={`text-base sm:text-lg font-bold ${s.textHeading} mt-0.5`}>
                  Tambah Produk Baru
                </h3>
              </div>
              <button 
                type="button"
                onClick={() => setShowAddProductModal(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                  isDarkMode ? 'border-slate-700 hover:bg-white/10 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                Batal
              </button>
            </div>

            {/* Form Tambah Produk */}
            <form onSubmit={handleCreateProduct} className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className={`block font-semibold ${s.textHeading} mb-1`}>Nama Produk Lengkap *</label>
                <input 
                  type="text"
                  required
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  placeholder="Contoh: Paket Soto Ayam Lamongan Kuah Koya Gurih"
                  className={`w-full p-2.5 rounded-xl border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} focus:outline-none`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block font-semibold ${s.textHeading} mb-1`}>Kategori Produk</label>
                  <select
                    value={newProdCategory}
                    onChange={(e) => setNewProdCategory(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} focus:outline-none`}
                  >
                    <option value="Kuliner Siap Saji">Kuliner Siap Saji</option>
                    <option value="Olahan & Bumbu">Olahan &amp; Bumbu</option>
                    <option value="Kemasan & Wadah">Kemasan &amp; Wadah</option>
                    <option value="Bahan Pokok & Sembako">Bahan Pokok &amp; Sembako</option>
                    <option value="Oleh-Oleh Khas">Oleh-Oleh Khas</option>
                  </select>
                </div>

                <div>
                  <label className={`block font-semibold ${s.textHeading} mb-1`}>Stok Awal Tersedia</label>
                  <input 
                    type="number"
                    min="1"
                    value={newProdStock}
                    onChange={(e) => setNewProdStock(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} focus:outline-none`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block font-semibold ${s.textHeading} mb-1`}>Harga Jual Pelanggan (Rp)</label>
                  <input 
                    type="number"
                    min="1000"
                    step="500"
                    value={newProdPrice}
                    onChange={(e) => setNewProdPrice(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} focus:outline-none`}
                  />
                </div>

                <div>
                  <label className={`block font-semibold ${s.textHeading} mb-1`}>Estimasi Modal Bahan / HPP (Rp)</label>
                  <input 
                    type="number"
                    min="500"
                    step="500"
                    value={newProdCostPrice}
                    onChange={(e) => setNewProdCostPrice(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} focus:outline-none`}
                  />
                </div>
              </div>

              <div>
                <label className={`block font-semibold ${s.textHeading} mb-1`}>Penjelasan &amp; Deskripsi Produk</label>
                <textarea 
                  rows={3}
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                  placeholder="Jelaskan cita rasa, keunggulan bahan, porsi, dan cara penyajian kuliner ini..."
                  className={`w-full p-2.5 rounded-xl border ${s.border} ${isDarkMode ? 'bg-[#080E1C] text-white' : 'bg-white text-slate-900'} focus:outline-none`}
                />
              </div>

              <div>
                <label className={`block font-semibold ${s.textHeading} mb-1.5`}>Pilih Foto Produk dari Galeri Santara</label>
                <div className="grid grid-cols-4 gap-2.5">
                  {[
                    { label: 'Rawon Suroboyo', path: '/images/rawon_daging_surabaya.jpg' },
                    { label: 'Spikoe Mentega', path: '/images/spikoe_lapis_surabaya.jpg' },
                    { label: 'Sambal Klotok', path: '/images/peken_kuliner_sambal.jpg' },
                    { label: 'Besek Bambu', path: '/images/peken_kemasan_besek.jpg' }
                  ].map((imgOpt, iIdx) => (
                    <div 
                      key={iIdx}
                      onClick={() => setNewProdImage(imgOpt.path)}
                      className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                        newProdImage === imgOpt.path 
                          ? 'border-[#002D62] ring-2 ring-[#002D62]/30 scale-[1.02]' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgOpt.path} alt={imgOpt.label} className="w-full h-16 object-cover" />
                      <div className="p-1 bg-slate-900 text-white text-[10px] text-center truncate font-medium">
                        {imgOpt.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-3 rounded-xl ${s.cardSub} text-[11px] ${s.textMuted} leading-relaxed`}>
                Produk yang ditambahkan akan langsung terhubung ke kasir QRIS Warung Barokah dan siap dipesan pembeli sekitar Manyar Surabaya.
              </div>

              {/* Tombol Simpan */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <button 
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border ${
                    isDarkMode ? 'border-slate-700 hover:bg-white/10 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className={`px-5 py-2 rounded-xl ${s.btnPrimary} text-xs font-semibold`}
                >
                  Simpan &amp; Publikasikan ke Etalase
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
