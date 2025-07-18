import React, { useState } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';

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
      icon: "🏥"
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
      icon: "📱"
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
      icon: "🎵"
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
      icon: "🔧"
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
      icon: "📸"
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
      icon: "🏠"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="glass-card inline-block p-8 rounded-lg mb-8">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Explore my latest work spanning from healthcare technology to audio production tools
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto mt-4"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`${
                filter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'border-white/20 text-white hover:bg-white/10'
              } transition-all duration-300`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  {project.featured && (
                    <span className="glass-card px-3 py-1 text-xs text-white flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <div className="glass-card p-2 rounded-lg">
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-medium text-white group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/60 capitalize px-2 py-1 glass-card rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-white/80 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://github.com/yashwanth', '_blank')}
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;