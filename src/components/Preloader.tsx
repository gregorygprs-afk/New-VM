import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      // Use easeOutQuint for a smoother progress feel
      const t = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - t, 5); // easeOutQuint
      const newProgress = easeProgress * 100;
      
      setProgress(newProgress);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (isComplete) {
      // Call onComplete immediately
      onComplete();

      const tl = gsap.timeline();

      tl.to('.preloader-content', {
        opacity: 0,
        y: -100,
        duration: 0.8,
        ease: 'power4.in'
      })
      .to('.preloader-shutter', {
        scaleY: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: 'expo.inOut',
      });
    }
  }, [isComplete, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] grid grid-cols-4 pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="preloader-shutter relative w-full h-full bg-brand-black origin-top pointer-events-auto" />
      ))}
      
      <div className="preloader-content absolute inset-0 z-10 flex flex-col items-center justify-center gap-12 pointer-events-none p-6">
        <div className="relative">
          <h1 className="text-4xl md:text-[10vw] font-black tracking-tighter text-brand-white/5 uppercase leading-none text-center">
            GREG <br className="md:hidden" /> SILLVA
          </h1>
          <div 
            className="absolute inset-0 text-brand-orange overflow-hidden whitespace-nowrap uppercase text-4xl md:text-[10vw] font-black tracking-tighter leading-none text-center"
            style={{ 
              clipPath: `inset(0 ${100 - progress}% 0 0)`,
              transition: 'clip-path 0.1s linear'
            }}
          >
            GREG <br className="md:hidden" /> SILLVA
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <div className="font-mono text-5xl md:text-8xl font-light tracking-tighter text-brand-white">
            {Math.floor(progress).toString().padStart(3, '0')}
          </div>
          <div className="w-[300px] md:w-[400px] h-[2px] bg-brand-white/5 relative overflow-hidden">
            <motion.div 
               className="absolute inset-0 bg-brand-orange"
               style={{ scaleX: progress / 100, originX: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
