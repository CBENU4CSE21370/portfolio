import React from 'react';
import { Button } from './ui/button';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home', emoji: '🏠' },
    { id: 'about', label: 'About', emoji: '👨‍💻' },
    { id: 'projects', label: 'Projects', emoji: '🚀' },
    { id: 'contact', label: 'Contact', emoji: '📞' }
  ];

  const socialLinks = [
    {
      emoji: "💻",
      link: "https://github.com/yashwanth",
    },
    {
      emoji: "💼",
      link: "https://linkedin.com/in/yashwanth-dev",
    },
    {
      emoji: "📧",
      link: "mailto:yashwanth.dev@gmail.com",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative aero-glass border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary text-glow mb-4">
              <span className="skeuomorphic-icon mr-2">💼</span>
              Yashwanth
            </h3>
            <p className="text-secondary mb-6 max-w-md">
              <span className="skeuomorphic-icon">🎓</span> B.Tech CSE Graduate • 
              <span className="skeuomorphic-icon">🏥</span> CTO at Techmedok.com • 
              <span className="skeuomorphic-icon">🔬</span> Tech Explorer • 
              <span className="skeuomorphic-icon">🎨</span> Creative Developer
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 aero-glass rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-white/5"
                >
                  <span className="skeuomorphic-icon text-2xl">{social.emoji}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary text-glow mb-4">
              <span className="skeuomorphic-icon mr-2">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-secondary hover:text-primary hover:text-glow transition-colors text-sm flex items-center"
                  >
                    <span className="skeuomorphic-icon mr-2">{link.emoji}</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-secondary text-sm">
            <span>© {currentYear} Yashwanth. Made with</span>
            <span className="skeuomorphic-icon text-red-400">❤️</span>
            <span>and</span>
            <span className="skeuomorphic-icon text-blue-400">⚛️</span>
            <span>React</span>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="aero-button text-secondary hover:text-primary transition-all duration-300"
            >
              <span className="skeuomorphic-icon mr-2">⬆️</span>
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 aero-glass rounded-full text-primary hover:bg-white/10 transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <span className="skeuomorphic-icon text-2xl">⬆️</span>
      </button>
    </footer>
  );
};

export default Footer;