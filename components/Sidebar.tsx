"use client";
import Link from "next/link";
import { FaHome, FaUser, FaFolderOpen, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  const triggerAnimation = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.remove("page-turn-effect");
      void mainContent.offsetWidth;
      mainContent.classList.add("page-turn-effect");
    }
  };

  const menuItems = [
    { name: "Ana Sayfa", href: "#home", icon: <FaHome size={20} />, color: "bg-black", isExternal: false },
    { name: "Hakkımda", href: "#hakkimda", icon: <FaUser size={20} />, color: "bg-blue-600", isExternal: false },
    { name: "Projeler", href: "#projeler", icon: <FaFolderOpen size={20} />, color: "bg-orange-500", isExternal: false },
    { name: "GitHub", href: "https://github.com/canerturan10", icon: <FaGithub size={20} />, color: "bg-zinc-900", isExternal: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/caner-turan-b7a787274/", icon: <FaLinkedin size={20} />, color: "bg-[#0077b5]", isExternal: true },
    { name: "İletişim", href: "#iletisim", icon: <FaEnvelope size={20} />, color: "bg-purple-400", isExternal: false },
  ];

  return (
    // Mobilde w-20, bilgisayarda w-28 genişlik. h-full ile boydan boya. 
    // z-50 ile her zaman en üstte.
    <aside className="flex flex-col w-20 md:w-28 h-screen fixed left-0 top-0 bg-black/40 backdrop-blur-xl border-r border-white/10 z-50 py-10 items-center justify-start">
      <nav className="flex flex-col gap-10 items-center w-full overflow-y-auto no-scrollbar">
        {menuItems.map((item, index) => {
          const Element = item.isExternal ? "a" : Link;
          
          return (
            <Element
              key={index}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              onClick={!item.isExternal ? triggerAnimation : undefined}
              className="group flex flex-col items-center justify-center w-full px-2"
            >
              {/* Renkli ve Büyüyen İkon Kutusu */}
              {/* Renkli ve Büyüyen İkon Kutusu */}
                <div className={`
                    ${item.color} 
                    p-3 md:p-4 
                    text-white 
                    rounded-2xl 
                    shadow-lg 
                    border border-white/10 
                    group-hover:border-white/30 
                    transition-all 
                    duration-300 
                    ease-out 
                    group-hover:scale-110 
                     group-active:scale-95
                                            `}>
                                {item.icon}
                </div>
              
              {/* İkon Altındaki İsimler */}
              <span className="mt-2 text-[10px] md:text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300 text-center">
                {item.name}
              </span>
            </Element>
          );
        })}
      </nav>
    </aside>
  );
}