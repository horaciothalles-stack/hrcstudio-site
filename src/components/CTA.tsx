import { ArrowRight } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

export function CTA() {
  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface via-background to-surface p-10 text-center shadow-elevated md:p-16">
          {/* Watermark logo gigante */}
          <img
            src={logoMark}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/2 z-0 h-[480px] w-[480px] -translate-x-1/2 object-contain opacity-[0.07] md:-bottom-40 md:h-[640px] md:w-[640px]"
          />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-highlight/20 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Vamos conversar
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Pronto para <span className="text-gradient">economizar tempo</span> e crescer com foco em resultado?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Agende um diagnóstico gratuito de 45 minutos. Sem compromisso, sem
              enrolação. Você sai da call com um plano de ação pra sua marca.
            </p>

            <div className="mx-auto mt-10 flex max-w-md justify-center">
              <a
                href="https://wa.me/5511922193335"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
              >
                Falar no WhatsApp
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Resposta em até 1 dia útil · 100% confidencial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
