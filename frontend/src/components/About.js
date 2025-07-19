import React from 'react';

const About = () => {
  const interests = [
    {
      iconClass: "icon-code",
      title: "Web Development",
      description: "I build responsive websites using HTML, CSS, and JavaScript."
    },
    {
      iconClass: "icon-camera",
      title: "Photography",
      description: "I love capturing landscape shots and urban scenes."
    },
    {
      iconClass: "icon-music",
      title: "Music Production",
      description: "I produce electronic tracks in Ableton Live."
    },
    {
      iconClass: "icon-gamepad",
      title: "Gaming",
      description: "I enjoy immersive story-driven games like Cyberpunk 2077."
    },
    {
      iconClass: "icon-plane",
      title: "Travel",
      description: "Exploring new cultures and cuisines is my passion."
    },
    {
      iconClass: "icon-book",
      title: "Reading",
      description: "I read sci-fi novels and tech blogs in my spare time."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-primary text-glow mb-4">
            <span className="flat-icon icon-about mr-4"></span>
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="max-w-4xl">
            <p className="text-lg text-secondary leading-relaxed text-center">
              <span className="flat-icon icon-wave"></span> Hi, I'm Yashwanth, CTO at Techmedok.com. 
              I explore and benchmark cutting‑edge platforms—from beta OS builds to custom ROMs—to surface 
              performance insights and practical guidance through my writing. <span className="flat-icon icon-tool"></span> Outside 
              of that, I prototype DIY hardware/software projects, capture visuals as 
              an amateur photographer <span className="flat-icon icon-camera"></span>, and dive into audio as an occasional music 
              producer and dedicated audiophile <span className="flat-icon icon-music"></span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="aero-glass p-6 rounded-lg group transform transition-all duration-300 hover:scale-105 project-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 aero-glass rounded-lg text-4xl group-hover:scale-110 transition-transform">
                  <span className={`flat-icon ${interest.iconClass}`}></span>
                </div>
                <h3 className="text-xl font-medium text-primary text-glow group-hover:text-blue-300 transition-colors">
                  {interest.title}
                </h3>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="aero-glass inline-block p-6 rounded-lg">
            <h3 className="text-2xl font-medium text-primary text-glow mb-4">
              <span className="skeuomorphic-icon mr-2">🤝</span>
              Let's Build Something Amazing Together
            </h3>
            <p className="text-secondary max-w-2xl">
              <span className="skeuomorphic-icon">⚡</span> I'm always excited to work on innovative projects and collaborate 
              with passionate people who share a vision for creating impactful technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;