import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { projects, bookPublication } from '../data/projects';

export default function Portfolio() {
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
            My <span className="text-tech-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my technical skills and professional development
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
            Book Publication
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
                <h4 className="text-2xl font-bold text-dark-text mb-4">{bookPublication.title}</h4>
                <p className="text-slate-400 mb-4 leading-relaxed">{bookPublication.description}</p>
                <p className="text-slate-300 mb-6">{bookPublication.content}</p>
                
                <div className="flex flex-wrap gap-3">
                  {bookPublication.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-law-gradient text-dark-bg px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                  'bg-law-gradient text-dark-bg'
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
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-tech-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
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
