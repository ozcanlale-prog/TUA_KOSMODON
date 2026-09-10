'use client';
import { useState, useEffect } from 'react';
import { Database, Search, ShieldCheck, FileText, Image as ImageIcon, Video, FileSpreadsheet, Download, HardDrive, Eye, X } from 'lucide-react';
import { useLanguage } from '../components/Providers';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

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

const imageMap = {
    "IMG-AST": imgAstronaut,
    "IMG-012": img12,
    "IMG-014": img14,
    "IMG-015": img15,
    "IMG-016": img16,
    "IMG-017": img17,
    "IMG-018": img18,
    "IMG-019": img19,
    "IMG-020": img20,
    "IMG-021": img21,
};

// Tüm ID'leri (DOC, IMG, DAT, VID dahil) doğrudan projedeki yerel dosyalara bağlayan harita
const localFileMap = {
    "DOC-001": "/media/resim1.jpeg",
    "DOC-002": "/media/resim2.jpeg",
    "DOC-003": "/media/resim3.jpeg",
    "DOC-004": "/media/resim4.jpeg",
    "DOC-005": "/media/resim5.jpeg",
    "DOC-006": "/media/resim6.jpeg",
    "IMG-012": "/media/indir (12).png",
    "IMG-014": "/media/indir (14).png",
    "IMG-015": "/media/indir (15).png",
    "IMG-016": "/media/indir (16).png",
    "IMG-017": "/media/indir (17).png",
    "IMG-018": "/media/indir (18).png",
    "IMG-019": "/media/indir (19).png",
    "IMG-020": "/media/indir (20).png",
    "IMG-021": "/media/indir (21).png",
    "IMG-AST": "/media/Astronaut Watching Sunrise Above Earth _ Spacewalk 4K Wallpaper.png",
    "DAT-SET-501": "/media/veriseti1.csv",
    "DAT-SET-502": "/media/veriseti2.csv",
    "DAT-SET-503": "/media/veriseti3.csv",
    "DAT-SET-504": "/media/veriseti4.csv",
    "DAT-SET-505": "/media/veriseti5.csv",
    "DAT-SET-506": "/media/veriseti6.csv",
    "VID-TST-301": "/media/video1.mp4",
    "VID-TST-302": "/media/video2.mp4",
    "VID-TST-303": "/media/video3.mp4",
    "VID-TST-304": "/media/video4.mp4",
    "VID-TST-305": "/media/video5.mp4",
    "VID-TST-306": "/media/video6.mp4"
};

// Resmi Belgeler sekmesi için iki dilli sabit liste
const fixedDocuments = [
  { 
    id: 'DOC-001', 
    nameTr: 'Türkiye Uzay Ajansı 2026-2030 Stratejik Planı', 
    nameEn: 'Turkish Space Agency 2026-2030 Strategic Plan', 
    categoryTr: 'Stratejik Plan', 
    categoryEn: 'Strategic Plan', 
    date: '10.08.2026', size: '8.5 MB', format: 'PDF', fileUrl: '/media/resim1.jpeg' 
  },
  { 
    id: 'DOC-002', 
    nameTr: 'Yapay Zeka Destekli Uydu Veri Analitiği Raporu', 
    nameEn: 'AI-Powered Satellite Data Analytics Report', 
    categoryTr: 'Araştırma', 
    categoryEn: 'Research', 
    date: '15.08.2026', size: '11.4 MB', format: 'PDF', fileUrl: '/media/resim2.jpeg' 
  },
  { 
    id: 'DOC-003', 
    nameTr: 'Milli Gözlem Uydusu Optik Sistem Teknik Şartnamesi', 
    nameEn: 'National Observation Satellite Optical System Technical Specification', 
    categoryTr: 'Teknik Şartname', 
    categoryEn: 'Technical Specification', 
    date: '20.07.2026', size: '6.1 MB', format: 'PDF', fileUrl: '/media/resim3.jpeg' 
  },
  { 
    id: 'DOC-004', 
    nameTr: 'Yörünge Mekaniği ve Çarpışma Önleme Analiz Raporu', 
    nameEn: 'Orbital Mechanics and Collision Avoidance Analysis Report', 
    categoryTr: 'Analiz Raporu', 
    categoryEn: 'Analysis Report', 
    date: '01.08.2026', size: '9.7 MB', format: 'PDF', fileUrl: '/media/resim4.jpeg' 
  },
  { 
    id: 'DOC-005', 
    nameTr: 'Ankara Yer İstasyonu Operasyonel El Kitabı', 
    nameEn: 'Ankara Ground Station Operational Manual', 
    categoryTr: 'Operasyon', 
    categoryEn: 'Operations', 
    date: '05.07.2026', size: '14.2 MB', format: 'PDF', fileUrl: '/media/resim5.jpeg' 
  },
  { 
    id: 'DOC-006', 
    nameTr: 'Derin Uzay İletişim Protokolleri ve Güvenlik Standardı', 
    nameEn: 'Deep Space Communication Protocols and Security Standard', 
    categoryTr: 'Bilimsel', 
    categoryEn: 'Scientific', 
    date: '12.06.2026', size: '5.3 MB', format: 'PDF', fileUrl: '/media/resim6.jpeg' 
  }
];

