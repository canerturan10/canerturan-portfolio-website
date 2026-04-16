# Caner Turan | Kişisel Portfolyo 🚀

**Next.js** ve **Tailwind CSS** kullanılarak geliştirilmiş modern, yüksek düzeyde etkileşimli ve tüm cihazlara tam uyumlu (responsive) kişisel portfolyo web sitesi. Bu proje; benzersiz 3 Boyutlu (3D) sayfa çevirme mimarisi, "buzlu cam" (glassmorphism) tasarımlı kenar çubuğu ve gelişmiş arayüz animasyonları ile yazılım mühendisliği vizyonumu sergilemektedir.

## ✨ Öne Çıkan Özellikler

* **3D Sayfa Çevirme Animasyonu:** Modern bir uygulama hissiyatı veren benzersiz gezinme deneyimi için özel CSS keyframe'leri ve perspektif dönüşümleri.
* **Buzlu Cam (Glassmorphism) Kenar Çubuğu:** Renklerle ayrıştırılmış, etkileşimli ikonlara (`react-icons`) sahip, şık ve mobil uyumlu dikey navigasyon (Sidebar) menüsü.
* **Gelişmiş Karşılama (Hero) Animasyonu:** Sayfa açılışında dinamik bir "cihaz birleşme" sekansı oluşturmak için kare tabanlı (frame-based) render sistemi (`Remotion`).
* **Tek Sayfa Uygulaması (SPA) Akışı:** Kesintisiz bir kullanıcı deneyimi için sayfa yenilemek yerine çapalar (#) ile pürüzsüz kaydırma (smooth scroll) mantığı.
* **Tam Uyumlu (Responsive) Tasarım:** Tailwind CSS sayesinde, 3D efektler bozulmadan masaüstü monitörlerden mobil ekranlara kadar kusursuz görünüm.
* **Karanlık Tema (Dark Mode) Estetiği:** Siyah/koyu gri tonlarına ve dikkat çekici canlı vurgu renklerine sahip, tamamen özelleştirilmiş tasarım.

## 🛠️ Teknoloji Yığını

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Stil & Tasarım:** [Tailwind CSS](https://tailwindcss.com/)
* **İkonlar:** [React Icons](https://react-icons.github.io/react-icons/)
* **Animasyonlar:** Özel CSS3 (3D Transforms) & Remotion
* **Sunucu / Yayın:** cPanel ve standart web sunucuları için Statik Dışa Aktarım (Static Export - SSG)

## 📂 Proje Yapısı

Portfolyonun altyapısını oluşturan temel bileşenler:

* `app/page.tsx` - SPA (Tek Sayfa Uygulaması) düzenini kuran ve 3D animasyon sistemini yöneten ana giriş noktası.
* `app/globals.css` - `page-turn-effect` için özel animasyon (`@keyframes`) kodlarını ve kaydırma çubuğunu gizleme kurallarını barındırır.
* `components/Sidebar.tsx` - Etkileşimli, 3D geçişleri tetikleyen navigasyon menüsü.
* `components/Hero.tsx` - Karşılama ekranındaki cihaz animasyonu bileşeni.
* `components/Skills.tsx` & `components/Projects.tsx` - Teknik altyapımı (Java, Makine Öğrenmesi, ESP32, Veri Yapıları) ve öne çıkan projelerimi (Gofish, MiniStream) sergileyen modüller.

## 🚀 Kurulum ve Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için şu adımları izleyin:

1. **Projeyi klonlayın:**
   ```bash
   git clone [https://github.com/canerturan/canerturan-portfolio.git](https://github.com/canerturan/canerturan-portfolio.git)

2. Proje klasörüne girin:

Bash
cd canerturan-portfolio

3. Gerekli paketleri (bağımlılıkları) yükleyin:

Bash
npm install

4. Geliştirme sunucusunu başlatın:

Bash
npm run dev

5. Tarayıcınızda http://localhost:3000 adresine giderek siteyi görüntüleyin.