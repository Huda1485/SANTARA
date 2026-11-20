import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SANTARA — Inovasi Rantai Pasok B2B UMKM & Bank BRI',
  description: 'Inovasi Ekosistem Rantai Pasok B2B Terpadu UMKM Surabaya Terintegrasi Bank BRI | BRIMO Business Challenge 2026',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images/santara-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/santara-icon.svg',
    shortcut: '/images/santara-icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#002D62',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/santara-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/santara-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Google+Sans:wght@400;500;700&family=Google+Sans+Display:wght@400;500;700&family=Google+Sans+Text:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
