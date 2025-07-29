module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#0f172a',          // Slate 900
        'dark-surface': '#1e293b',     // Slate 800
        'dark-card': '#334155',        // Slate 700
        'dark-border': '#475569',      // Slate 600
        'dark-text': '#e2e8f0',       // Slate 200
        
        // Tecnologia - Azuis modernos
        'tech-primary': '#60a5fa',     // Blue 400 (lighter for dark)
        'tech-secondary': '#3b82f6',   // Blue 500
        'tech-accent': '#93c5fd',      // Blue 300
        
        // Direito - Tons de vermelho vinho claro
        'law-primary': '#dc2626',      // Red 600 (vermelho vinho claro)
        'law-secondary': '#b91c1c',    // Red 700 (vermelho vinho mais escuro)
        'law-accent': '#ef4444',       // Red 500 (vermelho vinho mais claro)
        
        // Educação - Verdes acadêmicos
        'edu-primary': '#34d399',      // Emerald 400
        'edu-secondary': '#10b981',    // Emerald 500
        'edu-accent': '#6ee7b7',       // Emerald 300
        
        // Biologia - Amarelo alaranjado
        'bio-primary': '#f59e0b',      // Amber 500 (amarelo alaranjado)
        'bio-secondary': '#d97706',    // Amber 600 (amarelo alaranjado mais escuro)
        'bio-accent': '#fbbf24',       // Amber 400 (amarelo alaranjado mais claro)
        
        // Accent colors
        'accent': '#8b5cf6',           // Purple 500
        'accent-light': '#a78bfa',     // Purple 400
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tech-gradient': 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        'law-gradient': 'linear-gradient(135deg, #dc2626, #b91c1c)',
        'edu-gradient': 'linear-gradient(135deg, #34d399, #10b981)',
        'bio-gradient': 'linear-gradient(135deg, #f59e0b, #d97706)',
        'multi-gradient': 'linear-gradient(135deg, #60a5fa, #fbbf24, #34d399)',
        'dark-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(59, 130, 246)' },
          '100%': { boxShadow: '0 0 20px rgb(59, 130, 246), 0 0 30px rgb(59, 130, 246)' },
        }
      }
    },
  },
  plugins: [],
}