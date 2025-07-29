import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { ArrowUp, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      description: "Lawyer & Software Developer. Combining technology, law and education to create innovative and efficient solutions.",
      expertise: "Expertise",
      quickLinks: "Quick Links",
      allRightsReserved: "All rights reserved.",
      madeWith: "Made with",
      scrollToTop: "Scroll to top"
    },
    pt: {
      description: "Advogado & Desenvolvedor de Software. Combinando tecnologia, direito e educação para criar soluções inovadoras e eficientes.",
      expertise: "Expertise",
      quickLinks: "Links Rápidos",
      allRightsReserved: "Todos os direitos reservados.",
      madeWith: "Feito com",
      scrollToTop: "Voltar ao topo"
    }
  };

  const text = content[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border text-dark-text relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-tech-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-law-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-edu-accent rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Brand Section */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                <span className="text-white">
                  Ricardo Melo
                </span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {text.description}
              </p>
              <div className="text-slate-400 space-y-2">
                <p>ricardoadevmelo@gmail.com</p>
                <p>+353-83-056-9070</p>
                <p>Cork, Ireland</p>
              </div>
            </div>

            {/* Expertise Areas - Centered */}
            <div className="space-y-6 text-center">
              <h4 className="text-xl font-semibold">{text.expertise}</h4>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-tech-gradient text-white rounded-full text-xs">
                    {language === 'pt' ? 'Tecnologia' : 'Technology'}
                  </span>
                  <span className="px-3 py-1 bg-law-gradient text-dark-bg rounded-full text-xs">
                    {language === 'pt' ? 'Direito' : 'Law'}
                  </span>
                  <span className="px-3 py-1 bg-edu-gradient text-dark-bg rounded-full text-xs">
                    {language === 'pt' ? 'Educação' : 'Education'}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  {language === 'pt' 
                    ? '11 anos de experiência judicial\nDesenvolvimento full-stack\nEspecialista em educação infantil'
                    : '11 years of judicial experience\nFull-stack development\nEarly childhood education specialist'
                  }
                </p>
              </div>
            </div>

            {/* Quick Links - Right aligned */}
            <div className="space-y-6 text-right">
              <h4 className="text-xl font-semibold">{text.quickLinks}</h4>
              <ul className="space-y-3">
                {[
                  { label: language === 'pt' ? 'Início' : 'Home', href: "#hero" },
                  { label: language === 'pt' ? 'Sobre' : 'About', href: "#about" },
                  { label: language === 'pt' ? 'Educação' : 'Education', href: "#education" },
                  { label: language === 'pt' ? 'Serviços' : 'Services', href: "#services" },
                  { label: "Portfolio", href: "#portfolio" },
                  { label: language === 'pt' ? 'Experiência' : 'Experience', href: "#experience" },
                  { label: language === 'pt' ? 'Certificações' : 'Certifications', href: "#certifications" },
                  { label: language === 'pt' ? 'Contato' : 'Contact', href: "#contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-tech-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-dark-border">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-slate-400 text-sm flex items-center gap-1"
              >
                © {new Date().getFullYear()} Ricardo Melo. {text.madeWith}{" "}
                <Heart size={16} className="text-red-500" fill="currentColor" />{" "}
                {language === 'pt' ? 'e dedicação.' : 'and dedication.'}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-tech-primary transition-colors duration-300 group"
              >
                <span className="text-sm">{text.scrollToTop}</span>
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}