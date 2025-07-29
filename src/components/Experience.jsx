import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Briefcase } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.js";

export default function Experience() {
  const { language } = useLanguage();

  const experiences = [
    {
      title: language === 'pt' ? "Atendimento ao Cliente" : "Customer Service",
      company: "SuperValu (Musgrave Group)",
      period: "2024 - " + (language === 'pt' ? "Presente" : "Present"),
      location: language === 'pt' ? "Irlanda" : "Ireland",
      type: "current",
      description: language === 'pt'
        ? "Atendimento ao cliente na SuperValu, parte do Musgrave Group, maior distribuidor de alimentos e mercearia da Irlanda. Foco na satisfação do cliente e colaboração em equipe multicultural."
        : "Customer service at SuperValu, part of the Musgrave Group, Ireland's largest grocery and food distributor. Focus on customer satisfaction and multicultural team collaboration.",
      achievements: language === 'pt' ? [
        "Excelente atendimento ao cliente em ambiente internacional",
        "Colaboração em equipe multicultural",
        "Comunicação avançada em inglês"
      ] : [
        "Excellent customer service in international environment",
        "Multicultural team collaboration",
        "Advanced English communication"
      ],
      technologies: language === 'pt' 
        ? ["Atendimento ao Cliente", "Colaboração em Equipe", "Inglês", "Varejo"]
        : ["Customer Service", "Team Collaboration", "English", "Retail"]
    },
    {
      title: language === 'pt' ? "Assessor Adjunto e Assistente de Juiz" : "Deputy Adviser and Assistant Judge",
      company: language === 'pt' ? "Tribunal de Justiça Brasileiro" : "Brazilian Court of Justice",
      period: "2013 - 2024",
      location: language === 'pt' ? "Brasil" : "Brazil",
      type: "law",
      description: language === 'pt'
        ? "Cargo de assessoria jurídica no sistema judiciário brasileiro, fornecendo suporte técnico a juízes e gerenciando casos jurídicos complexos. Liderança em análise jurídica e gestão de casos com 11 anos de experiência judicial."
        : "Legal advisory role in the Brazilian judicial system, providing technical support to judges and managing complex legal cases. Leadership in legal analysis and case management with 11 years of judicial experience.",
      achievements: language === 'pt' ? [
        "11 anos de experiência judicial",
        "Gestão de casos complexos",
        "Pesquisa e análise jurídica",
        "Liderança e coordenação de equipe"
      ] : [
        "11 years of judicial experience",
        "Complex case management",
        "Legal research and analysis",
        "Team leadership and coordination"
      ],
      technologies: language === 'pt'
        ? ["Análise Jurídica", "Gestão de Casos", "Liderança de Equipe", "Pesquisa"]
        : ["Legal Analysis", "Case Management", "Team Leadership", "Research"]
    },
    {
      title: language === 'pt' ? "Advogado" : "Lawyer",
      company: language === 'pt' ? "Prática Privada" : "Private Practice",
      period: "2008 - 2013",
      location: language === 'pt' ? "Brasil" : "Brazil",
      type: "law",
      description: language === 'pt'
        ? "Prática jurídica privada com foco em direito civil, consultoria jurídica e representação de clientes. Desenvolveu fortes habilidades analíticas e de comunicação antes da transição para carreira judicial."
        : "Private law practice focusing on civil law, legal consulting, and client representation. Developed strong analytical and communication skills before transitioning to judicial career.",
      achievements: language === 'pt' ? [
        "Prática jurídica independente",
        "Gestão de relacionamento com clientes",
        "Preparação de documentos legais",
        "Representação em tribunal"
      ] : [
        "Independent legal practice",
        "Client relationship management",
        "Legal document preparation",
        "Court representation"
      ],
      technologies: language === 'pt'
        ? ["Direito Civil", "Consultoria Jurídica", "Relações com Clientes", "Documentação"]
        : ["Civil Law", "Legal Consulting", "Client Relations", "Documentation"]
    },
    {
      title: language === 'pt' ? "Representante Comercial" : "Trade Representative",
      company: language === 'pt' ? "Setor Comercial" : "Commercial Sector",
      period: "2010 - 2012",
      location: language === 'pt' ? "Brasil" : "Brazil",
      type: "sales",
      description: language === 'pt'
        ? "Representação comercial e desenvolvimento de vendas durante os estudos de direito. Construiu relacionamentos sólidos com clientes e desenvolveu habilidades de negociação."
        : "Commercial representation and sales development during law studies. Built strong relationships with clients and developed negotiation skills.",
      achievements: language === 'pt' ? [
        "Cumprimento de metas de vendas",
        "Construção de relacionamento com clientes",
        "Desenvolvimento de mercado",
        "Expertise em negociação"
      ] : [
        "Sales target achievement",
        "Client relationship building",
        "Market development",
        "Negotiation expertise"
      ],
      technologies: language === 'pt'
        ? ["Vendas", "Negociação", "Relações com Clientes", "Análise de Mercado"]
        : ["Sales", "Negotiation", "Client Relations", "Market Analysis"]
    },
    {
      title: language === 'pt' ? "Estagiário e Assessor Jurídico" : "Law Office Intern and Legal Advisor",
      company: language === 'pt' ? "Escritórios Jurídicos" : "Legal Firms",
      period: "2008 - 2013",
      location: language === 'pt' ? "Brasil" : "Brazil",
      type: "law",
      description: language === 'pt'
        ? "Estágio e cargos de assessoria jurídica durante a faculdade de direito. Adquiriu experiência prática em procedimentos legais e assistência a clientes."
        : "Legal internship and advisory roles during law school. Gained practical experience in legal procedures and client assistance.",
      achievements: language === 'pt' ? [
        "Aprendizado de procedimentos legais",
        "Assistência a clientes",
        "Preparação de documentos",
        "Experiência em protocolos judiciais"
      ] : [
        "Legal procedure learning",
        "Client assistance",
        "Document preparation",
        "Court filing experience"
      ],
      technologies: language === 'pt'
        ? ["Procedimentos Legais", "Assistência a Clientes", "Pesquisa Jurídica", "Documentação"]
        : ["Legal Procedures", "Client Assistance", "Legal Research", "Documentation"]
    },
    {
      title: language === 'pt' ? "Escriturário, Atendimento Expresso e Líder de Equipe" : "Clerk, Express Service and Team Leader",
      company: language === 'pt' ? "Caixa Econômica Federal" : "Caixa Econômica Federal Bank",
      period: "2007 - 2008",
      location: language === 'pt' ? "Brasil" : "Brazil",
      type: "finance",
      description: language === 'pt'
        ? "Operações bancárias, atendimento ao cliente e liderança de equipe em uma das maiores instituições financeiras do Brasil."
        : "Banking operations, customer service, and team leadership at one of Brazil's largest financial institutions.",
      achievements: language === 'pt' ? [
        "Expertise em operações bancárias",
        "Experiência em liderança de equipe",
        "Excelência no atendimento ao cliente",
        "Conhecimento de procedimentos financeiros"
      ] : [
        "Banking operations expertise",
        "Team leadership experience",
        "Customer service excellence",
        "Financial procedures knowledge"
      ],
      technologies: language === 'pt'
        ? ["Bancário", "Liderança de Equipe", "Atendimento ao Cliente", "Operações Financeiras"]
        : ["Banking", "Team Leadership", "Customer Service", "Financial Operations"]
    }
  ];

  const content = {
    en: {
      title: "Professional Experience",
      subtitle: "Over 15 years of diverse experience in technology, law, management and customer service across multiple countries"
    },
    pt: {
      title: "Experiência Profissional", 
      subtitle: "Mais de 15 anos de experiência diversificada em tecnologia, direito, gestão e atendimento ao cliente em múltiplos países"
    }
  };

  const text = content[language];
  const typeColors = {
    current: "border-tech-primary bg-tech-gradient",
    law: "border-law-primary bg-law-gradient",
    sales: "border-edu-primary bg-edu-gradient",
    finance: "border-purple-500 bg-gradient-to-r from-purple-500 to-pink-500"
  };

  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-tech-primary via-law-primary to-edu-primary rounded-full opacity-40"></div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-4 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 ${typeColors[exp.type]} rounded-full z-10 border-4 border-dark-bg shadow-lg`}></div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-dark-card p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600/30 group hover:border-tech-primary/50">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-primary transition-colors">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-law-primary mb-3">
                            {exp.company}
                          </h4>
                        </div>
                        <Briefcase className="text-gray-400 group-hover:text-tech-primary transition-colors" size={24} />
                      </div>

                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-tech-primary" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-law-primary" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <Award size={18} className="text-edu-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-tech-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies/Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 ${typeColors[exp.type]} text-white rounded-full text-sm font-medium opacity-90 hover:opacity-100 transition-opacity`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline balance */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-dark-surface p-6 rounded-xl border border-gray-600/30 hover:border-tech-primary/50 transition-colors">
            <div className="text-3xl font-bold text-tech-primary mb-2">15+</div>
            <div className="text-gray-300 text-sm">Years of Experience</div>
          </div>
          <div className="text-center bg-dark-surface p-6 rounded-xl border border-gray-600/30 hover:border-law-primary/50 transition-colors">
            <div className="text-3xl font-bold text-law-primary mb-2">11</div>
            <div className="text-gray-300 text-sm">Years in Judiciary</div>
          </div>
          <div className="text-center bg-dark-surface p-6 rounded-xl border border-gray-600/30 hover:border-edu-primary/50 transition-colors">
            <div className="text-3xl font-bold text-edu-primary mb-2">3</div>
            <div className="text-gray-300 text-sm">Countries of Work</div>
          </div>
          <div className="text-center bg-dark-surface p-6 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-colors">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Dedication</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
