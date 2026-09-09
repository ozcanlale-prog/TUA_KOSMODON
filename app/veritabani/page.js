'use client';
import { useState } from 'react';
import { Database, Search, ShieldCheck, FileText, Image as ImageIcon, Video, FileSpreadsheet, Download, HardDrive, Eye, X } from 'lucide-react';
import { useLanguage } from '../components/Providers';

import imgAstronaut from './media/Astronaut Watching Sunrise Above Earth _ Spacewalk 4K Wallpaper.png';
import img12 from './media/indir (12).png';
import img14 from './media/indir (14).png';
import img15 from './media/indir (15).png';
import img16 from './media/indir (16).png';
import img17 from './media/indir (17).png';
import img18 from './media/indir (18).png';
import img19 from './media/indir (19).png';
import img20 from './media/indir (20).png';
import img21 from './media/indir (21).png';

export default function VeritabaniPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('images');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const records = {
    images: [
      { 
        id: "IMG-AST", 
        name: "Astronaut Watching Sunrise Above Earth _ Spacewalk 4K Wallpaper", 
        category: lang === 'en' ? "Spacewalk" : "Spacewalk", 
        date: "02.09.2026", 
        size: "7.8 MB", 
        format: "PNG", 
        src: imgAstronaut,
        description: lang === 'en' 
          ? "Sunrise over Earth and atmospheric layers captured from the astronaut's helmet reflection during an EVA (spacewalk) operation in Low Earth Orbit (LEO)."
          : "Alçak Dünya yörüngesinde (LEO) gerçekleştirilen EVA (uzay yürüyüşü) operasyonu sırasında astronot kask yansımasından yakalanan güneş doğuşu ve atmosfer katmanları telemetri karesi."
      },
      { 
        id: "IMG-012", 
        name: lang === 'en' ? "Star Cluster and Cosmic Dust Cloud" : "Yıldız Kümesi ve Kozmik Toz Bulutu", 
        category: lang === 'en' ? "Astrophysics" : "Astrofizik", 
        date: "26.08.2026", 
        size: "7.4 MB", 
        format: "PNG", 
        src: img12,
        description: lang === 'en'
          ? "Astrophysical data image containing new star-forming regions and dense cosmic gas clouds, recorded by deep space telescopes and spectroscopic analysis units."
          : "Derin uzay teleskopları ve spektroskopik analiz birimleri tarafından kaydedilen, yeni yıldız oluşum bölgelerini ve yoğun kozmik gaz bulutlarını içeren astrofiziksel veri görseli."
      },
      { 
        id: "IMG-014", 
        name: lang === 'en' ? "Jupiter Cloud Belts" : "Jüpiter Bulut Kuşakları", 
        category: lang === 'en' ? "Planets" : "Gezegenler", 
        date: "28.08.2026", 
        size: "5.9 MB", 
        format: "PNG", 
        src: img14,
        description: lang === 'en'
          ? "High-resolution scan of ammonia clouds and storm belts in Jupiter's atmosphere, transmitted from deep space probes under the solar system exoplanet observation program."
          : "Güneş sistemi dış gezegen gözlem programı kapsamında derin uzay sondalarından aktarılan, Jüpiter atmosferindeki amonyak bulutları ve fırtına kuşaklarının yüksek çözünürlüklü taraması."
      },
      { 
        id: "IMG-015", 
        name: lang === 'en' ? "Detailed Moon Surface Topography" : "Ay Yüzeyi Detaylı Topografya", 
        category: lang === 'en' ? "Satellite Surface" : "Uydu Yüzeyi", 
        date: "29.08.2026", 
        size: "4.8 MB", 
        format: "PNG", 
        src: img15,
        description: lang === 'en'
          ? "Laser altimeter topography map of the Moon's south pole crater structures and maria regions, used for AYAP-1 deep space mission preliminary simulations."
          : "AYAP-1 derin uzay misyonu öncü simülasyonları için kullanılan, Ay'ın güney kutbu krater yapılarının ve maria (deniz) bölgelerinin lazer altimetre topoğrafya haritası."
      },
      { 
        id: "IMG-016", 
        name: lang === 'en' ? "Ringed Planet and Its Moon" : "Halkalı Gezegen ve Uydusu", 
        category: lang === 'en' ? "Planets" : "Gezegenler", 
        date: "30.08.2026", 
        size: "6.2 MB", 
        format: "PNG", 
        src: img16,
        description: lang === 'en'
          ? "Spectral reflectance analysis and satellite alignment frames of Saturn and its main ring system composed of ice and rock particles, captured by orbital camera."
          : "Satürn ve buz/kaya parçacıklarından oluşan ana halka sisteminin yörünge kamerasıyla yansıtılan spektral yansıma analizi ve uydu hizalanma kareleri."
      },
      { 
        id: "IMG-017", 
        name: lang === 'en' ? "Satellite Module in Low Earth Orbit" : "Alçak Dünya Yörüngesinde Uydu Modülü", 
        category: lang === 'en' ? "Hardware" : "Donanım", 
        date: "01.09.2026", 
        size: "5.5 MB", 
        format: "PNG", 
        src: img17,
        description: lang === 'en'
          ? "Optical tracking camera recording of solar panel deployment mechanisms and avionic body integration during national observation satellites' orbit insertion."
          : "Millî gözlem uydularının yörüngeye yerleşme anında güneş paneli açma mekanizmalarının ve aviyonik gövde entegrasyonunun optik takip kamerası kaydı."
      },
      { 
        id: "IMG-018", 
        name: lang === 'en' ? "Atmospheric Cyclone and Cloud Formation" : "Atmosferik Siklon ve Bulut Yapılanması", 
        category: lang === 'en' ? "Meteorology" : "Meteoroloji", 
        date: "03.09.2026", 
        size: "4.9 MB", 
        format: "PNG", 
        src: img18,
        description: lang === 'en'
          ? "Infrared and optical band combination of massive low-pressure centered cyclone movement detected in the troposphere layer by meteorological early warning satellites."
          : "Meteorolojik erken uyarı uyduları tarafından troposfer katmanında tespit edilen alçak basınç merkezli devasa siklon hareketinin kızılötesi ve optik bant birleşimi."
      },
      { 
        id: "IMG-019", 
        name: lang === 'en' ? "Earth's Night Lights and Auroras" : "Dünya'nın Gece Işıkları ve Auroralar", 
        category: lang === 'en' ? "Orbital Observation" : "Orbital Gözlem", 
        date: "04.09.2026", 
        size: "6.4 MB", 
        format: "PNG", 
        src: img19,
        description: lang === 'en'
          ? "Matrix of auroral emissions and city center night lighting intensities resulting from the interaction of solar winds with the magnetosphere in polar regions."
          : "Kutup bölgelerinde güneş rüzgarlarının manytosferle etkileşimi sonucu oluşan auroral ışımaların ve şehir merkezlerinin gece aydınlatma yoğunluk matrisi."
      },
      { 
        id: "IMG-020", 
        name: lang === 'en' ? "Earth Ecosystem and Tree Formation" : "Yeryüzü Ekosistem ve Ağaç Formasyonu", 
        category: lang === 'en' ? "Biosphere" : "Biyosfer", 
        date: "05.09.2026", 
        size: "5.1 MB", 
        format: "PNG", 
        src: img20,
        description: lang === 'en'
          ? "Chlorophyll density, biomass distribution, and ecosystem health analysis scan of forested areas using high-resolution multispectral satellite sensors."
          : "Yüksek çözünürlüklü multispektral uydu algılayıcıları ile ormanlık alanların klorofil yoğunluğu, biyokütle dağılımı ve ekosistem sağlığı analiz taraması."
      },
      { 
        id: "IMG-021", 
        name: lang === 'en' ? "Sky and Horizon Line Observation" : "Gökyüzü ve Ufuk Çizgisi Gözlemi", 
        category: lang === 'en' ? "Atmosphere" : "Atmosfer", 
        date: "06.09.2026", 
        size: "4.2 MB", 
        format: "PNG", 
        src: img21,
        description: lang === 'en'
          ? "Rayleigh scattering of the stratospheric layer under sunlight and optical sensor calibration test of the Earth's curvature line."
          : "Stratosferik tabakanın güneş ışığı altındaki Rayleigh saçılması ve yeryüzü eğrilik çizgisinin optik sensörler yardımıyla kalibrasyon testi."
      }
    ],
    documents: [
      { id: "TR-TUA-2026-01", name: lang === 'en' ? "Lunar Research Program (AYAP-1) Main Feasibility and Route Report" : "Ay Araştırma Programı (AYAP-1) Ana Fizibilite ve Rota Raporu", category: lang === 'en' ? "Strategic Plan" : "Stratejik Plan", date: "04.09.2026", size: "14.2 MB", format: "PDF", fileUrl: "/downloads/TR-TUA-2026-01.pdf" },
      { id: "TR-TUA-2026-02", name: lang === 'en' ? "Quantum Key Distribution (QKD) Encryption Specification" : "Kuantum Anahtar Dağıtımı (QKD) Şifreleme Şartnamesi", category: lang === 'en' ? "Technical Spec" : "Teknik Şartname", date: "28.08.2026", size: "4.8 MB", format: "PDF", fileUrl: "/downloads/TR-TUA-2026-02.pdf" },
      { id: "TR-TUA-2026-03", name: lang === 'en' ? "High Altitude Hybrid Rocket Engine Safety Procedures" : "Yüksek İrtifa Hibrit Roket Motoru Güvenlik Prosedürleri", category: lang === 'en' ? "Engineering" : "Mühendislik", date: "15.08.2026", size: "8.5 MB", format: "PDF", fileUrl: "/downloads/TR-TUA-2026-03.pdf" },
      { id: "TR-TUA-2026-04", name: lang === 'en' ? "Gölbaşı Ground Station S/X Band Antenna Calibration Guide" : "Gölbaşı Yer İstasyonu S/X Band Anten Kalibrasyon Kılavuzu", category: lang === 'en' ? "Operations" : "Operasyon", date: "01.08.2026", size: "6.1 MB", format: "PDF", fileUrl: "/downloads/TR-TUA-2026-04.pdf" },
      { id: "TR-TUA-2026-05", name: lang === 'en' ? "National Observation Satellite Orbit Correction Maneuver Analysis" : "Millî Gözlem Uydusu Yörünge Düzeltme Manevra Analizi", category: lang === 'en' ? "Analysis Report" : "Analiz Raporu", date: "20.07.2026", size: "11.4 MB", format: "PDF", fileUrl: "/downloads/TR-TUA-2026-05.pdf" },
      { id: "TR-TUA-2026-06", name: lang === 'en' ? "International Space Station Scientific Experiment Protocols" : "Uluslararası Uzay İstasyonu Bilimsel Deney Protokolleri", category: lang === 'en' ? "Scientific" : "Bilimsel", date: "10.07.2026", size: "9.7 MB", format: "PDF", fileUrl: "/downloads/TR-TUA-2026-06.pdf" }
    ],
    videos: [
      { id: "VID-TST-301", name: lang === 'en' ? "50 kN Hybrid Rocket Engine Static Firing Test (Full Duration)" : "50 kN Hibrit Roket Motoru Statik Ateşleme Testi (Tam Süre)", category: lang === 'en' ? "Test Record" : "Test Kaydı", date: "15.08.2026", size: "1.2 GB", format: "MP4 (4K)", fileUrl: "/downloads/VID-TST-301.mp4" },
      { id: "VID-TST-302", name: lang === 'en' ? "TÜRKSAT-6A Structural Vibration and Vibe Test Simulation" : "TÜRKSAT-6A Yapısal Titreşim ve Vibe Testi Simülasyonu", category: lang === 'en' ? "Engineering" : "Mühendislik", date: "10.07.2026", size: "850 MB", format: "MP4 (1080p)", fileUrl: "/downloads/VID-TST-302.mp4" },
      { id: "VID-TST-303", name: lang === 'en' ? "Ankara Gölbaşı Main Antenna Automation and Signal Locking Moment" : "Ankara Gölbaşı Ana Anten Otomasyon ve Sinyal Kilitlenme Anı", category: lang === 'en' ? "System Record" : "Sistem Kaydı", date: "01.07.2026", size: "420 MB", format: "MP4 (1080p)", fileUrl: "/downloads/VID-TST-303.mp4" },
      { id: "VID-TST-304", name: lang === 'en' ? "Clean Room Satellite Integration and Mechanical Arm Assembly Process" : "Temiz Oda Uydu Entegrasyon ve Mekanik Kol Montaj Süreci", category: lang === 'en' ? "Integration" : "Entegrasyon", date: "18.06.2026", size: "1.5 GB", format: "MP4 (4K)", fileUrl: "/downloads/VID-TST-304.mp4" },
      { id: "VID-TST-305", name: lang === 'en' ? "High Altitude Pressure Chamber Valve Tests and Durability Analysis" : "Yüksek İrtifa Basınç Odası Valf Testleri ve Dayanım Analizi", category: lang === 'en' ? "Test Record" : "Test Kaydı", date: "02.06.2026", size: "640 MB", format: "MP4 (1080p)", fileUrl: "/downloads/VID-TST-305.mp4" },
      { id: "VID-TST-306", name: lang === 'en' ? "Celestial Events Observation Telescope Automatic Positioning Test" : "Gök Olayları Gözlem Teleskobu Otomatik Konumlanma Testi", category: lang === 'en' ? "Optical Test" : "Optik Test", date: "15.05.2026", size: "510 MB", format: "MP4 (1080p)", fileUrl: "/downloads/VID-TST-306.mp4" }
    ],
    datasets: [
      { id: "DAT-SET-501", name: lang === 'en' ? "Van Allen Radiation Belt Time Series Density Matrix" : "Van Allen Radyasyon Kuşağı Zaman Serisi Yoğunluk Matrisi", category: lang === 'en' ? "Scientific Data" : "Bilimsel Veri", date: "06.09.2026", size: "45 MB", format: "CSV", fileUrl: "/downloads/DAT-SET-501.csv" },
      { id: "DAT-SET-502", name: lang === 'en' ? "GÖKTÜRK-3 Two-Line Elements (TLE Daily Archive)" : "GÖKTÜRK-3 İki Satırlı Yörünge Elemanları (TLE Günlük Arşivi)", category: lang === 'en' ? "Telemetry" : "Telemetri", date: "07.09.2026", size: "2.1 MB", format: "JSON", fileUrl: "/downloads/DAT-SET-502.json" },
      { id: "DAT-SET-503", name: lang === 'en' ? "Ankara Ground Station Signal to Noise Ratio (SNR) Records" : "Ankara Yer İstasyonu Sinyal Gürültü Oranı (SNR) Kayıtları", category: lang === 'en' ? "Operational" : "Operasyonel", date: "05.09.2026", size: "88 MB", format: "CSV", fileUrl: "/downloads/DAT-SET-503.csv" },
      { id: "DAT-SET-504", name: lang === 'en' ? "Solar Storm and Geomagnetic Disturbance Index Database" : "Güneş Fırtınası ve Jeomanyetik Bozulma İndeks Veritabanı", category: lang === 'en' ? "Space Weather" : "Uzay Hava", date: "30.08.2026", size: "34 MB", format: "CSV", fileUrl: "/downloads/DAT-SET-504.csv" },
      { id: "DAT-SET-505", name: lang === 'en' ? "Hybrid Engine Fuel Pressure and Temperature Sensor Time Series" : "Hibrit Motor Yakıt Basıncı ve Sıcaklık Sensör Zaman Serileri", category: lang === 'en' ? "Engineering" : "Mühendislik", date: "15.08.2026", size: "120 MB", format: "JSON", fileUrl: "/downloads/DAT-SET-505.json" },
      { id: "DAT-SET-506", name: lang === 'en' ? "Atmospheric Gas Density and Ionospheric Layer Measurements" : "Atmosferik Gaz Yoğunluğu ve İyonosferik Katman Ölçümleri", category: lang === 'en' ? "Scientific Data" : "Bilimsel Veri", date: "10.08.2026", size: "56 MB", format: "CSV", fileUrl: "/downloads/DAT-SET-506.csv" }
    ]
  };

  const tabs = [
    { id: 'images', label: lang === 'en' ? 'Satellite Images' : 'Uydu Görüntüleri', count: records.images.length, icon: ImageIcon },
    { id: 'documents', label: lang === 'en' ? 'Official Documents & Reports' : 'Resmi Belgeler & Raporlar', count: records.documents.length, icon: FileText },
    { id: 'videos', label: lang === 'en' ? 'Launch & Test Videos' : 'Fırlatma & Test Videoları', count: records.videos.length, icon: Video },
    { id: 'datasets', label: lang === 'en' ? 'Raw Datasets (CSV/JSON)' : 'Ham Veri Setleri (CSV/JSON)', count: records.datasets.length, icon: FileSpreadsheet },
  ];

  const currentList = records[activeTab] || [];
  const filteredList = currentList.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6">
      
      {/* Kurumsal Başlık Alanı */}
      <div className="bg-[#030712] border border-slate-800 p-8 rounded-xl shadow-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
              {lang === 'en' ? "TURKISH SPACE AGENCY OFFICIAL ARCHIVE" : "TÜRKİYE UZAY AJANSI RESMİ ARŞİVİ"}
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              {lang === 'en' ? "CENTRAL DATABASE" : "MERKEZİ VERİTABANI"}
            </h1>
            <p className="text-slate-400 text-xs mt-2 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? "Official archive of technical reports, orbit datasets, high-resolution satellite images, and launch test records produced within the institution."
                : "Kurum bünyesinde üretilen teknik raporlar, yörünge veri setleri, yüksek çözünürlüklü uydu görüntüleri ve fırlatma test kayıtları resmi arşivi."}
            </p>
          </div>
          <div className="bg-black border border-slate-800 p-4 rounded-xl flex items-center gap-3 shrink-0">
            <HardDrive className="w-5 h-5 text-blue-400" />
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">
                {lang === 'en' ? "Total Archive Volume" : "Toplam Arşiv Hacmi"}
              </div>
              <div className="text-sm font-bold font-mono text-slate-200">24.8 Terabytes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Kategori Sekmeleri (Başta Uydu Görüntüleri) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {tabs.map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                isActive
                  ? 'bg-blue-600/10 border-blue-500 text-white shadow-md'
                  : 'bg-[#030712] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-black border border-slate-800 text-slate-400'
                }`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight">{tab.label}</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {tab.count} {lang === 'en' ? "Records" : "Kayıt"}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Arama Çubuğu */}
      <div className="bg-[#030712] border border-slate-800 p-4 rounded-xl shadow-lg mb-6 flex items-center justify-between gap-4">
        <div className="w-full relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-slate-500" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={lang === 'en' ? "Search by document name, record ID, or category in the archive..." : "Arşivde belge adı, kayıt ID veya kategori ile arama yapın..."}
            className="w-full bg-black border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono shadow-inner"
          />
        </div>
        <div className="text-xs font-mono text-slate-500 shrink-0 hidden md:block">
          {lang === 'en' ? "Listed:" : "Listelenen:"} <strong className="text-slate-300">{filteredList.length}</strong> {lang === 'en' ? "records" : "kayıt"}
        </div>
      </div>

      {/* GÖRSEL SEKMESİ İÇİN KARTLAR */}
      {activeTab === 'images' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item, idx) => (
            <div key={idx} className="bg-[#030712] border border-slate-800 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between">
              
              <div 
                className="relative h-60 w-full bg-slate-950 border-b border-slate-800 group cursor-pointer overflow-hidden flex items-center justify-center"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src.src || item.src} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-slate-700 text-white text-xs font-mono flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-blue-400" /> {lang === 'en' ? "View Larger Size" : "Büyük Boyut Gör"}
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 border border-slate-800 text-[10px] font-mono text-blue-400 shadow-md">
                  {item.id}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-black px-2 py-0.5 rounded border border-slate-800">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{item.date}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-2 leading-relaxed font-mono">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 font-mono text-[11px]">
                  <span className="text-slate-400">{item.size} • <strong className="text-blue-400">{item.format}</strong></span>
                  <button 
                    onClick={() => setSelectedImage(item)}
                    className="px-3 py-1.5 rounded-lg bg-black hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shadow-inner"
                  >
                    <Download className="w-3 h-3" /> {lang === 'en' ? "Inspect" : "İncele"}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* DİĞER SEKMELER İÇİN TABLO */
        <div className="bg-[#030712] border border-slate-800 rounded-xl overflow-hidden shadow-xl font-mono">
          <div className="grid grid-cols-12 bg-black px-6 py-3 border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
            <div className="col-span-2">{lang === 'en' ? "Record ID" : "Kayıt ID"}</div>
            <div className="col-span-4">{lang === 'en' ? "Document / File Name" : "Belge / Dosya Adı"}</div>
            <div className="col-span-2">{lang === 'en' ? "Category" : "Kategori"}</div>
            <div className="col-span-1">{lang === 'en' ? "Date" : "Tarih"}</div>
            <div className="col-span-1">{lang === 'en' ? "Size / Format" : "Boyut / Format"}</div>
            <div className="col-span-2 text-right">{lang === 'en' ? "Access" : "Erişim"}</div>
          </div>

          <div className="divide-y divide-slate-800/60">
            {filteredList.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 px-6 py-4 items-center text-xs hover:bg-slate-900/40 transition-colors">
                
                <div className="col-span-2 text-blue-400 font-bold">
                  {item.id}
                </div>

                <div className="col-span-4 text-slate-200 font-medium pr-4">
                  {item.name}
                </div>

                <div className="col-span-2 text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-black border border-slate-800 text-[10px]">
                    {item.category}
                  </span>
                </div>

                <div className="col-span-1 text-slate-400 text-[11px]">
                  {item.date}
                </div>

                <div className="col-span-1 text-slate-400 text-[11px]">
                  {item.size} <span className="text-blue-400">({item.format})</span>
                </div>

                <div className="col-span-2 text-right flex items-center justify-end gap-2">
                  <a 
                    href={item.fileUrl} 
                    download 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white text-[11px] transition-all"
                  >
                    <Download className="w-3 h-3 text-slate-400" />
                    {lang === 'en' ? "Download" : "İndir"}
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alt Bilgi Çubuğu */}
      <div className="bg-black border border-slate-800 px-6 py-3.5 rounded-xl mt-6 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'en' ? "Turkish Space Agency Official Data Pool • Encrypted Protocol" : "Türkiye Uzay Ajansı Resmi Veri Havuzu • Şifreli Protokol"}</span>
        </div>
        <span>{lang === 'en' ? "Access Permission: Public / Researcher" : "Erişim Yetkisi: Kamu / Araştırmacı"}</span>
      </div>

      {/* RESİM BÜYÜTME MODALI (LIGHTBOX) */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#030712] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 bg-black border-b border-slate-800 flex items-center justify-between font-mono">
              <div>
                <span className="text-xs text-blue-400 font-bold mr-2">{selectedImage.id}</span>
                <span className="text-xs text-slate-200">{selectedImage.name}</span>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 flex flex-col items-center justify-center bg-slate-950 gap-4">
              <img 
                src={selectedImage.src.src || selectedImage.src} 
                alt={selectedImage.name} 
                className="max-h-[60vh] object-contain rounded-xl border border-slate-800"
              />
              <p className="text-xs text-slate-300 text-center max-w-2xl font-mono bg-black/60 p-3 rounded-xl border border-slate-900">
                {selectedImage.description}
              </p>
            </div>
            <div className="px-6 py-4 bg-black border-t border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>{lang === 'en' ? "Size:" : "Boyut:"} {selectedImage.size} • {lang === 'en' ? "Format:" : "Format:"} {selectedImage.format}</span>
              <span className="text-emerald-400">{lang === 'en' ? "Verified Satellite Archive" : "Doğrulanmış Uydu Arşivi"}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
