import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Header = ({ activeSection, scrollToSection, isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', iconClass: 'icon-home' },
    { id: 'about', label: 'About', iconClass: 'icon-about' },
    { id: 'projects', label: 'Projects', iconClass: 'icon-projects' },
    { id: 'contact', label: 'Contact', iconClass: 'icon-contact' }
  ];

  return (
    <header className={`floating-header aero-glass ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-glow text-primary">
              Yashwanthram K A
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id ? 'text-blue-300' : 'text-secondary'
                }`}
              >
                <span className={`flat-icon ${item.iconClass} mr-2`}></span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="aero-button text-primary theme-toggle"
            >
              <span className={`flat-icon ${isDarkMode ? 'icon-sun' : 'icon-moon'}`}></span>
              <span className="ml-2 text-sm">
                {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="aero-button text-primary"
            >
              <span className="skeuomorphic-icon">
                {isMobileMenuOpen ? '❌' : '☰'}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden aero-glass mt-2 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-600/20 text-blue-300'
                      : 'text-secondary hover:bg-white/10'
                  }`}
                >
                  <span className="skeuomorphic-icon mr-3">{item.emoji}</span>
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="aero-button text-primary w-full theme-toggle"
                >
                  <span className="skeuomorphic-icon mr-2">
                    {isDarkMode ? '☀️' : '🌙'}
                  </span>
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;