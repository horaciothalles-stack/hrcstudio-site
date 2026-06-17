import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";

const pains = [
  "Você investe em marketing todo mês, mas no fim ninguém sabe dizer com clareza o que realmente está dando retorno.",
  "O investimento sobe, o trabalho aumenta, mas o faturamento não acompanha o ritmo.",
  "Toda vez que você tenta escalar, alguma coisa trava: criativo, oferta, equipe, entrega.",
  "Os anúncios rodam, somem no feed e você sente que está só queimando dinheiro pra aparecer.",
  "Vive testando coisa nova sem um plano por trás, na base do achismo e do que viu funcionar pros outros.",
  "Já passou por agência que prometeu o mundo, sumiu depois do contrato assinado e te deixou pior do que estava.",
  "No fundo, você sabe que precisa ajustar algo, só não sabe exatamente o quê nem por onde começar.",
];

const ROTATION_MS = 4500;

export function Pains() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % pains.length);
    }, ROTATION_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goTo = (i: number) => setIndex((i + pains.length) % pains.length);

  return (
    <section
      id="dores"
      className="relative overflow-hidden border-y border-border bg-surface/40 py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <AlertCircle size={14} />
            Pra quem é
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.1] md:text-5xl lg:text-[3.5rem]">
            Se você está aqui, provavelmente está vivendo{" "}
            <span className="text-gradient">pelo menos uma</span> dessas situações:
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Leia com calma. Se mais de duas dessas frases parecerem o seu dia a dia,
            a gente precisa conversar.
          </p>
        </motion.div>

        {/* Rotating pain carousel */}
        <div
          className="mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Dores comuns dos nossos clientes"
            aria-live="polite"
            className="relative flex min-h-[260px] items-center justify-center rounded-2xl border border-border bg-background/60 p-8 backdrop-blur md:min-h-[220px] md:p-12"
          >
            {/* Prev / Next */}
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Dor anterior"
              className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground md:inline-flex"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Próxima dor"
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground md:inline-flex"
            >
              <ChevronRight size={18} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex w-full max-w-2xl flex-col items-center gap-5 text-center"
              >
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 font-display text-sm font-bold text-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed text-foreground/90 md:text-2xl md:leading-snug">
                  {pains[index]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {pains.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para dor ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-primary"
                    : "w-3 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground/70">
            {isPaused ? "Pausado" : "Passa sozinho • passe o mouse para pausar"}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="max-w-xl text-sm text-muted-foreground">
            Você não tá sozinho nisso. A maior parte das marcas que chega na HRC
            chega exatamente nesse ponto.
          </p>
          <a
            href="https://wa.me/5511922193335"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow"
          >
            Quero resolver isso agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
