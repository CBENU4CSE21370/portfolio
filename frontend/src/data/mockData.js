// Mock data for the portfolio website
// This file contains all the static data used throughout the application

export const personalInfo = {
  name: "Yashwanthram K A",
  title: "BTech CSE Graduate",
  currentRole: "CTO at Techmedok.com",
  description: "CTO at Techmedok.com • Tech Explorer • Creator",
  longDescription: `Hi, I'm Yashwanth, CTO at Techmedok.com. I explore and benchmark 
    cutting‑edge platforms—from beta OS builds to custom ROMs—to surface 
    performance insights and practical guidance through my writing. Outside 
    of that, I prototype DIY hardware/software projects, capture visuals as 
    an amateur photographer, and dive into audio as an occasional music 
    producer and dedicated audiophile.`,
  email: "yashwanth.dev@gmail.com",
  location: "India",
  availability: "Mon - Fri, 9AM - 6PM IST",
  socialLinks: {
    github: "https://github.com/yashwanth",
    linkedin: "https://linkedin.com/in/yashwanth-dev",
    email: "mailto:yashwanth.dev@gmail.com"
  }
};

export const interests = [
  {
    icon: "💻",
    title: "Web Development",
    description: "I build responsive websites using HTML, CSS, and JavaScript."
  },
  {
    icon: "📸",
    title: "Photography", 
    description: "I love capturing landscape shots and urban scenes."
  },
  {
    icon: "🎵",
    title: "Music Production",
    description: "I produce electronic tracks in Ableton Live."
  },
  {
    icon: "🎮",
    title: "Gaming",
    description: "I enjoy immersive story-driven games like Cyberpunk 2077."
  },
  {
    icon: "✈️",
    title: "Travel",
    description: "Exploring new cultures and cuisines is my passion."
  },
  {
    icon: "📚",
    title: "Reading",
    description: "I read sci-fi novels and tech blogs in my spare time."
  }
];

export const projects = [
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

export const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "SASS"]
  },
  {
    category: "Backend", 
    skills: ["Node.js", "Python", "FastAPI", "Express.js", "Django", "Flask"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Redis", "InfluxDB"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "Linux", "Arduino", "Raspberry Pi"]
  },
  {
    category: "Mobile & IoT", 
    skills: ["Android SDK", "Custom ROMs", "MQTT", "WebSocket", "Embedded Systems"]
  },
  {
    category: "Creative",
    skills: ["Photography", "Music Production", "Ableton Live", "Adobe Creative Suite"]
  }
];

export const experienceTimeline = [
  {
    id: 1,
    title: "CTO",
    company: "Techmedok.com",
    period: "2023 - Present",
    description: "Leading technology strategy and platform development for healthcare analytics solutions.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2022 - 2023", 
    description: "Developed web applications and mobile solutions for various clients across different industries.",
    technologies: ["React", "Python", "Django", "PostgreSQL"]
  },
  {
    id: 3,
    title: "BTech Computer Science Engineering",
    company: "University",
    period: "2018 - 2022",
    description: "Graduated with focus on software engineering, algorithms, and data structures.",
    technologies: ["Java", "C++", "Data Structures", "Algorithms"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Medical Director",
    company: "HealthTech Solutions",
    content: "Yashwanth's work on our analytics platform has revolutionized how we monitor patient outcomes. His technical expertise combined with understanding of healthcare needs is exceptional.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Tech Lead",
    company: "StartupXYZ",
    content: "Working with Yashwanth was a game-changer for our project. His ability to deliver complex solutions with clean, maintainable code is remarkable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Product Manager",
    company: "TechCorp", 
    content: "Yashwanth's innovative approach to problem-solving and his dedication to quality make him an invaluable team member. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c4eca263?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

export default {
  personalInfo,
  interests,
  projects,
  skillCategories,
  experienceTimeline,
  testimonials
};