import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-dark-card border border-dark-border hover:border-slate-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
    >
      <div className="flex items-center gap-2">
        <Languages size={20} className="text-tech-primary group-hover:text-tech-primary/80 transition-colors" />
        <span className="text-dark-text font-medium text-sm">
          {language === 'en' ? 'PT' : 'EN'}
        </span>
      </div>
    </motion.button>
  );
}
