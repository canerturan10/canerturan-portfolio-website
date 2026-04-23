export default function Projects() {
  const projects = [
    {
      title: "Balık Tahmin Algoritması",
      description: "Copernicus Marine üzerinden alınan hazır ve açık kaynaklı deniz verilerini kullanarak, denizlerdeki balık yoğunluğunu tahmin eden Machine Learning (Random Forest) modeli.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
    },
    {
      title: "MiniStream",
      description: "Açık kaynak kodlu ve bağımsız bir yayın platformu altyapısı. Linux ortamında geliştirilmiş sunucu mimarisine sahip.",
      tech: ["Linux", "Git", "Backend"],
    },
    {
      title: "Mobil Arayüz Projeleri",
      description: "Android Studio üzerinde View Binding ve Fragment geçişleri kullanılarak tasarlanmış mobil uygulama arayüzleri ve prototipleri.",
      tech: ["Java", "Android Studio", "UI/UX"],
    }
  ];

  return (
    <section className="w-full py-24 bg-zinc-950 text-white flex justify-center border-t border-zinc-800 ">
      <div className="max-w-5xl w-full px-6">
        
        <h2 className="text-4xl font-bold mb-12 text-orange-500 text-center">Öne Çıkan Projelerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:-translate-y-2 hover:border-white transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="text-xs font-medium text-zinc-300 bg-black px-2 py-1 rounded-md">
                    {tech}
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