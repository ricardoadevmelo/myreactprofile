import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Users, Gavel, Scale, FileText } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const certifications = [
  {
    category: "Legal Qualifications",
    icon: <Scale size={24} />,
    color: "law-primary",
    items: [
      {
        title: "OAB Certification",
        institution: "Ordem dos Advogados do Brasil",
        description: "Licensed attorney in Brazil with full practice rights"
      },
      {
        title: "Court of Accounts Specialization",
        institution: "Tribunal de Contas do Estado Piauí",
        description: "Advanced specialization in public finance oversight and audit"
      },
      {
        title: "Conflict Mediation & Legal Medicine",
        institution: "Professional Development Institute",
        description: "Specialized training in alternative dispute resolution and forensic medicine"
      },
      {
        title: "Traffic Crimes & ECA Statute",
        institution: "Legal Education Center",
        description: "Expert certification in traffic violations and Child and Adolescent Rights (ECA)"
      }
    ]
  },
  {
    category: "Legal Practice Areas",
    icon: <Gavel size={24} />,
    color: "tech-primary",
    items: [
      {
        title: "Social Security Law",
        institution: "Primary Specialization",
        description: "Extensive experience in pension and benefit claims"
      },
      {
        title: "Criminal Law",
        institution: "Defense Practice",
        description: "Criminal defense and prosecution advisory"
      },
      {
        title: "Family & Civil Law",
        institution: "Private Practice",
        description: "Family disputes, divorces, and civil litigation"
      },
      {
        title: "Labor Law",
        institution: "Employment Relations",
        description: "Worker rights, employment contracts, and labor disputes"
      }
    ]
  },
  {
    category: "Speaking & Education",
    icon: <Users size={24} />,
    color: "edu-primary",
    items: [
      {
        title: "OAB Conferences",
        institution: "Brazilian Bar Association",
        description: "Regular speaker on legal topics and professional development"
      },
      {
        title: "University Lectures",
        institution: "Academic Institutions",
        description: "Guest lecturer on law, technology, and social responsibility"
      },
      {
        title: "ECA Statute Workshops",
        institution: "Public Schools & Organizations",
        description: "Educational workshops on children and adolescent rights"
      },
      {
        title: "Public Safety Education",
        institution: "Educational Outreach",
        description: "Community education on rights, duties, and safety for youth"
      }
    ]
  }
];

const certificationsPt = [
  {
    category: "Qualificações Jurídicas",
    icon: <Scale size={24} />,
    color: "law-primary",
    items: [
      {
        title: "Certificação OAB",
        institution: "Ordem dos Advogados do Brasil",
        description: "Advogado licenciado no Brasil com direitos plenos de atuação"
      },
      {
        title: "Especialização Tribunal de Contas",
        institution: "Tribunal de Contas do Estado Piauí",
        description: "Especialização avançada em supervisão e auditoria de finanças públicas"
      },
      {
        title: "Mediação de Conflitos & Medicina Legal",
        institution: "Instituto de Desenvolvimento Profissional",
        description: "Treinamento especializado em resolução alternativa de disputas e medicina forense"
      },
      {
        title: "Crimes de Trânsito & Estatuto ECA",
        institution: "Centro de Educação Jurídica",
        description: "Certificação especializada em infrações de trânsito e Direitos da Criança e Adolescente"
      }
    ]
  },
  {
    category: "Áreas de Atuação Jurídica",
    icon: <Gavel size={24} />,
    color: "tech-primary",
    items: [
      {
        title: "Direito Previdenciário",
        institution: "Especialização Principal",
        description: "Ampla experiência em benefícios e aposentadorias"
      },
      {
        title: "Direito Penal",
        institution: "Prática de Defesa",
        description: "Defesa criminal e consultoria em processos"
      },
      {
        title: "Direito Civil e Familiar",
        institution: "Prática Privada",
        description: "Disputas familiares, divórcios e litígios civis"
      },
      {
        title: "Direito Trabalhista",
        institution: "Relações de Trabalho",
        description: "Direitos trabalhistas, contratos e disputas laborais"
      }
    ]
  },
  {
    category: "Palestras & Educação",
    icon: <Users size={24} />,
    color: "edu-primary",
    items: [
      {
        title: "Conferências OAB",
        institution: "Ordem dos Advogados do Brasil",
        description: "Palestrante regular sobre tópicos jurídicos e desenvolvimento profissional"
      },
      {
        title: "Palestras Universitárias",
        institution: "Instituições Acadêmicas",
        description: "Professor convidado sobre direito, tecnologia e responsabilidade social"
      },
      {
        title: "Workshops Estatuto ECA",
        institution: "Escolas Públicas & Organizações",
        description: "Workshops educacionais sobre direitos da criança e adolescente"
      },
      {
        title: "Educação em Segurança Pública",
        institution: "Extensão Educacional",
        description: "Educação comunitária sobre direitos, deveres e segurança para jovens"
      }
    ]
  }
];

export default function Certifications() {
  const { language } = useLanguage();
  const data = language === 'pt' ? certificationsPt : certifications;
  const title = language === 'pt' ? 'Certificações & Qualificações' : 'Certifications & Qualifications';
  const subtitle = language === 'pt' 
    ? 'Formação jurídica especializada e experiência em educação comunitária'
    : 'Specialized legal training and community education experience';

  return (
    <section id="certifications" className="py-20 bg-dark-bg">
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

        <div className="space-y-16">
          {data.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`text-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark-text">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-dark-card border border-dark-border p-6 rounded-xl hover:border-slate-600 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full bg-${category.color} mt-2 group-hover:scale-125 transition-transform`}></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-dark-text mb-2">
                          {item.title}
                        </h4>
                        <p className={`text-${category.color} text-sm font-medium mb-3`}>
                          {item.institution}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-dark-card border border-dark-border p-8 rounded-2xl">
            <Award size={48} className="text-law-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-dark-text mb-4">
              {language === 'pt' ? '11 Anos de Experiência Jurídica' : '11 Years of Legal Experience'}
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              {language === 'pt' 
                ? 'Combinando expertise jurídica tradicional com inovação tecnológica para soluções eficientes e modernas.'
                : 'Combining traditional legal expertise with technological innovation for efficient and modern solutions.'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-law-primary/20 text-law-primary px-4 py-2 rounded-full text-sm font-medium">
                {language === 'pt' ? 'Direito Previdenciário' : 'Social Security Law'}
              </span>
              <span className="bg-tech-primary/20 text-tech-primary px-4 py-2 rounded-full text-sm font-medium">
                {language === 'pt' ? 'Direito Penal' : 'Criminal Law'}
              </span>
              <span className="bg-edu-primary/20 text-edu-primary px-4 py-2 rounded-full text-sm font-medium">
                {language === 'pt' ? 'Educação Comunitária' : 'Community Education'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
