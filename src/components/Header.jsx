import React from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

const navLinks = [
  { to: "hero", label: "Home", labelPt: "Início", href: "#hero" },
  { to: "about", label: "About", labelPt: "Sobre", href: "#about" },
  { to: "education", label: "Education", labelPt: "Educação", href: "#education" },
  { to: "services", label: "Services", labelPt: "Serviços", href: "#services" },
  { to: "portfolio", label: "Portfolio", labelPt: "Portfolio", href: "#portfolio" },
  { to: "experience", label: "Experience", labelPt: "Experiência", href: "#experience" },
  { to: "certifications", label: "Certifications", labelPt: "Certificações", href: "#certifications" },
  { to: "contact", label: "Contact", labelPt: "Contato", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { language } = useLanguage();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70; // Header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border z-40 transition-all">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="font-bold text-dark-text text-2xl">
          <a 
            href="#hero" 
            className="text-white hover:text-tech-primary transition" 
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            aria-label="Ricardo Melo - Ir para o início da página"
          >
            Ricardo Melo
          </a>
        </div>
        
        <ul className="hidden md:flex gap-8" role="navigation" aria-label="Menu principal">
          {navLinks.map(link => (
            <li key={link.to}>
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.to)}
                className="cursor-pointer hover:text-tech-primary transition font-medium text-slate-300 relative group"
                aria-label={`Navegar para a seção ${language === 'pt' ? link.labelPt : link.label}`}
              >
                {language === 'pt' ? link.labelPt : link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-gradient group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="text-slate-300 hover:text-tech-primary transition"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      
      {open && (
        <div className="md:hidden bg-dark-surface border-t border-dark-border" id="mobile-menu">
          <ul className="px-6 py-4 space-y-4" role="menu">
            {navLinks.map(link => (
              <li key={link.to} role="none">
                <a
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.to);
                    setOpen(false);
                  }}
                  className="cursor-pointer hover:text-tech-primary font-medium text-slate-300 block py-2"
                  role="menuitem"
                  aria-label={`Navegar para a seção ${language === 'pt' ? link.labelPt : link.label}`}
                >
                  {language === 'pt' ? link.labelPt : link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}