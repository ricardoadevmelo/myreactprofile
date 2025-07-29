import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext.js";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import LanguageToggle from "./components/LanguageToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-dark-bg min-h-screen font-sans text-dark-text">
        <ProgressBar />
        <LanguageToggle />
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Services />
          <Portfolio />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
