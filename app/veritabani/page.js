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

// Kategori çeviri sözlüğü (İngilizce mod desteği için)
const categoryTranslations = {
  'Stratejik Plan': 'Strategic Plan',
  'Araştırma': 'Research',
  'Teknik Şartname': 'Technical Specification',
  'Analiz Raporu': 'Analysis Report',
  'Operasyon': 'Operations',
  'Bilimsel': 'Scientific',
  'Yörünge Görseli': 'Orbit Visual',
  'Termal Analiz': 'Thermal Analysis',
  'Oşinografi': 'Oceanography',
  'Tarım & Çevre': 'Agriculture & Environment',
  'Kıyı Yapısı': 'Coastal Structure',
  'Hidroloji': 'Hydrology',
  'Denetim': 'Inspection',
  'Jeoloji': 'Geology',
  'Kentsel Analiz': 'Urban Analysis',
  'Uzay Hava Durumu': 'Space Weather',
  'Yörünge Verisi': 'Orbit Data',
  'Atmosfer': 'Atmosphere',
  'Telemetri': 'Telemetry',
  'Mühendislik': 'Engineering',
  'Sensör': 'Sensor',
  'Radyasyon': 'Radiation',
  'Tahrik Testi': 'Propulsion Test',
  'Mekanik Test': 'Mechanical Test',
  'Fırlatma': 'Launch',
  'Çevresel Test': 'Environmental Test',
  'Yer Sistemleri': 'Ground Systems',
  'Konferans': 'Conference'
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

// Resmi Belgeler sekmesi için sabit liste
const fixedDocuments = [
  { id: 'DOC-001', name: 'Türkiye Uzay Ajansı 2026-2030 Stratejik Planı', category: 'Stratejik Plan', date: '10.08.2026', size: '8.5 MB', format: 'PDF', fileUrl: '/media/resim1.jpeg' },
  { id: 'DOC-002', name: 'Yapay Zeka Destekli Uydu Veri Analitiği Raporu', category: 'Araştırma', date: '15.08.2026', size: '11.4 MB', format: 'PDF', fileUrl: '/media/resim2.jpeg' },
  { id: 'DOC-003', name: 'Milli Gözlem Uydusu Optik Sistem Teknik Şartnamesi', category: 'Teknik Şartname', date: '20.07.2026', size: '6.1 MB', format: 'PDF', fileUrl: '/media/resim3.jpeg' },
  { id: 'DOC-004', name: 'Yörünge Mekaniği ve Çarpışma Önleme Analiz Raporu', category: 'Analiz Raporu', date: '01.08.2026', size: '9.7 MB', format: 'PDF', fileUrl: '/media/resim4.jpeg' },
  { id: 'DOC-005', name: 'Ankara Yer İstasyonu Operasyonel El Kitabı', category: 'Operasyon', date: '05.07.2026', size: '14.2 MB', format: 'PDF', fileUrl: '/media/resim5.jpeg' },
  { id: 'DOC-006', name: 'Derin Uzay İletişim Protokolleri ve Güvenlik Standardı', category: 'Bilimsel', date: '12.06.2026', size: '5.3 MB', format: 'PDF', fileUrl: '/media/resim6.jpeg' }
];

// Uydu Görüntüleri için sabit liste
const fixedImages = [
  { id: 'IMG-AST', name: 'Dünya Üzerinde Gündoğumunu İzleyen Astronot', category: 'Yörünge Görseli', date: '18.08.2026', size: '12.4 MB', format: 'PNG', fileUrl: localFileMap["IMG-AST"], src: imgAstronaut, description: 'Uluslararası Uzay İstasyonu\'ndan çekilen yüksek çözünürlüklü gündoğumu manzarası.' },
  { id: 'IMG-012', name: 'Anadolu Yarımadası Termal Uydu Katmanı', category: 'Termal Analiz', date: '16.08.2026', size: '15.8 MB', format: 'PNG', fileUrl: localFileMap["IMG-012"], src: img12, description: 'Göktürk-3 uydusu termal sensörlerinden elde edilen sıcaklık dağılım haritası.' },
  { id: 'IMG-014', name: 'Karadeniz Kıyı Akıntıları Multispektral Gözlem', category: 'Oşinografi', date: '14.08.2026', size: '9.2 MB', format: 'PNG', fileUrl: localFileMap["IMG-014"], src: img14, description: 'Deniz suyu sıcaklığı ve plankton yoğunluğu multispektral uydu analizi.' },
  { id: 'IMG-015', name: 'Orta Anadolu Tarımsal Kuraklık İndeksi', category: 'Tarım & Çevre', date: '12.08.2026', size: '11.0 MB', format: 'PNG', fileUrl: localFileMap["IMG-015"], src: img15, description: 'NDVI bitki örtüsü indeks verileriyle oluşturulmuş kuraklık analizi haritası.' },
  { id: 'IMG-016', name: 'İzmir Körfezi Batimetrik Yüzey Modeli', category: 'Kıyı Yapısı', date: '10.08.2026', size: '14.1 MB', format: 'PNG', fileUrl: localFileMap["IMG-016"], src: img16, description: 'Radar altimetre ölçümleriyle çıkarılmış körfez derinlik topoğrafyası.' },
  { id: 'IMG-017', name: 'Toros Dağları Kar Örtüsü ve Su Rezervi', category: 'Hidroloji', date: '08.08.2026', size: '13.5 MB', format: 'PNG', fileUrl: localFileMap["IMG-017"], src: img17, description: 'Kış sezonu sonu kütle hacim hesaplamaları için optik uydu kesiti.' },
  { id: 'IMG-018', name: 'İstanbul Boğazı Gemi Trafik Yoğunluğu Radarı', category: 'Denetim', date: '05.08.2026', size: '8.9 MB', format: 'PNG', fileUrl: localFileMap["IMG-018"], src: img18, description: 'Sentetik Açıklıklı Radar (SAR) ile elde edilen boğaz transit geçiş yoğunluğu.' },
  { id: 'IMG-019', name: 'Van Gölü Havzası Su Seviyesi Değişimi', category: 'Jeoloji', date: '02.08.2026', size: '10.3 MB', format: 'PNG', fileUrl: localFileMap["IMG-019"], src: img19, description: 'Son 5 yıllık uydu altimetri verilerine dayalı kıyı çizgisi değişim analizi.' },
  { id: 'IMG-020', name: 'Ankara Kentleşme ve Isı Adası Dağılımı', category: 'Kentsel Analiz', date: '30.07.2026', size: '16.2 MB', format: 'PNG', fileUrl: localFileMap["IMG-020"], src: img20, description: 'Yüksek çözünürlüklü uydu verileriyle kentsel ısı adası modellemesi.' },
  { id: 'IMG-021', name: 'Güneş Patlaması Koronal Kütle Atımı (CME)', category: 'Uzay Hava Durumu', date: '28.07.2026', size: '18.4 MB', format: 'PNG', fileUrl: localFileMap["IMG-021"], src: img21, description: 'Uzay hava gözlem uydularından kaydedilen yüksek enerjili koronal atım.' }
];

// Ham Veri Setleri için sabit liste
const fixedDatasets = [
  { id: 'DAT-SET-501', name: 'GPS/GNSS Yörünge Düzeltme Parametreleri (CSV)', category: 'Yörünge Verisi', date: '19.08.2026', size: '42.1 MB', format: 'CSV', fileUrl: '/media/veriseti1.csv' },
  { id: 'DAT-SET-502', name: 'Atmosferik Gaz Yoğunluğu ve İyonosfer Ölçümleri (JSON)', category: 'Atmosfer', date: '17.08.2026', size: '28.6 MB', format: 'JSON', fileUrl: '/media/veriseti2.csv' },
  { id: 'DAT-SET-503', name: 'Yer İstasyonu Sinyal Gürültü Oranı Zaman Serisi (CSV)', category: 'Telemetri', date: '14.08.2026', size: '19.4 MB', format: 'CSV', fileUrl: '/media/veriseti3.csv' },
  { id: 'DAT-SET-504', name: 'Uydu İtki Sistemi Yakıt Tüketim Logları (JSON)', category: 'Mühendislik', date: '11.08.2026', size: '15.2 MB', format: 'JSON', fileUrl: '/media/veriseti4.csv' },
  { id: 'DAT-SET-505', name: 'Spektral Bant Kalibrasyon Matris Verileri (CSV)', category: 'Sensör', date: '06.08.2026', size: '34.8 MB', format: 'CSV', fileUrl: '/media/veriseti5.csv' },
  { id: 'DAT-SET-506', name: 'Derin Uzay Keşif Aracı Radyasyon Doz Raporu (JSON)', category: 'Radyasyon', date: '01.08.2026', size: '22.0 MB', format: 'JSON', fileUrl: '/media/veriseti6.csv' }
];

// Videolar için sabit liste
const fixedVideos = [
  { id: 'VID-TST-301', name: 'Milli Hibrit Roket Motoru Ateşleme Testi #4', category: 'Tahrik Testi', date: '15.08.2026', size: '240 MB', format: 'MP4', fileUrl: '/media/video1.mp4' },
  { id: 'VID-TST-302', name: 'Uydu Ayrılma Mekanizması Vakum Odası Testi', category: 'Mekanik Test', date: '10.08.2026', size: '185 MB', format: 'MP4', fileUrl: '/media/video2.mp4' },
  { id: 'VID-TST-303', name: 'Yüksek İrtifa Balon Atış Testi Görüntüleri', category: 'Fırlatma', date: '02.08.2026', size: '310 MB', format: 'MP4', fileUrl: '/media/video3.mp4' },
  { id: 'VID-TST-304', name: 'Güneş Paneli Açılma ve Titreşim Simülasyonu', category: 'Çevresel Test', date: '25.07.2026', size: '150 MB', format: 'MP4', fileUrl: '/media/video4.mp4' },
  { id: 'VID-TST-305', name: 'Anten Takip Sistemi Otomatik Kilitlenme Testi', category: 'Yer Sistemleri', date: '18.07.2026', size: '120 MB', format: 'MP4', fileUrl: '/media/video5.mp4' },
  { id: 'VID-TST-306', name: 'Kritik Tasarım Gözden Geçirme Toplantı Özeti', category: 'Konferans', date: '10.07.2026', size: '95 MB', format: 'MP4', fileUrl: '/media/video6.mp4' }
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
              name: item.name,
              category: item.category,
              date: item.date,
              size: item.size,
              format: item.format,
              fileUrl: localFileMap[item.id] || item.file_url || (targetType === 'images' ? '/media/resim1.jpeg' : '#'),
              src: imageMap[item.id] || imgAstronaut,
              description: item.name
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

  // Kategori adını dile göre çeviren yardımcı fonksiyon
  const getCategoryLabel = (category) => {
    if (lang === 'en' && categoryTranslations[category]) {
      return categoryTranslations[category];
    }
    return category;
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
                      {getCategoryLabel(item.category)}
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
                  {item.name}
                </div>

                <div className="col-span-2 text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-black border border-slate-800 text-[10px]">
                    {getCategoryLabel(item.category)}
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
                src={selectedImage.src?.src || selectedImage.src || imgAstronaut} 
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
