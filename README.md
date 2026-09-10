<div align="center">

# 🛰️ TUA KOSMODON
### **Türkiye Uzay Ajansı (TUA) Resmi Portalı & Merkezi Veritabanı**
*Yüksek Çözünürlüklü Uydu Gözlem Arşivi, Stratejik Raporlar ve Uzay Teknolojileri Platformu*

[![Vercel Deployment](https://img.shields.io/badge/Status-Live%20%26%20Production-success?style=for-the-badge&logo=vercel)](https://tua-kosmodon.vercel.app/)
[![Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black?style=for-the-badge&logo=next.js)](https://next.js.org/)
[![Supabase](https://img.shields.io/badge/Database-Supabase%20Cloud-3ecf8e?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

</div>

---

## 🎥 Proje Tanıtım Videosu & Canlı Akış
> *Aşağıdaki video kaydında projenin modern arayüz tasarımı, akıcı tema geçişleri, veritabanı sekmeleri arası geçişler ve modal önizleme özellikleri çalışırken gösterilmektedir.*

<p align="center">
  <img src="./public/media/demo-video.gif" alt="TUA Kosmodon Tanıtım Videosu" width="100%" />
</p>

---

## 📸 Arayüz & Görsel Önizlemeler

> *Platformun farklı modüllerinden ve kurumsal tasarım çizgilerinden detay kareler:*

<p align="center">
  <img src="./public/media/homepage-preview.png" alt="Ana Sayfa Görünümü" width="48%" />
  <img src="./public/media/database-preview.png" alt="Merkezi Veritabanı Arayüzü" width="48%" />
</p>

* **Görsel Tasarım Detayları:** Arayüzde `#030712` bazlı koyu uzay teması, cam efekti (`backdrop-blur`), özel cerulean mavi vurgular (`#3b82f6`) ve monospaced teknik veri etiketleri kullanılarak profesyonel bir kurum kimliği oluşturulmuştur.

---

## 📌 Proje Hakkında

**TUA KOSMODON**, Türkiye Uzay Ajansı'nın vizyoner misyonundan ilham alınarak geliştirilmiş; araştırmacılar, mühendisler ve uzay meraklıları için tasarlanmış kurumsal bir web portalıdır. Modern web teknolojileriyle inşa edilen platform; kurum bünyesinde üretilen stratejik resmi belgeleri, yörünge veri setlerini, yüksek çözünürlüklü uydu görüntülerini ve fırlatma test kayıtlarını tek bir merkezi havuzda toplar.

Proje; bulut tabanlı **Supabase Cloud** veritabanı altyapısı, kesintisiz veri akışı sağlayan yerel fallback (yedek) mimarisi ve tamamen özelleştirilmiş kurumsal arayüzü ile **Vercel** üzerinden canlı olarak hizmet vermektedir.

---

## 🌟 Öne Çıkan Özellikler ve Modüller

### 🗄️ 1. Merkezi Veritabanı Arşivi (`/veritabani`)
Toplam **24.8 Terabyte** arşiv hacmini simüle eden, kategorize edilmiş dinamik veri yönetim paneli:
* 🛰️ **Uydu Görüntüleri:** Yeryüzü gözlem verileri, multispektral haritalar, termal analizler ve *Lightbox* (büyük boyutlu görsel inceleme) entegrasyonlu detay modülü.
* 📄 **Resmi Belgeler & Raporlar:** Stratejik planlar, teknik şartnameler ve yörünge mekaniği analiz raporları.
* 🎬 **Fırlatma & Test Videoları:** Milli hibrit roket motoru ateşleme testleri, vakum odası simülasyonları ve yüksek iştirakli atış kayıtları.
* 📊 **Ham Veri Setleri (CSV / JSON):** GNSS yörünge düzeltme parametreleri, atmosferik gaz yoğunlukları ve telemetri zaman serileri.

### 🌐 2. Çoklu Dil Desteği (Localization)
* `Provider` tabanlı dinamik durum yönetimi sayesinde **Türkçe** ve **İngilizce** dillerinde anlık arayüz geçişi.

### ⚡ 3. Hibrit Veri Yönetim Mimarisi
* Supabase veritabanı bağlantısı ile dinamik kayıt ekleme/çekme.
* Ağ kesintileri veya eksik veri durumlarında devreye giren güvenli yerel statik dosya haritalama (`localFileMap`) koruması.

### 🔍 4. SEO & Arama Motoru Optimizasyonu
* **Google Search Console** mülk sahipliği entegrasyonu tamamlanmıştır.
* `site:` indeksleme ve manuel dizin oluşturma süreçleri aktif olarak yapılandırılmıştır.

---

## 🛠️ Kullanılan Teknolojiler

| Kategori | Teknoloji / Kütüphane | Açıklama |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Hızlı sunucu tarafı işleme ve Turbopack derleme desteği |
| **Veritabanı** | Supabase (`@supabase/supabase-js`) | İlişkisel bulut veritabanı ve güvenli API yönetimi |
| **Stil & UI** | Tailwind CSS & Lucide React | Modern kurumsal koyu tema (`#030712`) ve vektörel simgeler |
| **Hosting & CI/CD** | Vercel | Otomatik GitHub entegrasyonlu bulut dağıtım altyapısı |

---

## ⚙️ Kurulum ve Yerel Çalıştırma

Projeyi kendi bilgisayarınızda (local) ayağa kaldırmak için adım adım takip edebileceğiniz rehber:

1. **Repoyu klonlayın:**
   ```bash
   git clone [https://github.com/ozcanlale-prog/TUA_KOSMODON.git](https://github.com/ozcanlale-prog/TUA_KOSMODON.git)
   cd TUA_KOSMODON
