import { motion } from "framer-motion";
import { ArrowRight, Calculator, LineChart, ShieldCheck, Wallet } from "lucide-react";

const systems = [
  {
    tag: "Sistema · Freelancers",
    name: "Frees",
    suffix: ".io",
    tagline: "Gestão e precificação estratégica para freelancers",
    description:
      "Pare de cobrar por achismo. O Frees.io centraliza sua gestão de projetos e aplica precificação estratégica baseada em valor percebido, para você cobrar o que realmente vale.",
    features: [
      { icon: Calculator, text: "Precificação estratégica baseada em valor percebido" },
      { icon: ShieldCheck, text: "Propostas e contratos digitais integrados" },
      { icon: LineChart, text: "Análise de rentabilidade por projeto" },
    ],
    href: "https://frees-io.lovable.app/",
  },
  {
    tag: "Sistema · Negócios",
    name: "Biz",
    suffix: ".io",
    tagline: "Caixa e gestão para autônomos, lojas e profissionais independentes",
    description:
      "Seu negócio já é Premium, sua gestão também deveria ser. O Biz.io organiza fluxo de caixa, histórico de clientes e relatórios financeiros que você entende de verdade.",
    features: [
      { icon: Wallet, text: "Controle de caixa em tempo real" },
      { icon: LineChart, text: "Relatórios financeiros claros e acionáveis" },
      { icon: ShieldCheck, text: "Integração com as principais formas de pagamento" },
    ],
    href: "https://biz-io.lovable.app/",
  },
];

export function Ecosystem() {
  return (
    <section id="ecossistema" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            O Ecossistema HRC Lab
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Não somos só uma agência.{" "}
            <span className="text-gradient">Somos desenvolvedores</span> de soluções inteligentes.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Criamos sistemas que elevam o padrão da profissão e fazem o trabalho
            pesado da gestão por você, para sua marca focar em crescer.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {systems.map((system, i) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 backdrop-blur transition-colors hover:bg-surface md:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {system.tag}
              </span>

              <div className="mt-5 font-display text-4xl font-bold leading-none">
                {system.name}
                <span className="text-primary">{system.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{system.tagline}</p>

              <p className="mt-6 text-sm leading-relaxed text-foreground/80">
                {system.description}
              </p>

              <ul className="mt-7 space-y-3">
                {system.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-sm">
                    <f.icon size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-foreground/90">{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href={system.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-75"
              >
                Conhecer o {system.name}
                {system.suffix}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[7rem] font-bold leading-none text-primary/[0.04]"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
