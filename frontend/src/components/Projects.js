import React, { useState } from 'react';
import { Button } from './ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "TechMed Analytics Platform",
      description: "Advanced healthcare analytics platform with real-time monitoring and predictive insights for medical professionals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=400&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Python"],
      category: "fullstack",
      featured: true,
      github: "https://github.com/yashwanth/techmed-analytics",
      demo: "https://techmed-analytics.demo.com/",
      iconClass: "icon-code"
    },
    {
      id: 2,
      title: "ROM Performance Benchmarker",
      description: "Comprehensive benchmarking tool for custom Android ROMs, providing detailed performance metrics and comparison data.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
      technologies: ["Python", "Android SDK", "SQLite", "Flask"],
      category: "mobile",
      featured: true,
      github: "https://github.com/yashwanth/rom-benchmarker",
      demo: null,
      iconClass: "icon-phone"
    },
    {
      id: 3,
      title: "Audio Spectrum Analyzer",
      description: "Real-time audio spectrum analysis tool for music production with advanced visualization and frequency analysis.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&auto=format&fit=crop",
      technologies: ["JavaScript", "Web Audio API", "Canvas", "React"],
      category: "web",
      featured: true,
      github: "https://github.com/yashwanth/audio-spectrum",
      demo: "https://audio-spectrum.demo.com/",
      iconClass: "icon-music"
    },
    {
      id: 4,
      title: "DIY Hardware Monitor",
      description: "IoT-based hardware monitoring system for DIY projects with real-time data visualization and alerts.",
      image: "https://images.unsplash.com/photo-1518312023394-aa7dbce1b30b?q=80&w=400&auto=format&fit=crop",
      technologies: ["Arduino", "Python", "React", "WebSocket"],
      category: "iot",
      featured: false,
      github: "https://github.com/yashwanth/hardware-monitor",
      demo: null,
      iconClass: "icon-tool"
    },
    {
      id: 5,
      title: "Photography Portfolio Engine",
      description: "Dynamic portfolio engine for photographers with automatic image optimization and gallery management.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=400&auto=format&fit=crop",
      technologies: ["Next.js", "Cloudinary", "Prisma", "PostgreSQL"],
      category: "web",
      featured: false,
      github: "https://github.com/yashwanth/photo-portfolio",
      demo: "https://photo-portfolio.demo.com/",
      iconClass: "icon-camera"
    },
    {
      id: 6,
      title: "Smart Home Dashboard",
      description: "Centralized dashboard for smart home devices with automation rules and energy monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
      technologies: ["Vue.js", "Python", "MQTT", "InfluxDB"],
      category: "iot",
      featured: false,
      github: "https://github.com/yashwanth/smart-home",
      demo: null,
      iconClass: "icon-tool"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', iconClass: 'icon-target' },
    { id: 'fullstack', label: 'Full-Stack', iconClass: 'icon-code' },
    { id: 'web', label: 'Web Apps', iconClass: 'icon-globe' },
    { id: 'mobile', label: 'Mobile', iconClass: 'icon-phone' },
    { id: 'iot', label: 'IoT', iconClass: 'icon-tool' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-primary text-glow mb-4">
            <span className="flat-icon icon-projects mr-4"></span>
            Featured Projects
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            <span className="flat-icon icon-search"></span> Explore my latest work spanning from healthcare technology to audio production tools
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 border transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-blue-600/30 text-primary border-blue-400/50' 
                  : 'text-secondary border-white/20 hover:border-white/40'
              }`}
            >
              <span className={`flat-icon ${category.iconClass} mr-2`}></span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Alternating Layout */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="aero-glass p-2 rounded-lg">
                      <span className={`flat-icon ${project.iconClass} text-2xl`}></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl lg:text-3xl font-medium text-primary text-glow">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted capitalize px-3 py-1 border border-white/20 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-secondary text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button 
                    className="px-6 py-2 border border-white/20 text-primary hover:border-white/40 transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <span className="flat-icon icon-github mr-2"></span>
                    Code
                  </button>
                  {project.demo && (
                    <button 
                      className="px-6 py-2 bg-blue-600/30 border border-blue-400/50 text-primary hover:bg-blue-600/40 transition-all duration-300"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <span className="flat-icon icon-globe mr-2"></span>
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 bg-blue-600/30 border border-blue-400/50 text-primary hover:bg-blue-600/40 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://github.com/yashwanth', '_blank')}
          >
            <span className="flat-icon icon-github mr-2"></span>
            View All Projects
            <span className="flat-icon icon-globe ml-2"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;