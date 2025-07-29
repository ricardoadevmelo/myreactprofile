import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import social from "../data/social";

const icons = {
  github: <Github size={24} />,
  linkedin: <Linkedin size={24} />,
  mail: <Mail size={24} />,
  instagram: <Instagram size={24} />,
};

const labels = {
  github: "GitHub - Perfil no GitHub",
  linkedin: "LinkedIn - Perfil profissional", 
  mail: "Email - Enviar email",
  instagram: "Instagram - Perfil no Instagram"
};

export default function SocialIcons({ variant = "dark" }) {
  const baseClasses = "p-3 rounded-full transition-all duration-300 hover:scale-110";
  const variantClasses = {
    dark: "text-white hover:text-tech-accent border-2 border-white/20 hover:border-tech-accent hover:bg-tech-accent/10",
    light: "text-neutral-medium hover:text-tech-primary border-2 border-gray-200 hover:border-tech-primary hover:bg-tech-primary/10"
  };

  return (
    <div className="flex gap-4 justify-center">
      {social.map(({ type, url }) => (
        <a
          key={type}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${variantClasses[variant]}`}
          aria-label={labels[type]}
          title={labels[type]}
        >
          {icons[type]}
        </a>
      ))}
    </div>
  );
}