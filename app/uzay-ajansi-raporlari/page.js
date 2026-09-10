'use client';
import { useState } from 'react';
import { FileText, Download, Calendar, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../components/Providers';

export default function UzayAjansiRaporlariPage() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const tabs = [
    { id: 'all', label: lang === 'en' ? 'All Reports' : 'Tüm Raporlar' },
    { id: 'technical', label: lang === 'en' ? 'Operational & Technical' : 'Operasyonel & Teknik' },
    { id: 'satellite', label: lang === 'en' ? 'Satellite Systems' : 'Uydu Sistemleri' },
    { id: 'deep-space', label: lang === 'en' ? 'Deep Space' : 'Derin Uzay' },
    { id: 'science', label: lang === 'en' ? 'Scientific Research' : 'Bilimsel Araştırma' },
  ];

  const reports = [
    {
      id: 1,
      title: lang === 'en' 
        ? "TUA-01 Orbit Correction and Stabilization Report" 
        : "TUA-01 Yörünge Düzeltme ve Sabitleme Raporu",
      category: "technical",
      date: lang === 'en' ? "September 04, 2026" : "04 Eylül 2026",
      code: "TR-2026-OPS-09",
      fileUrl: "/media/veriseti1.csv",
      description: lang === 'en'
        ? "During orbit stabilization tests conducted under the command of Ankara Gölbaşı Ground Station, our national satellite's positioning deviation was zeroed and stabilized to its nominal operational altitude."
        : "Ankara Gölbaşı Yer İstasyonu komutasında gerçekleştirilen yörünge sabitleme testlerinde, millî uydumuzun konumlandırma sapması sıfırlanarak nominal operasyon irtifasına sabitlendi.",
      stats: { 
        altitude: "408.2 km", 
        telemetry: lang === 'en' ? "60 FPS Stable" : "60 FPS Kararlı", 
        status: lang === 'en' ? "Successful" : "Başarılı" 
      }
    },
    {
      id: 2,
      title: lang === 'en'
        ? "National Observation Satellite Spectral Data Transmission Analysis"
        : "Millî Gözlem Uydusu Spektral Veri Aktarım Analizi",
      category: "satellite",
      date: lang === 'en' ? "August 28, 2026" : "28 Ağustos 2026",
      code: "TR-2026-SAT-04",
      fileUrl: "/media/veriseti2.csv",
      description: lang === 'en'
        ? "Initial test frames taken from high-resolution optical cameras were transferred to TÜBİTAK UZAY clean room integration laboratory using encrypted protocols and verified."
        : "Yüksek çözünürlüklü optik kameralardan alınan ilk test kareleri, TÜBİTAK UZAY temiz oda entegrasyon laboratuvarına şifreli protokollerle aktarıldı ve doğrulandı.",
      stats: { 
        resolution: "0.5m GSD", 
        encryption: "AES-256", 
        status: lang === 'en' ? "Approved" : "Onaylandı" 
      }
    },
    {
      id: 3,
      title: lang === 'en'
        ? "Lunar Research Program (AYAP-1) Propulsion System Tests"
        : "Ay Araştırma Programı (AYAP-1) İtki Sistemi Testleri",
      category: "deep-space",
      date: lang === 'en' ? "August 15, 2026" : "15 Ağustos 2026",
      code: "TR-2026-DS-01",
      fileUrl: "/media/veriseti3.csv",
      description: lang === 'en'
        ? "The hybrid-fueled rocket engine prototype developed for deep space missions successfully achieved the targeted thrust force and thermal endurance in static firing tests."
        : "Derin uzay görevleri için geliştirilen hibrit yakıtlı roket motoru prototipi, statik ateşleme testlerinde hedeflenen itki kuvvetini ve termal dayanımı başarıyla sağladı.",
      stats: { 
        thrust: "50 kN", 
        duration: lang === 'en' ? "120 sec" : "120 sn", 
        status: lang === 'en' ? "Tested" : "Test Edildi" 
      }
    },
    {
      id: 4,
      title: lang === 'en'
        ? "International Space Station (ISS) Microgravity Experiments"
        : "Uluslararası Uzay İstasyonu (ISS) Mikroyerçekimi Deneyleri",
      category: "science",
      date: lang === 'en' ? "August 02, 2026" : "02 Ağustos 2026",
      code: "TR-2026-SCI-12",
      fileUrl: "/media/veriseti4.csv",
      description: lang === 'en'
        ? "Samples of biological material and crystallization experiments carried out with the participation of the Turkish space traveler were safely delivered to the laboratory for analysis."
        : "Türk uzay yolcısının katılımıyla gerçekleştirilen biyolojik malzeme ve kristalleştirme deneylerinin numuneleri güvenli bir şekilde analiz edilmek üzere laboratuvara teslim edildi.",
      stats: { 
        samples: lang === 'en' ? "14 Units" : "14 Adet", 
        environment: "Micro-G", 
        status: lang === 'en' ? "Completed" : "Tamamlandı" 
      }
    },
    {
      id: 5,
      title: lang === 'en'
        ? "Space Weather and Van Allen Radiation Belt Observation Report"
        : "Uzay Hava Durumu ve Van Allen Kuşağı Gözlem Raporu",
      category: "science",
      date: lang === 'en' ? "July 20, 2026" : "20 Temmuz 2026",
      code: "TR-2026-ENV-08",
      fileUrl: "/media/veriseti5.csv",
      description: lang === 'en'
        ? "First phase simulations of early warning algorithms established to measure the effects of solar flares and electromagnetic waves on satellite panels were completed."
        : "Güneş patlamaları ve elektromanyetik dalgaların uydu panelleri üzerindeki etkilerini ölçümlemek amacıyla kurulan erken uyarı algoritmalarının ilk faz simülasyonları tamamlandı.",
      stats: { 
        riskLevel: lang === 'en' ? "Low / Nominal" : "Düşük / Nominal", 
        sensors: lang === 'en' ? "Active" : "Aktif", 
        status: lang === 'en' ? "Monitoring" : "İzleniyor" 
      }
    },
    {
      id: 6,
      title: lang === 'en'
        ? "Quantum Communication and Cryptology Infrastructure Feasibility"
        : "Kuantum Haberleşme ve Kriptoloji Altyapı Fizibilitesi",
      category: "technical",
      date: lang === 'en' ? "July 10, 2026" : "10 Temmuz 2026",
      code: "TR-2026-SEC-03",
      fileUrl: "/media/veriseti6.csv",
      description: lang === 'en'
        ? "Infrastructure requirements for ground-satellite tests of quantum key distribution (QKD) technologies, which are unlistenable and mathematically unbreakable, were reported."
        : "Dinlenemez ve kırılması matematiksel olarak imkansız olan kuantum anahtarlama (QKD) teknolojilerinin yer-uydu testleri için altyapı gereksinimleri raporlandı.",
      stats: { 
        protocol: "QKD-V2", 
        security: lang === 'en' ? "Maximum" : "Maksimum", 
        status: lang === 'en' ? "Planning" : "Planlama" 
      }
    }
  ];

  const filteredReports = activeCategory === 'all'
    ? reports
    : reports.filter(r => r.category === activeCategory);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 w-full overflow-x-hidden">
      
      {/* Üst Kurumsal Başlık */}
      <div className="bg-[#030712] border border-slate-900 p-8 md:p-10 rounded-2xl shadow-2xl mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-900/50 text-blue-400 text-xs font-semibold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? "TURKISH SPACE AGENCY • OFFICIAL DOCUMENTATION" : "TÜRKİYE UZAY AJANSI • RESMİ DOKÜMANTASYON"}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide mb-3">
            {lang === 'en' ? "SPACE AGENCY REPORTS" : "UZAY AJANSI RAPORLARI"}
          </h1>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            {lang === 'en'
              ? "Official bulletins and data archives regarding operations, technical tests, and scientific missions carried out by the Turkish Space Agency and affiliated R&D centers."
              : "Türkiye Uzay Ajansı ve bağlı Ar-Ge merkezleri tarafından yürütülen operasyonlara, teknik testlere ve bilimsel misyonlara ait resmi bülten ve veri arşivleri."}
          </p>
        </div>
      </div>

      {/* Filtreleme Sekmeleri */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-[#030712] p-2 rounded-xl border border-slate-900">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === tab.id
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Raporlar Listesi (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReports.map((report) => (
          <div 
            key={report.id}
            className="bg-[#030712] border border-slate-900 hover:border-slate-800 p-6 rounded-2xl transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-black border border-slate-900 text-blue-400 text-[10px] font-mono font-bold">
                  {report.code}
                </span>
                <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-xl border border-slate-900 text-xs font-mono text-slate-400">
                  <div className="w-5 h-5 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                    <Calendar className="w-3 h-3" />
                  </div>
                  <span>{report.date}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-2.5 hover:text-blue-400 transition-colors">
                {report.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {report.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-900/80">
              {/* İstatistik / Veri Etiketleri */}
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(report.stats).map(([key, val], idx) => (
                  <div key={idx} className="bg-black/90 border border-slate-800 p-2.5 rounded-xl text-center shadow-inner">
                    <div className="text-[9px] text-slate-400 font-medium tracking-widest uppercase mb-1">{key}</div>
                    <div className="text-xs font-semibold text-white tracking-wide">{val}</div>
                  </div>
                ))}
              </div>

              {/* İndir Butonu */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-emerald-400 flex items-center gap-2 font-mono font-medium">
                  <div className="w-5 h-5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  {lang === 'en' ? "Verified Record" : "Doğrulanmış Kayıt"}
                </span>
                <a 
                  href={report.fileUrl} 
                  download 
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black hover:bg-blue-600 border border-slate-900 hover:border-blue-500 text-slate-300 hover:text-white text-xs font-medium transition-all shadow-inner cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 shrink-0">
                    <Download className="w-3 h-3" />
                  </div>
                  {lang === 'en' ? "Download PDF" : "PDF İndir"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
