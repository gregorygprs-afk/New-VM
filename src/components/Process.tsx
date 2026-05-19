import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    id: "01",
    title: "Validação das Datas",
    subtitle: "Agendamento",
    desc: "Agendamento, verificamos as datas disponíveis pra iniciar os projetos."
  },
  {
    id: "02",
    title: "Onboarding",
    subtitle: "Após a data agendada",
    desc: "O onboarding é o processo de conversarmos, entender as necessidades e coletar os dados."
  },
  {
    id: "03",
    title: "Processamento Técnico",
    subtitle: "5 a 7 dias úteis",
    desc: "Análise interna técnica profunda através do laboratório criativo."
  },
  {
    id: "04",
    title: "Entrega Viva & Dossiê",
    subtitle: "Consulte disponibilidade",
    desc: "Presença síncrona da liderança para entrega do diagnóstico cirúrgico."
  }
];

export const Process = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-32 items-end">
        <div className="lg:col-span-2">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-8 block font-bold"
          >
            Engenharia de Processo // Workflow
          </motion.span>
          <motion.h2 
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-5xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.85] text-brand-white"
          >
            STEPS DA <span className="text-brand-orange">CONSULTORIA</span> DE VM-EXPRESS
          </motion.h2>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-4 gap-8 p-8 border border-brand-white/5 bg-brand-white/5 hover:bg-brand-orange/5 hover:border-brand-orange/20 transition-all duration-500 rounded-sm items-center"
          >
            <div className="flex items-center gap-6">
              <span className="text-brand-orange font-mono text-3xl opacity-30">{step.id}</span>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tighter text-brand-white">
                  {step.title}
                </h3>
                <p className="text-brand-orange text-[10px] uppercase font-mono tracking-widest">{step.subtitle}</p>
              </div>
            </div>
            
            <p className="md:col-span-3 text-brand-white/60 text-sm md:text-base font-light leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 max-w-4xl">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="p-12 border-l-4 border-brand-orange bg-brand-white/5"
        >
           <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-brand-white">
             "Se você acha que VM é só arrumar arara por cor, você ainda está operando no varejo de 2006."
           </h3>
           <p className="text-lg text-brand-white/60 font-light leading-relaxed">
             Eu traduzo o comportamento do consumidor em desejo imediato. 
             Não entrego receita de bolo, entrego <span className="text-brand-white font-medium">Neurobranding puro aplicado ao chão de loja</span>. 
             Vou te apontar exatamente onde seu layout está expulsando o cliente.
           </p>
        </motion.div>
      </div>
    </section>
  );
};