// Uydu Görüntüleri için iki dilli sabit liste
const fixedImages = [
  { 
    id: 'IMG-AST', 
    nameTr: 'Dünya Üzerinde Gündoğumunu İzleyen Astronot', 
    nameEn: 'Astronaut Watching Sunrise Above Earth', 
    categoryTr: 'Yörünge Görseli', 
    categoryEn: 'Orbit Visual', 
    date: '18.08.2026', size: '12.4 MB', format: 'PNG', fileUrl: localFileMap["IMG-AST"], src: imgAstronaut, 
    descTr: 'Uluslararası Uzay İstasyonu\'ndan çekilen yüksek çözünürlüklü gündoğumu manzarası.', 
    descEn: 'High-resolution sunrise view captured from the International Space Station.' 
  },
  { 
    id: 'IMG-012', 
    nameTr: 'Anadolu Yarımadası Termal Uydu Katmanı', 
    nameEn: 'Anatolian Peninsula Thermal Satellite Layer', 
    categoryTr: 'Termal Analiz', 
    categoryEn: 'Thermal Analysis', 
    date: '16.08.2026', size: '15.8 MB', format: 'PNG', fileUrl: localFileMap["IMG-012"], src: img12, 
    descTr: 'Göktürk-3 uydusu termal sensörlerinden elde edilen sıcaklık dağılım haritası.', 
    descEn: 'Temperature distribution map obtained from Göktürk-3 satellite thermal sensors.' 
  },
  { 
    id: 'IMG-014', 
    nameTr: 'Karadeniz Kıyı Akıntıları Multispektral Gözlem', 
    nameEn: 'Black Sea Coastal Currents Multispectral Observation', 
    categoryTr: 'Oşinografi', 
    categoryEn: 'Oceanography', 
    date: '14.08.2026', size: '9.2 MB', format: 'PNG', fileUrl: localFileMap["IMG-014"], src: img14, 
    descTr: 'Deniz suyu sıcaklığı ve plankton yoğunluğu multispektral uydu analizi.', 
    descEn: 'Multispectral satellite analysis of seawater temperature and plankton density.' 
  },
  { 
    id: 'IMG-015', 
    nameTr: 'Orta Anadolu Tarımsal Kuraklık İndeksi', 
    nameEn: 'Central Anatolia Agricultural Drought Index', 
    categoryTr: 'Tarım & Çevre', 
    categoryEn: 'Agriculture & Environment', 
    date: '12.08.2026', size: '11.0 MB', format: 'PNG', fileUrl: localFileMap["IMG-015"], src: img15, 
    descTr: 'NDVI bitki örtüsü indeks verileriyle oluşturulmuş kuraklık analizi haritası.', 
    descEn: 'Drought analysis map created with NDVI vegetation index data.' 
  },
  { 
    id: 'IMG-016', 
    nameTr: 'İzmir Körfezi Batimetrik Yüzey Modeli', 
    nameEn: 'Izmir Bay Bathymetric Surface Model', 
    categoryTr: 'Kıyı Yapısı', 
    categoryEn: 'Coastal Structure', 
    date: '10.08.2026', size: '14.1 MB', format: 'PNG', fileUrl: localFileMap["IMG-016"], src: img16, 
    descTr: 'Radar altimetre ölçümleriyle çıkarılmış körfez derinlik topoğrafyası.', 
    descEn: 'Gulf depth topography extracted via radar altimeter measurements.' 
  },
  { 
    id: 'IMG-017', 
    nameTr: 'Toros Dağları Kar Örtüsü ve Su Rezervi', 
    nameEn: 'Taurus Mountains Snow Cover and Water Reserve', 
    categoryTr: 'Hidroloji', 
    categoryEn: 'Hydrology', 
    date: '08.08.2026', size: '13.5 MB', format: 'PNG', fileUrl: localFileMap["IMG-017"], src: img17, 
    descTr: 'Kış sezonu sonu kütle hacim hesaplamaları için optik uydu kesiti.', 
    descEn: 'Optical satellite cross-section for end-of-winter mass volume calculations.' 
  },
  { 
    id: 'IMG-018', 
    nameTr: 'İstanbul Boğazı Gemi Trafik Yoğunluğu Radarı', 
    nameEn: 'Istanbul Strait Vessel Traffic Density Radar', 
    categoryTr: 'Denetim', 
    categoryEn: 'Inspection', 
    date: '05.08.2026', size: '8.9 MB', format: 'PNG', fileUrl: localFileMap["IMG-018"], src: img18, 
    descTr: 'Sentetik Açıklıklı Radar (SAR) ile elde edilen boğaz transit geçiş yoğunluğu.', 
    descEn: 'Strait transit traffic density obtained via Synthetic Aperture Radar (SAR).' 
  },
  { 
    id: 'IMG-019', 
    nameTr: 'Van Gölü Havzası Su Seviyesi Değişimi', 
    nameEn: 'Lake Van Basin Water Level Change', 
    categoryTr: 'Jeoloji', 
    categoryEn: 'Geology', 
    date: '02.08.2026', size: '10.3 MB', format: 'PNG', fileUrl: localFileMap["IMG-019"], src: img19, 
    descTr: 'Son 5 yıllık uydu altimetri verilerine dayalı kıyı çizgisi değişim analizi.', 
    descEn: 'Coastline change analysis based on the last 5 years of satellite altimetry data.' 
  },
  { 
    id: 'IMG-020', 
    nameTr: 'Ankara Kentleşme ve Isı Adası Dağılımı', 
    nameEn: 'Ankara Urbanization and Heat Island Distribution', 
    categoryTr: 'Kentsel Analiz', 
    categoryEn: 'Urban Analysis', 
    date: '30.07.2026', size: '16.2 MB', format: 'PNG', fileUrl: localFileMap["IMG-020"], src: img20, 
    descTr: 'Yüksek çözünürlüklü uydu verileriyle kentsel ısı adası modellemesi.', 
    descEn: 'Urban heat island modeling with high-resolution satellite data.' 
  },
  { 
    id: 'IMG-021', 
    nameTr: 'Güneş Patlaması Koronal Kütle Atımı (CME)', 
    nameEn: 'Solar Flare Coronal Mass Ejection (CME)', 
    categoryTr: 'Uzay Hava Durumu', 
    categoryEn: 'Space Weather', 
    date: '28.07.2026', size: '18.4 MB', format: 'PNG', fileUrl: localFileMap["IMG-021"], src: img21, 
    descTr: 'Uzay hava gözlem uydularından kaydedilen yüksek enerjili koronal atım.', 
    descEn: 'High-energy coronal ejection recorded from space weather observation satellites.' 
  }
];

