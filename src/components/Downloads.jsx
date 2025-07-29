import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Briefcase, ExternalLink } from "lucide-react";

const downloadItems = [
  {
    title: "Professional Resume",
    titlePt: "Currículo Profissional",
    description: "Complete CV with legal and tech experience",
    descriptionPt: "CV completo com experiência jurídica e tecnológica",
    icon: <FileText size={24} />,
    filename: "Ricardo_Melo_Resume.pdf",
    color: "tech-primary",
    type: "resume"
  },
  {
    title: "Portfolio PDF",
    titlePt: "Portfolio PDF",
    description: "Comprehensive portfolio of projects and achievements",
    descriptionPt: "Portfolio abrangente de projetos e conquistas",
    icon: <Briefcase size={24} />,
    filename: "Ricardo_Melo_Portfolio.pdf",
    color: "law-primary",
    type: "portfolio"
  }
];

export default function Downloads({ language = 'en' }) {
  const title = language === 'pt' ? 'Downloads' : 'Downloads';
  const subtitle = language === 'pt' 
    ? 'Baixe meu currículo e portfolio para uma visão completa da minha experiência'
    : 'Download my resume and portfolio for a complete view of my experience';

  const generatePDF = (type) => {
    // In a real application, you would generate or serve actual PDF files
    // For demo purposes, we'll create a simple content structure
    
    const resumeContent = `
RICARDO MELO - PROFESSIONAL RESUME

CONTACT INFORMATION
Email: ricardoadevmelo@gmail.com
Phone: +353-83-056-9070
Location: Cork, Ireland
GitHub: github.com/ricardoadevmelo
LinkedIn: linkedin.com/in/ricardoadevmelo

PROFESSIONAL SUMMARY
Experienced legal professional with 11 years in the judiciary system and growing expertise in software development. Currently transitioning to combine legal knowledge with technology solutions.

LEGAL EXPERIENCE (2013-2024)
• 11 years of experience in Brazilian Judiciary System
• OAB Certification - Licensed Attorney in Brazil
• Specializations: Social Security, Criminal, Family, and Labor Law
• Court of Accounts specialization (Tribunal de Contas do Estado Piauí)
• Conflict Mediation & Legal Medicine certification
• Traffic Crimes & ECA Statute expertise

EDUCATION
• Postgraduate in Early Childhood Education - ANHANGUERA
• Bachelor's Degree in Law
• Multiple legal specializations and certifications

TECHNICAL SKILLS
• JavaScript, React, Node.js
• HTML, CSS, Tailwind CSS
• Git, GitHub
• Database Management
• Project Management

SPEAKING & EDUCATION
• Regular speaker at OAB conferences
• University guest lecturer
• Community education on children's rights (ECA)
• Public safety education in schools

LANGUAGES
• Portuguese (Native)
• English (Professional)

PUBLICATIONS
• Author: "Digital Transformation in Legal Practice"
`;

    const portfolioContent = `
RICARDO MELO - PORTFOLIO

FEATURED PROJECTS

1. TOPSTORE E-COMMERCE PLATFORM
   Technology: JavaScript, React, Node.js
   Description: Full-stack e-commerce solution with modern UI
   GitHub: github.com/ricardoadevmelo/TopStore

2. DSTASTY FOOD DELIVERY
   Technology: React, REST APIs
   Description: Food delivery platform with real-time tracking
   GitHub: github.com/ricardoadevmelo/DSTasty

3. SPRING BOOT JPA APPLICATION
   Technology: Java, Spring Boot, JPA
   Description: Enterprise-level backend application
   GitHub: github.com/ricardoadevmelo/spring-boot-jpa

4. LEGAL PRACTICE MANAGEMENT SYSTEM
   Technology: React, Node.js, PostgreSQL
   Description: Case management system for law firms
   Features: Client management, document tracking, billing

LEGAL ACHIEVEMENTS
• 11 years judiciary experience
• OAB certification
• Multiple specializations
• Community education programs
• Published author

CERTIFICATIONS
• OAB - Brazilian Bar Association
• Tribunal de Contas specialization
• Conflict Mediation certification
• ECA Statute expertise

EDUCATION & TRAINING
• Postgraduate in Early Childhood Education
• Law Degree
• Various technical certifications

COMMUNITY INVOLVEMENT
• Legal education in public schools
• Children's rights advocacy
• Technology accessibility initiatives
`;

    const content = type === 'resume' ? resumeContent : portfolioContent;
    const filename = downloadItems.find(item => item.type === type)?.filename || 'document.txt';
    
    // Create and download the file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="downloads" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            {title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {downloadItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-card border border-dark-border p-8 rounded-2xl hover:border-slate-600 transition-all group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-${item.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${item.color}`}>
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark-text mb-3">
                  {language === 'pt' ? item.titlePt : item.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {language === 'pt' ? item.descriptionPt : item.description}
                </p>
                
                <button
                  onClick={() => generatePDF(item.type)}
                  className={`w-full bg-${item.color}/20 hover:bg-${item.color}/30 text-${item.color} border border-${item.color}/30 hover:border-${item.color}/50 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group-hover:scale-105`}
                >
                  <Download size={20} />
                  {language === 'pt' ? 'Baixar PDF' : 'Download PDF'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
