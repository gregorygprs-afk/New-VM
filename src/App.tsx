/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { Preloader } from './components/Preloader';
import { Home } from './components/Home';
import { About } from './components/About';
import { Education } from './components/Education';
import { Expertise } from './components/Expertise';
import { Metrics } from './components/Metrics';
import { Process } from './components/Process';
import { Product } from './components/Product';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main className="relative bg-brand-black cursor-none">
      <CustomCursor />
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative z-0">
          <Home />
          <SectionWrapper><About /></SectionWrapper>
          <SectionWrapper><Education /></SectionWrapper>
          <SectionWrapper><Expertise /></SectionWrapper>
          <SectionWrapper><Metrics /></SectionWrapper>
          <SectionWrapper><Process /></SectionWrapper>
          <SectionWrapper><Product /></SectionWrapper>
          <SectionWrapper><Contact /></SectionWrapper>
        </div>
      )}
    </main>
  );
}
