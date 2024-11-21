import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenEff';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='relative h-screen w-full bg-black-100'>
      {/* Spotlight effects */}
      <div className='absolute inset-0'>
        <Spotlight 
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' 
          fill="white" 
        />
        <Spotlight 
          className='-top-10 -left-full h-[80vh] w-[50vh]' 
          fill="purple" 
        />
        <Spotlight 
          className='-top-28 -left-80 h-[80vh] w-[50vh]' 
          fill="blue" 
        />
      </div>

      {/* Container for radial gradient and centered text */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Radial gradient for a subtle fade effect */}
        <div 
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className='uppercase tracking-widest text-xs text-white'>
            Dynamic web magic
          </h2>
          <TextGenerateEffect
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Transforming Concepts Into Seamless User Experiences'/>
          <p
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              HI,I&apos;M A FRONT-END DEVELOPER BASED IN INDIA.
          </p>
          <a href='#about'>
            <MagicButton title="Learn More"
            icon={<FaLocationArrow />}
            position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