// Ham Veri Setleri için iki dilli sabit liste
const fixedDatasets = [
  { 
    id: 'DAT-SET-501', 
    nameTr: 'GPS/GNSS Yörünge Düzeltme Parametreleri (CSV)', 
    nameEn: 'GPS/GNSS Orbit Correction Parameters (CSV)', 
    categoryTr: 'Yörünge Verisi', 
    categoryEn: 'Orbit Data', 
    date: '19.08.2026', size: '42.1 MB', format: 'CSV', fileUrl: '/media/veriseti1.csv' 
  },
  { 
    id: 'DAT-SET-502', 
    nameTr: 'Atmosferik Gaz Yoğunluğu ve İyonosfer Ölçümleri (JSON)', 
    nameEn: 'Atmospheric Gas Density and Ionosphere Measurements (JSON)', 
    categoryTr: 'Atmosfer', 
    categoryEn: 'Atmosphere', 
    date: '17.08.2026', size: '28.6 MB', format: 'JSON', fileUrl: '/media/veriseti2.csv' 
  },
  { 
    id: 'DAT-SET-503', 
    nameTr: 'Yer İstasyonu Sinyal Gürültü Oranı Zaman Serisi (CSV)', 
    nameEn: 'Ground Station Signal-to-Noise Ratio Time Series (CSV)', 
    categoryTr: 'Telemetri', 
    categoryEn: 'Telemetry', 
    date: '14.08.2026', size: '19.4 MB', format: 'CSV', fileUrl: '/media/veriseti3.csv' 
  },
  { 
    id: 'DAT-SET-504', 
    nameTr: 'Uydu İtki Sistemi Yakıt Tüketim Logları (JSON)', 
    nameEn: 'Satellite Propulsion System Fuel Consumption Logs (JSON)', 
    categoryTr: 'Mühendislik', 
    categoryEn: 'Engineering', 
    date: '11.08.2026', size: '15.2 MB', format: 'JSON', fileUrl: '/media/veriseti4.csv' 
  },
  { 
    id: 'DAT-SET-505', 
    nameTr: 'Spektral Bant Kalibrasyon Matris Verileri (CSV)', 
    nameEn: 'Spectral Band Calibration Matrix Data (CSV)', 
    categoryTr: 'Sensör', 
    categoryEn: 'Sensor', 
    date: '06.08.2026', size: '34.8 MB', format: 'CSV', fileUrl: '/media/veriseti5.csv' 
  },
  { 
    id: 'DAT-SET-506', 
    nameTr: 'Derin Uzay Keşif Aracı Radyasyon Doz Raporu (JSON)', 
    nameEn: 'Deep Space Exploration Vehicle Radiation Dose Report (JSON)', 
    categoryTr: 'Radyasyon', 
    categoryEn: 'Radiation', 
    date: '01.08.2026', size: '22.0 MB', format: 'JSON', fileUrl: '/media/veriseti6.csv' 
  }
];

