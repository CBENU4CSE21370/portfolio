import React from 'react';
import { Code, Camera, Music, Gamepad2, Plane, Book } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "I build responsive websites using HTML, CSS, and JavaScript."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography",
      description: "I love capturing landscape shots and urban scenes."
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music Production",
      description: "I produce electronic tracks in Ableton Live."
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Gaming",
      description: "I enjoy immersive story-driven games like Cyberpunk 2077."
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Travel",
      description: "Exploring new cultures and cuisines is my passion."
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Reading",
      description: "I read sci-fi novels and tech blogs in my spare time."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="glass-card inline-block p-6 rounded-lg mb-8">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="max-w-4xl glass-card p-8 rounded-lg">
            <p className="text-lg text-white leading-relaxed text-center">
              Hi, I'm Yashwanth, CTO at Techmedok.com. I explore and benchmark 
              cutting‑edge platforms—from beta OS builds to custom ROMs—to surface 
              performance insights and practical guidance through my writing. Outside 
              of that, I prototype DIY hardware/software projects, capture visuals as 
              an amateur photographer, and dive into audio as an occasional music 
              producer and dedicated audiophile.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-lg group transform transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg text-blue-300 group-hover:text-blue-200 transition-colors">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-blue-200 transition-colors">
                  {interest.title}
                </h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card inline-block p-6 rounded-lg">
            <h3 className="text-2xl font-medium text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-white/80 max-w-2xl">
              I'm always excited to work on innovative projects and collaborate 
              with passionate people who share a vision for creating impactful technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;