import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        {/* Badge de posicionamento */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2.5 border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground backdrop-blur uppercase"
        >
          <span className="text-primary font-display text-base italic">≠</span>
          HRC Lab · Diferente por Design
        </motion.div>

        {/* Headline principal — posicionamento premium */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl lg:text-8xl"
        >
          Transformar marcas em{" "}
          <span className="text-gradient italic">ativos financeiros</span>
          <br />
          de alto valor.
        </motion.h1>

        {/* Subheadline — proposta de valor premium */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-xl text-base text-muted-foreground md:text-lg font-light leading-relaxed"
        >
          Não entregamos apenas identidades visuais. Construímos{" "}
          <span className="text-foreground font-normal">posicionamento focado em ROI</span>{" "}
          para empresas que querem dominar o mercado Premium e sair da guerra de preços.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
          >
            Iniciar diagnóstico estratégico
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-border bg-surface/40 px-8 py-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface tracking-wide"
          >
            Ver cases de sucesso
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4"
        >
          {[
            { v: "+200", l: "Marcas reposicionadas" },
            { v: "8×", l: "ROI médio em 6 meses" },
            { v: "+1000", l: "Projetos entregues" },
            { v: "5 anos", l: "Construindo autoridade" },
          ].map((s) => (
            <div key={s.l} className="bg-background px-4 py-7">
              <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
              <div className="mt-1.5 text-xs text-muted-foreground tracking-wide">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
