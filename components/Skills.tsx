export default function Skills({ lang = 'tr' }: { lang?: 'tr' | 'en' }) {
  
  // Yetenek kategorilerini ve yetkinlikleri her iki dilde tutuyoruz
  const content = {
    tr: {
      sectionTitle: "Teknik Yetkinlikler",
      categories: [
        {
          title: "Yazılım & Web Geliştirme",
          skills: ["Java", "Java ile Mobil", "Python", "Next.js", "Tailwind CSS", "Git / Linux"],
        },
        {
          title: "Veri & Yapay Zeka",
          skills: ["Machine Learning", "LLM Engineering", "Agentic AI"],
        },
        {
          title: "Bilgisayar Bilimleri & Donanım",
          skills: ["Data Structures", "Algoritmalar", "ESP32", "Prototipleme"],
        },
      ]
    },
    en: {
      sectionTitle: "Technical Skills",
      categories: [
        {
          title: "Software & Web Development",
          skills: ["Java", "Mobile Java", "Python", "Next.js", "Tailwind CSS", "Git / Linux"],
        },
        {
          title: "Data & Artificial Intelligence",
          skills: ["Machine Learning", "LLM Engineering", "Agentic AI"],
        },
        {
          title: "Computer Science & Hardware",
          skills: ["Data Structures", "Algorithms", "ESP32", "Prototyping"],
        },
      ]
    }
  };

  // Seçili dile göre datayı alıyoruz
  const data = content[lang] || content['tr'];

  return (
    <section className="w-full py-24 bg-black text-white flex justify-center">
      <div className="max-w-5xl w-full px-6">
        
        {/* Başlığı dinamik hale getirdik */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {data.sectionTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kategorileri seçili dilin dizisinden dönüyoruz */}
          {data.categories.map((category, index) => (
            <div key={index} className="bg-black p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors">
              <h3 className="text-xl font-semibold mb-6 text-zinc-300">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}