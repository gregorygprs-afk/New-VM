import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1]);

  const text = "Sem receita mágica, sem palestrinha, meu objetivo é ser prático e funcional voltado para apenas as suas necessidades!";
  const words = text.split(" ");

  return (
    <section className="min-h-screen bg-brand-black flex flex-col justify-center py-32 px-6 md:px-24 overflow-hidden relative">
      <motion.div 
        style={{ scale }}
        className="max-w-6xl relative z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-12 block font-bold"
        >
          I AM: The Creative / Créatif / クリティーボ / Kreatief
        </motion.span>
        
        <div className="mb-16">
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-3xl md:text-5xl font-light leading-tight text-brand-white"
          >
            Tenho mais de 10 anos de experiência à frente de <span className="text-brand-orange font-medium uppercase tracking-tighter">Direções Criativas</span>, Branding & Visual Merchandising. 
          </motion.p>
        </div>

        <div className="space-y-16">
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-xl md:text-3xl font-light leading-relaxed text-brand-white/80 max-w-4xl"
          >
            Trabalhando por todo esse tempo junto com artistas da música, marcas e empresas de moda, criando conceitos que falam por si mesmos. Baseado em um método que é quase uma filosofia de vida:
          </motion.p>

          <div className="py-12 md:py-16 border-y border-brand-white/5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-brand-orange uppercase leading-snug tracking-tighter"
            >
              Sem receita mágica, sem palestrinha, meu objetivo é ser prático e funcional voltado para apenas as suas necessidades!
            </motion.h2>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[20vw] h-[20vw] bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
};
