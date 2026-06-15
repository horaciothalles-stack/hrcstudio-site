import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CreditCard, FileText, Smartphone, TrendingUp, Users } from "lucide-react";

const products = [
  {
    tag: "Produto · Freelancers & Agências",
    name: "Frees",
    nameAccent: ".io",
    subtitle: "Sistema de gestão e precificação estratégica",
    description:
      "A ferramenta que faltava para o profissional criativo parar de vender pelo preço errado. Gestão de projetos, precificação inteligente e controle financeiro em uma plataforma construída para quem vive de criar.",
    features: [
      { icon: TrendingUp, text: "Precificação baseada em valor percebido" },
      { icon: FileText, text: "Gestão de propostas e contratos" },
      { icon: BarChart3, text: "Dashboard financeiro em tempo real" },
      { icon: CreditCard, text: "Integração com ferramentas de pagamento" },
    ],
    href: "#",
    featured: true,
  },
  {
    tag: "Produto · Autônomos & Comércio",
    name: "Biz",
    nameAccent: ".io",
    subtitle: "Sistema de caixa e gestão para negócios",
    description:
      "Controle financeiro completo para autônomos, lojas e profissionais independentes que querem operar com clareza e crescer com consistência. Simples de usar, poderoso nos resultados.",
    features: [
      { icon: BarChart3, text: "Fluxo de caixa e controle de entradas/saídas" },
      { icon: Users, text: "Gestão de clientes e cobranças" },
      { icon: TrendingUp, text: "Relatórios de performance do negócio" },
      { icon: Smartphone, text: "Acesso via mobile e desktop" },
    ],
    href: "#",
    featured: false,
  },
];

export function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      {/* Linha laranja sutil no topo da seção */}
      <div className="absolute inset-x-0 top-0 h-px bg-primary/30" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header da seção */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              O Ecossistema HRC Lab
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Ferramentas inteligentes que{" "}
              <span className="italic text-primary">elevam o padrão</span>{" "}
              da profissão.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center"
          >
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Não somos apenas uma agência de comunicação. Desenvolvemos soluções
              tecnológicas que capacitam profissionais e negócios a operarem com mais
              inteligência, eficiência e autoridade — criando ferramentas que elevam o
              padrão da profissão.
            </p>
          </motion.div>
        </div>

        {/* Cards dos produtos */}
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-background p-10 lg:p-12 group"
            >
              {/* Linha laranja no topo apenas do card em destaque */}
              {product.featured && (
                <div className="absolute inset-x-0 top-0 h-[2px] bg-primary" />
              )}

              {/* Tag do segmento */}
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                {product.tag}
              </p>

              {/* Nome do produto */}
              <h3 className="font-display text-4xl font-bold tracking-tight leading-none mb-1">
                {product.name}
                <span className="text-primary">{product.nameAccent}</span>
              </h3>
              <p className="text-xs text-muted-foreground tracking-wide mb-7">
                {product.subtitle}
              </p>

              {/* Descrição */}
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-9">
                {product.description}
              </p>

              {/* Features */}
              <ul className="mb-10 space-y-0 divide-y divide-border">
                {product.features.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 py-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={product.href}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary transition-gap group-hover:gap-3"
              >
                Conhecer o {product.name}{product.nameAccent}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
