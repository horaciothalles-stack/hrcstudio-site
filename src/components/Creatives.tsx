import { motion } from "framer-motion";
import { Check, Download, Layers, Zap } from "lucide-react";
import creativesMockup from "@/assets/creatives-mockup.png";

const features = [
  "+1000 criativos prontos pra usar",
  "100% personalizáveis no Canva",
  "Atualizações vitalícias incluídas",
  "Templates testados com clientes reais",
  "Stories, feed, reels e ads",
  "Acesso imediato após a compra",
];

export function Creatives() {
  return (
    <section id="criativos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-background to-surface shadow-elevated">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Zap size={12} /> Pacote exclusivo
              </span>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-5xl">
                +1000 criativos <span className="text-gradient">premium</span> que vendem por você
              </h2>

              <p className="mt-5 text-muted-foreground">
                O mesmo banco de criativos que usamos com nossos clientes da agência.
                Editáveis em poucos cliques, organizados por nicho e prontos pra rodar
                no Meta Ads, TikTok e orgânico.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 rounded-full bg-primary/20 p-0.5 text-primary"
                    />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://pay.cakto.com.br/c8gazmw_827890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
                >
                  <Download size={16} />
                  Quero meu acesso
                </a>
                <div className="text-sm text-muted-foreground">
                  <span className="block text-xs uppercase tracking-wider">Apenas</span>
                  <span className="font-display text-2xl font-bold text-foreground">
                    R$ 19,90
                  </span>
                  <span className="block text-xs text-muted-foreground">ou 4x de R$ 5,57</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[400px] overflow-hidden lg:min-h-full"
            >
              <img
                src={creativesMockup}
                alt="Mockup de criativos premium HRC Studio"
                width={1280}
                height={960}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/20" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-medium backdrop-blur">
                <Layers size={14} className="text-primary" />
                Atualizado mensalmente
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
