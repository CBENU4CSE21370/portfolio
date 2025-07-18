import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Download } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titles = ['BTech CSE Graduate', 'CTO at Techmedok.com', 'Tech Explorer', 'Creative Developer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`space-y-8 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl text-white/90 font-light">
              Hi, I'm
            </h2>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-6">
              Yashwanth
            </h1>
            <div className="h-16">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light transition-all duration-500">
                {titles[currentTitleIndex]}
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-lg">
              <p className="text-lg text-white/90 leading-relaxed">
                CTO at Techmedok.com • Tech Explorer • Creator
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 glass-card rounded-full text-white hover:bg-white/10 transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;