import { motion } from "framer-motion";
import { Megaphone, Palette, TrendingUp, Video, Globe, Target } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego pago",
    desc: "Meta Ads, Google Ads e TikTok Ads com gestão diária e relatórios transparentes.",
  },
  {
    icon: Palette,
    title: "Identidade & branding",
    desc: "Construção e reposicionamento de marca com design consistente em todos os pontos.",
  },
  {
    icon: Video,
    title: "Conteúdo & criativos",
    desc: "Roteiro, gravação e edição de vídeos curtos e estáticos prontos pra performar.",
  },
  {
    icon: Megaphone,
    title: "Social media",
    desc: "Planejamento estratégico mensal, copy e publicação com foco em engajamento real.",
  },
  {
    icon: Globe,
    title: "Sites & landing pages",
    desc: "Páginas que carregam rápido, convertem e refletem o nível da sua marca.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria & funil",
    desc: "Diagnóstico, estratégia de funil e otimização contínua do seu CAC e LTV.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            O que fazemos
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Soluções <span className="text-gradient">end-to-end</span> para sua marca crescer
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da estratégia à entrega: tudo o que você precisa em um só lugar, sem
            depender de cinco fornecedores diferentes.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                <s.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
