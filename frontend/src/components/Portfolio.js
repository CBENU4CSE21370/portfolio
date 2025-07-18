import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ScrollLines from './ScrollLines';
import { Toaster } from './ui/toaster';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme class to document body
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`portfolio-background ${isDarkMode ? '' : 'light-mode'}`}>
      <ScrollLines />
      <div className="portfolio-content">
        <Header 
          activeSection={activeSection} 
          scrollToSection={scrollToSection}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </div>
  );
};

export default Portfolio;