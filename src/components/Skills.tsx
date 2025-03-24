
import { useState } from "react";
import { Code, Server, Database, Terminal, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code,
    color: "text-neon-blue",
    shadow: "shadow-neon",
    skills: [
      { name: "HTML5", level: 75 },
      { name: "CSS3", level: 80 },
      { name: "JavaScript", level: 65 },
      { name: "React.js", level: 70 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "text-neon-purple",
    shadow: "shadow-neon-purple",
    skills: [
      { name: "Python", level: 70 },
      { name: "Flask", level: 65 },
      { name: "Django", level: 50 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    id: "database",
    name: "Banco de Dados",
    icon: Database,
    color: "text-neon-green",
    shadow: "shadow-neon-green",
    skills: [
      { name: "SQLite", level: 70 },
    ],
  },
  {
    id: "tools",
    name: "Ferramentas",
    icon: Terminal,
    color: "text-neon-pink",
    shadow: "shadow-neon-pink",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "Docker", level: 60 },
    ],
  },
  {
    id: "soft",
    name: "Soft Skills",
    icon: Lightbulb,
    color: "text-neon-yellow",
    shadow: "shadow-neon",
    skills: [
      { name: "Trabalho em Equipe", level: 90 },
      { name: "Resolução de Problemas", level: 85 },
      { name: "Comunicação", level: 90 },
      { name: "Adaptabilidade", level: 90 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at right top, rgba(0, 242, 255, 0.08) 0%, transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Minhas </span>
            <span className="text-neon-blue text-glow">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Um conjunto de tecnologias e ferramentas que utilizo para desenvolver soluções web
            modernas, responsivas e de alta qualidade.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "glass-card p-4 rounded-lg transition-all duration-300 group",
                activeCategory === category.id 
                  ? `ring-1 ring-${category.color.replace('text-', '')} ${category.shadow}` 
                  : "hover:bg-white/10"
              )}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <category.icon 
                  className={cn(
                    "w-6 h-6 transition-all duration-300",
                    activeCategory === category.id 
                      ? category.color 
                      : "text-muted-foreground group-hover:text-white"
                  )} 
                />
                <span 
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    activeCategory === category.id 
                      ? "text-white" 
                      : "text-muted-foreground group-hover:text-white"
                  )}
                >
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Skills */}
        <div className="glass-card rounded-xl p-6 animate-fade-in">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className={cn(
                "transition-opacity duration-500", 
                activeCategory === category.id ? "block" : "hidden"
              )}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className={cn("text-sm", category.color)}>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full transition-all duration-1000 ease-out rounded-full",
                          activeCategory === category.id ? "w-0" : "",
                          category.id === "frontend" ? "bg-neon-blue" : "",
                          category.id === "backend" ? "bg-neon-purple" : "",
                          category.id === "database" ? "bg-neon-green" : "",
                          category.id === "tools" ? "bg-neon-pink" : "",
                          category.id === "soft" ? "bg-neon-yellow" : ""
                        )}
                        style={{ 
                          width: `${activeCategory === category.id ? skill.level : 0}%`,
                          boxShadow: `0 0 10px ${
                            category.id === "frontend" ? "#00f2ff" : 
                            category.id === "backend" ? "#8b5cf6" : 
                            category.id === "database" ? "#00ff8b" : 
                            category.id === "tools" ? "#ff00f7" :
                            "#f9ff00"
                          }` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
