
import { useState, useEffect } from "react";
import { Menu, X, Code, User, Briefcase, Mail, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Início", href: "#home", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Habilidades", href: "#skills", icon: Code },
    { name: "Projetos", href: "#projects", icon: Briefcase },
    { name: "Contato", href: "#contact", icon: Mail },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className="text-2xl font-bold text-white relative group"
          >
            <span className="relative z-10 group-hover:text-neon-blue transition-colors duration-300">
              W<span className="text-neon-blue animate-neon-flicker">.</span>Sousa
            </span>
            <span className="absolute -inset-1 rounded-md bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-neon-blue transition-colors duration-300 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-neon-blue" />
            ) : (
              <Menu className="h-6 w-6 hover:text-neon-blue transition-colors duration-300" />
            )}
          </button>

          {/* Mobile Navigation Menu */}
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden transition-all duration-500 ease-in-out",
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <div className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl text-white hover:text-neon-blue transition-colors duration-300 flex items-center space-x-2"
                  onClick={closeMenu}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
