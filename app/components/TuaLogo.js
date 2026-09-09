'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Rocket, Radio, FileText, Database, Shield } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/milli-program', label: 'Millî Program', icon: Rocket },
    { href: '/canli-yayin', label: 'TUA LIVE', icon: Radio, isLive: true },
    { href: '/raporlar', label: 'Uzay Ajansı Raporları', icon: FileText },
    { href: '/veritabani', label: 'Veritabanı', icon: Database },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#030712]/80 backdrop-blur-md border-b border-slate-800/80 font-mono">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo ve Başlık Alanı (Millî Kırmızı-Beyaz Renk Kombinasyonlu Logo) */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
              
              {/* Arka plan hafif kırmızı-mavi kozmik parıltı */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/15 via-transparent to-blue-600/15 rounded-full blur-md"></div>

              {/* Millî Ay-Yıldız ve Roket Formlu SVG Logo */}
              <svg 
                className="w-11 h-11 text-white drop-shadow-[0_0_12px_rgba(220,38,38,0.7)] z-10" 
                viewBox="0 0 36 36" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hilal Formlu Kavisli Yörünge */}
                <path 
                  d="M7 11C7 18.5 12 25 19 25C26 25 31 18.5 31 11" 
                  stroke="url(#milliGrad)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />

                {/* Millî Kırmızı Yörünge Yayı */}
                <path 
                  d="M5 18C10 22 26 22 31 16" 
                  stroke="#ef4444" 
                  strokeWidth="2.2" 
                  strokeLinecap="round"
                />

                {/* Detaylı Roket Gövdesi (Beyaz) */}
                <path 
                  d="M19 4C19 4 16 8 16 14V20C16 20.5 17.5 22 19 22C20.5 22 22 20.5 22 20V14C22 8 19 4 19 4Z" 
                  fill="#ffffff" 
                  stroke="#cbd5e1" 
                  strokeWidth="1"
                />

                {/* Roket Kanatçıkları (Kırmızı) */}
                <path d="M16 17L13 20H16V17Z" fill="#dc2626"/>
                <path d="M22 17L25 20H22V17Z" fill="#dc2626"/>

                {/* Roket Burun Konisi (Kırmızı) */}
                <path d="M19 4L17.5 7H20.5L19 4Z" fill="#dc2626"/>

                {/* İtki Ateşi */}
                <path d="M18 22L19 26L20 22H18Z" fill="#f97316"/>

                {/* Bayraktan İlham Alan Parlak Beyaz Yıldız */}
                <path d="M10 8L10.8 9.6L12.5 9.8L11.3 11L11.6 12.7L10 11.9L8.4 12.7L8.7 11L7.5 9.8L9.2 9.6L10 8Z" fill="#ffffff" />

                <defs>
                  <linearGradient id="milliGrad" x1="7" y1="11" x2="31" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ef4444" />
                    <stop offset="1" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm md:text-base font-extrabold text-white tracking-widest group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
              TUA KOSMODON
              <span className="text-[10px] bg-red-600/20 border border-red-500/40 text-red-400 px-1.5 py-0.2 rounded font-sans">TR</span>
            </span>
            <span className="text-[9px] md:text-[10px] text-blue-400/80 tracking-[0.2em] uppercase">
              TÜRKİYE UZAY AJANSI
            </span>
          </div>
        </Link>

        {/* Menü Linkleri */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-blue-600/10 border border-blue-500/50 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                {link.isLive ? (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                ) : (
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                )}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sağ Taraf - Güvenlik Rozeti */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black border border-slate-800 text-[10px] text-slate-400">
          <Shield className="w-3.5 h-3.5 text-red-500" />
          <span>Millî Şifreli Ağ</span>
        </div>

      </div>
    </header>
  );
}