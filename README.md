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

##  Proje Tanıtım Videosu & Canlı Akış
> *Aşağıdaki video kaydında projenin modern arayüz tasarımı, akıcı tema geçişleri, veritabanı sekmeleri arası geçişler ve modal önizleme özellikleri çalışırken gösterilmektedir.*

<p align="center">
  <img src="./public/media/demo-video.gif" alt="TUA Kosmodon Tanıtım Videosu" width="100%" />
</p>

---

##  Arayüz & Görsel Önizlemeler

> <img width="1905" height="1079" alt="Ekran görüntüsü 2026-09-10 163427" src="https://github.com/user-attachments/assets/ac2e0267-01d7-483f-bf78-fbad796549f2" />
<img width="1906" height="1079" alt="Ekran görüntüsü 2026-09-10 163438" src="https://github.com/user-attachments/assets/a9c269d9-f9de-4b53-b243-f41f1973458a" />
<img width="1906" height="1079" alt="Ekran görüntüsü 2026-09-10 163449" src="https://github.com/user-attachments/assets/a54bfd6d-f835-4db2-9927-3f6466169388" />
<img width="1904" height="1079" alt="Ekran görüntüsü 2026-09-10 165805" src="https://github.com/user-attachments/assets/5e6e0dc0-95a6-4a55-8b53-ea0f42bbdd6f" />



* **Görsel Tasarım Detayları:** Arayüzde `#030712` bazlı koyu uzay teması, cam efekti (`backdrop-blur`), özel cerulean mavi vurgular (`#3b82f6`) ve monospaced teknik veri etiketleri kullanılarak profesyonel bir kurum kimliği oluşturulmuştur.

---

##  Arayüz Animasyonları & Etkileşimler

Projede kullanıcı deneyimini artırmak ve uzay temasını pekiştirmek için kullanılan dinamik animasyonlar:

### 1.  Canlı Arka Plan Yıldız ve Yörünge Efektleri
* **Açıklama:** Ana sayfa ve veritabanı arayüzünde akıcı geçişler sağlayan CSS/Tailwind tabanlı parlayan yıldız animasyonları ve nabız efektleri (`animate-pulse`).

> 

https://github.com/user-attachments/assets/1967bc72-5641-49bd-a79e-983aedba7ba7

 
> 

### 2.  Modal ve Lightbox Geçiş Animasyonları
* **Açıklama:** Uydu görsellerine tıklandığında açılan büyük boyutlu önizleme pencerelerinin (Lightbox) arka planı bulanıklaştıran (`backdrop-blur-md`) ve yumuşak geçiş yapan animasyon yapısı.

>  

 https://github.com/user-attachments/assets/55797afc-ee57-4588-9c9c-36c07d2f4420
              
              
              
 

https://github.com/user-attachments/assets/525cd6b6-e7ee-402a-875d-c6b6aa80a580


              
              
              
 https://github.com/user-attachments/assets/4c7c22a4-ca1f-4156-84fb-9bc6819a78e8


> 

---

##  Proje Hakkında

**TUA KOSMODON**, Türkiye Uzay Ajansı'nın vizyoner misyonundan ilham alınarak geliştirilmiş; araştırmacılar, mühendisler ve uzay meraklıları için tasarlanmış kurumsal bir web portalıdır. Modern web teknolojileriyle inşa edilen platform; kurum bünyesinde üretilen stratejik resmi belgeleri, yörünge veri setlerini, yüksek çözünürlüklü uydu görüntülerini ve fırlatma test kayıtlarını tek bir merkezi havuzda toplar.

Proje; bulut tabanlı **Supabase Cloud** veritabanı altyapısı, kesintisiz veri akışı sağlayan yerel fallback (yedek) mimarisi ve tamamen özelleştirilmiş kurumsal arayüzü ile **Vercel** üzerinden canlı olarak hizmet vermektedir.

---

##  Mimari, API ve Veritabanı Entegrasyon Noktaları

Projenin arka plan mimarisinde verilerin çekildiği, harici servislerden anlık konum verilerinin alındığı ve veritabanı tablolarının yönetildiği kritik noktalar şunlardır:

### 1.  Supabase Veritabanı Paneli (`space_records` Tablosu)
* **Kullanıldığı Yer:** Projedeki uydu görüntüleri, resmi belgeler, videolar ve veri setleri Supabase üzerindeki `space_records` tablosunda merkezi olarak saklanır.
* **Nasıl Çalışır:** Sayfa yüklendiğinde (`useEffect` içinde) istemci tarafı API isteği atarak bu tablodaki verileri dinamik olarak çeker.

