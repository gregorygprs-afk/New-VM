import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const expertises = [
  {
    title: "Liderança em Branding",
    subtitle: "Brand Leadership",
    content: "Coordenação de marketing e gestão de marcas. Atuação focada no posicionamento estratégico e criação de narrativas visuais."
  },
  {
    title: "Expertise em Varejo",
    subtitle: "Retail Expertise",
    content: "Experiência com grandes players nacionais e marcas premium. Criação de vitrines, ambientações e gestão de equipes."
  },
  {
    title: "Direção Criativa",
    subtitle: "Creative Direction",
    content: "Desenvolvimento de identidades visuais e produção criativa para artistas nacionais e internacionais. Videoclipes e campanhas."
  },
  {
    title: "Visual Merchandising",
    subtitle: "Strategic VM",
    content: "Consultoria focada no aumento de conversão, ticket médio e redução de custos através da otimização de layout."
  }
];

export const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const scrollWidth = containerRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    let ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: -(scrollWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-brand-black overflow-hidden flex items-center">
      <div className="absolute top-20 left-6 md:left-24 z-10 font-bold">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-orange text-xs uppercase tracking-[0.4em] block"
        >
          Meu Olhar // Atuações
        </motion.span>
      </div>

      <div ref={containerRef} className="flex gap-8 md:gap-16 px-6 md:px-24">
        {expertises.map((item, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] group"
          >
            <div className="relative overflow-hidden aspect-[16/10] mb-12 bg-brand-white/5 border border-brand-white/5 flex items-center justify-center p-8">
               <span className="text-[20vw] font-black opacity-5 text-brand-orange leading-none pointer-events-none uppercase">
                 {item.subtitle.split(" ")[0]}
               </span>
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-brand-orange text-[10px] font-mono mb-2 block uppercase tracking-widest">{item.subtitle}</span>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-brand-white leading-none">
                    {item.title}
                  </h3>
               </div>
            </div>
            <p className="text-lg md:text-xl text-brand-white/50 leading-relaxed font-light max-w-xl">
              {item.content}
            </p>
            <div className="mt-8 w-12 h-[2px] bg-brand-orange group-hover:w-full transition-all duration-1000" />
          </div>
        ))}
      </div>
    </section>
  );
};
