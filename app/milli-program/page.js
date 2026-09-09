'use client';
import { useState, useEffect } from 'react';
import { Rocket, Clock, MapPin, ShieldCheck, Flame } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../components/Providers';

// Roket görselini app klasöründen import ediyoruz
import roketGorseli from './media/roket.png';

export default function MilliProgramPage() {
  const { lang } = useLanguage();
  // Geri sayım için örnek hedef tarih (9 Eylül 2026, 12:00 TRT)
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 3, minutes: 43, seconds: 21 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 font-mono">
      
      {/* Üst Kurumsal Başlık */}
      <div className="bg-[#030712] border border-slate-800 p-8 rounded-xl shadow-lg mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/40 border border-blue-900/50 text-blue-400 text-xs font-semibold mb-3">
          <Rocket className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? "TUA • STRATEGIC NATIONAL SPACE PROGRAM" : "TUA • STRATEJİK MİLLİ UZAY PROGRAMI"}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          {lang === 'en' ? "ACTIVE LAUNCH AND MISSION CENTER" : "AKTİF FIRLATMA VE GÖREV MERKEZİ"}
        </h1>
        <p className="text-slate-400 text-xs mt-2 max-w-2xl leading-relaxed">
          {lang === 'en'
            ? "Instant telemetry and countdown tracking panel of test activities carried out within the scope of Turkey's independent space access and deep space missions."
            : "Türkiye'nin bağımsız uzay erişimi ve derin uzay misyonları kapsamında yürütülen test faaliyetlerinin anlık telemetri ve geri sayım takip paneli."}
        </p>
      </div>

      {/* Geri Sayım ve Roket Görseli Kartı */}
      <div className="bg-[#030712] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sol Taraf: Metinler ve Sayaç */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 text-red-400 text-[11px] font-semibold mb-4 tracking-wider uppercase">
                <Flame className="w-3.5 h-3.5 animate-pulse text-red-500" />
                <span>{lang === 'en' ? "Active Mission Countdown" : "Aktif Misyon Geri Sayımı"}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-3">
                {lang === 'en' ? "AYAP-1 Test Launch and Orbit Maneuver" : "AYAP-1 Test Fırlatması ve Yörünge Manevrası"}
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                {lang === 'en'
                  ? "The countdown continues for the national launch operation where hybrid rocket engine and deep space communication systems will be tested."
                  : "Hibrit roket motoru ve derin uzay haberleşme sistemlerinin deneneceği millî fırlatma operasyonu için geri sayım sürüyor."}
              </p>
            </div>

            {/* Sayaç Kutuları */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {[
                { label: lang === 'en' ? 'DAYS' : 'GÜN', value: String(timeLeft.days).padStart(2, '0') },
                { label: lang === 'en' ? 'HOURS' : 'SAAT', value: String(timeLeft.hours).padStart(2, '0') },
                { label: lang === 'en' ? 'MINUTES' : 'DAKİKA', value: String(timeLeft.minutes).padStart(2, '0') },
                { label: lang === 'en' ? 'SECONDS' : 'SANİYE', value: String(timeLeft.seconds).padStart(2, '0') },
              ].map((item, idx) => (
                <div key={idx} className="bg-black border border-slate-800 p-3 rounded-xl text-center shadow-inner">
                  <div className="text-lg md:text-2xl font-bold text-white tracking-widest">{item.value}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Lokasyon ve Tarih Bilgileri */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-black px-4 py-2.5 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{lang === 'en' ? "Scheduled:" : "Planlanan:"} <strong className="text-white">{lang === 'en' ? "September 9, 2026, 12:00 TRT" : "9 Eylül 2026, 12:00 TRT"}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-black px-4 py-2.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{lang === 'en' ? "Ground Station:" : "Yer İstasyonu:"} <strong className="text-white">Ankara / Gölbaşı</strong></span>
              </div>
            </div>

          </div>

          {/* Sağ Taraf: Roket / Program Görseli */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden border border-slate-800 bg-black shadow-inner group">
              <img 
                src={roketGorseli.src || roketGorseli} 
                alt="AYAP-1 Roket Fırlatma Testi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-black/80 backdrop-blur-md border border-slate-800 rounded-lg flex items-center justify-between text-[11px]">
                <span className="text-blue-400 font-bold">TUA-PROPULSION-01</span>
                <span className="text-slate-400">{lang === 'en' ? "Static Integration" : "Statik Entegrasyon"}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}