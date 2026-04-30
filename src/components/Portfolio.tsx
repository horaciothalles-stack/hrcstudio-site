import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import fiveStars from "@/assets/clients/five-stars.png";
import borges from "@/assets/clients/borges.png";
import dreTarquini from "@/assets/clients/dre-tarquini.png";
import lamar from "@/assets/clients/lamar.png";
import malaga from "@/assets/clients/malaga.png";
import newTrade from "@/assets/clients/new-trade.png";

const clientLogos = [
  { src: fiveStars, name: "Five Stars Barbearia" },
  { src: borges, name: "Borges" },
  { src: dreTarquini, name: "Dre Tarquini" },
  { src: lamar, name: "Lamar" },
  { src: malaga, name: "Málaga" },
  { src: newTrade, name: "New Trade Concept" },
];

const testimonials = [
  {
    name: "Marcela Almeida",
    role: "Sócia, Lamar Boutique",
    text: "Foi tudo muito rápido e organizado. A equipe entendeu o que a gente precisava, executou sem complicação e entregou resultado. Deu uma sensação de segurança muito grande durante todo o processo.",
  },
  {
    name: "Diego Rocha",
    role: "CEO, New Trade Concept",
    text: "O que mais fez diferença pra gente foi a proximidade. Toda semana a gente ajusta, pensa junto, toma decisão... O crescimento veio como consequência disso! Saímos de R$50k pra R$380k/mês com muito mais clareza do que estávamos fazendo.",
  },
  {
    name: "Igor",
    role: "CEO, 5 Stars Barbearia",
    text: "Em 4 meses com a HRC, a gente realmente sentiu o negócio virar. O faturamento online cresceu muito, mas o que mais chamou atenção foi como os criativos começaram a conversar direto com o nosso público. Parece que eles entenderam a nossa marca por dentro.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      {/* Logos marquee */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Portfólio
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Marcas que <span className="text-gradient">confiam</span> na HRC
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Mais de 200 marcas atendidas em diferentes segmentos — do fitness ao
            luxo, do SaaS ao varejo.
          </p>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee items-center gap-16 whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((c, i) => (
            <img
              key={i}
              src={c.src}
              alt={c.name}
              loading="lazy"
              className="h-16 w-auto max-w-[200px] shrink-0 object-contain opacity-60 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl justify-center px-6 lg:px-10">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
        >
          Ver todos os projetos
        </Link>
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-border bg-surface p-8 shadow-card"
            >
              <Quote className="absolute right-6 top-6 text-primary/20" size={40} />
              <div className="mb-4 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}
