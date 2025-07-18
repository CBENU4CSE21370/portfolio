import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      link: "https://github.com/yashwanth",
      color: "text-gray-400 hover:text-white"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      link: "https://linkedin.com/in/yashwanth-dev",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      link: "mailto:yashwanth.dev@gmail.com",
      color: "text-red-400 hover:text-red-300"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black/20 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Yashwanth
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              B.Tech CSE Graduate • CTO at Techmedok.com • Tech Explorer • Creative Developer
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 glass-card rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <span>© {currentYear} Yashwanth. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>and React</span>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 glass-card rounded-full text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;