// Videolar için iki dilli sabit liste
const fixedVideos = [
  { 
    id: 'VID-TST-301', 
    nameTr: 'Milli Hibrit Roket Motoru Ateşleme Testi #4', 
    nameEn: 'National Hybrid Rocket Engine Firing Test #4', 
    categoryTr: 'Tahrik Testi', 
    categoryEn: 'Propulsion Test', 
    date: '15.08.2026', size: '240 MB', format: 'MP4', fileUrl: '/media/video1.mp4' 
  },
  { 
    id: 'VID-TST-302', 
    nameTr: 'Uydu Ayrılma Mekanizması Vakum Odası Testi', 
    nameEn: 'Satellite Separation Mechanism Vacuum Chamber Test', 
    categoryTr: 'Mekanik Test', 
    categoryEn: 'Mechanical Test', 
    date: '10.08.2026', size: '185 MB', format: 'MP4', fileUrl: '/media/video2.mp4' 
  },
  { 
    id: 'VID-TST-303', 
    nameTr: 'Yüksek İrtifa Balon Atış Testi Görüntüleri', 
    nameEn: 'High Altitude Balloon Launch Test Footage', 
    categoryTr: 'Fırlatma', 
    categoryEn: 'Launch', 
    date: '02.08.2026', size: '310 MB', format: 'MP4', fileUrl: '/media/video3.mp4' 
  },
  { 
    id: 'VID-TST-304', 
    nameTr: 'Güneş Paneli Açılma ve Titreşim Simülasyonu', 
    nameEn: 'Solar Panel Deployment and Vibration Simulation', 
    categoryTr: 'Çevresel Test', 
    categoryEn: 'Environmental Test', 
    date: '25.07.2026', size: '150 MB', format: 'MP4', fileUrl: '/media/video4.mp4' 
  },
  { 
    id: 'VID-TST-305', 
    nameTr: 'Anten Takip Sistemi Otomatik Kilitlenme Testi', 
    nameEn: 'Antenna Tracking System Automatic Lock-on Test', 
    categoryTr: 'Yer Sistemleri', 
    categoryEn: 'Ground Systems', 
    date: '18.07.2026', size: '120 MB', format: 'MP4', fileUrl: '/media/video5.mp4' 
  },
  { 
    id: 'VID-TST-306', 
    nameTr: 'Kritik Tasarım Gözden Geçirme Toplantı Özeti', 
    nameEn: 'Critical Design Review Meeting Summary', 
    categoryTr: 'Konferans', 
    categoryEn: 'Conference', 
    date: '10.07.2026', size: '95 MB', format: 'MP4', fileUrl: '/media/video6.mp4' 
  }
];

