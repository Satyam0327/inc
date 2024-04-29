import React, { useState } from 'react';
import { Parallax } from 'react-parallax';


const Herosection = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero-container relative">
      <Parallax
        strength={400}
        className="parallax-container"
      >
        
      </Parallax>
      
    </div>
  );
}

export default Herosection;
