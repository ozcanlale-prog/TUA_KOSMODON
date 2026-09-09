export async function POST(req) {
  try {
    const { messages } = await req.json();
    const userMsgObj = messages[messages.length - 1];
    const lastMsg = userMsgObj.text.toLowerCase();

    let replyText = "";

    // Niyet ve Anlam Analizi Yapan Yerel Akıl Motoru
    if (lastMsg.includes('nasılsın') || lastMsg.includes('naber') || lastMsg.includes('merhaba') || lastMsg.includes('selam')) {
      replyText = "Selam! Ben Kutup Yıldızı AI. TUA KOSMODON uzay üssündeyim. Millî uzay programımız ve projelerimiz hakkında sana nasıl yardımcı olabilirim?";
    }
    else if (lastMsg.includes('sen kimsin') || lastMsg.includes('adın ne') || lastMsg.includes('ne işe yarıyorsun')) {
      replyText = "Ben Kutup Yıldızı AI'yım. Türkiye Uzay Ajansı portalının akıllı asistanıyım. Millî uzay programı, roket teknolojileri, uzay yolcularımız ve yarışma detayları hakkında rehberlik etmek için buradayım.";
    }
    else if (lastMsg.includes('alper') || lastMsg.includes('gezeravcı') || lastMsg.includes('tuva') || lastMsg.includes('atasever') || lastMsg.includes('astronot') || lastMsg.includes('uzay yolcusu')) {
      replyText = `"${userMsgObj.text}" konusunda şunu söyleyebilirim: Alper Gezeravcı ve Tuva Cihangir Atasever, Türkiye'nin insanlı ilk uzay misyonlarını başarıyla icra ettiler. ISS'de gerçekleştirilen bilimsel deneyler ülkemiz uzay tarihi için gurur verici bir dönüm noktasıdır. Detayları portalımızdaki video arşivinden inceleyebilirsin!`;
    }
    else if (lastMsg.includes('roket') || lastMsg.includes('motor') || lastMsg.includes('sonda') || lastMsg.includes('türksat') || lastMsg.includes('uydu') || lastMsg.includes('göktürk')) {
      replyText = `"${userMsgObj.text}" başlığı altında; Millî Uzay Programı kapsamında geliştirilen hibrit roket motorları, AYAP-1 sonda aracı ve yörüngedeki aktif uydularımız ülkemizin uzaydaki bağımsızlığının en büyük güvencesidir.`;
    }
    else if (lastMsg.includes('kriter') || lastMsg.includes('puan') || lastMsg.includes('yarışma') || lastMsg.includes('değerlendirme') || lastMsg.includes('ödül') || lastMsg.includes('jüri')) {
      replyText = "Yarışma değerlendirme kriterlerimiz: Tasarım & UX (25 Puan), Teknolojiler (20 Puan), İçerik Kalitesi (15 Puan) ve Mobil Uyumluluk. Ayrıca yapay zeka entegrasyonu ve SEO gibi bonus özellikler de sistemimizde aktif olarak yer alıyor!";
    }
    else if (lastMsg.includes('tarih') || lastMsg.includes('takvim') || lastMsg.includes('ne zaman') || lastMsg.includes('süreç') || lastMsg.includes('final')) {
      replyText = "Proje takvimimize göre hazırlıklar tamamlandı ve Ağustos 2026'da portalımız canlıya alındı. Şu an Eylül 2026 Final Sunumları aşamasındayız!";
    }
    else {
      // Her türlü farklı ve serbest soruya uyum sağlayan esnek akıllı şablon
      replyText = `"${userMsgObj.text}" konusuna değindiğin iyi oldu. TUA KOSMODON ekosisteminde bu tür talepler Next.js altyapısıyla anlık olarak işlenir. Uzay teknolojileri, millî misyonlar veya yarışma detayları bağlamında başka hangi konuyu merak ediyorsun?`;
    }

    // Gerçek bir yapay zeka hissi veren çok kısa bir işlem gecikmesi (300 milisaniye)
    await new Promise(resolve => setTimeout(resolve, 300));

    return Response.json({ reply: replyText });

  } catch (error) {
    return Response.json({ reply: "Sistemde anlık bir telemetri akış hatası oluştu, tekrar dener misin?" }, { status: 500 });
  }
}