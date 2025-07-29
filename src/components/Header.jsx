import React from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const navLinks = [
  { to: "hero", label: "Home", labelPt: "Início" },
  { to: "about", label: "About", labelPt: "Sobre" },
  { to: "education", label: "Education", labelPt: "Educação" },
  { to: "services", label: "Services", labelPt: "Serviços" },
  { to: "portfolio", label: "Portfolio", labelPt: "Portfolio" },
  { to: "experience", label: "Experience", labelPt: "Experiência" },
  { to: "certifications", label: "Certifications", labelPt: "Certificações" },
  { to: "contact", label: "Contact", labelPt: "Contato" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { language } = useLanguage();

  return (
    <header className="fixed w-full bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border z-40 transition-all">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="font-bold text-dark-text text-2xl">
          <span className="text-white">
            Ricardo Melo
          </span>
        </div>
        
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-tech-primary transition font-medium text-slate-300 relative group"
              >
                {language === 'pt' ? link.labelPt : link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-gradient group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="text-slate-300 hover:text-tech-primary transition"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      
      {open && (
        <div className="md:hidden bg-dark-surface border-t border-dark-border">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-tech-primary font-medium text-slate-300 block py-2"
                  onClick={() => setOpen(false)}
                >
                  {language === 'pt' ? link.labelPt : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}