
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white">
              W<span className="text-neon-blue">.</span>Sousa
            </a>
            <p className="text-muted-foreground mt-2 max-w-xs mx-auto md:mx-0">
              Desenvolvedor web front-end especializado em criar interfaces modernas e responsivas.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://github.com/Wiooll"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/williansousa-581160180"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:wl_sousa@hotmail.com"
                className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,242,255,0.2)]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Willian Sousa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