export default function VeritabaniPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('images');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [records, setRecords] = useState({ 
    images: [...fixedImages], 
    documents: [...fixedDocuments], 
    videos: [...fixedVideos], 
    datasets: [...fixedDatasets] 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const { data, error } = await supabase.from('space_records').select('*');
        if (error) throw error;

        const categorized = { 
          images: [...fixedImages], 
          documents: [...fixedDocuments], 
          videos: [...fixedVideos], 
          datasets: [...fixedDatasets] 
        };
        
        if (data) {
          data.forEach(item => {
            let targetType = item.file_type;
            if (!targetType || !categorized[targetType]) {
              if (item.id && (item.id.startsWith('IMG') || item.id.startsWith('AST'))) targetType = 'images';
              else if (item.id && item.id.startsWith('DAT')) targetType = 'datasets';
              else if (item.id && item.id.startsWith('VID')) targetType = 'videos';
              else targetType = 'documents';
            }

            const formattedItem = {
              id: item.id,
              nameTr: item.name,
              nameEn: item.name,
              categoryTr: item.category,
              categoryEn: item.category,
              date: item.date,
              size: item.size,
              format: item.format,
              fileUrl: localFileMap[item.id] || item.file_url || (targetType === 'images' ? '/media/resim1.jpeg' : '#'),
              src: imageMap[item.id] || imgAstronaut,
              descTr: item.name,
              descEn: item.name
            };

            if (categorized[targetType]) {
              if (!categorized[targetType].some(existing => existing.id === formattedItem.id)) {
                categorized[targetType].push(formattedItem);
              }
            }
          });
        }

        setRecords(categorized);
      } catch (err) {
        console.error('Veri çekme hatası:', err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecords();
  }, []);

  // Aktif dile göre alanları seçen yardımcı fonksiyonlar
  const getLocalizedName = (item) => (lang === 'en' && item.nameEn) ? item.nameEn : (item.nameTr || item.name);
  const getLocalizedCategory = (item) => (lang === 'en' && item.categoryEn) ? item.categoryEn : (item.categoryTr || item.category);
  const getLocalizedDesc = (item) => (lang === 'en' && item.descEn) ? item.descEn : (item.descTr || item.description || item.name);

  const tabs = [
    { id: 'images', label: lang === 'en' ? 'Satellite Images' : 'Uydu Görüntüleri', count: records.images.length, icon: ImageIcon },
    { id: 'documents', label: lang === 'en' ? 'Official Documents & Reports' : 'Resmi Belgeler & Raporlar', count: records.documents.length, icon: FileText },
    { id: 'videos', label: lang === 'en' ? 'Launch & Test Videos' : 'Fırlatma & Test Videoları', count: records.videos.length, icon: Video },
    { id: 'datasets', label: lang === 'en' ? 'Raw Datasets (CSV/JSON)' : 'Ham Veri Setleri (CSV/JSON)', count: records.datasets.length, icon: FileSpreadsheet },
  ];

  const currentList = records[activeTab] || [];
  const filteredList = currentList.filter(item => {
    const name = getLocalizedName(item).toLowerCase();
    const id = item.id.toLowerCase();
    const category = getLocalizedCategory(item).toLowerCase();
    const search = searchTerm.toLowerCase();
    return name.includes(search) || id.includes(search) || category.includes(search);
  });

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

      {/* Kategori Sekmeleri */}
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

      {loading ? (
        <div className="text-center py-20 text-slate-500 font-mono text-xs">
          {lang === 'en' ? "Connecting to Supabase Database..." : "Supabase Veritabanına Bağlanılıyor..."}
        </div>
      ) : activeTab === 'images' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item, idx) => (
            <div key={idx} className="bg-[#030712] border border-slate-800 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between">
              
              <div 
                className="relative h-60 w-full bg-slate-950 border-b border-slate-800 group cursor-pointer overflow-hidden flex items-center justify-center"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src?.src || item.src || imgAstronaut} 
                  alt={getLocalizedName(item)}
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
                      {getLocalizedCategory(item)}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{item.date}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-2 leading-relaxed font-mono">
                    {getLocalizedName(item)}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    {getLocalizedDesc(item)}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 font-mono text-[11px]">
                  <span className="text-slate-400">{item.size} • <strong className="text-blue-400">{item.format}</strong></span>
                  <a 
                    href={item.fileUrl} 
                    download
                    className="px-3 py-1.5 rounded-lg bg-black hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shadow-inner cursor-pointer"
                  >
                    <Download className="w-3 h-3" /> {lang === 'en' ? "Download" : "İndir"}
                  </a>
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
                  {getLocalizedName(item)}
                </div>

                <div className="col-span-2 text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-black border border-slate-800 text-[10px]">
                    {getLocalizedCategory(item)}
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white text-[11px] transition-all cursor-pointer"
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
          <span>{lang === 'en' ? "Turkish Space Agency Official Data Pool • Supabase Cloud" : "Türkiye Uzay Ajansı Resmi Veri Havuzu • Supabase Bulut"}</span>
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
                <span className="text-xs text-slate-200">{getLocalizedName(selectedImage)}</span>
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
                src={selectedImage.src?.src || selectedImage.src || imgAstronaut} 
                alt={getLocalizedName(selectedImage)} 
                className="max-h-[60vh] object-contain rounded-xl border border-slate-800"
              />
              <p className="text-xs text-slate-300 text-center max-w-2xl font-mono bg-black/60 p-3 rounded-xl border border-slate-900">
                {getLocalizedDesc(selectedImage)}
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
