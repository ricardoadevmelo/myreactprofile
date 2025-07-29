import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { useLanguage } from "../contexts/LanguageContext";

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    titlePt: "Email",
    value: "ricardoadevmelo@gmail.com",
    link: "mailto:ricardoadevmelo@gmail.com"
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    titlePt: "Telefone",
    value: "+353-83-056-9070",
    link: "tel:+353830569070"
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    titlePt: "Localização",
    value: "Cork, Ireland",
    link: "#"
  }
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Let's Connect",
      subtitle: "Have a project in mind? Want to discuss an idea? I'm always open to new challenges and partnerships.",
      contactInfo: "Contact Information",
      description: "I'm available for freelance work, consulting, and team projects. Get in touch through the channels below or use the contact form.",
      connectTitle: "Let's Connect",
      successTitle: "Message Sent!",
      successMessage: "Thank you for reaching out! I'll get back to you soon.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      message: "Message",
      messagePlaceholder: "Tell me more about your project or idea...",
      sendButton: "Send Message"
    },
    pt: {
      title: "Vamos Conectar",
      subtitle: "Tem um projeto em mente? Quer discutir uma ideia? Estou sempre aberto a novos desafios e parcerias.",
      contactInfo: "Informações de Contato",
      description: "Estou disponível para trabalhos freelance, consultoria e projetos em equipe. Entre em contato através dos canais abaixo ou use o formulário de contato.",
      connectTitle: "Vamos Conectar",
      successTitle: "Mensagem Enviada!",
      successMessage: "Obrigado por entrar em contato! Retornarei em breve.",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "seu@email.com",
      subject: "Assunto",
      subjectPlaceholder: "Sobre o que gostaria de conversar?",
      message: "Mensagem",
      messagePlaceholder: "Conte-me mais sobre seu projeto ou ideia...",
      sendButton: "Enviar Mensagem"
    }
  };

  const text = content[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Try to load EmailJS dynamically if available
      if (window.emailjs) {
        // EmailJS is loaded, use it
        const result = await window.emailjs.sendForm(
          'service_ricardomelo',
          'template_1u3itg7',
          e.target,
          'Bvf8Fx2PsIxme0qEl'
        );
        
        console.log('Email sent successfully:', result.text);
        setSent(true);
        e.target.reset();
        setTimeout(() => setSent(false), 5000);
        return;
      }
      
      // Fallback to a working contact method
      const formData = new FormData(e.target);
      const subject = encodeURIComponent(`${formData.get('subject')} - from ${formData.get('from_name')}`);
      const body = encodeURIComponent(`Name: ${formData.get('from_name')}\nEmail: ${formData.get('from_email')}\n\nMessage:\n${formData.get('message')}`);
      
      // Create a more reliable contact method
      const contactInfo = {
        name: formData.get('from_name'),
        email: formData.get('from_email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };
      
      // Store in localStorage for backup
      localStorage.setItem('lastContactForm', JSON.stringify(contactInfo));
      
      // Try mailto
      const mailtoLink = `mailto:ricardoadevmelo@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Message prepared! Please check your email client or contact me directly at ricardoadevmelo@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-surface">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-text mb-6">
                {text.contactInfo}
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {text.description}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-dark-card border border-dark-border rounded-xl hover:border-tech-primary/50 transition-all group"
                >
                  <div className="text-tech-primary group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-medium text-dark-text">
                      {language === 'pt' ? info.titlePt : info.title}
                    </div>
                    <div className="text-slate-400">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-dark-text mb-4">
                {text.connectTitle}
              </h4>
              <SocialIcons variant="dark" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-card border border-dark-border p-8 rounded-2xl"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-edu-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark-text mb-2">
                  {text.successTitle}
                </h3>
                <p className="text-slate-400">
                  {text.successMessage}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">
                      {text.name}
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:ring-2 focus:ring-tech-primary focus:border-transparent transition-colors text-dark-text"
                      placeholder={text.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-2">
                      {text.email}
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:ring-2 focus:ring-tech-primary focus:border-transparent transition-colors text-dark-text"
                      placeholder={text.emailPlaceholder}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    {text.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:ring-2 focus:ring-tech-primary focus:border-transparent transition-colors text-dark-text"
                    placeholder={text.subjectPlaceholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-text mb-2">
                    {text.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg focus:ring-2 focus:ring-tech-primary focus:border-transparent transition-colors resize-none text-dark-text"
                    placeholder={text.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-tech-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      {text.sendButton}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}