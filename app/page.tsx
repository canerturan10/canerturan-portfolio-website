import Sidebar from "../components/Sidebar";
import DemoDefault from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      {/* İçerik Alanı: Sol taraftan 40 birim (160px) boşluk bıraktık */}
      <main 
  id="main-content" 
  className="flex-1 ml-20 md:ml-40 flex flex-col transition-all duration-300 overflow-x-hidden"
>
        
        {/* Giriş Animasyonu */}
        <section id="home" className="h-screen w-full flex items-center justify-center">
          <DemoDefault />
        </section>

        {/* Hakkımda Bölümü */}
        <section id="hakkimda" className="py-32 px-10 border-t border-white/5">
          <h2 className="text-4xl font-bold mb-8">Hakkımda</h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg">
            Yazılım dünyasında karmaşık problemleri basit ve estetik çözümlere dönüştürmeyi seviyorum. 
            Makine öğrenmesinden gömülü sistemlere kadar geniş bir yelpazede projeler geliştiriyorum.
          </p>
        </section>

        {/* Hizmetlerim (Yeni Eklendi) */}
        <section id="hizmetler" className="py-32 px-10 bg-zinc-950/50">
          <h2 className="text-4xl font-bold mb-12">Hizmetlerim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/5 rounded-3xl bg-black/20">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Web Geliştirme</h3>
              <p className="text-zinc-500 text-sm">Next.js ve modern teknolojilerle hızlı, SEO uyumlu web uygulamaları.</p>
            </div>
            <div className="p-8 border border-white/5 rounded-3xl bg-black/20">
              <h3 className="text-xl font-bold mb-4 text-green-400">Yapay Zeka Çözümleri</h3>
              <p className="text-zinc-500 text-sm">Veri analitiği ve tahminleme modelleri ile akıllı sistemler tasarımı.</p>
            </div>
          </div>
        </section>

        {/* Projelerim & Yetenekler */}
        <section id="projeler">
          <Projects />
        </section>
        
        <section id="yetenekler">
          <Skills />
        </section>

        {/* İletişim (Yeni Eklendi) */}
        <section id="iletisim" className="py-32 px-10 flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold mb-6">Hadi Tanışalım</h2>
          <p className="text-zinc-500 mb-10">Yeni projeler veya sadece kahve eşliğinde sohbet için yazabilirsin.</p>
          <a href="mailto:caner@example.com" className="px-10 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
            E-posta Gönder
          </a>
        </section>

      </main>
    </div>
  );
}