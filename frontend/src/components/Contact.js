import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully! 📧",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      iconClass: "icon-email",
      label: "Email",
      value: "yashwanth.dev@gmail.com",
      link: "mailto:yashwanth.dev@gmail.com"
    },
    {
      iconClass: "icon-location",
      label: "Location",
      value: "India",
      link: null
    },
    {
      iconClass: "icon-clock",
      label: "Available",
      value: "Mon - Fri, 9AM - 6PM IST",
      link: null
    }
  ];

  const socialLinks = [
    {
      iconClass: "icon-github",
      label: "GitHub",
      link: "https://github.com/yashwanth",
    },
    {
      iconClass: "icon-linkedin",
      label: "LinkedIn", 
      link: "https://linkedin.com/in/yashwanth-dev",
    },
    {
      iconClass: "icon-email",
      label: "Email",
      link: "mailto:yashwanth.dev@gmail.com",
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-primary text-glow mb-4">
            <span className="flat-icon icon-contact mr-4"></span>
            Get In Touch
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            <span className="flat-icon icon-handshake"></span> I'm always interested in discussing new opportunities, collaborations, 
            or just having a chat about technology.
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-primary text-glow mb-6">
                <span className="flat-icon icon-message mr-2"></span>
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    <span className="flat-icon icon-user mr-1"></span>
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="aero-input text-primary placeholder-muted"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    <span className="flat-icon icon-email mr-1"></span>
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="aero-input text-primary placeholder-muted"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    <span className="flat-icon icon-message mr-1"></span>
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    className="aero-input text-primary placeholder-muted"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600/30 border border-blue-400/50 text-primary py-3 transition-all duration-300 transform hover:scale-105 hover:bg-blue-600/40"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <span className="flat-icon icon-clock animate-bounce"></span>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span className="flat-icon icon-send mr-2"></span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-primary text-glow mb-6">
                <span className="flat-icon icon-contact mr-2"></span>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 aero-glass text-3xl rounded-lg">
                      <span className={`flat-icon ${info.iconClass}`}></span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-primary text-glow hover:text-blue-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-primary text-glow mb-6">
                <span className="flat-icon icon-globe mr-2"></span>
                Find me online
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-3xl">
                      <span className={`flat-icon ${social.iconClass}`}></span>
                    </div>
                    <span className="text-primary text-glow font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;