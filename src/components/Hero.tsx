
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const roles = ["FRONT-END", "WEB DEVELOPER", "REACT.JS", "JAVASCRIPT"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
        }
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
        }
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next role
      }

      setTimeout(type, typingSpeed);
    };

    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
      }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-neon-grid bg-neon-grid opacity-10"></div>
      
      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="text-white">Willian</span>
          <span className="text-neon-blue text-glow ml-3">Sousa</span>
        </h1>
        
        <div className="h-16 flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-medium">
            <span className="text-white">DEV </span>
            <span ref={textRef} className="text-neon-purple text-glow-purple"></span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Desenvolvedor web front-end com conhecimentos em HTML, CSS, JavaScript, 
          React.js, Python, Docker e Git.
        </p>
        
        <div className="flex space-x-4 justify-center mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.5)]"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            Contato
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Saiba mais</span>
          <ChevronDown className="w-6 h-6 text-neon-blue animate-bounce" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-neon-purple/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-neon-blue/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
