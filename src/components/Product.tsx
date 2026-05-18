import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const formats = [
  {
    title: "Express Online",
    desc: "Varredura estratégica 100% remota. Ideal para tomadas de decisão rápidas e ajustes imediatos.",
    how: "Call focado de 1h30 via Meet + Dossiê Flash Digital."
  },
  {
    title: "In-Store Presencial",
    desc: "Imersão diagnóstica intensa diretamente no PDV. Store Walk analítico e teste dos sentidos.",
    how: "Visita técnica de 2h30 + Dossiê Estratégico Completo."
  },
  {
    title: "Phygital Híbrido",
    desc: "Ecossistema completo. Planejamento cirúrgico unido à validação física operacional.",
    how: "Call Estratégica + Execução Prática In-Store + Treinamento Final."
  }
];

const dossiers = [
  "Zoneamento Milimétrico de Fluxo",
  "Engenharia de Parede e Buy Line",
  "Relatório de Percepção Crítica",
  "Nudges Sensoriais Imediatos",
  "Plano Atmosférico (Music & Light)",
  "Protocolos de Manutenção Diária",
  "Guia de Inovação Omnichannel",
  "Manual de VM Estratégico"
];

export const Product = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="mb-24"
        >
          <span className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
            Arquitetura de Entrega // Formatos
          </span>
          <h2 className="text-4xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
            O QUE VOCÊ <br /> <span className="text-brand-orange">RECEBE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {formats.map((format, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-brand-white/5 border border-brand-white/10 hover:border-brand-orange/50 transition-all duration-700 h-full flex flex-col"
            >
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-brand-orange">{format.title}</h3>
              <p className="text-brand-white/60 font-light mb-8 flex-grow">{format.desc}</p>
              <div className="pt-8 border-t border-brand-white/5">
                <span className="text-[10px] uppercase tracking-widest text-brand-white/40 block mb-2 font-mono">Entrega</span>
                <p className="text-sm text-brand-white font-medium">{format.how}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dossiers.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: false, amount: 0.1 }}
              className="flex items-center gap-3 p-4 bg-brand-white/5 border border-brand-white/5 hover:bg-brand-orange/10 hover:border-brand-orange/20 transition-all duration-300 group"
            >
              <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                <Check className="w-2.5 h-2.5 text-brand-orange group-hover:text-brand-white transition-colors duration-300" />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-white/80 leading-tight">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
