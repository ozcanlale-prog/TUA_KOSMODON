import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Providers from './components/Providers'; // <-- Eklenen kısım
import './globals.css';

export const metadata = {
  title: 'TUA KOSMODON | Ulusal Uzay Portalı',
  description: 'Türkiye Uzay Ajansı Vizyonuyla Dijital Bilgi Ağı, Millî Uzay Programı ve Uzay Teknolojileri Platformu',
  keywords: ['TUA', 'Türkiye Uzay Ajansı', 'Kosmodon', 'Uzay Portalı', 'Millî Uzay Programı', 'Alper Gezeravcı', 'Tuva Cihangir Atasever', 'Kutup Yıldızı AI'],
  authors: [{ name: 'TUA KOSMODON Ekibi' }],
  openGraph: {
    title: 'TUA KOSMODON | Ulusal Uzay Portalı',
    description: 'Türkiye Uzay Ajansı Vizyonuyla Dijital Bilgi Ağı ve Akıllı Uzay Asistanı',
    url: 'https://tua-kosmodon.tr',
    siteName: 'TUA KOSMODON',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TUA KOSMODON | Ulusal Uzay Portalı',
    description: 'Türkiye Uzay Ajansı Vizyonuyla Dijital Bilgi Ağı',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-black text-white relative">
        <Providers> {/* <-- Tüm siteyi dil sağlayıcı ile sarmaladık */}
          {/* --- index.html'den Alınan Derin Uzay Yıldız Efektleri --- */}
          <div className="space-atmosphere"></div>
          <div className="stars stars-distant"></div>
          <div className="stars stars-near"></div>
          
          <div className="prominent-star" style={{ top: '12%', left: '18%', width: '6px', height: '6px' }}></div>
          <div className="prominent-star" style={{ top: '25%', left: '72%', width: '7px', height: '7px' }}></div>
          <div className="prominent-star" style={{ top: '55%', left: '82%', width: '6px', height: '6px' }}></div>
          <div className="prominent-star" style={{ top: '78%', left: '28%', width: '7px', height: '7px' }}></div>
          <div className="prominent-star" style={{ top: '15%', left: '50%', width: '6px', height: '6px' }}></div>

          <div className="medium-star" style={{ top: '8%', left: '35%' }}></div>
          <div className="medium-star" style={{ top: '22%', left: '85%' }}></div>
          <div className="medium-star" style={{ top: '38%', left: '12%' }}></div>
          <div className="medium-star" style={{ top: '50%', left: '45%' }}></div>
          <div className="medium-star" style={{ top: '70%', left: '62%' }}></div>
          <div className="medium-star" style={{ top: '88%', left: '85%' }}></div>

          <div className="shooting-star" style={{ top: '-10%', left: '85%', animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="shooting-star" style={{ top: '15%', left: '110%', animationDelay: '6s', animationDuration: '4.5s' }}></div>
          {/* -------------------------------------------------------- */}

          <Navbar />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />
          
          {/* Sağ Alt Sabit TUA Yapay Zeka Asistanı */}
          <AIAssistant />
        </Providers>
      </body>
    </html>
  );
}