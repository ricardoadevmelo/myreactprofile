import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Globe, Baby } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

export default function Education() {
  const { language } = useLanguage();

  const education = [
    {
      degree: language === 'pt' ? "Análise e Desenvolvimento de Sistemas" : "Systems Analysis and Development",
      institution: "UNIBF - University Center",
      period: "2023-2025",
      type: "technology",
      icon: <BookOpen size={24} />,
      description: language === 'pt' 
        ? "Focado em desenvolvimento de sistemas, programação e análise de requisitos."
        : "Focused on system development, programming and requirements analysis."
    },
    {
      degree: language === 'pt' ? "Bacharelado em Direito" : "Bachelor's Degree in Law",
      institution: "University of Maurício of Nassau",
      period: "2008-2013",
      type: "law",
      icon: <Award size={24} />,
      description: language === 'pt'
        ? "Graduação em Direito com foco em direito civil, processual e consultoria jurídica."
        : "Law degree with focus on civil law, procedural law and legal consulting."
    },
    {
      degree: language === 'pt' ? "Bacharelado em Biologia" : "Bachelor's Degree in Biology",
      institution: "UESPI - State University of Piauí",
      period: "1994 - 1998",
      type: "biology",
      icon: <GraduationCap size={24} />,
      description: language === 'pt'
        ? "Graduação em Ciências Biológicas com base sólida em pesquisa científica."
        : "Biological Sciences degree with solid foundation in scientific research."
    },
    {
      degree: language === 'pt' ? "Pós-graduação em Educação Infantil" : "Postgraduate in Early Childhood Education",
      institution: "ANHANGUERA University",
      period: "2025",
      type: "education",
      icon: <Baby size={24} />,
      description: language === 'pt'
        ? "Pós-graduação especializada em metodologias e desenvolvimento da educação infantil."
        : "Specialized postgraduate degree in early childhood education methodologies and development."
    },
    {
      degree: language === 'pt' ? "Curso Geral de Inglês" : "General English Course",
      institution: "ICOT - International College of Technology",
      period: "2025",
      type: "language",
      icon: <Globe size={24} />,
      description: language === 'pt'
        ? "Certificação avançada em inglês para comunicação internacional."
        : "Advanced English certification for international communication."
    }
  ];

  const content = {
    en: {
      title: "Education",
      subtitle: "Continuous learning across multiple disciplines",
      certificationsTitle: "Certifications & Specializations",
      webDevelopment: "Web Development",
      webDevDescription: "HTML5, CSS3, JavaScript, React.js, Node.js, MongoDB",
      legalExpertise: "Legal Expertise", 
      legalDescription: "11+ years as Court Advisor, legal consulting",
      education: "Education",
      educationDescription: "Early childhood education, curriculum development"
    },
    pt: {
      title: "Educação",
      subtitle: "Aprendizado contínuo em múltiplas disciplinas",
      certificationsTitle: "Certificações e Especializações",
      webDevelopment: "Desenvolvimento Web",
      webDevDescription: "HTML5, CSS3, JavaScript, React.js, Node.js, MongoDB",
      legalExpertise: "Expertise Jurídica",
      legalDescription: "Mais de 11 anos como Assessor Judicial, consultoria jurídica",
      education: "Educação",
      educationDescription: "Educação infantil, desenvolvimento curricular"
    }
  };

  const text = content[language];

  const typeColors = {
    technology: "bg-tech-gradient",
    law: "bg-law-gradient", 
    education: "bg-edu-gradient",
    biology: "bg-bio-gradient",
    language: "bg-gradient-to-r from-purple-500 to-pink-500"
  };

  return (
    <section id="education" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-tech-primary/50 transition-all duration-300 group"
            >
              <div className={`${typeColors[edu.type]} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  {edu.icon}
                  <span className="text-sm font-medium opacity-90">{edu.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <h4 className="text-lg opacity-90">{edu.institution}</h4>
              </div>
              
              <div className="p-6">
                <p className="text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-text mb-8">
            {text.certificationsTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
              <div className="text-tech-primary mb-3">
                <BookOpen size={32} className="mx-auto" />
              </div>
              <h4 className="font-semibold text-dark-text mb-2">{text.webDevelopment}</h4>
              <p className="text-sm text-slate-400">
                {text.webDevDescription}
              </p>
            </div>
            
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
              <div className="text-law-primary mb-3">
                <Award size={32} className="mx-auto" />
              </div>
              <h4 className="font-semibold text-dark-text mb-2">{text.legalExpertise}</h4>
              <p className="text-sm text-slate-400">
                {text.legalDescription}
              </p>
            </div>
            
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
              <div className="text-edu-primary mb-3">
                <GraduationCap size={32} className="mx-auto" />
              </div>
              <h4 className="font-semibold text-dark-text mb-2">{text.education}</h4>
              <p className="text-sm text-slate-400">
                {text.educationDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
