import React from 'react';
import { motion } from 'motion/react';

const educationItems = [
  {
    title: "Direção Criativa Publicitária de Moda",
    content: "Formação Executiva (Elle Brasil)"
  },
  {
    title: "Produção de Moda / Styling",
    content: "Passaporte Fashionista Academy"
  },
  {
    title: "Marketing e Branding Estratégico",
    content: "Pós-graduação (PUCRS)"
  },
  {
    title: "Especialista pelo IBN",
    content: "Neurobranding • Comportamento do Consumidor • Gatilhos Cerebrais"
  },
  {
    title: "VM & Coolhunting",
    content: "Visual Merchandising Estratégico • Design de Interiores"
  }
];

export const Education = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-20 block font-bold"
      >
        Formações & Áreas de Estudo
      </motion.span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="group p-8 border border-brand-white/5 bg-brand-white/5 hover:border-brand-orange transition-all duration-500"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-orange leading-tight uppercase tracking-tighter">
              {item.title}
            </h3>
            <p className="text-lg text-brand-white/60 leading-relaxed font-light">
              {item.content}
            </p>
            <div className="mt-8 w-12 h-[2px] bg-brand-orange/30 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
