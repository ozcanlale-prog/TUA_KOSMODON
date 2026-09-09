'use client';
import { ArrowUpRight, Radio, Layers, Milestone, Sparkles, Image as ImageIcon, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from './components/Providers';

export default function Home() {
  const { t, lang } = useLanguage();

  const videos = [
    {
      title: lang === 'en' ? "Inertia Experiment by Alper Gezeravci" : "Alper Gezeravcı'dan Atalet Deneyi",
      tag: lang === 'en' ? "Space Mission" : "Uzay Misyonu",
      url: "https://www.youtube.com/embed/8-ZNWoPKvms",
      desc: lang === 'en' ? "Inertia and rotation experiments carried out under microgravity on the International Space Station." : "Uluslararası Uzay İstasyonu'nda mikroyerçekimi altında gerçekleştirilen atalet ve dönme deneyleri.",
      channelName: "Türkiye Uzay Ajansı",
      channelUrl: "https://www.youtube.com/@TUAajans",
      logo: "/media/tua.png"
    },
    {
      title: lang === 'en' ? "First Space Travelers Answer Your Questions" : "İlk Uzay Yolcuları Sorularınızı Cevaplıyor",
      tag: lang === 'en' ? "Interview" : "Söyleşi",
      url: "https://www.youtube.com/embed/8NOskXYBhvs",
      desc: lang === 'en' ? "Space journey process and science mission interview with Alper Gezeravci and Tuva Cihangir Atasever." : "Alper Gezeravcı ve Tuva Cihangir Atasever ile uzay yolculuğu süreci ve bilim misyonu söyleşisi.",
      channelName: "TÜBİTAK Bilim Genç",
      channelUrl: "https://www.youtube.com/@bilimgenc",
      logo: "/media/bilimgenc.png"
    },
    {
      title: lang === 'en' ? "Launch Moment: Alper Gezeravci's Space Journey" : "Fırlatma Anı: Alper Gezeravcı'nın Uzay Yolculuğu",
      tag: lang === 'en' ? "Launch Operation" : "Fırlatma Operasyonu",
      url: "https://www.youtube.com/embed/U-PyKYFR7fs",
      desc: lang === 'en' ? "The launch moment of Turkey's first crewed space mission and initial orbit telemetry seconds." : "Türkiye'nin ilk insanlı uzay misyonunun fırlatma anı ve ilk yörünge telemetri saniyeleri.",
      channelName: "TÜBİTAK",
      channelUrl: "https://www.youtube.com/@tubitak",
      logo: "/media/tubitak.png"
    }
  ];

  return (
    <div className="pb-20 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 pt-32 pb-16 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 p-6 sm:p-8 md:p-14 shadow-2xl">
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-950/40 via-slate-950 to-indigo-950/30" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.tag}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              {lang === 'en' ? "Countdown Started for " : "Ay Görevi ve Ötesi İçin "} <span className="text-blue-500">{lang === 'en' ? "the Moon Mission and Beyond." : "Geri Sayım Başladı."}</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-8">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/canli" className="px-7 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-red-950">
                <Radio className="w-4 h-4 animate-pulse" /> {t.hero.liveBtn}
              </Link>
              <Link href="/uzay-ajansi-raporlari" className="px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
                {t.hero.reportBtn} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Günün Uzay Görselleri & Medya Arşivi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
            <ImageIcon className="w-5 h-5 text-blue-400" /> {t.sections.mediaArchive}
          </h2>
          <span className="text-xs font-semibold text-slate-400">{t.sections.highRes}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: lang === 'en' ? "Earth View from Low Orbit" : "Dünya'nın Alçak Yörüngeden Görünümü", 
              tag: lang === 'en' ? "Satellite Photo" : "Uydu Fotoğrafı", 
              img: "/media/media-satellite.jpg", 
              id: "IMG-001" 
            },
            { 
              title: lang === 'en' ? "Nebula Nurseries and Cosmic Dust" : "Nebula Doğumevleri ve Kozmik Tozlar", 
              tag: lang === 'en' ? "Deep Space Observation" : "Derin Uzay Gözlemi", 
              img: "/media/media-nebula.jpg", 
              id: "IMG-012" 
            },
            { 
              title: lang === 'en' ? "National Rocket Launch Simulation" : "Millî Roket Fırlatma Simülasyonu", 
              tag: "TUA Ar-Ge", 
              img: "/media/media-rocket.jpg", 
              id: "IMG-003" 
            }
          ].map((card, idx) => (
            <Link key={idx} href={`/veritabani?resim=${card.id}`} className="rounded-2xl overflow-hidden bg-slate-900/40 border border-slate-800/80 group cursor-pointer hover:border-blue-500/50 transition-all block">
              <div className="h-48 overflow-hidden relative bg-slate-900">
                <img src={card.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={card.title} />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-bold text-blue-400 border border-blue-500/30">
                  {card.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{card.title}</h3>
                <p className="text-xs text-slate-400">
                  {lang === 'en' ? "Certified by TUA Media Laboratory." : "TUA Medya Laboratuvarı tarafından tescillenmiştir."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TUA Resmi YouTube Video Arşivi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
            <ImageIcon className="w-5 h-5 text-red-500" /> {lang === 'en' ? "TUA Official YouTube Video Archive" : "TUA Resmi YouTube Video Arşivi"}
          </h2>
          <span className="text-xs font-semibold text-slate-400">
            {lang === 'en' ? "Live Stream Excerpts & Experiments" : "Canlı Yayın Kesitleri & Deneyler"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between p-5">
              <div>
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-800 mb-4 relative">
                  <iframe 
                    className="w-full h-full"
                    src={vid.url} 
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mb-3">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-bold text-blue-400 border border-blue-500/30">
                    {vid.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{vid.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{vid.desc}</p>
              </div>

              {/* Tıklanabilir Kanal Logosu ve Bağlantısı */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a 
                  href={vid.channelUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center shrink-0 group-hover:border-red-500 transition-colors p-0.5">
                    <img src={vid.logo} alt={vid.channelName} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {vid.channelName}
                  </span>
                </a>
                <a 
                  href={vid.channelUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-[11px] font-medium transition-all"
                >
                  {lang === 'en' ? "Open Channel" : "Kanalı Aç"} <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alt Haberler ve Görev Durumları */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2.5 text-white">
            <Layers className="w-5 h-5 text-blue-400" /> {lang === 'en' ? "Breaking Agency Developments" : "Son Dakika Ajans Gelişmeleri"}
          </h2>
          {[
            { 
              title: lang === 'en' ? "AYAP-1 Probe Successfully Passes Vacuum Tests" : "AYAP-1 Sonda Aracı Vakum Testlerini Başarıyla Geçti", 
              desc: lang === 'en' ? "National components received full marks in rigorous pressure tests conducted at the Ankara space base." : "Ankara uzay üssünde gerçekleştirilen zorlu basınç testlerinde millî bileşenler tam not aldı.", 
              tag: lang === 'en' ? "Technology" : "Teknoloji" 
            },
            { 
              title: lang === 'en' ? "International Astronautical Congress Antalya Summit" : "Uluslararası Uzay Kongresi Antalya Zirvesi", 
              desc: lang === 'en' ? "Ticket and accreditation processes have started for the summit to be held with the participation of world space agency heads." : "Dünya uzay ajansı başkanlarının katılımıyla gerçekleşecek zirvenin bilet ve akreditasyon süreçleri başladı.", 
              tag: lang === 'en' ? "Announcement" : "Duyuru" 
            }
          ].map((news, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all group cursor-pointer">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{news.tag}</span>
              <h3 className="text-base font-bold mt-2 mb-2 text-white group-hover:text-blue-300 transition-colors">{news.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{news.desc}</p>
            </div>
          ))}
        </div>
        
        <aside className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/80 h-fit">
          <h2 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-6 flex items-center gap-2">
             <Milestone className="w-4 h-4" /> {lang === 'en' ? "Mission Statuses" : "Görev Durumları"}
          </h2>
          <div className="space-y-4">
            {[
              { name: "TÜRKSAT 6A", status: lang === 'en' ? "Active" : "Aktif", color: "bg-emerald-500" },
              { name: "AYAP-1 Probe", status: lang === 'en' ? "Testing" : "Test", color: "bg-blue-400" },
              { name: "GÖKTÜRK-1", status: lang === 'en' ? "Active" : "Aktif", color: "bg-emerald-500" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between pb-3 border-b border-slate-800/80 last:border-b-0">
                <span className="text-xs font-semibold text-slate-300">{item.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400">{item.status}</span>
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}