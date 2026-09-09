import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export default function ArsivPage() {
  const articles = [
    {
      id: 1,
      title: "Ay Araştırma Programı (AYAP-1) ve Hibrit Roket Teknolojisi",
      category: "Millî Program",
      date: "Eylül 2026",
      readTime: "6 dk okuma",
      desc: "Türkiye'nin ilk sert Ay inişi için geliştirilen uzay aracı ve itki sistemlerinin teknik detayları."
    },
    {
      id: 2,
      title: "İMECE ve TÜRKSAT 6A: Yörüngedeki Gözlerimiz",
      category: "Uydu Sistemleri",
      date: "Ağustos 2026",
      readTime: "5 dk okuma",
      desc: "Yerli imkanlarla üretilen gözlem ve haberleşme uydularımızın yörünge operasyon performansı."
    },
    {
      id: 3,
      title: "Uluslararası Uzay İstasyonu Bilim Misyonu Verileri",
      category: "Uzay Bilimleri",
      date: "Temmuz 2026",
      readTime: "8 dk okuma",
      desc: "Mikroçekim altında gerçekleştirilen malzeme bilimi deneylerinin laboratuvar sonuçları."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-slate-800/60 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-4">
          <BookOpen className="w-3.5 h-3.5" /> Stratejik Raporlar
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Millî Program Arşivi</h1>
        <p className="text-slate-400 mt-2 text-sm max-w-xl">Türkiye Uzay Ajansı tarafından yayınlanan teknik bültenler ve akademik dokümanlar.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div key={item.id} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-800 text-cyan-400">
                  {item.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">{item.desc}</p>
            </div>
            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-xs text-slate-500">{item.readTime}</span>
              <button className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold flex items-center gap-1">
                İncele <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}