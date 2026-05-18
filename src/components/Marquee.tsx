import React from 'react';
import { motion } from 'motion/react';

export const Marquee = ({ 
  texts, 
  className, 
  reverse = false,
  speed = 60 
}: { 
  texts: string[], 
  className?: string,
  reverse?: boolean,
  speed?: number
}) => {
  return (
    <div className={`marquee-container overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div 
        className="marquee-content inline-block"
        animate={{ x: reverse ? [ "-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {texts.map((text, i) => (
          <span key={i} className="whitespace-nowrap px-8 uppercase tracking-widest">{text}</span>
        ))}
      </motion.div>
      <motion.div 
        className="marquee-content inline-block"
        animate={{ x: reverse ? [ "-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        aria-hidden="true"
      >
        {texts.map((text, i) => (
          <span key={i} className="whitespace-nowrap px-8 uppercase tracking-widest">{text}</span>
        ))}
      </motion.div>
    </div>
  );
};
