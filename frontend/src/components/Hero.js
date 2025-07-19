import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Hero = ({ scrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titles = [
    'BTech CSE Graduate 🎓',
    'CTO at Techmedok.com 🏥',
    'Tech Explorer 🔬',
    'Creative Developer 🎨'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`space-y-8 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl text-secondary font-light">
              <span className="flat-icon icon-wave"></span> Hi, I'm
            </h2>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-primary text-glow mb-6">
              Yashwanth
            </h1>
            <div className="h-16">
              <p className="text-xl sm:text-2xl lg:text-3xl text-secondary font-light transition-all duration-500">
                {titles[currentTitleIndex]}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="aero-button text-primary px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flat-icon icon-about mr-2"></span>
              Learn More About Me
              <span className="flat-icon icon-arrow-down ml-2"></span>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="aero-button text-primary px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flat-icon icon-email mr-2"></span>
              Download Resume
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 aero-glass rounded-full text-primary hover:bg-white/10 transition-all duration-300"
          >
            <span className="flat-icon icon-arrow-down text-2xl"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;