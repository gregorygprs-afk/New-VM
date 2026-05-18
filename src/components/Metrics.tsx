import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'motion/react';

const stats = [
  {
    value: 30,
    suffix: "%",
    label: "Aumento de Faturamento",
    description: "O Visual Merchandising bem executado transforma o tráfego de passagem em entrada efetiva."
  },
  {
    value: 1.3,
    suffix: "%",
    label: "Probabilidade de Compra",
    description: "Cada segundo extra que o cliente permanece na loja aumenta a chance de conversão."
  },
  {
    value: 40,
    suffix: "%",
    label: "Efeito do Toque",
    description: "Clientes que tocam em um produto têm chances significativamente maiores de comprá-lo."
  },
  {
    value: 18,
    suffix: "%",
    label: "Permanência",
    description: "Marketing sensorial e ambientação estratégica retêm o consumidor por mais tempo."
  },
  {
    value: 25,
    suffix: "%",
    label: "Vendas Adicionais",
    description: "O Cross Merchandising aplicado na raiz neurológica incentiva compras complementares."
  }
];

const principles = [
  {
    title: "Custo Cognitivo do Caos",
    content: "Ambientes desorganizados aumentam o estresse, gerando fadiga de decisão e abandono da loja."
  },
  {
    title: "Vitrine como Filtro de Dopamina",
    content: "O storytelling visual ativa o sistema de recompensa do consumidor antes mesmo dele entrar."
  },
  {
    title: "Nudges Sensoriais",
    content: "Ativação dos 33 sentidos biológicos para transformar o desejo em ação imediata no provador."
  }
];

const RollingNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    } else {
      springValue.jump(0);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue.toFixed(value === 1.3 ? 1 : 0)}</span>;
};

const StatItem = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="border-b border-brand-white/10 py-10 group"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-brand-orange text-xs uppercase tracking-widest mb-2 font-bold opacity-70">{stat.label}</p>
          <h4 className="text-2xl md:text-3xl font-light text-brand-white tracking-tight leading-tight">{stat.description}</h4>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl md:text-7xl font-black tracking-tighter text-brand-orange">
            <RollingNumber value={stat.value} />{stat.suffix}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Metrics = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              className="mb-20"
            >
              <span className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
                Estratégia // Neurobranding
              </span>
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                O PODER DO <br /> <span className="text-brand-orange">NEURO-VM</span>
              </h2>
            </motion.div>

            <div className="flex flex-col">
              {stats.map((stat, i) => (
                <StatItem key={i} stat={stat} index={i} />
              ))}
            </div>
          </div>

          <div className="lg:pt-48">
            <h3 className="text-brand-white/30 text-xs uppercase tracking-widest mb-12 font-bold">Princípios Neurocomportamentais</h3>
            <div className="space-y-12">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: false }}
                  className="p-8 border border-brand-white/10 bg-brand-white/5 relative"
                >
                  <span className="absolute top-0 right-0 p-4 font-mono text-brand-orange/20 text-4xl">0{i+1}</span>
                  <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-brand-white">{p.title}</h4>
                  <p className="text-brand-white/60 font-light leading-relaxed">{p.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
