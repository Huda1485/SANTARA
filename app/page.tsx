'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck,
  Store,
  Users,
  CheckCircle2,
  QrCode,
  CreditCard,
  TrendingDown,
  Sparkles,
  Check,
  Truck,
  UtensilsCrossed,
  Wheat,
  Scale,
  Clock,
  Coins,
  Shield,
  Layers,
  MapPin,
  ExternalLink,
  ShoppingBag,
  Package,
  Scissors,
  Wrench,
  Boxes,
  Bike,
  Building2,
  Heart,
  Navigation,
  Star,
  TrendingUp
} from 'lucide-react';

export default function LandingPage() {
  const [activeActor, setActiveActor] = React.useState<number | null>(null);
  const [animationFrame, setAnimationFrame] = React.useState(1);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [scrollDir, setScrollDir] = React.useState<'down' | 'up'>('down');
  const [scrollYPos, setScrollYPos] = React.useState(0);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    // 1. Two-way Scroll Observer: triggers animations when scrolling DOWN and UP
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Remove on exit so it dynamically re-animates whenever scrolled back into view
            entry.target.classList.remove('is-visible');
          }
        });
      }, 
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-zoom, .reveal-left, .reveal-right'
    );
    elements.forEach((el) => observer.observe(el));

    // 2. Real-time Scroll Position & Progress Tracker for Buttery Smooth Feel
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScrollY / totalHeight) * 100);
      }
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setScrollDir('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDir('up');
      }
      setScrollYPos(currentScrollY);
      setShowScrollTop(currentScrollY > 400);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const actorsList = [
    {
      id: 1,
      num: '01',
      tag: 'Pemasok Hulu',
      title: 'Supplier & Grosir Pasar Induk',
      shortRole: 'Pemasok Sembako & Bahan Baku',
      desc: 'Pedagang besar Pasar Induk Keputran, distributor sembako resmi, dan produsen bahan kemasan mendapat kepastian borongan volume besar tanpa risiko piutang macet.',
      escrowPeran: 'Dana pembeli telah 100% terkunci aman di Rekening Escrow resmi Bank BRI sebelum barang dikirim. Begitu verifikasi serah-terima OTP selesai, uang langsung cair ke rekening penjual seketika.',
      benefit: 'Pasti Dibayar via Escrow • Bebas Bon Nunggak',
      badgeColor: 'from-[#002D62] to-[#004B8D]'
    },
    {
      id: 2,
      num: '02',
      tag: 'Dapur & Usaha',
      title: 'Pelaku Usaha UMKM Surabaya',
      shortRole: 'Warung, Toko Kelontong, Konveksi & Bengkel',
      desc: 'Ribuan warung makan, kios sembako, perajin konveksi, bengkel, dan toko ritel membeli pasokan langsung dari distributor hulu dengan harga pabrikan yang jauh lebih hemat.',
      escrowPeran: 'Fisik dan mutu barang diperiksa serta ditimbang di lokasi toko terlebih dahulu. Hanya setelah pemilik usaha setuju, dana di Bank BRI dicairkan ke distributor.',
      benefit: 'Hemat HPP s.d. 28% • Riwayat Belanja Jadi Modal KUR',
      badgeColor: 'from-[#003B7E] to-[#00529C]'
    },
    {
      id: 3,
      num: '03',
      tag: 'Armada Antar',
      title: 'Ojek Pengkolan & Kurir Lokal',
      shortRole: 'Mitra Logistik Terjadwal 31 Kecamatan',
      desc: 'Pengemudi ojek pangkalan dan kurir armada lokal Surabaya diberdayakan menjadi simpul distribusi resmi dengan muatan terjadwal per klaster kelurahan.',
      escrowPeran: 'Ongkos kirim pengantaran otomatis cair seketika pembeli memasukkan kode OTP serah-terima fisik, memastikan pengemudi mendapat penghasilan harian pasti.',
      benefit: 'Order Antar Harian Pasti • Scan OTP Langsung Cair',
      badgeColor: 'from-[#00529C] to-[#0284C7]'
    },
    {
      id: 4,
      num: '04',
      tag: 'Konsumen Akhir',
      title: 'Warga & Masyarakat Surabaya',
      shortRole: 'Penikmat Produk & Kuliner UMKM',
      desc: 'Masyarakat Surabaya menikmati kuliner, sembako, dan aneka komoditas UMKM dengan harga terjangkau, kualitas segar higienis, dan pasokan yang tidak pernah putus.',
      escrowPeran: 'Pemotongan rantai calo perantara membuat warung dan toko kelontong di sekitar lingkungan warga dapat menjual produk dengan harga stabil dan mutu terjaga.',
      benefit: 'Harga Bahan Pokok Terjangkau • Kualitas Mutu Segar',
      badgeColor: 'from-[#0284C7] to-[#38BDF8]'
    },
    {
      id: 5,
      num: '05',
      tag: 'Penjaminan BUMN',
      title: 'PT Bank Rakyat Indonesia (Persero) Tbk',
      shortRole: 'Infrastruktur Escrow & Penyalur KUR Mikro',
      desc: 'Bank BRI RO Surabaya dan Danantara Indonesia menjamin proteksi pembayaran 100%, settlement QRIS terintegrasi, serta fasilitas permodalan bagi UMKM.',
      escrowPeran: 'Menjaga keamanan dana pembeli dan penjual secara netral dan terpercaya melalui BRIAPI resmi, serta merekam riwayat transaksi menjadi skor kelayakan pinjaman KUR.',
      benefit: '100% Proteksi Dana BRIAPI • Plafon KUR s.d. Rp 50 Juta',
      badgeColor: 'from-[#002D62] to-[#001D40]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/40 via-white to-blue-50/30 text-slate-900 font-sans selection:bg-[#002D62] selection:text-white antialiased overflow-x-hidden relative">
      
      {/* Top Dynamic Scroll Progress Indicator (Buttery Smooth Feedback) */}
      <div 
        className="fixed top-0 left-0 h-1 sm:h-1.5 z-[100] bg-gradient-to-r from-[#002D62] via-[#0284C7] to-[#10B981] transition-all duration-150 shadow-sm pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating Back-to-Top Button on Scroll Down */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke bagian atas"
        className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#002D62] text-white border-2 border-sky-400/40 shadow-2xl transition-all duration-300 hover:bg-[#001D40] hover:scale-110 flex items-center justify-center group ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <ArrowRight className="w-4 h-4 -rotate-90 text-sky-300 group-hover:text-white transition-colors" />
      </button>

      {/* Background Texture 3D Wave Transparan Halus Gradasi Putih-Biru Muda (Sesuai Permintaan User) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.16] bg-[url('/images/bg_paper_wave_texture_hd.png')] bg-cover bg-fixed bg-center mix-blend-multiply" 
        aria-hidden="true"
      />
      
      {/* ====================================================================== */}
      {/* 1. NAVBAR (CLEAN CORPORATE WHITE DENGAN LOGO RESMI VECTOR SANTARA) */}
      {/* ====================================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex h-16 sm:h-[72px] items-center justify-between gap-4">
          
          {/* Brand Logo Resmi Santara */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shadow-xs group-hover:border-blue-400 transition-colors">
              <img 
                src="/images/santara-icon.svg" 
                alt="Logo Santara" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="font-black text-2xl tracking-tight text-[#002D62] leading-none">santara</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-slate-600">
            <a href="#tentang" className="hover:text-[#002D62] transition-colors">Tentang</a>
            <a href="#sektor-produk" className="hover:text-[#002D62] transition-colors">Katalog Sektor</a>
            <a href="#ekosistem-peran" className="hover:text-[#002D62] transition-colors">Cakupan Pengguna</a>
            <a href="#mekanisme-kerja" className="hover:text-[#002D62] transition-colors">Mekanisme Kerja</a>
            <a href="#sinergi-bri" className="hover:text-[#002D62] transition-colors">Sinergi Bank BRI</a>
          </nav>

          {/* Action CTA Button */}
          <div className="flex items-center gap-3">
            <Link 
              href="/dashboard" 
              className="text-xs sm:text-sm font-bold text-white bg-[#002D62] hover:bg-[#001D40] px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-xs transform hover:-translate-y-0.5"
            >
              <span>Masuk Portal Santara</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </header>


      {/* ====================================================================== */}
      {/* 2. HERO SECTION: BOLD DISPLAY TYPOGRAPHY + STICKER BADGE & CLEAN PHONE */}
      {/* Cakupan: SEMUA PRODUK & SELURUH SEKTOR UMKM (Bukan Hanya Kuliner) */}
      {/* ====================================================================== */}
      <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50">
        
        {/* Subtle Background Glow Accent with Ambient Pulse */}
        <div className="absolute top-1/4 left-8 w-[420px] h-[420px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-20 right-8 w-[480px] h-[480px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (7 cols): Bold Bank BRI Blue Display Typography (Samping Kiri) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Bold Typography inspired by user reference: Seluruh Sektor UMKM di baris 2 */}
              <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-black text-[#002D62] tracking-tighter leading-[1.08]">
                Rantai Pasok Terpadu <br />
                <span className="relative inline-block mt-2 sm:mt-3">
                  <span className="px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#002D62] via-[#004B8D] to-[#00529C] text-white italic font-black tracking-tight shadow-xl border-[3px] border-white inline-flex items-center gap-2 transform -rotate-1.5 hover:rotate-0 transition-transform">
                    Seluruh Sektor UMKM
                  </span>
                </span>
              </h1>

              {/* Subtitle Terbuka untuk Semua Produk UMKM */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl pt-1">
                SANTARA mengintegrasikan distribusi pasokan bahan baku dan komoditas grosir dari produsen serta distributor utama kepada jaringan pelaku usaha UMKM di Surabaya dengan penjaminan transaksi Rekening Penampung Escrow resmi Bank BRI.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link 
                  href="/dashboard" 
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#002D62] hover:bg-[#001D40] rounded-full shadow-md hover:shadow-xl transition-all gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Masuk Portal Santara</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <a 
                  href="#sektor-produk" 
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-full transition-all shadow-xs"
                >
                  Lihat Seluruh Sektor Produk
                </a>
              </div>

              {/* 3 Metrik Kunci Terintegrasi */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-6 max-w-lg">
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-[#002D62] tracking-tight">28%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Efisiensi HPP Rata-rata</div>
                </div>
                <div className="border-l border-slate-200 pl-2.5 sm:pl-6">
                  <div className="text-xl sm:text-3xl font-extrabold text-[#002D62] tracking-tight">31</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Kecamatan Surabaya</div>
                </div>
                <div className="border-l border-slate-200 pl-2.5 sm:pl-6">
                  <div className="text-xl sm:text-3xl font-extrabold text-[#002D62] tracking-tight">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1">Escrow Bank BRI</div>
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Dynamic Island Phone Mockup with Brand Splash on Soft Gradient Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-6">
              
              {/* Soft Gradient Card Backdrop (Gradasi Biru, Abu, dan Putih) with 3D Float Animation */}
              <div className="w-full max-w-[290px] min-[390px]:max-w-[340px] sm:max-w-[370px] h-auto min-h-[500px] sm:h-[610px] rounded-[2.5rem] sm:rounded-[3.2rem] bg-gradient-to-b from-[#DCEBFF] via-[#EDF2F7] to-white p-4 min-[390px]:p-6 sm:p-7 shadow-2xl border border-slate-200/80 flex items-center justify-center relative overflow-hidden animate-float mx-auto">
                
                {/* Subtle Ambient Lights inside the Backdrop */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-200/50 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/40 rounded-full blur-2xl pointer-events-none" />

                {/* Modern Smartphone Frame with Dynamic Island */}
                <div className="w-full max-w-[250px] min-[390px]:max-w-[275px] sm:max-w-[295px] h-[460px] min-[390px]:h-[500px] sm:h-[540px] rounded-[2.2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#002D62] via-[#003B7E] to-[#001D40] border-[6px] sm:border-[7px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col justify-between p-4 sm:p-5 text-white z-10 mx-auto">
                  
                  {/* Phone Notch / Dynamic Island Status Bar */}
                  <div className="w-full pt-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-white/90 px-3">
                      <span>09:41</span>
                      <div className="w-24 h-6 bg-slate-950 rounded-full flex items-center justify-between px-2.5 shadow-inner">
                        <span className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-950 border border-sky-500/50" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-white/90">
                        <span>5G</span>
                        <div className="w-4 h-2.5 border border-white/80 rounded-xs p-0.5 flex items-center">
                          <div className="w-full h-full bg-white rounded-2xs" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blank Deep Blue Screen with Center Branding Emblem */}
                  <div className="my-auto text-center relative z-10 py-6">
                    {/* Glowing Aura Behind Logo */}
                    <div className="w-32 h-32 bg-sky-400/25 rounded-full blur-2xl mx-auto absolute inset-0 pointer-events-none" />
                    
                    {/* Official Santara Logo Emblem */}
                    <div className="w-24 h-24 rounded-3xl bg-white p-4 shadow-2xl mx-auto flex items-center justify-center transform hover:scale-105 transition-transform border border-white/20 relative">
                      <img src="/images/santara-icon.svg" alt="SANTARA" className="w-full h-full object-contain" />
                    </div>

                    {/* Brand Typography */}
                    <h3 className="text-2xl font-black text-white tracking-widest mt-5">
                      SANTARA
                    </h3>
                    <p className="text-[10px] font-extrabold text-sky-200 uppercase tracking-widest mt-1">
                      Rantai Pasok Terpadu UMKM
                    </p>
                  </div>

                  {/* Bottom Footer & Home Indicator */}
                  <div className="w-full text-center space-y-3 pb-1">
                    <div className="text-[9px] text-blue-200/80 font-medium">
                      Didukung Resmi Bank BRI &amp; Danantara
                    </div>
                    <div className="w-28 h-1 bg-white/40 rounded-full mx-auto" />
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ====================================================================== */}
      {/* 3. SEKTOR PRODUK UMKM (CLEAN PHOTO CARDS SESUAI REFERENSI USER) */}
      {/* Desain Clean ala media_1795140419352_95e6b5da.png: Foto atas, judul & lokasi, tombol biru */}
      {/* ====================================================================== */}
      <section id="sektor-produk" className="py-14 sm:py-20 bg-[#F1F5F9] border-b border-slate-300/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00529C] block mb-1">
                Katalog Sektor Terbuka
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                Semua Produk dan Bahan Baku <br className="hidden sm:inline" />
                UMKM Bisa Masuk
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md font-normal leading-relaxed">
              Santara tidak membatasi jenis usaha. Setiap UMKM binaan perbankan dapat memesan kebutuhan grosir maupun memasok produknya ke jaringan ekosistem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            
            {/* Card 1: Pangan Segar Pasar Keputran */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 mb-5 relative">
                  <img 
                    src="/images/peken_pangan_keputran.jpg" 
                    alt="Pangan Segar Pasar Keputran Surabaya" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Pangan Segar Pasar Keputran
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mt-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00529C] shrink-0" />
                    <span>Pasar Induk Keputran Surabaya</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Cabai rawit merah segar, bawang merah, bawang putih, aneka sayuran hijau segar, dan daging segar langsung dari pedagang besar Pasar Keputran.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#00529C]">Hemat s.d. 28% HPP Usaha</span>
                <div className="w-10 h-10 rounded-full bg-[#002D62] group-hover:bg-[#00529C] text-white flex items-center justify-center transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2: Sembako & Toko Kelontong Bapokting */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 mb-5 relative">
                  <img 
                    src="/images/peken_bapokting_sembako.jpg" 
                    alt="Sembako Toko Kelontong Bapokting Surabaya" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Sembako &amp; Toko Kelontong
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mt-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00529C] shrink-0" />
                    <span>Toko Kelontong 31 Kecamatan Surabaya</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Beras kemasan premium super, minyak goreng kemasan, gula pasir, tepung terigu, telur ayam, dan seluruh komoditas bapokting grosir toko kelontong.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#00529C]">Pasokan Grosir Terjamin</span>
                <div className="w-10 h-10 rounded-full bg-[#002D62] group-hover:bg-[#00529C] text-white flex items-center justify-center transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3: Kemasan & Packaging Besek UMKM */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 mb-5 relative">
                  <img 
                    src="/images/peken_kemasan_besek.jpg" 
                    alt="Kemasan Besek & Pouch UMKM Surabaya" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Kemasan Besek &amp; Pouch UMKM
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mt-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00529C] shrink-0" />
                    <span>Sentra Kemasan UMKM Surabaya</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Besek bambu tradisional ramah lingkungan, standing pouch food grade sablon merek UMKM, botol kemasan, stiker label, dan tas spunbond Surabaya Hebat.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#00529C]">Harga Pabrikan Langsung</span>
                <div className="w-10 h-10 rounded-full bg-[#002D62] group-hover:bg-[#00529C] text-white flex items-center justify-center transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 4: Batik & Konveksi Khas Suroboyo */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 mb-5 relative">
                  <img 
                    src="/images/peken_batik_semanggi.jpg" 
                    alt="Batik Khas Suroboyo Motif Semanggi" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Batik &amp; Konveksi Suroboyo
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mt-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00529C] shrink-0" />
                    <span>Sentra Batik Semanggi &amp; MERR Surabaya</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Kain batik khas Surabaya motif Daun Semanggi &amp; Mangrove Wonorejo, bahan kain katun rayon, benang bordir, ritsleting, dan bahan baku busana lokal.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#00529C]">Kualitas Standar Ekspor</span>
                <div className="w-10 h-10 rounded-full bg-[#002D62] group-hover:bg-[#00529C] text-white flex items-center justify-center transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 5: Kriya & Kerajinan Tangan SKG */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 mb-5 relative">
                  <img 
                    src="/images/peken_kriya_skg.jpg" 
                    alt="Kriya & Kerajinan Tangan SKG Surabaya" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Kriya &amp; Kerajinan Tangan SKG
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mt-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00529C] shrink-0" />
                    <span>Surabaya Kriya Gallery Siola &amp; Tunjungan</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Anyaman eceng gondok Semanggi, miniatur patung ikon Sura &amp; Baya, kerajinan kayu, aksesoris cinderamata, dan produk kriya binaan Pemkot Surabaya.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#00529C]">Karya Perajin Asli Surabaya</span>
                <div className="w-10 h-10 rounded-full bg-[#002D62] group-hover:bg-[#00529C] text-white flex items-center justify-center transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 6: Kuliner Khas Sambal & Olahan Sby */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 mb-5 relative">
                  <img 
                    src="/images/peken_kuliner_sambal.jpg" 
                    alt="Kuliner Khas Sambal & Olahan Pangan Surabaya" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Kuliner Khas Sambal &amp; Olahan Sby
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mt-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00529C] shrink-0" />
                    <span>Sentra Wisata Kuliner (SWK) Surabaya</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Sambal bawang kemasan toples, sambal klotok cumi Surabaya, Spikoe lapis kuno, olahan kerupuk ikan Kenjeran, dan bumbu dapur siap olah harian.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#00529C]">Segar &amp; Higienis Harian</span>
                <div className="w-10 h-10 rounded-full bg-[#002D62] group-hover:bg-[#00529C] text-white flex items-center justify-center transition-all shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      


      {/* ====================================================================== */}
      {/* 4. TENTANG SANTARA: JALUR LENGKAP 5 AKTOR RANTAI PASOK */}
      {/* Supplier -> UMKM -> Ojek Pengkolan -> Pembeli Warga Surabaya -> Bank BRI */}
      {/* Tampilan Clean, Unboxed, Elegan, Lebar, Latar Putih Bersih, Icon 3D Asli */}
      {/* ====================================================================== */}
      <section id="tentang" className="py-16 sm:py-24 bg-[#F1F5F9] border-b border-slate-300/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl sm:max-w-5xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 tracking-tight leading-snug">
              Membangun Kedaulatan Pasokan <br className="hidden sm:inline" />
              Seluruh Sektor UMKM
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal max-w-4xl sm:max-w-5xl mx-auto text-center">
              <span className="block">Satu alur terintegrasi menghubungkan supplier pangan dan distributor hulu, ribuan warung serta usaha UMKM,</span>
              <span className="block mt-1">armada ojek pengantar, masyarakat Surabaya, hingga penjaminan dana resmi Bank BRI.</span>
            </p>
          </div>

          {/* 3D Isometric Winding Roadmap Diorama Interaktif & Beranimasi */}
          <div className="w-full max-w-5xl mx-auto my-8 sm:my-12">
            
            {/* Interactive Diorama Canvas dengan Animasi Multi-Frame Ornamen Bergerak & 5 Hotspot Pins */}
            <div className="relative w-full max-w-4xl mx-auto group">
              
              {/* 3D Isometric Master Roadmap Image (Karakter Jelas, Bersih, & Tanpa Lampu Berkedip) */}
              <div className="relative w-full overflow-hidden rounded-3xl">
                <img 
                  src="/images/santara_supply_chain_roadmap.png" 
                  alt="Roadmap Alur Rantai Pasok Terpadu Santara" 
                  className="w-full h-auto max-h-[500px] object-contain mx-auto transition-all duration-300" 
                />
              </div>

              {/* Hotspot Pin 1: Supplier & Truk Hulu */}
              <button
                onClick={() => setActiveActor(activeActor === 1 ? null : 1)}
                className={`absolute left-[15%] top-[65%] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${activeActor === 1 ? 'scale-125 z-30' : 'hover:scale-115 z-20'}`}
                title="Klik untuk lihat detail Supplier & Pemasok Hulu"
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-7 w-7 bg-[#002D62] border-2 border-white text-white font-black text-[11px] items-center justify-center shadow-lg">
                    1
                  </span>
                </span>
              </button>

              {/* Hotspot Pin 2: Pelaku Usaha UMKM Toko/Kios */}
              <button
                onClick={() => setActiveActor(activeActor === 2 ? null : 2)}
                className={`absolute left-[36%] top-[54%] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${activeActor === 2 ? 'scale-125 z-30' : 'hover:scale-115 z-20'}`}
                title="Klik untuk lihat detail Pelaku Usaha UMKM"
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-7 w-7 bg-[#003B7E] border-2 border-white text-white font-black text-[11px] items-center justify-center shadow-lg">
                    2
                  </span>
                </span>
              </button>

              {/* Hotspot Pin 3: Ojek Pengkolan & Kurir Motor */}
              <button
                onClick={() => setActiveActor(activeActor === 3 ? null : 3)}
                className={`absolute left-[54%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${activeActor === 3 ? 'scale-125 z-30' : 'hover:scale-115 z-20'}`}
                title="Klik untuk lihat detail Ojek Pengkolan & Kurir"
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-7 w-7 bg-[#00529C] border-2 border-white text-white font-black text-[11px] items-center justify-center shadow-lg">
                    3
                  </span>
                </span>
              </button>

              {/* Hotspot Pin 4: Warga Surabaya (Konsumen Akhir) */}
              <button
                onClick={() => setActiveActor(activeActor === 4 ? null : 4)}
                className={`absolute left-[64%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${activeActor === 4 ? 'scale-125 z-30' : 'hover:scale-115 z-20'}`}
                title="Klik untuk lihat detail Warga Surabaya"
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-7 w-7 bg-[#0284C7] border-2 border-white text-white font-black text-[11px] items-center justify-center shadow-lg">
                    4
                  </span>
                </span>
              </button>

              {/* Hotspot Pin 5: PT Bank BRI (Persero) Tbk */}
              <button
                onClick={() => setActiveActor(activeActor === 5 ? null : 5)}
                className={`absolute left-[84%] top-[28%] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${activeActor === 5 ? 'scale-125 z-30' : 'hover:scale-115 z-20'}`}
                title="Klik untuk lihat detail Penjaminan Bank BRI"
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-7 w-7 bg-[#002D62] border-2 border-white text-white font-black text-[11px] items-center justify-center shadow-lg">
                    5
                  </span>
                </span>
              </button>

            </div>

            {/* Kotakan Penjelasan Interaktif Muncul di Bawah Gambar saat Ditekan (Sesuai Permintaan User) */}
            {activeActor && (
              <div className="w-full max-w-4xl mx-auto mt-6 bg-gradient-to-br from-[#002D62] via-[#003B7E] to-[#001D40] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-400/40 transition-all duration-500 animate-in fade-in zoom-in-95">
                {(() => {
                  const current = actorsList.find((a) => a.id === activeActor) || actorsList[0];
                  return (
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/15">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-white text-[#002D62] font-black text-sm flex items-center justify-center shadow-md">
                            {current.num}
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block">
                              {current.tag} • Alur Langkah ke-{current.id}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                              {current.title}
                            </h3>
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveActor(null)}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs font-bold"
                          title="Tutup Kotak Keterangan"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-5 text-xs sm:text-sm">
                        <div className="space-y-2">
                          <span className="text-[11px] font-bold text-sky-200 uppercase tracking-wider block">
                            Peran dalam Ekosistem:
                          </span>
                          <p className="text-blue-100/90 leading-relaxed font-normal">
                            {current.desc}
                          </p>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-4 border border-white/15 space-y-2">
                          <span className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-sky-300" />
                            <span>Jaminan Proteksi Bank BRI:</span>
                          </span>
                          <p className="text-sky-100 leading-relaxed font-normal">
                            {current.escrowPeran}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <span className="font-semibold text-sky-200">
                          {current.benefit}
                        </span>
                        <a
                          href="#mekanisme-kerja"
                          className="px-5 py-2 rounded-full bg-white text-[#002D62] hover:bg-blue-50 font-bold transition-all shadow-sm flex items-center gap-1.5"
                        >
                          <span>Pelajari Mekanisme</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

          </div>

          {/* Ringkasan Satu Kotak Terpadu 5 Pilar Rantai Pasok (Sesuai Permintaan User: Jadikan Satu Kotak Elegan Berbayang) */}
          <div className="w-full max-w-5xl mx-auto mt-6 bg-white rounded-3xl p-7 sm:p-10 border-2 border-slate-300 shadow-lg shadow-slate-300/70 relative overflow-hidden">
            
            {/* Header Kotak */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00529C] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100/80 inline-block mb-3">
                Ringkasan Ekosistem Terpadu
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Komitmen Perlindungan untuk 5 Pihak Ekosistem
              </h3>
              <p className="text-sm text-slate-600 mt-2 font-normal">
                Satu siklus terintegrasi menghubungkan hulu ke hilir dengan penjaminan resmi Rekening Penampung Bank BRI.
              </p>
            </div>

            {/* 5 Kolom Komponen Terpadu (01 - 05) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* 01 Supplier */}
              <div 
                onClick={() => setActiveActor(activeActor === 1 ? null : 1)}
                className="pt-4 md:pt-0 md:px-3 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#002D62] via-[#004B8D] to-[#00529C] text-white flex items-center justify-center font-black text-sm mb-3 shadow-xs group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight mb-1.5 group-hover:text-[#00529C] transition-colors">
                    Supplier &amp; Grosir
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Kepastian pesanan volume besar dengan jaminan uang tunai langsung cair dari rekening penampung tanpa risiko piutang macet.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#002D62]">
                  Pasti Cair via Escrow
                </div>
              </div>

              {/* 02 UMKM */}
              <div 
                onClick={() => setActiveActor(activeActor === 2 ? null : 2)}
                className="pt-4 md:pt-0 md:px-3 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#002D62] via-[#004B8D] to-[#00529C] text-white flex items-center justify-center font-black text-sm mb-3 shadow-xs group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight mb-1.5 group-hover:text-[#00529C] transition-colors">
                    Pelaku Usaha UMKM
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Beli pasokan langsung harga grosir pabrikan, hemat HPP s.d. 28% tanpa calo, dan fisik barang dicek sebelum uang dicairkan.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#003B7E]">
                  Hemat HPP s.d. 28%
                </div>
              </div>

              {/* 03 Ojek Pengkolan */}
              <div 
                onClick={() => setActiveActor(activeActor === 3 ? null : 3)}
                className="pt-4 md:pt-0 md:px-3 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#002D62] via-[#004B8D] to-[#00529C] text-white flex items-center justify-center font-black text-sm mb-3 shadow-xs group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight mb-1.5 group-hover:text-[#00529C] transition-colors">
                    Ojek Pengkolan &amp; Kurir
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Pemberdayaan pengemudi lokal jadi armada logistik resmi dengan order harian pasti dan pencairan ongkir seketika via kode OTP.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#00529C]">
                  Order Harian &amp; OTP
                </div>
              </div>

              {/* 04 Warga Surabaya */}
              <div 
                onClick={() => setActiveActor(activeActor === 4 ? null : 4)}
                className="pt-4 md:pt-0 md:px-3 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#002D62] via-[#004B8D] to-[#00529C] text-white flex items-center justify-center font-black text-sm mb-3 shadow-xs group-hover:scale-105 transition-transform">
                    04
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight mb-1.5 group-hover:text-[#00529C] transition-colors">
                    Warga Surabaya
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Menikmati kuliner, sembako, dan aneka komoditas UMKM dengan harga terjangkau, kualitas segar, dan stok harian selalu terjaga.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0284C7]">
                  Pasokan Segar &amp; Murah
                </div>
              </div>

              {/* 05 Bank BRI */}
              <div 
                onClick={() => setActiveActor(activeActor === 5 ? null : 5)}
                className="pt-4 md:pt-0 md:px-3 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#002D62] via-[#004B8D] to-[#00529C] text-white flex items-center justify-center font-black text-sm mb-3 shadow-xs group-hover:scale-105 transition-transform">
                    05
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight mb-1.5 group-hover:text-[#00529C] transition-colors">
                    Bank BRI &amp; Danantara
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Mengunci 100% uang transaksi di Rekening Penampung (Escrow) hingga tuntas, serta menyalurkan fasilitas pinjaman KUR Mikro.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#002D62]">
                  100% Proteksi Dana BRI
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ====================================================================== */}
      {/* 4.5. BRANDING INOVASI SANTARA (INSPIRED BY NORDEA BEHANCE SHOWCASE)   */}
      {/* ====================================================================== */}
      <section id="inovasi-branding" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Card 1: Top Hero Showcase Card with Giant SANTARA Watermark & Floating Glass Chips */}
          <div className="relative rounded-[36px] bg-gradient-to-br from-[#002D62] via-[#003B7E] to-[#001D40] text-white p-6 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-sky-400/20">
            
            {/* Giant Background Watermark "SANTARA" */}
            <div className="absolute top-2 sm:top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[85px] sm:text-[140px] md:text-[200px] font-black text-white/[0.07] tracking-widest leading-none">
              SANTARA
            </div>

            {/* Glowing Radial Ambient Backlights */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Center Showcase: TRIO SMARTPHONE SHOWCASE (3 HP: Kiri Nyamping, Tengah Tegak B2B Escrow BRI, Kanan Nyamping Ojek Gojek) */}
            <div className="relative z-10 max-w-7xl mx-auto my-6 sm:my-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-3 xl:gap-6 min-h-[580px] sm:min-h-[660px]">
              
              {/* Concentric Subtle Radar Rings Behind Phones */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-sky-400/15 pointer-events-none" />
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] rounded-full border border-sky-400/10 pointer-events-none" />
              


              {/* =============================================================== */}
              {/* 1. HP 1 (KIRI - NYAMPING KE KIRI):                              */}
              {/* TAMPILAN: APLIKASI PENJUAL & MARKETPLACE UMKM (WARUNG BAROKAH)  */}
              {/* =============================================================== */}
              <div className="relative z-20 w-[275px] sm:w-[295px] lg:w-[290px] xl:w-[310px] aspect-[9/19] rounded-[44px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl border-4 border-slate-700/90 ring-1 ring-white/20 transform md:-rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 group">
                
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2 h-2 rounded-full bg-[#00529C]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>

                {/* iPhone Screen Content: UMKM Merchant App */}
                <div className="w-full h-full rounded-[36px] bg-slate-950 overflow-hidden flex flex-col justify-between text-white relative">
                  
                  {/* Top Bar inside Screen */}
                  <div className="pt-7 px-3.5 pb-3 bg-gradient-to-b from-[#002D62] via-[#003B7E] to-[#001D40]">
                    <div className="flex items-center justify-between text-[11px] text-sky-200 mt-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-black text-[9px] text-white shrink-0">
                          WB
                        </div>
                        <div className="min-w-0">
                          <div className="text-[8px] text-sky-300 font-bold uppercase tracking-wider leading-none mb-0.5">Penjual UMKM</div>
                          <div className="font-bold text-white text-xs leading-none truncate">Warung Barokah</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[8px] font-bold border border-emerald-400/30 shrink-0">
                        Toko Buka
                      </span>
                    </div>

                    <div className="mt-2.5 bg-white/10 rounded-xl p-2 border border-white/15">
                      <div className="flex items-center justify-between text-[8px] text-sky-200">
                        <span>Saldo Escrow BRI (Siap Tarik)</span>
                        <ShieldCheck className="w-3 h-3 text-sky-300" />
                      </div>
                      <div className="text-base font-black text-white mt-0.5">
                        Rp 18.450.000
                      </div>
                    </div>
                  </div>

                  {/* App Screen Middle: Katalog Produk Jualan Warung */}
                  <div className="p-3 space-y-2 flex-1 bg-slate-950 text-[11px] overflow-hidden">
                    
                    {/* Quick Stats Chips */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-slate-900 rounded-xl p-2 border border-slate-800">
                        <span className="text-[8px] text-slate-400 block">Pesanan Masuk</span>
                        <span className="text-[11px] font-black text-white">12 Order Siap</span>
                      </div>
                      <div className="bg-slate-900 rounded-xl p-2 border border-slate-800">
                        <span className="text-[8px] text-slate-400 block">Hemat Kulakan HPP</span>
                        <span className="text-[11px] font-black text-emerald-400">28% Terpangkas</span>
                      </div>
                    </div>

                    {/* Section: Etalase Produk UMKM */}
                    <div>
                      <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1 px-0.5">
                        <span className="font-bold text-slate-200">Katalog Produk Aktif</span>
                        <span className="text-sky-300 text-[8px]">Marketplace</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-lg bg-[#00529C] text-white flex items-center justify-center font-bold text-[8px]">
                              RW
                            </div>
                            <div>
                              <div className="font-bold text-white text-[10px] leading-tight">Rawon Daging Suroboyo</div>
                              <div className="text-[8px] text-slate-400">Stok: 65 porsi • Rp 28.000</div>
                            </div>
                          </div>
                          <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/60 px-1 py-0.5 rounded">
                            Laris
                          </span>
                        </div>

                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-lg bg-slate-800 text-sky-300 flex items-center justify-center font-bold text-[8px]">
                              SK
                            </div>
                            <div>
                              <div className="font-bold text-white text-[10px] leading-tight">Sambal Klotok Toples 200g</div>
                              <div className="text-[8px] text-slate-400">Stok: 140 toples • Rp 25.000</div>
                            </div>
                          </div>
                          <span className="text-[8px] font-bold text-sky-300 bg-sky-950/60 px-1 py-0.5 rounded">
                            Ready
                          </span>
                        </div>

                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-lg bg-[#003B7E] text-white flex items-center justify-center font-bold text-[8px]">
                              BB
                            </div>
                            <div>
                              <div className="font-bold text-white text-[10px] leading-tight">Besek Anyaman Bambu</div>
                              <div className="text-[8px] text-slate-400">Stok: 420 pcs • Rp 3.500</div>
                            </div>
                          </div>
                          <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/60 px-1 py-0.5 rounded">
                            Kemasan
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Banner KUR Mikro BRI */}
                    <div className="bg-gradient-to-r from-[#003B7E] to-[#001D40] border border-sky-400/20 rounded-xl p-2 flex items-center justify-between">
                      <div>
                        <div className="text-[8px] text-sky-200">Plafon KUR Mikro BRI</div>
                        <div className="font-black text-white text-[11px]">Rp 50.000.000 (3% p.a.)</div>
                      </div>
                      <span className="text-[8px] font-bold bg-white text-[#002D62] px-1.5 py-0.5 rounded shadow-xs">
                        Ajukan
                      </span>
                    </div>

                  </div>

                  {/* Bottom Navigation */}
                  <div className="p-2 bg-slate-900 border-t border-slate-800 flex items-center justify-around text-slate-400 text-[8px]">
                    <span className="text-sky-300 font-bold">Toko</span>
                    <span>Pesanan</span>
                    <div className="w-6 h-6 rounded-full bg-[#00529C] text-white flex items-center justify-center -mt-2 shadow-md">
                      <Store className="w-3 h-3" />
                    </div>
                    <span>Kulakan</span>
                    <span>Profil</span>
                  </div>

                </div>
              </div>


              {/* =============================================================== */}
              {/* 2. HP 2 (TENGAH - TEGAK & ELEVASI UTAMA):                        */}
              {/* TAMPILAN: SENTRA GROSIR B2B & PUSAT ESCROW BANK BRI              */}
              {/* =============================================================== */}
              <div className="relative z-30 w-[285px] sm:w-[310px] lg:w-[305px] xl:w-[325px] aspect-[9/19] rounded-[44px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl border-4 border-sky-500/80 ring-2 ring-sky-400/30 transform hover:scale-105 transition-all duration-500 group">
                
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2 h-2 rounded-full bg-[#00529C]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>

                {/* iPhone Screen Content: Center B2B Wholesale & Escrow Vault */}
                <div className="w-full h-full rounded-[36px] bg-slate-950 overflow-hidden flex flex-col justify-between text-white relative">
                  
                  {/* Top Bar inside Screen: Bank BRI Escrow Custody */}
                  <div className="pt-7 px-3.5 pb-3 bg-gradient-to-b from-[#001D40] via-[#002D62] to-[#003B7E]">
                    <div className="flex items-center justify-between text-[11px] text-sky-200 mt-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-6 h-6 rounded-full bg-white text-[#002D62] flex items-center justify-center font-black text-[9px] shrink-0 shadow-xs">
                          BRI
                        </div>
                        <div className="min-w-0">
                          <div className="text-[8px] text-sky-300 font-bold uppercase tracking-wider leading-none mb-0.5">Penjaminan Escrow</div>
                          <div className="font-bold text-white text-xs leading-none truncate">Sentra Grosir Pasokan</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200 text-[8px] font-bold border border-sky-400/30 shrink-0">
                        ● Terproteksi
                      </span>
                    </div>

                    <div className="mt-2.5 bg-gradient-to-r from-blue-900/60 to-slate-900/80 rounded-xl p-2.5 border border-sky-400/30">
                      <div className="flex items-center justify-between text-[8px] text-sky-300">
                        <span>Total Arus Escrow BRI Terkunci</span>
                        <span className="font-mono text-[8px] bg-sky-950 px-1 rounded">BRIAPI 2026</span>
                      </div>
                      <div className="text-lg font-black text-white mt-0.5">
                        Rp 184.500.000
                      </div>
                      <div className="text-[8px] text-emerald-400 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>Kliring Aman: 100% Bebas Bon Macet</span>
                      </div>
                    </div>
                  </div>

                  {/* App Screen Middle: Live PO Borongan Klaster UMKM */}
                  <div className="p-3 space-y-2 flex-1 bg-slate-950 text-[11px] overflow-hidden">
                    
                    {/* 3 Metric Pills */}
                    <div className="grid grid-cols-3 gap-1 text-center">
                      <div className="bg-slate-900/90 rounded-xl p-1.5 border border-slate-800">
                        <div className="text-[8px] text-slate-400">Pasokan</div>
                        <div className="text-[10px] font-black text-white">42.8 Ton</div>
                      </div>
                      <div className="bg-slate-900/90 rounded-xl p-1.5 border border-slate-800">
                        <div className="text-[8px] text-slate-400">Wilayah</div>
                        <div className="text-[10px] font-black text-sky-300">31 Kec</div>
                      </div>
                      <div className="bg-slate-900/90 rounded-xl p-1.5 border border-slate-800">
                        <div className="text-[8px] text-slate-400">Jaminan</div>
                        <div className="text-[10px] font-black text-emerald-400">100% BRI</div>
                      </div>
                    </div>

                    {/* Section: Live PO Borongan */}
                    <div>
                      <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1 px-0.5">
                        <span className="font-bold text-slate-200">PO Borongan Klaster Masuk</span>
                        <span className="text-emerald-400 text-[8px] font-mono">Live B2B</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-lg bg-[#002D62] text-sky-300 flex items-center justify-center font-bold text-[8px]">
                              BP
                            </div>
                            <div>
                              <div className="font-bold text-white text-[10px] leading-tight">20 Sak Beras IR-64 (1 Ton)</div>
                              <div className="text-[8px] text-slate-400">Klaster Warung Mulyorejo</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-emerald-400 text-[10px]">Rp 12.800.000</div>
                            <div className="text-[7px] text-sky-300">Dana Terkunci</div>
                          </div>
                        </div>

                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-lg bg-slate-800 text-sky-300 flex items-center justify-center font-bold text-[8px]">
                              MG
                            </div>
                            <div>
                              <div className="font-bold text-white text-[10px] leading-tight">4 Drum Minyak Sawit (800L)</div>
                              <div className="text-[8px] text-slate-400">Sentra Kuliner SWK Surabaya</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-emerald-400 text-[10px]">Rp 11.400.000</div>
                            <div className="text-[7px] text-amber-300">Siap Truk</div>
                          </div>
                        </div>

                        <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-lg bg-[#003B7E] text-white flex items-center justify-center font-bold text-[8px]">
                              BM
                            </div>
                            <div>
                              <div className="font-bold text-white text-[10px] leading-tight">15 Koli Bawang Probolinggo</div>
                              <div className="text-[8px] text-slate-400">Toko Sembako Rungkut</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-emerald-400 text-[10px]">Rp 10.875.000</div>
                            <div className="text-[7px] text-sky-300">Terverifikasi</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar Gateway BRIAPI */}
                    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-2">
                      <div className="flex items-center justify-between text-[8px] text-slate-400 mb-1">
                        <span>Gateway BRIAPI SHA-256</span>
                        <span className="text-emerald-400 font-bold">Uptime 99.98%</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#00529C] via-sky-400 to-emerald-400 w-full" />
                      </div>
                    </div>

                  </div>

                  {/* Bottom Navigation */}
                  <div className="p-2 bg-slate-900 border-t border-slate-800 flex items-center justify-around text-slate-400 text-[8px]">
                    <span className="text-sky-300 font-bold">Grosir</span>
                    <span>Escrow</span>
                    <div className="w-6 h-6 rounded-full bg-[#00529C] text-white flex items-center justify-center -mt-2 shadow-md">
                      <QrCode className="w-3 h-3" />
                    </div>
                    <span>Audit</span>
                    <span>Akun</span>
                  </div>

                </div>
              </div>


              {/* =============================================================== */}
              {/* 3. HP 3 (KANAN - NYAMPING KE KANAN):                            */}
              {/* TAMPILAN: APLIKASI DRIVER LOGISTIK ALA GOJEK & GMAPS (CAK SUGENG) */}
              {/* =============================================================== */}
              <div className="relative z-20 w-[275px] sm:w-[295px] lg:w-[290px] xl:w-[310px] aspect-[9/19] rounded-[44px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl border-4 border-slate-700/90 ring-1 ring-white/20 transform md:rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 group">
                
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>

                {/* iPhone Screen Content: Driver Gojek Style App */}
                <div className="w-full h-full rounded-[36px] bg-slate-950 overflow-hidden flex flex-col justify-between text-white relative">
                  
                  {/* Top Bar inside Screen: Driver Header */}
                  <div className="pt-7 px-3.5 pb-3 bg-gradient-to-b from-[#002D62] via-slate-900 to-slate-950">
                    <div className="flex items-center justify-between text-[11px] text-sky-200 mt-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center font-black text-[9px] text-white shrink-0">
                          CS
                        </div>
                        <div className="min-w-0">
                          <div className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider leading-none mb-0.5 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Driver Online</span>
                          </div>
                          <div className="font-bold text-white text-xs leading-none truncate">Cak Sugeng (Vario)</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-amber-400 flex items-center gap-0.5 bg-amber-400/10 px-1.5 py-0.5 rounded-full border border-amber-400/20 shrink-0">
                        <Star className="w-2.5 h-2.5 fill-amber-400" /> 4.95
                      </span>
                    </div>

                    <div className="mt-2.5 bg-emerald-950/60 rounded-xl p-2 border border-emerald-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-[8px] text-emerald-300">Saldo Dompet Driver</span>
                        <div className="text-base font-black text-white mt-0.5">Rp 285.000</div>
                      </div>
                      <span className="text-[8px] font-bold text-emerald-300 bg-emerald-900 px-1.5 py-0.5 rounded">
                        8 Trip
                      </span>
                    </div>
                  </div>

                  {/* App Screen Middle: GMaps Navigasi & Order Aktif */}
                  <div className="p-3 space-y-2 flex-1 bg-slate-950 text-[11px] overflow-hidden">
                    
                    {/* Real Google Maps Embed & Live Navigation */}
                    <div className="bg-slate-900 rounded-xl p-2 border border-sky-400/30 relative overflow-hidden space-y-1.5">
                      <div className="flex items-center justify-between text-[8px] text-slate-300">
                        <span className="font-bold text-sky-200">
                          Google Maps Surabaya
                        </span>
                        <span className="text-emerald-400 font-bold">3.8 km • 12 Mnt</span>
                      </div>

                      {/* Interactive Google Maps Iframe */}
                      <div className="w-full h-24 rounded-lg overflow-hidden border border-slate-700/80 relative">
                        <iframe 
                          src="https://maps.google.com/maps?q=Pasar+Keputran+Surabaya&t=&z=14&ie=UTF8&iwloc=&output=embed"
                          className="w-full h-full border-0 pointer-events-auto"
                          loading="lazy"
                          title="Google Maps Surabaya Pasar Keputran"
                        />
                        <div className="absolute bottom-1 left-1 bg-slate-950/90 backdrop-blur-xs px-2 py-0.5 rounded text-[7px] text-sky-200 border border-sky-400/30 font-medium">
                          Pasar Keputran ➔ Warung Barokah
                        </div>
                      </div>

                      {/* Direct GMaps Link */}
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&origin=Pasar+Keputran+Surabaya&destination=Warung+Barokah+Manyar+Surabaya&travelmode=two_wheeler" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-2.5 py-1.5 bg-[#002D62] hover:bg-[#00529C] text-white rounded-lg text-[8px] font-bold transition-all shadow-xs border border-sky-400/30"
                      >
                        <span>Buka Navigasi Google Maps</span>
                        <ExternalLink className="w-2.5 h-2.5 text-sky-300" />
                      </a>
                    </div>

                    {/* Active Delivery Order Card */}
                    <div className="bg-slate-900/90 rounded-xl p-2 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] text-slate-400 font-mono">ORDER #SBY-842</span>
                        <span className="text-[11px] font-black text-emerald-400">+Rp 35.000</span>
                      </div>
                      <div className="text-[9px] text-slate-200 font-medium truncate">
                        2 Sak Beras (50 kg) + 2 Jerigen Minyak
                      </div>
                      <div className="text-[8px] text-sky-300">
                        Ongkir Aman di Escrow BRI
                      </div>
                    </div>

                    {/* Validasi OTP Box */}
                    <div className="bg-blue-950/70 border border-blue-400/30 rounded-xl p-1.5 text-center">
                      <div className="text-[8px] text-sky-200">Verifikasi Serah-Terima Warung</div>
                      <div className="flex items-center justify-center gap-1.5 my-1 font-mono font-black text-xs text-white tracking-widest">
                        <span className="bg-slate-900 px-1 py-0.5 rounded border border-slate-700">4</span>
                        <span className="bg-slate-900 px-1 py-0.5 rounded border border-slate-700">8</span>
                        <span className="bg-slate-900 px-1 py-0.5 rounded border border-slate-700">1</span>
                        <span className="bg-slate-900 px-1 py-0.5 rounded border border-slate-700">9</span>
                      </div>
                      <div className="text-[7px] text-emerald-400 font-bold">
                        ✓ OTP Valid: Ongkir Langsung Masuk Dompet
                      </div>
                    </div>

                  </div>

                  {/* Bottom Navigation */}
                  <div className="p-2 bg-slate-900 border-t border-slate-800 flex items-center justify-around text-slate-400 text-[8px]">
                    <span className="text-emerald-400 font-bold">Radar</span>
                    <span>Orderan</span>
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center -mt-2 shadow-md">
                      <Bike className="w-3 h-3" />
                    </div>
                    <span>Dompet</span>
                    <span>Bantuan</span>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Showcase Card Labels */}
            <div className="flex items-center justify-between relative z-10 text-xs sm:text-sm font-semibold text-white/70 pt-6 mt-6 border-t border-white/10">
              <span>Platform Rantai Pasok Terpadu UMKM</span>
              <span className="text-sky-300">Infrastruktur Rantai Pasok Terintegrasi Bank BRI &amp; Danantara</span>
            </div>

          </div>

          {/* Section 2: Editorial Philosophy & 3 Giant Impact Stat Counters */}
          <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#002D62] text-xs font-bold uppercase tracking-wider mb-5">
              <span>Komitmen Tata Kelola &amp; Transformasi Usaha</span>
            </div>

            <h3 className="text-2xl sm:text-4xl md:text-[42px] font-black text-slate-900 tracking-tight leading-snug sm:leading-tight">
              Mengelola rantai pasok harus <span className="text-[#00529C]">mudah dipahami</span>, bukan membingungkan.
              Platform SANTARA dirancang menghadirkan <span className="text-[#002D62]">kepastian kas</span> dan <span className="text-[#0284C7]">keamanan penuh</span> bagi seluruh UMKM.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 mt-6 leading-relaxed max-w-3xl mx-auto font-normal">
              Alur belanja transparan tanpa calo perantara, penjaminan dana otomatis lewat Rekening Penampung BRIAPI, dan integrasi kurir lokal memberdayakan ekonomi warga Surabaya mandiri dan berdaulat.
            </p>

            {/* 3 Giant Metric Numbers (Like Nordea Case Study: 175, 114, 100) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-16 pt-10 border-t border-slate-200/80">
              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00529C] mt-2">
                  Proteksi Escrow Bank BRI
                </div>
                <p className="text-xs text-slate-500 mt-1">Uang hanya cair setelah fisik barang diverifikasi</p>
              </div>

              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight">
                  31
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00529C] mt-2">
                  Kecamatan Terkoneksi
                </div>
                <p className="text-xs text-slate-500 mt-1">Jaringan rantai pasok lokal se-Surabaya</p>
              </div>

              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight">
                  28%
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00529C] mt-2">
                  Efisiensi HPP Rata-rata
                </div>
                <p className="text-xs text-slate-500 mt-1">Harga grosir hulu langsung tanpa rantai calo</p>
              </div>
            </div>

          </div>

        </div>
      </section>



      


      {/* ====================================================================== */}
      {/* 5. CAKUPAN PENGGUNA EKOSISTEM (4 PILAR LENGKAP - 2x2 BENTO GRID LUAS) */}
      {/* Rombak Penataan: Luas, Mewah, Sejajar, Seragam Putih, Zero Green */}
      {/* ====================================================================== */}
      <section id="ekosistem-peran" className="py-16 sm:py-24 bg-[#F1F5F9] border-b border-slate-300/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 tracking-tight leading-snug">
              Satu Ekosistem yang Menguntungkan dan Melindungi Seluruh Pihak
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal max-w-3xl mx-auto">
              SANTARA bukan sekadar aplikasi belanja, melainkan rantai pasok terpadu yang menghubungkan produsen atau distributor, seluruh pemilik usaha UMKM, kurir armada pengantar, hingga pembeli dan masyarakat di Surabaya.
            </p>
          </div>

          {/* 4 Pilar Grid: 2x2 Bento Grid Luas & Proporsional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
            
            {/* Pilar 1: Pemasok & Hulu (Distributor & Produsen) */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100/60 text-[#002D62] flex items-center justify-center group-hover:bg-[#002D62] group-hover:text-white transition-all shadow-xs">
                    <Boxes className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold">
                    Pemasok &amp; Hulu
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-5 mb-2">
                  Distributor &amp; Produsen
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Pedagang pasar induk, distributor FMCG, pabrik kemasan, dan produsen bahan baku mendapat kepastian borongan volume besar.
                </p>

                <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Uang Pasti Ada:</strong> Dana pembeli terkunci resmi di Escrow Bank BRI
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Bebas Utang Nunggak:</strong> Tidak ada drama bon macet atau tagihan nunggak
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Dana Langsung Cair:</strong> Masuk rekening seketika pasca-verifikasi serah terima
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#002D62] group-hover:text-[#00529C] transition-colors">
                <span>Kemitraan Distributor Resmi</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Pilar 2: Dapur & Usaha (Seluruh Sektor UMKM) */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100/60 text-[#003B7E] flex items-center justify-center group-hover:bg-[#003B7E] group-hover:text-white transition-all shadow-xs">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#002D62] text-xs font-bold">
                    Dapur &amp; Usaha
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-5 mb-2">
                  Seluruh Sektor UMKM
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Warung makan, toko kelontong, kios sembako, perajin konveksi, bengkel, hingga toko ritel mendapatkan pasokan langsung dari distributor.
                </p>

                <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Hemat HPP s.d. 28%:</strong> Potong rantai mark-up calo perantara
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Garansi Mutu &amp; Fisik:</strong> Cek barang di lokasi sebelum dana dicairkan
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Akses Modal KUR BRI:</strong> Riwayat belanja jadi credit scoring LinkUMKM
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#003B7E] group-hover:text-[#00529C] transition-colors">
                <span>Akses Pengadaan Terpadu</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Pilar 3: Distribusi Wilayah (Kurir Armada & Mitra Ojek) */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100/60 text-[#00529C] flex items-center justify-center group-hover:bg-[#00529C] group-hover:text-white transition-all shadow-xs">
                    <Truck className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold">
                    Distribusi Wilayah
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-5 mb-2">
                  Kurir Armada &amp; Mitra Ojek
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Mitra pengemudi dan armada logistik lokal melayani pengantaran bahan dan produk terpusat per klaster kecamatan di Surabaya.
                </p>

                <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Rute Pengantaran Efisien:</strong> Muatan terjadwal sekali jalan, bukan order acak
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Simpul Hub AgenBRILink:</strong> Titik drop &amp; pick-up terdekat di 31 kecamatan
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Ongkir Pasti Cair:</strong> Scan serah terima OTP langsung mencairkan upah kurir
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#00529C] group-hover:text-[#002D62] transition-colors">
                <span>Jaringan Logistik Terpadu</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Pilar 4: Masyarakat (Konsumen & Pembeli) */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100/60 text-[#0284C7] flex items-center justify-center group-hover:bg-[#0284C7] group-hover:text-white transition-all shadow-xs">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold">
                    Masyarakat
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-5 mb-2">
                  Konsumen &amp; Pembeli
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Masyarakat penikmat produk dan jasa UMKM merasakan harga yang stabil, pasokan terjamin, dan mutu produk yang terjaga.
                </p>

                <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Harga Produk Lebih Terjangkau:</strong> Toko dan warung tidak perlu mark-up tinggi
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Stok Selalu Tersedia:</strong> Pasokan toko kelontong &amp; warung tidak pernah putus
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100/90 text-[#00529C] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-bold">Kualitas Barang Terjamin:</strong> Bersumber langsung dari pabrikan resmi
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0284C7] group-hover:text-[#002D62] transition-colors">
                <span>Ekosistem Warga Surabaya</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>


      


      {/* ====================================================================== */}
      {/* 6. MEKANISME KERJA YANG MUDAH DIPAHAMI (CONTAINER GRADASI BIRU SANTARA) */}
      {/* Warna Gradasi Biru Resmi Bank BRI + 2 Baris Subtitle Awam-Friendly */}
      {/* ====================================================================== */}
      <section id="mekanisme-kerja" className="py-16 sm:py-24 bg-[#F1F5F9] border-b border-slate-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#002D62] via-[#003B7E] to-[#001D40] border border-blue-800/40 text-white p-7 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            
            {/* Subtle Glow Lighting in Corner */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Text */}
            <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-300 block mb-2">
                Mekanisme Kerja Sederhana &amp; Aman
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Transaksi Rantai Pasok Jadi <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-white">
                  Jauh Lebih Mudah &amp; Terlindungi!
                </span>
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base mt-3 leading-relaxed max-w-3xl sm:max-w-4xl mx-auto text-center">
                Tiga integrasi digital Bank BRI yang mengamankan transaksi pasokan UMKM dari distributor ke pembeli.<br className="hidden sm:inline" />
                Sangat mudah dipahami pedagang pasar, pemilik warung, toko kelontong, hingga kurir pengantar.
              </p>
            </div>

            {/* 3 Phone Cards side-by-side (Clean & Razor-Sharp, Zero Green) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              {/* Card 1: QR Settlement & Escrow Protection */}
              <div className="rounded-3xl bg-white text-slate-900 p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-[#002D62] text-[10px] font-black uppercase tracking-wider">
                      Langkah 01
                    </span>
                    <span className="text-xs font-bold text-slate-400">Pemesanan</span>
                  </div>

                  <div className="text-center mb-5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      QRIS Dinamis dan Escrow <br />
                      Semudah Sekali Pindai
                    </h3>
                  </div>

                  {/* Phone Screen Mockup 1: Ukuran Presisi h-[270px] */}
                  <div className="w-full max-w-[220px] mx-auto rounded-2xl bg-slate-50 border-4 border-slate-900 p-4 text-center shadow-inner flex flex-col justify-between h-[270px]">
                    <div className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">
                      QRIS Settlement BRI
                    </div>
                    <div className="w-24 h-24 bg-white border border-slate-200 rounded-xl mx-auto flex items-center justify-center p-2 shadow-xs my-auto">
                      <QrCode className="w-full h-full text-slate-800" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#002D62]">PO-UMKM-2026-081</div>
                      <div className="text-[9px] text-slate-500">Sentra Pengadaan Surabaya</div>
                    </div>
                    <div className="mt-1 text-[9px] font-bold text-[#00529C] bg-blue-50 py-1.5 px-2 rounded-md">
                      Dana Tertahan Aman di BRI
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Pelaku usaha pesan lewat HP, bayar pakai QRIS BRI. <strong>Uang pembayaran Anda dititipkan aman di rekening resmi Bank BRI</strong>, bukan di rekening perorangan calo.
                  </p>
                </div>
              </div>

              {/* Card 2: Validasi Fisik & Pencairan Seketika */}
              <div className="rounded-3xl bg-white text-slate-900 p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-[#002D62] text-[10px] font-black uppercase tracking-wider">
                      Langkah 02
                    </span>
                    <span className="text-xs font-bold text-slate-400">Penerimaan</span>
                  </div>

                  <div className="text-center mb-5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Cek Mutu dan Timbangan <br />
                      Cocok Baru Uang Cair
                    </h3>
                  </div>

                  {/* Phone Screen Mockup 2: Sejajar & Sama Besarnya dengan Mockup 1 (h-[270px]) */}
                  <div className="w-full max-w-[220px] mx-auto rounded-2xl bg-slate-50 border-4 border-slate-900 p-4 text-center shadow-inner flex flex-col justify-between h-[270px]">
                    <div className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide">
                      VALIDASI FISIK &amp; MUTU
                    </div>
                    <div className="my-auto py-1">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#00529C] flex items-center justify-center mx-auto mb-2 shadow-xs">
                        <CheckCircle2 className="w-7 h-7 text-[#00529C]" />
                      </div>
                      <div className="text-xs font-black text-slate-900">Validasi Fisik 100%</div>
                      <div className="text-[9.5px] text-slate-500 mt-1 leading-snug px-1">
                        Kuantitas &amp; Mutu Sesuai Pesanan
                      </div>
                    </div>
                    <div>
                      <button className="w-full py-2 rounded-lg bg-[#002D62] hover:bg-[#001D40] text-white text-[10.5px] font-bold shadow-xs transition-colors">
                        Cairkan Escrow
                      </button>
                      <div className="mt-1 text-[9px] font-bold text-[#00529C] bg-blue-50 py-1.5 px-2 rounded-md">
                        Dana Otomatis Diteruskan
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Barang tiba di toko atau warung. Anda timbang dan cek mutunya. <strong>Hanya setelah Anda setuju, uang di Bank BRI dicairkan ke penjual &amp; kurir</strong>.
                  </p>
                </div>
              </div>

              {/* Card 3: Histori Transaksi Jadi Skor Modal KUR BRI */}
              <div className="rounded-3xl bg-white text-slate-900 p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-[#002D62] text-[10px] font-black uppercase tracking-wider">
                      Langkah 03
                    </span>
                    <span className="text-xs font-bold text-slate-400">Pemberdayaan</span>
                  </div>

                  <div className="text-center mb-5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      Otomatis Tercatat <br />
                      Langsung Dapat Akses KUR
                    </h3>
                  </div>

                  {/* Phone Screen Mockup 3: Sejajar & Sama Besarnya dengan Mockup 1 (h-[270px]) */}
                  <div className="w-full max-w-[220px] mx-auto rounded-2xl bg-slate-50 border-4 border-slate-900 p-4 text-left shadow-inner flex flex-col justify-between h-[270px]">
                    <div className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wide text-center">
                      CREDIT SCORING OTOMATIS
                    </div>
                    <div className="space-y-2 my-auto">
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#002D62] to-[#00529C] text-white shadow-xs">
                        <div className="text-[8px] text-blue-200 uppercase font-bold tracking-wider">Plafon KUR LinkUMKM</div>
                        <div className="text-base font-black">Rp 50.000.000</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-800">
                          <span>Skor Kepatuhan</span>
                          <span className="text-[#00529C]">94% (Layak)</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#00529C] rounded-full w-[94%]"></div>
                        </div>
                        <div className="text-[9px] text-slate-500">Histori Belanja Terekam Otomatis</div>
                      </div>
                    </div>
                    <div className="mt-1 text-[9px] font-bold text-[#00529C] bg-blue-50 py-1.5 px-2 rounded-md text-center">
                      Siap Dicairkan ke Rekening BRI
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Setiap transaksi belanja otomatis tercatat di LinkUMKM. <strong>Usaha Anda langsung berhak mengajukan modal kerja KUR Mikro BRI tanpa jaminan fisik yang rumit</strong>.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      


      {/* ====================================================================== */}
      {/* 7. STANDARISASI FITUR INFRASTRUKTUR B2B (PERSIS GAYA CAP.SO / USER IMAGE 8 & 9) */}
      {/* 4 KARTU SERAGAM WARNA PUTIH, BAHASA MUDAH DIPAHAMI ORANG AWAM & MASYARAKAT */}
      {/* ====================================================================== */}
      <section id="jalur-pengadaan" className="py-16 sm:py-24 bg-[#F1F5F9] border-b border-slate-300/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header ala Cap: POWERFUL FEATURES / Crafted for simplicity */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00529C] block mb-2">
              POWERFUL ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Dirancang untuk Kemudahan Semua Orang
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal max-w-3xl sm:max-w-4xl mx-auto text-center">
              Kami percaya rantai pasok yang hebat harus mudah dipahami siapa saja.<br className="hidden sm:inline" />
              SANTARA memangkas calo perantara, menjamin uang Anda tidak hilang, dan memudahkan modal usaha.
            </p>
          </div>

          {/* 4 Feature Cards ala Cap.so grid (SEMUA PUTIH SOLID DENGAN SHADOW ELEGAN) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Santara On-Demand */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Belanja Harian Mandiri
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  Pengadaan Kebutuhan Harian
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Kebutuhan bahan baku dan barang dagangan dapat dipesan harian langsung dari sentra grosir dan distributor resmi tanpa batasan volume transaksi.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-xs font-bold text-[#002D62]">
                <span>Pesan Fleksibel</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Santara Group (Demand Pooling) */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00529C] block mb-1">
                  Pengadaan Wilayah
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  Belanja Kolektif Komunitas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Konsolidasi pesanan kolektif antar pelaku usaha dalam satu wilayah kelurahan untuk memperoleh harga borongan tingkat pabrik yang jauh lebih hemat.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-xs font-bold text-[#00529C]">
                <span>Efisiensi Biaya Usaha</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: 100% Escrow Protection */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#002D62] block mb-1">
                  Jaminan Keamanan Dana
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  Proteksi Escrow Bank BRI
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Dana transaksi tersimpan aman di rekening penampung resmi Bank BRI dan baru diteruskan kepada penjual setelah spesifikasi fisik barang diverifikasi.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-xs font-bold text-[#002D62]">
                <span>Terjamin Bank BRI</span>
                <ShieldCheck className="w-4 h-4 text-[#00529C]" />
              </div>
            </div>

            {/* Card 4: Scoring Modal LinkUMKM */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Penguatan Modal Usaha
                </span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  Akses Fasilitas KUR BRI
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Rekam jejak transaksi terverifikasi secara otomatis menjadi dasar penilaian kelayakan pembiayaan modal kerja KUR Mikro melalui integrasi LinkUMKM.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-xs font-bold text-[#002D62]">
                <span>Plafon Modal Kerja</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>


      


      {/* ====================================================================== */}
      {/* 8. SINERGI BANK BRI & DANANTARA (FONDASI KELEMBAGAAN BUMN) */}
      {/* Sesuai Gambar Referensi User: media_1795140720742_9ea795c7.jpg */}
      {/* RATA TENGAH + SEMUA KARTU SERAGAM (TIDAK ADA WARNA BEDA) */}
      {/* ====================================================================== */}
      <section id="sinergi-bri" className="py-16 sm:py-24 bg-[#F1F5F9] border-b border-slate-300/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header Rata Tengah Sesuai Gambar User */}
          <div className="text-center max-w-3xl sm:max-w-4xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00529C] block mb-2">
              Kemitraan Strategis Perbankan BUMN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Infrastruktur Resmi PT Bank Rakyat Indonesia (Persero) Tbk
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal max-w-3xl sm:max-w-4xl mx-auto text-center">
              Kolaborasi strategis Bank BRI Regional Office Surabaya dan Danantara Indonesia<br className="hidden sm:inline" />
              menjamin proteksi pembayaran, jaringan distribusi lokal, serta permodalan ribuan UMKM.
            </p>
          </div>

          {/* 4 Cards Seragam (Clean, Elegan & Berbayang Nyata) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Rekening Escrow BRI */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  Rekening Escrow BRI
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Pembayaran aman tersimpan di rekening resmi Bank BRI dan baru dicairkan setelah mutu dan jumlah barang tervalidasi di lokasi.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002D62]">
                <span>Penjaminan BRIAPI</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Sentra Pasar Induk & Grosir */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  Pasar Induk dan Grosir
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Digitalisasi tata kelola pedagang besar sentra pasar induk dan distributor utama binaan BRI untuk kepastian pasokan barang usaha.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00529C]">
                <span>Pasar Induk Keputran</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: Hub AgenBRILink 31 */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  Hub AgenBRILink 31
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Jaringan gerai AgenBRILink di 31 kecamatan Surabaya sebagai simpul distribusi barang dagangan dan otentikasi serah-terima cepat OTP.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284C7]">
                <span>Distribusi Kelurahan</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 4: LinkUMKM & KUR Mikro */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-300/90 shadow-md shadow-slate-300/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  LinkUMKM dan KUR Mikro
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Pencatatan transaksi historis pada ekosistem terhubung langsung dengan platform LinkUMKM untuk percepatan pembiayaan modal usaha resmi.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#002D62]">
                <span>Plafon LinkUMKM</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Centered CTA Pill Button ala media_1795140720742_9ea795c7.jpg */}
          <div className="mt-12 text-center">
            <Link 
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#002D62] hover:bg-[#001D40] text-white text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Eksplorasi Ekosistem Bank BRI</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>


      


      {/* ====================================================================== */}
      {/* 9. SKY BLUE / CLOUD GRADIENT CTA BANNER (PERSIS GAYA CAP.SO / USER IMAGE 8) */}
      {/* ====================================================================== */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="rounded-[2.5rem] bg-gradient-to-r from-sky-400 via-blue-500 to-[#002D62] text-white p-8 sm:p-14 lg:p-16 text-center shadow-2xl relative overflow-hidden">
            
            {/* Subtle Lighting Blur Elements */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Kedaulatan Rantai Pasok di Tangan Seluruh Pelaku Usaha
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100/95 max-w-2xl mx-auto leading-relaxed">
                SANTARA menghubungkan produsen utama langsung ke pemilik usaha UMKM di Kota Surabaya dengan garansi proteksi perbankan resmi PT Bank Rakyat Indonesia (Persero) Tbk.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
                <Link 
                  href="/dashboard"
                  className="px-8 py-3.5 bg-white hover:bg-slate-100 text-[#002D62] text-sm sm:text-base font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Buka Portal Santara
                </Link>

                <a 
                  href="#ekosistem-peran"
                  className="px-8 py-3.5 bg-blue-700/50 hover:bg-blue-700/70 border border-white/40 text-white text-sm sm:text-base font-semibold rounded-full backdrop-blur-md transition-all"
                >
                  Konsultasi Pengadaan Wilayah
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      


      {/* ====================================================================== */}
      {/* 10. MINIMALIST CLEAN WHITE FOOTER (PERSIS GAYA CAP.SO / USER IMAGE 8) */}
      {/* ====================================================================== */}
      <footer className="border-t border-slate-200 bg-white text-slate-600 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-200">
            
            {/* Left 2 Cols: Brand Info & Logo */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shadow-xs">
                  <img src="/images/santara-icon.svg" alt="Santara" className="w-full h-full object-contain" />
                </div>
                <span className="font-black text-xl tracking-tight text-[#002D62]">santara</span>
              </Link>
              
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Infrastruktur agregasi rantai pasok B2B terpadu berbasis penjaminan Rekening Penampung (Escrow) Bank BRI untuk seluruh sektor pelaku usaha UMKM di Kota Surabaya.
              </p>
            </div>

            {/* Col 3: Platform */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Platform</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#jalur-pengadaan" className="hover:text-[#002D62] transition-colors">Santara On-Demand</a></li>
                <li><a href="#jalur-pengadaan" className="hover:text-[#002D62] transition-colors">Demand Pooling Wilayah</a></li>
                <li><a href="#sektor-produk" className="hover:text-[#002D62] transition-colors">Katalog Sektor Terbuka</a></li>
                <li><Link href="/dashboard" className="hover:text-[#002D62] transition-colors">Jadwal Pengantaran Subuh</Link></li>
              </ul>
            </div>

            {/* Col 4: Infrastruktur BRI */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Infrastruktur BRI</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#sinergi-bri" className="hover:text-[#002D62] transition-colors">Rekening Escrow BRIAPI</a></li>
                <li><a href="#sinergi-bri" className="hover:text-[#002D62] transition-colors">QRIS Dinamis Settlement</a></li>
                <li><a href="#sinergi-bri" className="hover:text-[#002D62] transition-colors">Virtual Account BritAma</a></li>
                <li><a href="#sinergi-bri" className="hover:text-[#002D62] transition-colors">Credit Scoring LinkUMKM</a></li>
              </ul>
            </div>

            {/* Col 5: Sentra Pasokan */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Sentra Pasokan</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#tentang" className="hover:text-[#002D62] transition-colors">Sentra Pasar Induk Keputran</a></li>
                <li><a href="#sinergi-bri" className="hover:text-[#002D62] transition-colors">Hub 31 AgenBRILink</a></li>
                <li><a href="#ekosistem-peran" className="hover:text-[#002D62] transition-colors">Distributor Pabrikan &amp; Hulu</a></li>
                <li><a href="#ekosistem-peran" className="hover:text-[#002D62] transition-colors">Kelompok Usaha Binaan</a></li>
              </ul>
            </div>

            {/* Col 6: Legalitas & Bantuan */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Bantuan &amp; Regulasi</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#mekanisme-kerja" className="hover:text-[#002D62] transition-colors">SOP Validasi Serah-Terima</a></li>
                <li><a href="#mekanisme-kerja" className="hover:text-[#002D62] transition-colors">Syarat Escrow Proteksi</a></li>
                <li><a href="#mekanisme-kerja" className="hover:text-[#002D62] transition-colors">Jaminan Tanpa Bon Macet</a></li>
                <li><Link href="/dashboard" className="hover:text-[#002D62] transition-colors">Pusat Bantuan UMKM</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Line Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              Bank BRI RO Surabaya &bull; Danantara Indonesia &bull; Sentra Hub Pasar Induk Keputran
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">Syarat &amp; Ketentuan</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Status Jaringan BRIAPI</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
