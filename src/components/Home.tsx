import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Marquee } from './Marquee';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [scrollPercent, setScrollPercent] = React.useState(0);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.floor(latest * 100));
    });
  }, [scrollYProgress]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    const { left, top, width, height } = scrollRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Scroll Percentage Counter */}
      <div className="absolute top-10 right-10 z-20 font-mono text-xl md:text-2xl font-light text-brand-white/30 tracking-tighter">
        {scrollPercent.toString().padStart(3, '0')}%
      </div>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Marquee Textures in Vivid Orange */}
      <div className="absolute inset-0 opacity-[0.1] flex flex-col justify-around pointer-events-none select-none py-20 text-brand-orange">
        <Marquee 
          texts={["CRÉATIF", "the Creative", "クリティーボ", "KREATIEF"]} 
          className="text-[18vw] font-black leading-none"
          speed={60}
        />
        <Marquee 
          texts={["CRÉATIF", "the Creative", "クリティーボ", "KREATIEF"]} 
          className="text-[18vw] font-black leading-none"
          reverse
          speed={70}
        />
        <Marquee 
          texts={["CRÉATIF", "the Creative", "クリティーボ", "KREATIEF"]} 
          className="text-[18vw] font-black leading-none"
          speed={65}
        />
      </div>

      <motion.div 
        style={{ y }}
        className="relative z-10 text-center px-4 w-full max-w-[90vw] perspective-[1000px]"
      >
        <motion.div
          initial={{ rotateX: 90, opacity: 0, y: 100 }}
          whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="origin-bottom"
        >
          <h1 className="text-5xl md:text-[9vw] font-black leading-[0.9] tracking-tighter uppercase text-brand-white mb-2">
            GREG SILLVA
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "circOut", delay: 1 }}
            className="h-[1px] bg-brand-orange/50 mx-auto max-w-[400px] mb-6"
          />
          <h2 className="text-xl md:text-[2.5vw] font-light text-brand-white/70 tracking-[0.3em] uppercase block">
            Diretor Criativo Visual
          </h2>
        </motion.div>
      </motion.div>

      <motion.div 
        ref={scrollRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer p-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 whitespace-nowrap">Scroll for more</span>
        <div className="w-[1px] h-12 bg-brand-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-brand-orange"
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
