"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DemoDefault from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { translations } from "../translations";

export default function Home() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const t = translations[lang] || translations['tr'];

  // Form durumunu yönetmek için yeni stateler
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  // Form Gönderim Fonksiyonu (AJAX)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xbdqwpdg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        // 5 saniye sonra formu eski haline döndür
        setTimeout(() => setStatus('IDLE'), 5000);
        (e.target as HTMLFormElement).reset(); // Formu temizle
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white relative">
      <LanguageSwitcher onLanguageChange={setLang} currentLang={lang} />
      <Sidebar lang={lang} />

      <main id="main-content" className="flex-1 ml-20 md:ml-40 flex flex-col transition-all duration-300 overflow-x-hidden">
        
        <section id="home" className="h-screen w-full flex items-center justify-center">
          <DemoDefault />
        </section>

        {/* Hakkımda, Projeler ve Yetenekler bölümleri aynı kalıyor... */}
        <section id="hakkimda" className="py-24 px-6 flex flex-col items-center justify-center text-center bg-black">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {t?.aboutTitle || "Hakkımda"}
            </h2>
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed font-light">
              <p>{t?.aboutText1}</p>
              <p>{t?.aboutText2}</p>
              <p>{t?.aboutText3}</p>
            </div>
          </div>
        </section>

        <section id="projeler">
          <Projects lang={lang} />
        </section>
        
        <section id="yetenekler">
          <Skills lang={lang} />
        </section>

        {/* Güncellenmiş İletişim Bölümü */}
        <section id="iletisim" className="py-32 bg-zinc-950 px-6 flex flex-col items-center justify-center border-t border-zinc-800">
          
          <div className="text-center mb-10 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              {t?.contactTitle || "İletişim"}
            </h2>
            <p className="text-zinc-400 max-w-lg text-center leading-relaxed">
              {t?.contactDesc}
              <br />
              {t?.cvText}
            </p>
          </div>

          {/* Başarı Bildirimi (Sadece Mesaj Gönderilince Çıkar) */}
          {status === 'SUCCESS' && (
            <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded-2xl animate-bounce">
              {lang === 'tr' ? '✓ Mesajınız başarıyla gönderildi!' : '✓ Your message has been sent successfully!'}
            </div>
          )}

          {/* Hata Bildirimi */}
          {status === 'ERROR' && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-2xl">
              {lang === 'tr' ? '⚠ Bir hata oluştu, lütfen tekrar deneyin.' : '⚠ An error occurred, please try again.'}
            </div>
          )}

          <div className="w-full max-w-3xl bg-[#14161c] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Gönderiliyor Karartması */}
            {status === 'SUBMITTING' && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500"></div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                    {t?.formName}
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder={t?.placeholderName}
                    className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600" 
                  />
                </div>

                <div className="flex flex-col">
                  <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                    {t?.formEmail}
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder={t?.placeholderEmail}
                    className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600" 
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                  {t?.formSubject}
                </label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder={t?.placeholderSubject}
                  className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600" 
                />
              </div>

              <div className="flex flex-col">
                <label className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                  {t?.formMessage}
                </label>
                <textarea 
                  rows={5} 
                  name="message"
                  required
                  placeholder={t?.placeholderMessage}
                  className="bg-[#0b0c10] border border-white/5 rounded-xl p-4 text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-zinc-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-center">
                <button 
                  type="submit" 
                  disabled={status === 'SUBMITTING'}
                  className="group flex items-center gap-3 bg-purple-600 hover:bg-purple-700 disabled:bg-zinc-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1"
                >
                  {status === 'SUBMITTING' ? (
                    <span>{lang === 'tr' ? 'Gönderiliyor...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      {t?.formSubmit}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}