import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Globe, Zap, Users, Scale } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      icon: <Code size={40} />,
      title: language === 'pt' ? "Desenvolvimento Frontend" : "Frontend Development",
      description: language === 'pt' 
        ? "Criando interfaces modernas e responsivas com React, Next.js e TypeScript."
        : "Creating modern and responsive interfaces with React, Next.js and TypeScript.",
      gradient: "bg-tech-gradient"
    },
    {
      icon: <Palette size={40} />,
      title: language === 'pt' ? "Design UI/UX" : "UI/UX Design",
      description: language === 'pt'
        ? "Projetando experiências centradas no usuário focadas em usabilidade e conversão."
        : "Designing user-centered experiences focused on usability and conversion.",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: <Globe size={40} />,
      title: language === 'pt' ? "Sites Corporativos" : "Corporate Websites",
      description: language === 'pt'
        ? "Criando sites corporativos profissionais e landing pages de alta conversão."
        : "Creating professional corporate websites and high-conversion landing pages.",
      gradient: "bg-edu-gradient"
    },
    {
      icon: <Scale size={40} />,
      title: language === 'pt' ? "Consultoria Jurídica" : "Legal Consulting",
      description: language === 'pt'
        ? "Serviços de consultoria jurídica com mais de 11 anos de experiência no judiciário brasileiro."
        : "Legal advisory services with 11+ years of experience in Brazilian judiciary.",
      gradient: "bg-law-gradient"
    },
    {
      icon: <Zap size={40} />,
      title: language === 'pt' ? "Otimização de Performance" : "Performance Optimization",
      description: language === 'pt'
        ? "Otimização de performance, SEO e acessibilidade para máxima eficiência."
        : "Performance optimization, SEO and accessibility for maximum efficiency.",
      gradient: "bg-tech-gradient"
    },
    {
      icon: <Users size={40} />,
      title: language === 'pt' ? "Consultoria" : "Consulting",
      description: language === 'pt'
        ? "Consultoria em arquitetura frontend e estratégias de desenvolvimento."
        : "Frontend architecture consulting and development strategies.",
      gradient: "bg-gradient-to-r from-indigo-500 to-blue-500"
    }
  ];

  const content = {
    en: {
      title: "Services",
      subtitle: "Solutions that combine innovation, quality and results"
    },
    pt: {
      title: "Serviços",
      subtitle: "Soluções que combinam inovação, qualidade e resultados"
    }
  };

  const text = content[language];
  return (
    <section id="services" className="py-20 bg-dark-surface">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark-card border border-dark-border p-8 rounded-2xl hover:border-tech-primary/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-4">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
