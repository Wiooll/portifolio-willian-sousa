
import { User, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-24 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 to-transparent opacity-50"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Sobre </span>
            <span className="text-neon-blue text-glow">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Profile Section */}
          <div className="md:col-span-2 animate-fade-in-left">
            <div className="glass-card rounded-xl p-5 h-full">
              <div className="flex flex-col items-center justify-center space-y-6 h-full">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-1">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                      <User className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple blur-lg opacity-30 -z-10"></div>
                </div>
                
                <h3 className="text-2xl font-bold">Willian Sousa</h3>
                <p className="text-neon-blue font-medium">DEV WEB FRONT-END Jr</p>
                
                <div className="w-full text-sm text-muted-foreground">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Localização</span>
                    <span className="text-white">Rio de Janeiro, Brasil</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Idiomas</span>
                    <span className="text-white">Português, Inglês (Básico)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Disponibilidade</span>
                    <span className="text-neon-green">Disponível</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Bio Section */}
          <div className="md:col-span-3 animate-fade-in-right">
            <div className="glass-card rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <Briefcase className="w-5 h-5 text-neon-blue mr-2" />
                <h3 className="text-xl font-medium">Resumo Profissional</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sou um entusiasta da tecnologia, atualmente finalizando minha
                graduação em Análise e Desenvolvimento de Sistemas na
                Unisuam, após passagem pela IBMR. Minha formação acadêmica
                é constantemente complementada por cursos livres e estudos
                autodidatas, buscando sempre aprimorar minhas habilidades para
                acompanhar as demandas do mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                No desenvolvimento web, possuo experiência tanto no Frontend
                quanto no Backend:
                <br />
                ✅ Frontend: HTML5, CSS3, JavaScript e React.js para interfaces
                dinâmicas e responsivas.
                <br />
                ✅ Backend: Python com Flask/Django para desenvolvimento de APIs
                robustas e escaláveis.
                <br />
                ✅ Banco de Dados: SQLite para armazenamento e gerenciamento
                eficiente de dados.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-5 h-5 text-neon-blue mr-2" />
                <h3 className="text-xl font-medium">Formação Acadêmica</h3>
              </div>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-neon-blue/30">
                  <p className="text-white font-medium">UNISUAM</p>
                  <p className="text-sm text-muted-foreground">Análise e desenvolvimento de Sistemas</p>
                  <p className="text-xs text-muted-foreground">Janeiro de 2024 - Agosto de 2026</p>
                </div>
                
                <div className="pl-4 border-l-2 border-neon-purple/30">
                  <p className="text-white font-medium">Certificações</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Introdução à Programação</li>
                    <li>Excel Intermediário</li>
                    <li>Programa de cursos integrados: Suporte em TI do Google</li>
                    <li>Fundamentos: dados, dados, em todos os lugares</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
