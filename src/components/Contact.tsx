import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react';

const contactCards = [
  {
    label: "Email",
    value: "DIRETORGREG@GMAIL.COM",
    icon: <Mail className="w-5 h-5" />,
    link: "mailto:diretorgreg@gmail.com"
  },
  {
    label: "WhatsApp",
    value: "47 9 9992-2517",
    icon: <Phone className="w-5 h-5" />,
    link: "https://wa.me/5547999922517?text=Oii%20Greg!%20Vim%20pelo%20site%20da%20consultoria%20Express-3%20e%20gostaria%20de%20saber%20as%20datas%20dispon%C3%ADveis%20e%20agendar%20uma%20conversa!"
  },
  {
    label: "Instagram",
    value: "@GREGSILLVA",
    icon: <Instagram className="w-5 h-5" />,
    link: "https://instagram.com/gregsillva"
  }
];

const ContactCard = ({ card, i }: { card: typeof contactCards[0], i: number, key?: React.Key }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={cardRef}
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
        delay: 0.3 + (i * 0.1),
      }}
      viewport={{ once: false, amount: 0.1 }}
      className="group flex items-center justify-between p-8 bg-brand-white/5 border border-brand-white/5 hover:bg-brand-orange transition-colors duration-500 rounded-sm"
    >
      <div className="flex items-center gap-6">
        <div className="text-brand-orange group-hover:text-brand-white transition-colors duration-500">
          {card.icon}
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity duration-500 block mb-1">
            {card.label}
          </span>
          <span className="text-lg md:text-2xl font-bold tracking-tight">
            {card.value}
          </span>
        </div>
      </div>
      <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
    </motion.a>
  );
};

export const Contact = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-12 block"
        >
          Contato // Get in Touch
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-4 relative z-20">
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-brand-white"
              >
                VAMOS
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-brand-orange"
              >
                CONVERSAR?
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-brand-white/80 text-lg md:text-xl font-light mt-8 max-w-md"
            >
              Consultoria aberta por tempo limitado, entre em contato e confira as datas ainda disponíveis.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {contactCards.map((card, i) => (
              <ContactCard key={i} card={card} i={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Massive Background Logo */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden h-[30vh] flex items-end">
        <motion.h2 
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "20%", opacity: 0.05 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[35vw] font-black leading-none tracking-tighter whitespace-nowrap"
        >
          G-R-E-G
        </motion.h2>
      </div>
    </section>
  );
};
