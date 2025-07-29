import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, BookOpen } from "lucide-react";
import { projects, bookPublication } from '../data/projects';
import { useLanguage } from "../contexts/LanguageContext.js";

export default function Portfolio() {
  const { language } = useLanguage();

  // Tradução do livro
  const bookContent = {
    en: {
      title: "Practical Guide to Legal Advisory in Brazilian Court of Justice",
      description: "A comprehensive and practical guide for those who wish to work in legal advisory within the Judiciary. With models, technical guidance, and professional conduct tips, this work is ideal for transforming theoretical knowledge into practical excellence.",
      content: "A complete guide featuring practical models, technical guidance for efficient performance, professional ethics tips, and real case studies for judicial advisory roles."
    },
    pt: {
      title: "Guia Prático da Assessoria Jurídica no Tribunal de Justiça Brasileiro",
      description: "Um guia abrangente e prático para quem deseja trabalhar na assessoria jurídica do Poder Judiciário. Com modelos, orientações técnicas e dicas de conduta profissional, esta obra é ideal para transformar conhecimento teórico em excelência prática.",
      content: "Um guia completo com modelos práticos, orientações técnicas para performance eficiente, dicas de ética profissional e estudos de casos reais para funções de assessoria judicial."
    }
  };

  const bookText = bookContent[language];

  // Tradução dos projetos
  const projectsTranslated = projects.map(project => ({
    ...project,
    title: language === 'pt' ? (
      project.title === "TopStore Project" ? "Projeto TopStore" :
      project.title === "My Profile Project" ? "Projeto Meu Perfil" :
      project.title === "DSTasty" ? "DSTasty" :
      project.title === "Spring Boot JPA Workshop" ? "Workshop Spring Boot JPA" :
      project.title === "Demo DAO JDBC" ? "Demo DAO JDBC" :
      project.title === "Spring Boot MongoDB Workshop" ? "Workshop Spring Boot MongoDB" :
      project.title
    ) : project.title,
    description: language === 'pt' ? (
      project.title === "TopStore Project" ? "Aplicação de e-commerce com design moderno e interface amigável, demonstrando habilidades de desenvolvimento frontend com design responsivo." :
      project.title === "My Profile Project" ? "Site de portfólio pessoal demonstrando capacidades de desenvolvimento web e habilidades de apresentação profissional." :
      project.title === "DSTasty" ? "Interface de aplicativo de entrega de comida com padrões de design modernos e foco na experiência do usuário." :
      project.title === "Spring Boot JPA Workshop" ? "Aplicação Java Spring Boot abrangente com integração JPA, demonstrando habilidades de desenvolvimento backend, gerenciamento de banco de dados e criação de API RESTful." :
      project.title === "Demo DAO JDBC" ? "Implementação de padrão de objeto de acesso a dados usando JDBC, demonstrando conectividade de banco de dados e técnicas de persistência de dados." :
      project.title === "Spring Boot MongoDB Workshop" ? "Integração de banco de dados NoSQL com Spring Boot, demonstrando tecnologias modernas de banco de dados e arquitetura de microsserviços." :
      project.description
    ) : project.description,
    category: language === 'pt' ? (
      project.category === "Frontend" ? "Frontend" :
      project.category === "Portfolio" ? "Portfolio" :
      project.category === "Backend" ? "Backend" :
      project.category
    ) : project.category
  }));

  const content = {
    en: {
      title: "My Portfolio",
      subtitle: "A collection of projects showcasing my technical skills and professional development",
      bookSection: "Book Publication",
      projectsSection: "Tech Projects",
      viewProject: "View Project",
      sourceCode: "Source Code",
      buyBook: "Buy Book"
    },
    pt: {
      title: "Meu Portfolio",
      subtitle: "Uma coleção de projetos demonstrando minhas habilidades técnicas e desenvolvimento profissional",
      bookSection: "Publicação de Livro",
      projectsSection: "Projetos Técnicos",
      viewProject: "Ver Projeto",
      sourceCode: "Código Fonte", 
      buyBook: "Comprar Livro"
    }
  };

  const text = content[language];

  return (
    <section id="portfolio" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            {language === 'pt' ? 'Meu' : 'My'} <span className="text-tech-primary">{language === 'pt' ? 'Portfolio' : 'Portfolio'}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </motion.div>

        {/* Book Publication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-law-primary mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen size={28} />
            {text.bookSection}
          </h3>
          
          <div className="bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-law-primary/50 transition-all group">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src={bookPublication.image} 
                  alt={bookPublication.title}
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-2xl font-bold text-dark-text mb-4">{bookText.title}</h4>
                <p className="text-slate-400 mb-4 leading-relaxed">{bookText.description}</p>
                <p className="text-slate-300 mb-6">{bookText.content}</p>
                
                <div className="flex flex-wrap gap-3">
                  {bookPublication.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-law-gradient text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
                      aria-label={`Ver publicação no ${link.platform}`}
                      title={`Ver publicação no ${link.platform}`}
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-tech-primary mb-4">
            {text.projectsSection}
          </h3>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsTranslated.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-card p-6 rounded-2xl border border-dark-border hover:border-tech-primary/50 transition-all group"
            >
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.category === 'Frontend' ? 'bg-tech-gradient text-white' :
                  project.category === 'Backend' ? 'bg-edu-gradient text-dark-bg' :
                  'bg-law-gradient text-white'
                }`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-dark-text mb-3 group-hover:text-tech-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-dark-surface text-slate-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-tech-primary transition-colors"
                  aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
                  title={`Ver código fonte do projeto ${project.title} no GitHub`}
                >
                  <Github size={20} aria-hidden="true" />
                  <span>{text.sourceCode}</span>
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-tech-primary transition-colors"
                    aria-label={`Ver demonstração do projeto ${project.title}`}
                    title={`Ver demonstração do projeto ${project.title}`}
                  >
                    <ExternalLink size={20} aria-hidden="true" />
                    <span>{text.viewProject}</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
