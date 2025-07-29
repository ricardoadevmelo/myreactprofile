import React from "react";
import about from "../data/about";
import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Award, Users, Coffee, Heart, Code, Scale, GraduationCap, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Me",
      subtitle: "Discover my journey combining law, technology, and education",
      skillsTitle: "Skills & Expertise",
      professionalCharacteristics: "Professional Characteristics:",
      technology: "Technology",
      law: "Law",
      education: "Education",
      aboutSubtitle: "Systems Analysis and Development Graduate | Law Graduate | Education Specialist",
      aboutDescription: "Brazilian lawyer with 11 years of judicial experience, graduated in Systems Analysis and Development and currently pursuing postgraduate studies in Early Childhood Education. Based in Cork, Ireland, combines established legal expertise with technological innovation and advanced educational methodologies. A professional dedicated to excellence, bringing creativity, autonomy, and exceptional communication skills to transform ideas into impactful solutions.",
      traits: [
        "Creative and innovative: Enjoys exploring new ideas and solutions",
        "Motivational: Inspires colleagues with enthusiasm and positive outlook", 
        "Independent: Prefers autonomy and avoids overly rigid environments",
        "Communicative: Excels in roles requiring interaction and teamwork",
        "Competitive: Sees challenges as opportunities for self-improvement",
        "11 years of judicial experience in Brazilian Court of Justice",
        "Postgraduate in Early Childhood Education"
      ]
    },
    pt: {
      title: "Sobre Mim", 
      subtitle: "Descubra minha jornada combinando direito, tecnologia e educação",
      skillsTitle: "Habilidades e Expertise",
      professionalCharacteristics: "Características Profissionais:",
      technology: "Tecnologia",
      law: "Direito",
      education: "Educação",
      aboutSubtitle: "Tecnólogo em Análise e Desenvolvimento de Sistemas | Bacharel em Direito | Especialista em Educação",
      aboutDescription: "Advogado brasileiro com 11 anos de experiência judicial, formado em Análise e Desenvolvimento de Sistemas e atualmente cursando pós-graduação em Educação Infantil. Residindo em Cork, Irlanda, combina expertise jurídica consolidada com inovação tecnológica e metodologias educacionais avançadas. Profissional dedicado à excelência, trazendo criatividade, autonomia e excepcionais habilidades de comunicação para transformar ideias em soluções impactantes.",
      traits: [
        "Criativo e inovador - Gosta de explorar novas ideias e soluções",
        "Motivacional – Inspira colegas com entusiasmo e perspectiva positiva",
        "Independente – Prefere autonomia e evita ambientes excessivamente rígidos",
        "Comunicativo – Excele em funções que requerem interação e trabalho em equipe",
        "Competitivo – Vê desafios como oportunidades de autodesenvolvimento",
        "11 anos de experiência judicial no Tribunal de Justiça Brasileiro",
        "Pós-graduado em Educação Infantil"
      ]
    }
  };

  const text = content[language];

  const stats = [
    { 
      icon: <Award size={24} className="text-law-primary" />, 
      number: "15+", 
      label: language === 'pt' ? "Anos de Experiência" : "Years of Experience" 
    },
    { 
      icon: <Scale size={24} className="text-law-primary" />, 
      number: "11", 
      label: language === 'pt' ? "Anos no Judiciário" : "Years in Judiciary" 
    },
    { 
      icon: <Code size={24} className="text-tech-primary" />, 
      number: "30+", 
      label: language === 'pt' ? "Projetos Desenvolvidos" : "Projects Developed" 
    },
    { 
      icon: <GraduationCap size={24} className="text-edu-primary" />, 
      number: "5", 
      label: language === 'pt' ? "Diplomas de Ensino Superior" : "Higher Education Degrees" 
    },
  ];

  const skills = {
    technology: language === 'pt' ? [
      "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", 
      "MongoDB", "SQL", "Firebase", "Git/GitHub", "Bootstrap", "Spring Boot", "Java"
    ] : [
      "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", 
      "MongoDB", "SQL", "Firebase", "Git/GitHub", "Bootstrap", "Spring Boot", "Java"
    ],
    law: language === 'pt' ? [
      "Direito Civil", "Direito Processual", "Consultoria Jurídica", 
      "Assessoria Judicial", "Gestão de Equipes", "Análise de Documentos Legais"
    ] : [
      "Civil Law", "Procedural Law", "Legal Consulting", 
      "Judicial Advisory", "Team Management", "Legal Document Analysis"
    ],
    education: language === 'pt' ? [
      "Educação Infantil", "Desenvolvimento Curricular", "Avaliação Estudantil",
      "Tecnologia Educacional", "Metodologias de Aprendizagem", "Pesquisa Educacional"
    ] : [
      "Early Childhood Education", "Curriculum Development", "Student Assessment",
      "Educational Technology", "Learning Methodologies", "Educational Research"
    ]
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-dark-bg min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 w-full"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-4 md:mb-6">
            {text.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto px-4">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-center w-full">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center w-full lg:w-auto"
          >
            <img
              src={profileImg}
              alt={about.name}
              className="w-72 h-96 sm:w-80 sm:h-[420px] md:w-[350px] md:h-[460px] lg:w-[400px] lg:h-[520px] rounded-2xl shadow-2xl object-cover mx-auto"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full w-full lg:max-w-xl items-start px-4 lg:px-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-dark-text mb-4 text-left w-full">
              {text.aboutSubtitle}
            </h3>
            <div className="text-base md:text-lg text-slate-300 space-y-4 mb-6 md:mb-8 leading-relaxed text-justify w-full">
              <p>{text.aboutDescription}</p>
              <div className="bg-dark-card border border-dark-border p-4 md:p-6 rounded-xl w-full">
                <h4 className="font-semibold text-dark-text mb-4 flex items-center gap-2 justify-start text-sm md:text-base">
                  <Users size={16} className="md:w-5 md:h-5" />
                  {text.professionalCharacteristics}
                </h4>
                <ul className="space-y-2 text-left">
                  {text.traits.map((trait, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle size={14} className="md:w-4 md:h-4 text-tech-primary mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-justify leading-relaxed">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 mt-12 md:mt-20 w-full px-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-8 md:mb-12 text-center">
            {text.skillsTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Technology Skills */}
            <div className="bg-tech-gradient p-6 md:p-8 rounded-2xl text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Code size={24} className="md:w-8 md:h-8" />
                <h4 className="text-lg md:text-xl font-bold">{text.technology}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technology.map((skill, index) => (
                  <span key={index} className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Law Skills */}
            <div className="bg-law-gradient p-6 md:p-8 rounded-2xl text-dark-bg shadow-lg">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Scale size={24} className="md:w-8 md:h-8" />
                <h4 className="text-lg md:text-xl font-bold">{text.law}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.law.map((skill, index) => (
                  <span key={index} className="bg-black/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Skills */}
            <div className="bg-edu-gradient p-6 md:p-8 rounded-2xl text-dark-bg shadow-lg">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <GraduationCap size={24} className="md:w-8 md:h-8" />
                <h4 className="text-lg md:text-xl font-bold">{text.education}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.education.map((skill, index) => (
                  <span key={index} className="bg-black/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full px-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-dark-card border border-dark-border p-4 md:p-6 rounded-xl">
              <div className="flex justify-center mb-2 md:mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-dark-text mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}