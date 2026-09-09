import { Compass, Milestone } from 'lucide-react';

export default function ZamanTuneliPage() {
  const milestones = [
    { year: "2018", title: "Türkiye Uzay Ajansı (TUA) Kuruldu", desc: "Ülkemizin uzay politikalarını koordine etmek üzere resmi tüzel kişilik kazandı." },
    { year: "2023", title: "İMECE Gözlem Uydusu Fırlatıldı", desc: "Yüksek çözünürlüklü yerli gözlem uydumuz yörüngeye yerleşti." },
    { year: "2024", title: "İlk Türk Uzay Yolcusu Misyonu", desc: "Uluslararası Uzay İstasyonu'nda bilimsel deneyler başarıyla gerçekleştirildi." },
    { year: "2026", title: "TÜRKSAT 6A Aktif Görevde", desc: "Tamamen yerli haberleşme uydumuz yörüngedeki yerini aldı." },
    { year: "Gelecek", title: "AYAP-1 Ay Sert İniş Hedefi", desc: "Millî hibrit roket motoruyla Ay yüzeyine erişim hedefi." }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold mb-4">
          <Compass className="w-3.5 h-3.5" /> Kronolojik Gelişim
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Uzay Tarihçemiz</h1>
        <p className="text-slate-400 mt-2 text-sm">Cumhuriyetimizin uzay vizyonundaki stratejik kilometre taşları.</p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-10">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0b0f19] border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-md">
              <Milestone className="w-3.5 h-3.5" />
            </div>
            
            <div className="absolute -left-36 top-1.5 hidden md:block text-right w-28 text-cyan-400 font-bold text-sm">
              {m.year}
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60">
              <span className="md:hidden inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-800 text-cyan-400 mb-2">
                {m.year}
              </span>
              <h3 className="text-lg font-bold text-white mb-1">{m.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}