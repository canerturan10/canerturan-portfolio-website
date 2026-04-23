"use client";
import React from 'react';

export default function LanguageSwitcher({ 
  onLanguageChange, 
  currentLang 
}: { 
  onLanguageChange: (lang: 'tr' | 'en') => void,
  currentLang: 'tr' | 'en'
}) {
  return (
    // z-[100] ile en üstte, right-6 ile sağ üstte sabit kalır.
    <div className="fixed top-6 right-6 z-[100] flex gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl shadow-xl">
      <button 
        onClick={() => onLanguageChange('tr')}
        className={`flex items-center px-3 py-2 rounded-xl transition-all font-semibold ${currentLang === 'tr' ? 'bg-blue-600 text-white' : 'hover:bg-white/10 text-zinc-400'}`}
      >
        <img src="https://flagcdn.com/w40/tr.png" alt="TR" className="w-5 h-4 mr-2 rounded-[2px] shadow-sm object-cover" /> 
        TR
      </button>
      <button 
        onClick={() => onLanguageChange('en')}
        className={`flex items-center px-3 py-2 rounded-xl transition-all font-semibold ${currentLang === 'en' ? 'bg-blue-600 text-white' : 'hover:bg-white/10 text-zinc-400'}`}
      >
        <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-4 mr-2 rounded-[2px] shadow-sm object-cover" /> 
        EN
      </button>
    </div>
  );
}