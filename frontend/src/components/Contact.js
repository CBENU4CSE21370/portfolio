import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
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
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "yashwanth.dev@gmail.com",
      link: "mailto:yashwanth.dev@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India",
      link: null
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Available",
      value: "Mon - Fri, 9AM - 6PM IST",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/yashwanth",
      color: "text-gray-400 hover:text-white"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      link: "https://linkedin.com/in/yashwanth-dev",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      link: "mailto:yashwanth.dev@gmail.com",
      color: "text-red-400 hover:text-red-300"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="glass-card inline-block p-8 rounded-lg mb-8">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, 
              or just having a chat about technology.
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto mt-4"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
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
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
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
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
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
                    className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600/20 text-blue-300 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-white mb-6">Find me online</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`${social.color} transition-colors`}>
                      {social.icon}
                    </div>
                    <span className="text-white font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Message */}
            <div className="glass-card p-6 rounded-lg text-center">
              <h4 className="text-lg font-medium text-white mb-2">Quick Response</h4>
              <p className="text-white/80 text-sm">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out via email directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;