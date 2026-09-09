'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const dictionary = {
  tr: {
    hero: {
      tag: "Türkiye Uzay Ajansı Resmi Portalı",
      title: "Ay Görevi ve Ötesi İçin Geri Sayım Başladı.",
      desc: "Millî Uzay Programı çerçevesinde geliştirilen hibrit roket motorları, yörünge testleri ve evrenin derinliklerinden yüksek çözünürlüklü ilk kareler.",
      liveBtn: "TUA LİVE İZLE",
      reportBtn: "İÇERİK RAPORLARI"
    },
    sections: {
      mediaArchive: "Günün Uzay Görselleri & Medya Arşivi",
      highRes: "Yüksek Çözünürlüklü Kareler",
      aiAssistant: "TUA AI Asistan"
    },
    footer: {
      title: "TUA KOSMODON | TÜRKİYE UZAY AJANSI",
      rights: "© 2026 Tüm Hakları Saklıdır."
    }
  },
  en: {
    hero: {
      tag: "Turkish Space Agency Official Portal",
      title: "Countdown Started for the Moon Mission and Beyond.",
      desc: "Hybrid rocket engines developed within the scope of the National Space Program, orbital tests, and high-resolution first frames from the depths of the universe.",
      liveBtn: "WATCH TUA LIVE",
      reportBtn: "CONTENT REPORTS"
    },
    sections: {
      mediaArchive: "Space Images of the Day & Media Archive",
      highRes: "High Resolution Frames",
      aiAssistant: "TUA AI Assistant"
    },
    footer: {
      title: "TUA KOSMODON | TURKISH SPACE AGENCY",
      rights: "© 2026 All Rights Reserved."
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('tr');

  // Sayfa ilk yüklendiğinde tarayıcı hafızasındaki (localStorage) tercihi okuyalım
  useEffect(() => {
    const savedLang = localStorage.getItem('tua_lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'tr' ? 'en' : 'tr';
    setLang(newLang);
    localStorage.setItem('tua_lang', newLang); // Tercihi hafızaya kaydediyoruz
  };

  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

export default function Providers({ children }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}