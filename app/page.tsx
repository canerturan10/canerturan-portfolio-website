"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DemoDefault from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { translations } from "../translations";

export default function Home() {
  // Dil durumunu yönetiyoruz (Varsayılan: Türkçe)
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  
  // Sözlükten dili çekiyoruz. Eğer hata olursa veya bulamazsa Türkçe'ye (tr) dön.
  const t = translations[lang] || translations['tr'];

  return (
    <div className="flex min-h-screen bg-black text-white relative">
      
      {/* Switcher'a currentLang eklendi */}
      <LanguageSwitcher onLanguageChange={setLang} currentLang={lang} />

     {/* Sidebar'a dil bilgisi gönderildi */}
      <Sidebar lang={lang} />

      <main 
        id="main-content" 
        className="flex-1 ml-20 md:ml-40 flex flex-col transition-all duration-300 overflow-x-hidden"
      >
        
        {/* Giriş Animasyonu */}
        <section id="home" className="h-screen w-full flex items-center justify-center">
          <DemoDefault />
        </section>

        {/* Hakkımda Bölümü (Güvenlik ağları eklendi: || "Türkçe Metin") */}
        <section id="hakkimda" className="py-24 px-6 flex flex-col items-center justify-center text-center bg-black">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {t?.aboutTitle || "Hakkımda"}
            </h2>
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
              <p>
                {t?.aboutText1 || "Ben Caner Turan, karmaşık problemleri kod satırlarıyla çözmeyi seven bir Yazılım Mühendisliği öğrencisiyim. Teknolojiyi sadece bir araç değil, dünyayı daha sürdürülebilir kılacak bir güç olarak görüyorum."}
              </p>
              <p>
                {t?.aboutText2 || "Yazılım dünyasında özellikle veri yapıları, algoritmalar ve makine öğrenmesi üzerine odaklanıyorum. Deniz verilerini kullanarak geliştirdiğim balık tahminleme projelerinden, ESP32 ile kurguladığım gömülü sistemlere kadar geniş bir yelpazede üretmeyi seviyorum."}
              </p>
              <p>
                {t?.aboutText3 || "Kod başında olmadığım zamanlarda, nadir parçalardan oluşan kaktüs koleksiyonumla ilgileniyor veya doğayı keşfederek yeni ilham kaynakları arıyorum. Teknoloji ile doğanın kesiştiği noktada, her zaman daha optimize ve estetik çözümler üretmek için çalışıyorum."}
              </p>
            </div>
          </div>
        </section>

        {/* Projelerim & Yetenekler (Bu dosyalar kendi içlerinde oldukları için şu an TR kalacaklar) */}
        <section id="projeler">
          <Projects lang={lang} />
        </section>
        
        <section id="yetenekler">
          <Skills lang={lang} />
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim" className="py-32 bg-zinc-950 px-6 flex flex-col items-center justify-center border-t border-zinc-800">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              {t?.contactTitle || "İletişim"}
            </h2>
            <p className="text-zinc-400 max-w-lg text-center leading-relaxed">
              {t?.contactDesc || "İş teklifleri, projeler veya sorularınız için bana bu form üzerinden ulaşabilirsiniz."}
              <br />
              {t?.cvText || "İncelemek isterseniz CV'm ektedir."}
            </p>
          </div>

          <a 
            href="/caner-turan-cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-5 bg-white/5 border border-white/10 hover:border-purple-500/50 p-4 pr-6 rounded-2xl transition-all duration-300 hover:bg-white/10 mb-12 w-full max-w-sm shadow-lg hover:shadow-purple-500/10 cursor-pointer"
          >
            <div className="bg-purple-500/20 p-4 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-lg">Caner Turan CV</span>
              <span className="text-zinc-400 text-sm">{t?.viewPdf || "PDF Dosyasını Görüntüle"}</span>
            </div>
            
            <div className="ml-auto text-zinc-500 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
          
          <div className="w-full max-w-3xl bg-[#14161c] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl">
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                    {t?.formName || "Ad Soyad"}
                  </label>
                  <input 
                    type="text" 
                    placeholder={t?.placeholderName || "Adınızı ve soyadınızı yazın"}
                    className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600" 
                  />
                </div>

                <div className="flex flex-col">
                  <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                    {t?.formEmail || "E-posta"}
                  </label>
                  <input 
                    type="email" 
                    placeholder={t?.placeholderEmail || "E-posta adresinizi yazın"}
                    className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                  {t?.formSubject || "Konu Başlığı"}
                </label>
                <input 
                  type="text" 
                  placeholder={t?.placeholderSubject || "Kısa bir konu başlığı yazın"}
                  className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600" 
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                  {t?.formMessage || "Mesajınız"}
                </label>
                <textarea 
                  rows={5} 
                  placeholder={t?.placeholderMessage || "Detayları buraya yazabilirsiniz..."}
                  className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-center">
                <button 
                  type="submit" 
                  onClick={(e) => e.preventDefault()} 
                  className="group flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1"
                >
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="transform group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  {t?.formSubmit || "Mesajı Gönder"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}