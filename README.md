# 🚀 SANTARA.ID — Next.js Enterprise Full-Stack Web App

> **Platform Intelligent Food Procurement & UMKM Ecosystem Surabaya**  
> *Kompetisi Rencana Bisnis Mahasiswa — BRIMO BUSINESS CHALLENGE 2026*  
> *Penyelenggara: Bank Rakyat Indonesia (BRI) & Danantara Indonesia*

---

## 🏗️ Tech Stack Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       FRONTEND (PWA)                        │
│   Next.js 14 (App Router) + Tailwind CSS + Lucide Icons     │
│   (Ringan, responsif di HP kentang, manifest.json PWA)      │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Server Actions & Route Handlers)
┌──────────────────────────────▼──────────────────────────────┐
│                      BACKEND & DATABASE                     │
│   • Serverless Backend: Next.js API Routes (Node.js)        │
│   • Database Relasional: PostgreSQL via SUPABASE            │
│   • Real-Time Engine: Supabase Realtime (Live Bar Kuota)   │
└──────────────┬───────────────┬───────────────┬──────────────┘
               │               │               │
      [ 1. BRIAPI ]     [ 2. GEMINI AI ] [ 3. WA OTP ]
       (QRIS & BRI)     (Santara AI)     (Notifikasi)
```

---

## 📂 Struktur Direktori Proyek

```
BRI BISMILLAH WINNER/
├── app/
│   ├── api/
│   │   ├── ai/analyze/route.ts      # Endpoint Analisis Santara AI (Gemini)
│   │   ├── bri/callback/route.ts    # Webhook Notifikasi Pembayaran Lunas BRImo
│   │   ├── bri/qris/route.ts        # Endpoint Pembuat QRIS Dinamis BRIAPI
│   │   └── whatsapp/otp/route.ts    # Gateway Notifikasi & OTP WhatsApp
│   ├── dashboard/
│   │   └── page.tsx                 # Web App Utama (UMKM, Warga, Supplier, AgenBRILink)
│   ├── globals.css                  # Styling Tailwind & Glassmorphism
│   ├── layout.tsx                   # Root Layout dengan Plus Jakarta Sans & PWA Meta
│   └── page.tsx                     # Landing Page Utama (Gaya Desain BudayaGo)
├── lib/
│   ├── briapi.ts                    # Layanan Integrasi Open Banking BRI (OAuth & QRIS)
│   ├── gemini.ts                    # Mesin Analisis Santara AI & LinkUMKM Trigger
│   ├── supabase.ts                  # Client Supabase & Realtime Listener
│   └── whatsapp.ts                  # Gateway Pesan WhatsApp Pedagang & Pembeli
├── public/
│   └── manifest.json                # PWA Manifest (Bisa Add to Home Screen)
├── supabase/
│   └── schema.sql                   # Skema Database PostgreSQL Lengkap + Seed Surabaya
├── .env.example                     # Template Variabel Lingkungan
├── next.config.mjs                  # Konfigurasi Next.js
├── package.json                     # Daftar Dependensi
├── postcss.config.js                # Konfigurasi PostCSS
├── tailwind.config.js               # Konfigurasi Warna & Font Plus Jakarta Sans
└── tsconfig.json                    # Konfigurasi TypeScript
```

---

## ⚡ Cara Menjalankan Aplikasi di Komputer

### 1. Install Dependensi
Buka terminal (PowerShell / Command Prompt) di folder ini, lalu jalankan:
```bash
npm install
```

### 2. Atur Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
copy .env.example .env.local
```
*(Isikan credential Supabase, Gemini AI, dan Sandbox BRIAPI jika sudah ada)*.

### 3. Jalankan Server Development
```bash
npm run dev
```

Akses aplikasi melalui browser:
* **Landing Page:** `http://localhost:3000`
* **Web App Dashboard:** `http://localhost:3000/dashboard`

---

## 🎯 Fitur yang Tersedia di Prototipe:

1. **Role Switcher Interaktif:** Beralih instan antara peran **UMKM Kuliner**, **Warga Pembeli**, **Supplier Pasar Keputran**, dan **Loket AgenBRILink**.
2. **Simulasi Santara Group MOQ:** Live progress bar akumulasi ayam broiler (400/500 kg) dengan tombol penambahan kuota.
3. **Santara AI Intelligence Report:** Menganalisis penurunan omzet mingguan, rasio HPP, dan pemicu tombol rekomendasi **LinkUMKM BRI** serta **Rumah BUMN Surabaya**.
4. **Sinkronisasi e-Peken Surabaya:** Tombol simulasi integrasi katalog produk UMKM ke portal Pemkot Surabaya.
5. **Simulasi QRIS Dinamis BRImo:** Pop-up QRIS interaktif dengan status *Settlement Hold* (dana ditahan aman di rekening penampung).
6. **Tiket Ambil Digital (RePass):** Kode pengambilan `#STR-204` untuk pengambilan barang tanpa antre di loket AgenBRILink.