> <img width="1919" height="1069" alt="image" src="https://github.com/user-attachments/assets/01c8e3a6-c0d1-423b-bc5d-cc24e710af04" />


### 2.  Supabase Client API Entegrasyonu (`createClient`)
* **Kullanıldığı Yer:** `app/veritabani/page.tsx` dosyasının başında ve ilgili servis katmanlarında.
* **Nasıl Çalışır:** `NEXT_PUBLIC_SUPABASE_URL` ve `NEXT_PUBLIC_SUPABASE_ANON_KEY` çevre değişkenleri (environment variables) kullanılarak istemci güvenli bir şekilde Supabase bulut sunucusuna bağlanır.

<img width="1211" height="774" alt="Ekran görüntüsü 2026-09-10 171638" src="https://github.com/user-attachments/assets/b5765f01-042b-49da-978f-361c73c07aab" />


### 3.  Uzay İstasyonu (ISS) Canlı Konum API Entegrasyonu
* **Kullanıldığı Yer:** Uzay istasyonunun anlık yörünge ve coğrafi konum verilerini (enlem, boylam) dış kaynaklı API servisleri üzerinden anlık olarak çeken servis bileşeni.
* **Nasıl Çalışır:** Asenkron veri çekme istekleriyle (fetch/axios) uzay istasyonunun anlık koordinatları arayüze yansıtılır.

>  

https://github.com/user-attachments/assets/c7ff04c2-b50e-4b2e-a7f4-60f6e5e3b945



---

##  Öne Çıkan Özellikler ve Modüller

###  Merkezi Veritabanı Arşivi (`/veritabani`)
Toplam **24.8 Terabyte** arşiv hacmini simüle eden, kategorize edilmiş dinamik veri yönetim paneli:
*  **Uydu Görüntüleri:** Yeryüzü gözlem verileri, multispektral haritalar, termal analizler ve *Lightbox* (büyük boyutlu görsel inceleme) entegrasyonlu detay modülü.
*  **Resmi Belgeler & Raporlar:** Stratejik planlar, teknik şartnameler ve yörünge mekaniği analiz raporları.
*  **Fırlatma & Test Videoları:** Milli hibrit roket motoru ateşleme testleri, vakum odası simülasyonları ve yüksek iştirakli atış kayıtları.
*  **Ham Veri Setleri (CSV / JSON):** GNSS yörünge düzeltme parametreleri, atmosferik gaz yoğunlukları ve telemetri zaman serileri.

###  Çoklu Dil Desteği (Localization)
* `Provider` tabanlı dinamik durum yönetimi sayesinde **Türkçe** ve **İngilizce** dillerinde anlık arayüz geçişi.


https://github.com/user-attachments/assets/b788ea9a-604a-4c1d-8bd4-a571ba63bb92



###  Hibrit Veri Yönetim Mimarisi
* Supabase veritabanı bağlantısı ile dinamik kayıt ekleme/çekme.
* Ağ kesintileri veya eksik veri durumlarında devreye giren güvenli yerel statik dosya haritalama (`localFileMap`) koruması.

###  SEO & Arama Motoru Optimizasyonu
* **Google Search Console** mülk sahipliği entegrasyonu tamamlanmıştır.
* `site:` indeksleme ve manuel dizin oluşturma süreçleri aktif olarak yapılandırılmıştır.
<img width="702" height="365" alt="Ekran görüntüsü 2026-09-10 161024" src="https://github.com/user-attachments/assets/793caa20-e278-4d11-a50b-c75634fb1ccc" />


---

##  Kullanılan Teknolojiler

| Kategori | Teknoloji / Kütüphane | Açıklama |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Hızlı sunucu tarafı işleme ve Turbopack derleme desteği |
| **Veritabanı** | Supabase (`@supabase/supabase-js`) | İlişkisel bulut veritabanı ve güvenli API yönetimi |
| **Stil & UI** | Tailwind CSS & Lucide React | Modern kurumsal koyu tema (`#030712`) ve vektörel simgeler |
| **Hosting & CI/CD** | Vercel | Otomatik GitHub entegrasyonlu bulut dağıtım altyapısı |

---

