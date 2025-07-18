import React, { useEffect, useState } from 'react';

const ScrollLines = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = Array.from({ length: 5 }, (_, i) => (
    <div
      key={i}
      className="scroll-line"
      style={{
        top: `${20 + i * 15}%`,
        animationDelay: `${i * 0.3}s`,
        animationDuration: `${2 + i * 0.2}s`,
      }}
    />
  ));

  return (
    <div className="scroll-lines">
      {lines}
    </div>
  );
};

export default ScrollLines;