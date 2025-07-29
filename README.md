# 🌟 Ricardo Melo - Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-11.0.0-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">
</div>

<div align="center">
  <h3>🎯 Professional Portfolio | 🏛️ Law & Technology | 🌍 Based in Cork, Ireland</h3>
  <p>A modern, responsive portfolio showcasing the intersection of legal expertise and software development</p>
</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Responsive Design](#-responsive-design)
- [🌐 Deployment](#-deployment)
- [📂 Project Structure](#-project-structure)
- [🎨 Design Features](#-design-features)
- [📞 Contact](#-contact)
- [📄 License](#-license)

---

## 🎯 Overview

This is a professional portfolio website for **Ricardo Melo**, a Brazilian lawyer with 11 years of judicial experience who is transitioning into software development. The website showcases a unique combination of legal expertise and modern web development skills.

### 👨‍💼 About Ricardo Melo
- **🏛️ Legal Background**: 11+ years in Brazilian Court of Justice
- **💻 Tech Journey**: Systems Analysis and Development Graduate
- **🎓 Education**: Pursuing postgraduate studies in Early Childhood Education
- **🌍 Location**: Currently based in Cork, Ireland
- **🎯 Mission**: Bridging legal expertise with technological innovation

---

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional dark theme
- Smooth animations and transitions
- Interactive UI elements
- Modern glassmorphism effects

### 🌐 **Bilingual Support**
- **English** and **Portuguese** language toggle
- Dynamic content switching
- Localized professional information

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes (320px to 4K+)
- Touch-friendly interactions
- Adaptive image sizing

### 🎭 **Interactive Sections**
- **Hero Section**: Dynamic introduction with call-to-action
- **About**: Professional background and characteristics
- **Skills**: Technology, Law, and Education expertise
- **Experience**: Professional journey timeline
- **Education**: Academic achievements
- **Portfolio**: Project showcases
- **Services**: Offered professional services
- **Certifications**: Professional credentials
- **Contact**: Multiple communication channels

### ⚡ **Performance Optimized**
- Fast loading times
- Optimized images and assets
- Smooth animations with Framer Motion
- SEO-friendly structure

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.2.0** - Modern UI library with hooks
- **JavaScript ES6+** - Latest language features

### **Styling & Design**
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Custom CSS Variables** - Dynamic theming
- **Responsive Design** - Mobile-first approach

### **Animation & Interactions**
- **Framer Motion 11.0.0** - Production-ready motion library
- **React Scroll 1.8.9** - Smooth scrolling navigation

### **Icons & Assets**
- **Lucide React 0.320.0** - Beautiful, customizable icons
- **Optimized Images** - WebP format with fallbacks

### **Development Tools**
- **React Scripts 5.0.1** - Build and development tools
- **Create React App** - Zero-configuration setup

### **Deployment**
- **Netlify** - Continuous deployment from GitHub
- **GitHub** - Version control and hosting

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/ricardoadevmelo/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### **Build for Production**
```bash
npm run build
# or
yarn build
```

---

## 📱 Responsive Design

The website is built with a mobile-first approach and is fully responsive across all devices:

### **Breakpoints**
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

### **Responsive Features**
- ✅ Adaptive image sizes
- ✅ Flexible grid layouts
- ✅ Touch-optimized interactions
- ✅ Scalable typography
- ✅ Optimized navigation
- ✅ Device-specific optimizations

---

## 🌐 Deployment

### **Netlify Deployment** (Recommended)

1. **Connect GitHub Repository**
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select this repository

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: build
   ```

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - Get your live URL!

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy the build folder to your hosting service
```

---

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── assets/
│   │   └── profile.jpg          # Profile image
│   ├── index.html               # HTML template
│   └── favicon.ico              # Site icon
├── src/
│   ├── components/              # React components
│   │   ├── About.jsx           # About section
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Education.jsx       # Education section
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── LanguageToggle.jsx  # Language switcher
│   │   ├── Portfolio.jsx       # Projects showcase
│   │   ├── ProgressBar.jsx     # Scroll progress
│   │   ├── Services.jsx        # Services offered
│   │   └── SocialIcons.jsx     # Social media links
│   ├── contexts/
│   │   └── LanguageContext.js  # Language state management
│   ├── data/
│   │   └── about.js            # Personal information
│   ├── App.jsx                 # Main app component
│   ├── index.js               # React DOM entry point
│   └── index.css              # Global styles
├── tailwind.config.js         # Tailwind configuration
├── package.json              # Dependencies & scripts
└── README.md                 # Project documentation
```

---

## 🎨 Design Features

### **Color Palette**
- **Dark Background**: `#0f172a` (slate-900)
- **Card Background**: `#1e293b` (slate-800) 
- **Text Primary**: `#e2e8f0` (slate-200)
- **Text Secondary**: `#cbd5e1` (slate-300)
- **Accent Colors**: 
  - Tech: `#3b82f6` (blue-500)
  - Law: `#f59e0b` (amber-500)
  - Education: `#10b981` (emerald-500)

### **Typography**
- **Primary Font**: Inter, Segoe UI, Roboto
- **Font Smoothing**: Antialiased for crisp text
- **Responsive Sizing**: Scales from mobile to desktop

### **Animations**
- **Entrance Animations**: Fade in with motion
- **Hover Effects**: Subtle scaling and color changes
- **Scroll Animations**: Content reveals on scroll
- **Loading States**: Smooth transitions

---

## 📞 Contact

### **Ricardo Melo**
- 🌐 **Portfolio**: [Your Live Website URL]
- 📧 **Email**: [Your Email]
- 💼 **LinkedIn**: [Your LinkedIn Profile]
- 🐙 **GitHub**: [Your GitHub Profile]
- 📍 **Location**: Cork, Ireland

### **Professional Services**
- 🏛️ Legal Consulting
- 💻 Web Development
- 🎓 Educational Technology
- 🤝 Legal-Tech Solutions

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first approach
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **Netlify** - For seamless deployment

---

<div align="center">
  <h3>⭐ If you found this portfolio interesting, please give it a star!</h3>
  <p>Built with ❤️ by Ricardo Melo | Combining Law & Technology</p>
  
  <img src="https://img.shields.io/github/stars/ricardoadevmelo/portfolio-website?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/ricardoadevmelo/portfolio-website?style=social" alt="GitHub forks">
</div>

---

## 🔄 Recent Updates

- ✅ **v1.0.0** - Initial portfolio release
- ✅ Added bilingual support (EN/PT)
- ✅ Implemented responsive design
- ✅ Added smooth animations
- ✅ Deployed to Netlify
- ✅ SEO optimization
- ✅ Performance improvements

---

*Made with passion in Cork, Ireland 🍀*
