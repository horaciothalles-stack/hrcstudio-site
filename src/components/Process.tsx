import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeamos sua marca, concorrência e oportunidades em uma call de 45 minutos.",
  },
  {
    n: "02",
    title: "Estratégia sob medida",
    desc: "Apresentamos um plano de crescimento com metas, canais e investimento claros.",
  },
  {
    n: "03",
    title: "Execução premium",
    desc: "Nosso time entra em ação: design, copy, gestão de tráfego e relatórios semanais.",
  },
  {
    n: "04",
    title: "Otimização contínua",
    desc: "Testamos, medimos e escalamos o que funciona — sempre transparente, sempre data-driven.",
  },
];

export function Process() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Como trabalhamos
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Um processo <span className="text-gradient">claro</span> do briefing à escala
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur"
            >
              <div className="font-display text-5xl font-bold text-primary/30">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
