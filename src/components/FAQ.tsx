import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto custa contratar a HRC Studio?",
    a: "Os planos variam conforme o escopo (tráfego, social media, branding, etc). Após o diagnóstico gratuito, montamos uma proposta sob medida pra sua realidade.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Nos primeiros 30 a 60 dias, a gente já começa a entender o que performa melhor e fazer os ajustes certos. Com isso, o crescimento vai ganhando força e tende a ficar mais previsível ao longo dos meses seguintes.",
  },
  {
    q: "Vocês atendem qualquer segmento?",
    a: "Trabalhamos principalmente com infoprodutores, e-commerces, clínicas, serviços B2B e marcas de lifestyle. Se não for fit, falamos isso na call, não pegamos cliente que não conseguimos entregar.",
  },
  {
    q: "O pacote de criativos substitui contratar a agência?",
    a: "Não. O pacote é uma ferramenta excelente pra quem está começando ou tem time interno. A agência é pra quem quer escalar com estratégia, gestão e otimização contínua.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Todo cliente da agência tem um gestor dedicado, grupo direto no WhatsApp e reuniões semanais de acompanhamento. Transparência total nos números e nas decisões.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface"
                >
                  <span className="font-display font-semibold">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
