import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const formats = [
  {
    title: "Plano Express",
    subtitle: "Online",
    desc: "Uma varredura estratégica de posicionamento visual operada de forma 100% remota. Ideal para tomadas de decisão rápidas e ajustes imediatos de rota comercial.",
    how: "O cliente envia os insumos digitais obrigatórios. Greg analisa os vazamentos de fluxo através do material. Em seguida, realiza-se uma única Call síncrona e focada de 1h30 via Google Meet para a entrega do Dossiê Flash Digital. A sessão é gravada para consulta perpétua da equipe.",
    who: "Lojas de nicho distantes geograficamente do consultor, e-commerces que estão inaugurando pequenos showrooms físicos, ou marcas que precisam de validação rápida para campanhas sazonais de alto giro."
  },
  {
    title: "Plano In-Store",
    subtitle: "Presencial",
    desc: "Imersão física de alta intensidade diagnóstica diretamente no ponto de venda. Uma auditoria que mapeia a experiência real do cliente através do espaço.",
    how: "Greg realiza uma visita técnica exclusiva de 2h30 diretamente no espaço comercial. É executado o Store Walk analítico, testando o ambiente através dos 33 sentidos biológicos. As falhas de iluminação, os pontos cegos e os travamentos de fluxo são identificados ao vivo. A entrega do Dossiê Estratégico Completo ocorre ao final da visita.",
    who: "Varejistas locais, boutiques premium de moda e marcas consolidadas que enfrentam queda inexplicável de ticket médio ou baixa conversão de vitrine."
  },
  {
    title: "Plano Phygital",
    subtitle: "Híbrido",
    desc: "O ecossistema completo de reestruturação de VM, unindo o planejamento cirúrgico digital à validação física operacional do espaço.",
    how: "Dividido em 3 momentos rígidos: 1) Call de alinhamento estratégico de 45 minutos online; 2) Visita técnica de execução prática tática de 1h30 no PDV para validação de layout; 3) Call final online de 1h para entrega do manual operacional e treinamento da liderança.",
    who: "Marcas em fase de expansão, lojas com equipes médias a grandes que necessitam de protocolos rígidos de manutenção diária de araras e marcas que operam fortemente integradas ao ecossistema omnichannel."
  }
];

const dossiers = [
  {
    title: "Dossiê Flash Simplificado (Plano Express Online)",
    items: [
      { name: "Relatório de Percepção Crítica", desc: "Apontamento direto das 3 principais falhas visuais que estão sabotando as vendas imediatas no ambiente digital/físico." },
      { name: "Mapa de Trilha de Compra Online", desc: "Orientação gráfica simples de modificação de layout para guiar o tráfego em direção ao caixa." },
      { name: "3 Nudges Sensoriais Imediatos", desc: "Gatilhos comportamentais rápidos para aplicação em provadores ou vitrine." }
    ],
    usage: "Deve ser compartilhado com a equipe interna para execução em um único dia de 'Visual Merchandising Day'."
  },
  {
    title: "Dossiê Estratégico Completo (Plano In-Store Presencial)",
    items: [
      { name: "Release de Identidade e Alma da Marca", desc: "Mapeamento do perfil da proprietária integrado à persona ideal de consumo." },
      { name: "Zoneamento Milimétrico de Fluxo", desc: "Separação exata das Zonas Quentes (Calor), Frias e de Transição no chão de loja, incluindo a calibração da Área de Descompressão." },
      { name: "Engenharia de Parede e Buy Line", desc: "Direcionamento vertical das alturas de exposição, especificando a exata alocação de Short Tops, Long Tops, Long Sleeves e Terceiras Peças." },
      { name: "Plano Atmosférico Sincronizado", desc: "Instruções de Music Branding (ritmo) e Engenharia de Iluminação (calibração de Kelvin e IRC > 90)." }
    ],
    usage: "Funciona como a bíblia de reestruturação física da loja. Deve ser seguido à risca na mudança de coleção ou readequação de layout trimestral."
  },
  {
    title: "Manual de Operação e Protocolos Phygital (Plano Híbrido)",
    items: [
      { name: "Todos os itens do Dossiê Estratégico Completo", desc: "Profundidade total analítica garantida." },
      { name: "Protocolos de Manutenção Diária", desc: "Checklists práticos para a equipe de vendas abrir e manter as araras organizadas nos padrões internacionais (Exposição Commodity vs Chunck)." },
      { name: "Guia de Inovação Omnichannel", desc: "Estrutura de implementação tática de QR Codes integrados, provadores inteligentes e uso de IA no varejo de moda." }
    ]
  }
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
            CONHEÇA OS TRÊS FORMATOS DA
          </span>
          <h2 className="text-4xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
            CONSULTORIA <br /> <span className="text-brand-orange">EXPRESS-3</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {formats.map((format, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-brand-white/5 border border-brand-white/10 hover:border-brand-orange/50 transition-all duration-700 h-full flex flex-col"
            >
              <h3 className="text-3xl font-black uppercase tracking-tighter text-brand-orange">{format.title}</h3>
              <p className="text-brand-white text-lg font-bold mb-6 tracking-widest uppercase">
                {format.subtitle}
              </p>
              <p className="text-brand-white/60 font-light mb-8 italic">
                "{format.desc}"
              </p>
              <div className="space-y-6 flex-grow">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-white/40 block mb-2 font-mono">Como acontece</span>
                  <p className="text-sm text-brand-white/80 font-light leading-relaxed">{format.how}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-white/40 block mb-2 font-mono">Para quem é orientado</span>
                  <p className="text-sm text-brand-white/80 font-light leading-relaxed">{format.who}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-brand-white border-b border-brand-white/10 pb-6 inline-block">
            3. DESCRITIVO TÉCNICO DOS DOSSIÊS DE ENTREGA
          </h3>
        </motion.div>

        <div className="space-y-16">
          {dossiers.map((dossier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.1 }}
              className="bg-brand-white/5 border border-brand-white/10 p-8 md:p-12"
            >
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-brand-orange mb-8">
                {dossier.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {dossier.items.map((item, j) => (
                  <div key={j} className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-brand-orange" />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-white mb-2">{item.name}</h5>
                      <p className="text-brand-white/60 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {dossier.usage && (
                <div className="mt-8 pt-8 border-t border-brand-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-brand-orange block mb-2 font-mono">Como usar</span>
                  <p className="text-brand-white/80 font-light italic">{dossier.usage}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

