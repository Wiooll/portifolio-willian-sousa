
import { useState } from "react";
import { ExternalLink, Github, Code, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Página beneficente",
    description: "Uma página de campanha para doaçãos online, com navegação intuitiva e design responsivo.",
    image: "https://raw.githubusercontent.com/Wiooll/portifolio-willian-sousa/refs/heads/main/public/dan..png",
    tags: ["React.js", "Tailwind CSS", "TypeScript"],
    demo: "https://ajudeodaniel.netlify.app/",
    github: "https://github.com/Wiooll/ajudadaniel",
    featured: true,
  },
  {
    id: 2,
    title: "ListaÊ - Web aplicativo de lista de compras",
    description: "ListaÊ é um aplicativo de lista de compras desenvolvido com React, TypeScript e Firebase. O objetivo é criar uma ferramenta simples e eficaz para gerenciar listas de compras.",
    image: "https://raw.githubusercontent.com/Wiooll/portifolio-willian-sousa/refs/heads/main/public/listae.png",
    tags: ["React.js", "TypeScript", "Supabase"],
    demo: "https://listae.netlify.app/",
    github: "https://github.com/Wiooll/ListaE",
    featured: false,
  },
  {
    id: 3,
    title: "Web Page Monitor",
    description: "Este projeto é um monitor de páginas web que detecta alterações no conteúdo de uma URL específica e exibe notificações no sistema operacional. Agora, ele possui uma interface web com Flask, permitindo configurar a URL dinamicamente e visualizar logs em tempo real.",
    image: "",
    tags: ["React.js", "JavaScript", "Charts.js"],
    demo: "https://alertpy.onrender.com/",
    github: "https://github.com/Wiooll/alert.py",
    featured: true,
  },
  {
    id: 4,
    title: "Portfólio Pessoal",
    description: "Site responsivo para mostrar projetos e habilidades profissionais.",
    image: "https://raw.githubusercontent.com/Wiooll/portifolio-willian-sousa/refs/heads/main/public/Port..png",
    tags: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "TypeScript"],
    demo: "https://portifoliowillian.netlify.app",
    github: "https://github.com/Wiooll/portifolio-willian-sousa",
    featured: true,
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : (filter === "featured" ? projects.filter(p => p.featured) : projects);

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at left top, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Meus </span>
            <span className="text-neon-blue text-glow">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Uma seleção dos meus projetos recentes, demonstrando minhas habilidades
            em desenvolvimento web frontend e backend.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-2 rounded-lg transition-all duration-300",
              filter === "all"
                ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/30 shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                : "text-white border border-white/10 hover:border-neon-blue/30 hover:text-neon-blue"
            )}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={cn(
              "px-4 py-2 rounded-lg transition-all duration-300",
              filter === "featured"
                ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                : "text-white border border-white/10 hover:border-neon-purple/30 hover:text-neon-purple"
            )}
          >
            Destaque
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="neon-border glass-card rounded-xl overflow-hidden transition-all duration-500 animate-fade-in group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                
                <div 
                  className={cn(
                    "absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300",
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  )}
                >
                  <a 
                    href={project.demo}
                    className="p-3 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/30 transition-all duration-300 shadow-[0_0_10px_rgba(0,242,255,0.3)]"
                    title="View Demo"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.github}
                    className="p-3 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-all duration-300"
                    title="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-neon-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="text-sm text-muted-foreground hover:text-white flex items-center gap-1 transition-colors duration-300"
                  >
                    <Code className="w-4 h-4" />
                    Código fonte
                  </a>
                  <a
                    href={project.demo}
                    className="text-sm text-neon-blue flex items-center gap-1 transition-colors duration-300"
                  >
                    Ver Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
                    Destaque
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Wiooll"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg text-white flex items-center gap-2 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
