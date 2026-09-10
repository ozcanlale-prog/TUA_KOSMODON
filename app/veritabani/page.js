'use client';
import { useState } from 'react';
import { Database, Search, ShieldCheck, FileText, Image as ImageIcon, Video, FileSpreadsheet, Download, HardDrive, Eye, X } from 'lucide-react';
import { useLanguage } from '../components/Providers';

import imgAstronaut from './media/Astronaut Watching Sunrise Above Earth _ Spacewalk 4K Wallpaper.png';

export default function VeritabaniPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('images');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Veritabanı yerine doğrudan yerel public/media/ dosyalarına bağlı statik ve kusursuz veri seti
  const records = {
    images: [
      { id: 'IMG-012', name: 'Yıldız Kümesi ve Kozmik Toz Bulutu', category: 'Astrofizik', date: '26.08.2026', size: '7.4 MB', format: 'JPEG', fileUrl: '/media/resim1.jpeg', src: '/media/resim1.jpeg', description: 'Yıldız Kümesi ve Kozmik Toz Bulutu yüksek çözünürlüklü uydu görseli.' },
      { id: 'IMG-014', name: 'Jüpiter Bulut Kuşakları', category: 'Gezegenler', date: '28.08.2026', size: '5.9 MB', format: 'JPEG', fileUrl: '/media/resim2.jpeg', src: '/media/resim2.jpeg', description: 'Jüpiter atmosferik bulut kuşakları detaylı gözlem karesi.' },
      { id: 'IMG-015', name: 'Ay Yüzeyi Detaylı Topografya', category: 'Uydu Yüzeyi', date: '29.08.2026', size: '4.8 MB', format: 'JPEG', fileUrl: '/media/resim3.jpeg', src: '/media/resim3.jpeg', description: 'Ay yüzeyi kraterleri ve detaylı topografik haritalama görseli.' },
      { id: 'IMG-016', name: 'Halkalı Gezegen ve Uydusu', category: 'Gezegenler', date: '30.08.2026', size: '6.2 MB', format: 'JPEG', fileUrl: '/media/resim4.jpeg', src: '/media/resim4.jpeg', description: 'Satürn benzeri halkalı gezegen ve yörünge uydusu.' },
      { id: 'IMG-017', name: 'Alçak Dünya Yörüngesinde Uydu Modülü', category: 'Donanım', date: '01.09.2026', size: '5.5 MB', format: 'JPEG', fileUrl: '/media/resim5.jpeg', src: '/media/resim5.jpeg', description: 'Alçak Dünya yörüngesinde görev yapan yerli uydu modülü.' },
      { id: 'IMG-018', name: 'Atmosferik Siklon ve Bulut Yapılanması', category: 'Meteoroloji', date: '03.09.2026', size: '4.9 MB', format: 'JPEG', fileUrl: '/media/resim6.jpeg', src: '/media/resim6.jpeg', description: 'Uydu kamerasından yansıyan büyük ölçekli atmosferik siklon yapısı.' }
    ],
    datasets: [
      { id: 'DAT-SET-501', name: 'Van Allen Radyasyon Kuşağı Zaman Serisi Yoğunluk Matrisi', category: 'Bilimsel Veri', date: '06.09.2026', size: '45 MB', format: 'CSV', fileUrl: '/media/veriseti1.csv' },
      { id: 'DAT-SET-502', name: 'GÖKTÜRK-3 İki Satırlı Yörünge Elemanları (TLE Günlük Arşivi)', category: 'Telemetri', date: '07.09.2026', size: '2.1 MB', format: 'CSV', fileUrl: '/media/veriseti2.csv' },
      { id: 'DAT-SET-503', name: 'Ankara Yer İstasyonu Sinyal Gürültü Oranı (SNR) Kayıtları', category: 'Operasyonel', date: '05.09.2026', size: '88 MB', format: 'CSV', fileUrl: '/media/veriseti3.csv' },
      { id: 'DAT-SET-504', name: 'Güneş Fırtınası ve Jeomanyetik Bozulma İndeks Veritabanı', category: 'Uzay Hava', date: '30.08.2026', size: '34 MB', format: 'CSV', fileUrl: '/media/veriseti4.csv' },
      { id: 'DAT-SET-505', name: 'Hibrit Motor Yakıt Basıncı ve Sıcaklık Sensör Zaman Serileri', category: 'Mühendislik', date: '15.08.2026', size: '120 MB', format: 'CSV', fileUrl: '/media/veriseti5.csv' },
      { id: 'DAT-SET-506', name: 'Atmosferik Gaz Yoğunluğu ve İyonosferik Katman Ölçümleri', category: 'Bilimsel Veri', date: '10.08.2026', size: '56 MB', format: 'CSV', fileUrl: '/media/veriseti6.csv' }
    ],
    videos: [
      { id: 'VID-TST-301', name: '50 kN Hibrit Roket Motoru Statik Ateşleme Testi (Tam Süre)', category: 'Test Kaydı', date: '15.08.2026', size: '1.2 GB', format: 'MP4', fileUrl: '/media/video1.mp4' },
      { id: 'VID-TST-302', name: 'TÜRKSAT-6A Yapısal Titreşim ve Vibe Testi Simülasyonu', category: 'Mühendislik', date: '10.07.2026', size: '850 MB', format: 'MP4', fileUrl: '/media/video2.mp4' },
      { id: 'VID-TST-303', name: 'Ankara Gölbaşı Ana Anten Otomasyon ve Sinyal Kilitlenme Anı', category: 'Sistem Kaydı', date: '01.07.2026', size: '420 MB', format: 'MP4', fileUrl: '/media/video3.mp4' },
      { id: 'VID-TST-304', name: 'Temiz Oda Uydu Entegrasyon ve Mekanik Kol Montaj Süreci', category: 'Entegrasyon', date: '18.06.2026', size: '1.5 GB', format: 'MP4', fileUrl: '/media/video4.mp4' },
      { id: 'VID-TST-305', name: 'Yüksek İrtifa Basınç Odası Valf Testleri ve Dayanım Analizi', category: 'Test Kaydı', date: '02.06.2026', size: '640 MB', format: 'MP4', fileUrl: '/media/video5.mp4' },
      { id: 'VID-TST-306', name: 'Gök Olayları Gözlem Teleskobu Otomatik Konumlanma Testi', category: 'Optik Test', date: '15.05.2026', size: '510 MB', format: 'MP4', fileUrl: '/media/video6.mp4' }
    ],
    documents: []
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

      {activeTab === 'images' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item, idx) => (
            <div key={idx} className="bg-[#030712] border border-slate-800 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between">
              
              <div 
                className="relative h-60 w-full bg-slate-950 border-b border-slate-800 group cursor-pointer overflow-hidden flex items-center justify-center"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
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
          <span>{lang === 'en' ? "Turkish Space Agency Official Data Pool • Local Storage" : "Türkiye Uzay Ajansı Resmi Veri Havuzu • Yerel Depolama"}</span>
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
                src={selectedImage.src} 
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
