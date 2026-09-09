import { Cpu, Globe, ShieldCheck, Database, Code } from 'lucide-react';

export default function Footer() {
  const bonusBadges = [
    { title: "Yapay Zeka Entegrasyonu", icon: Cpu },
    { title: "API & Veri Kullanımı", icon: Database },
    { title: "SEO Optimizasyonu", icon: Globe },
    { title: "Çoklu Dil Desteği", icon: Code },
    { title: "Güvenli SSL / HTTPS", icon: ShieldCheck },
  ];

  return (
    <footer className="border-t border-slate-800/60 bg-[#070a12] py-12 mt-20 font-mono">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-lg font-bold text-white mb-2">TUA KOSMODON</p>
          <p className="text-slate-400 text-xs max-w-sm mb-4 leading-relaxed">
            Türkiye Uzay Ajansı vizyonuyla hazırlanan millî uzay teknolojileri ve bilimsel bilgi platformu.
          </p>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            Kahramanmaraş İstiklal Üniversitesi • Yazılım Mühendisliği Projesi
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-4">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="/milli-program" className="hover:text-white transition-colors">Millî Program</a></li>
            <li><a href="/uzay-ajansi-raporlari" className="hover:text-white transition-colors">Uzay Ajansı Raporları</a></li>
            <li><a href="/veritabani" className="hover:text-white transition-colors">Kozmik Veritabanı</a></li>
          </ul>
        </div>
      </div>

      {/* Bonus Kriterler Rozetleri (Tüm Sayfaları Kapsar) */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-slate-800/40">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          Millî Sistem & Yarışma Bonus Kriterleri
        </div>
        <div className="flex flex-wrap gap-3">
          {bonusBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
                <Icon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{badge.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-slate-800/40 flex justify-between items-center text-[10px] text-slate-500 font-semibold tracking-widest">
        <span>© 2026 TUA KOSMODON</span>
        <span className="text-cyan-400">#İstikbalGöklerdedir 🇹🇷</span>
      </div>
    </footer>
  );
}