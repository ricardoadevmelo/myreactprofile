import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Code, Scale, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      greeting: "Hi, I'm",
      role: "Education Specialist, Software Developer & Lawyer",
      subtitle: "",
      description: "Brazilian lawyer with a strong background in the judicial field, holding a degree in Systems Analysis and Development and currently pursuing postgraduate studies in Early Childhood Education. Based in Cork, Ireland, blending legal expertise with technological innovation and progressive educational methodologies. A results-driven professional known for creativity, autonomy, and excellent communication skills, committed to turning ideas into impactful, real-world solutions.",
      cta: "Get In Touch",
      scroll: "Scroll Down"
    },
    pt: {
      greeting: "Olá, eu sou",
      role: "Especialista em Educação, Desenvolvedor de Software & Advogado",
      subtitle: "",
      description: "Advogado brasileiro com sólida atuação na área jurídica, graduado em Análise e Desenvolvimento de Sistemas e atualmente cursando pós-graduação em Educação Infantil. Residente em Cork, Irlanda, une conhecimentos jurídicos consolidados à inovação tecnológica e a metodologias educacionais contemporâneas. Profissional focado em resultados, com perfil criativo, autônomo e excelente comunicação, comprometido em transformar ideias em soluções relevantes e impactantes.",
      cta: "Entre em Contato",
      scroll: "Role para Baixo"
    }
  };

  const text = content[language];

  return (
    <section id="hero" className="min-h-screen bg-dark-gradient text-dark-text relative overflow-hidden">
      {/* Background Pattern with themed colors */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-tech-accent rounded-full"></div>
        <div className="absolute top-40 right-32 w-16 h-16 border border-law-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-edu-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-tech-primary rounded-full"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-10 text-tech-accent opacity-20 animate-float" size={40} />
        <Scale className="absolute top-1/3 right-16 text-law-accent opacity-20 animate-float" size={36} style={{animationDelay: '2s'}} />
        <GraduationCap className="absolute bottom-1/3 left-16 text-edu-accent opacity-20 animate-float" size={38} style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block mb-4 text-slate-200">{text.greeting}</span>
              <span className="text-white">
                Ricardo Melo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
              {text.role}
            </p>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              {text.subtitle}
            </p>
            
            <p className="text-base text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              "{text.description}"
            </p>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-tech-gradient rounded-full shadow-lg">
              <Code size={24} />
              <span className="font-medium text-white">
                {language === 'pt' ? 'Tecnologia' : 'Technology'}
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-law-gradient rounded-full shadow-lg">
              <Scale size={24} />
              <span className="font-medium text-dark-bg">
                {language === 'pt' ? 'Direito' : 'Law'}
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-edu-gradient rounded-full shadow-lg">
              <GraduationCap size={24} />
              <span className="font-medium text-dark-bg">
                {language === 'pt' ? 'Educação' : 'Education'}
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <a
              href="#portfolio"
              className="bg-tech-primary text-dark-bg px-8 py-4 rounded-full font-semibold text-lg hover:bg-tech-secondary hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              {language === 'pt' ? 'Ver Projetos' : 'View Projects'}
            </a>
            <a
              href="#contact"
              className="border-2 border-dark-text text-dark-text px-8 py-4 rounded-full font-semibold text-lg hover:bg-dark-text hover:text-dark-bg transition-all flex items-center gap-2 shadow-lg"
            >
              {text.cta}
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <p className="text-slate-400 text-sm mb-2">{text.scroll}</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-dark-text cursor-pointer"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


