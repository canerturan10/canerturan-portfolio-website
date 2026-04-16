export default function Skills() {
  const skillCategories = [
    {
      title: "Yazılım & Web Geliştirme",
      skills: ["Java", "Android Studio (View Binding)", "Next.js", "Tailwind CSS", "Git / Linux"],
    },
    {
      title: "Veri & Yapay Zeka",
      skills: ["Machine Learning", "Random Forest", "LLM Engineering", "Agentic AI"],
    },
    {
      title: "Bilgisayar Bilimleri & Donanım",
      skills: ["Data Structures", "Hash Tables (Linear Probing)", "Algoritmalar", "ESP32", "Prototipleme"],
    },
  ];

  return (
    <section className="w-full py-24 bg-zinc-950 text-white flex justify-center border-t border-zinc-800">
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Teknik Yetkinlikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
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