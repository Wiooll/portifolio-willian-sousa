
import { useRef, useState } from "react";
import { Phone, Mail, Linkedin, Github, SendHorizontal, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactLinks = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(21) 98434-1881",
      href: "tel:+5521984341881",
    },
    {
      icon: Mail,
      label: "Email",
      value: "wl_sousa@hotmail.com",
      href: "mailto:wl_sousa@hotmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "williansousa-581160180",
      href: "https://www.linkedin.com/in/williansousa-581160180",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Wiooll",
      href: "https://github.com/Wiooll",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at right bottom, rgba(0, 242, 255, 0.08) 0%, transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Entre em </span>
            <span className="text-neon-blue text-glow">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Estou disponível para novas oportunidades e projetos. 
            Entre em contato e vamos conversar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-xl font-medium mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactLinks.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{contact.label}</h4>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-muted-foreground mb-4">
                  Estou aberto a novas oportunidades para aplicar meu
                  conhecimento e contribuir para equipes de desenvolvimento
                  dinâmicas e inovadoras!
                </p>
                <p className="text-white">
                  <span className="text-neon-green">✓</span> Disponível para Freelance
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-medium mb-6">Envie uma Mensagem</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="p-3 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30 mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Mensagem Enviada!</h4>
                  <p className="text-muted-foreground">
                    Obrigado pelo contato. Responderei o mais breve possível.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm mb-2">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full p-3 rounded-lg bg-muted border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white text-sm mb-2">
                      Seu Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full p-3 rounded-lg bg-muted border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all duration-300"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white text-sm mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full p-3 rounded-lg bg-muted border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all duration-300"
                      placeholder="Do que se trata sua mensagem?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white text-sm mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full p-3 rounded-lg bg-muted border border-white/10 text-white focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/50 transition-all duration-300 resize-none"
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensagem</span>
                        <SendHorizontal className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
