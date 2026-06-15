import { motion } from "framer-motion";

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    description: 'Análise profunda do posicionamento atual, concorrência e oportunidades de diferenciação no segmento Premium.',
    showLine: true,
  },
  {
    num: '02',
    title: 'Estratégia sob medida',
    description: 'Construímos um plano completo com metas claras, canais prioritários e métricas de ROI definidas desde o início.',
    showLine: true,
  },
  {
    num: '03',
    title: 'Execução premium',
    description: 'Implementação com alto padrão de qualidade em cada entrega — design, copy, tecnologia e gestão integrados.',
    showLine: true,
  },
  {
    num: '04',
    title: 'Otimização contínua',
    description: 'Acompanhamento de resultados, testes e ajustes constantes para garantir crescimento sustentável e escalável.',
    showLine: false,
  },
];

const Processo = () => {
  return (
    <section id="processo" className="processo-section">
      <div className="eyebrow">Como trabalhamos</div>
      <h2 style={{ fontFamily: "'Spectral', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700 }}>
        Um processo <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>claro</em> do briefing à escala
      </h2>

      <div className="processo-steps">
        {steps.map((step) => (
          <div className="processo-step" key={step.num}>
            <div className="step-num">{step.num}</div>
            {step.showLine && <div className="step-line" />}
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Processo;
