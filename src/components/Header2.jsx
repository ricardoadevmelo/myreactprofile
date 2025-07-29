import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Languages } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Primary navigation">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
            onClick={closeMenu}
            aria-label="Go to homepage"
          >
            Portfolio
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium"
                onClick={closeMenu}
                aria-label={`Navigate to ${link.label}`}
              >
                {language === "en" ? link.label : link.labelPt}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              aria-label={`Switch to ${language === "en" ? "Portuguese" : "English"}`}
            >
              <Languages size={16} />
              <span className="text-sm">
                {language === "en" ? "PT" : "EN"}
              </span>
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label={`Switch to ${language === "en" ? "Portuguese" : "English"}`}
            >
              <Languages size={14} />
              <span className="text-xs">
                {language === "en" ? "PT" : "EN"}
              </span>
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2 border-b border-gray-100 last:border-b-0"
                  onClick={closeMenu}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {language === "en" ? link.label : link.labelPt}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
