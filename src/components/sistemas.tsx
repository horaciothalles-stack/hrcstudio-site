const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth="1.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const sistemas = [
  {
    badge: 'Sistema · Freelancers',
    name: 'Frees',
    nameAccent: '.io',
    tagline: 'Gestão e precificação estratégica para freelancers',
    description:
      'Pare de perder dinheiro por falta de controle. O Frees.io centraliza sua gestão, automatiza sua precificação e te ajuda a cobrar o que você realmente vale.',
    features: [
      'Precificação estratégica baseada em valor percebido',
      'Gestão de projetos e prazos em um só lugar',
      'Controle financeiro e análise de rentabilidade por projeto',
      'Proposta e contrato digital integrados',
    ],
    ctaLabel: 'Conhecer o Frees.io',
    number: '01',
  },
  {
    badge: 'Sistema · Negócios',
    name: 'Biz',
    nameAccent: '.io',
    tagline: 'Caixa e gestão para autônomos, lojas e profissionais independentes',
    description:
      'Seu negócio merece um sistema à altura. O Biz.io organiza seu fluxo de caixa, controla entradas e saídas e gera relatórios que você realmente entende.',
    features: [
      'Controle de caixa em tempo real',
      'Gestão de clientes e histórico de vendas',
      'Relatórios financeiros claros e acionáveis',
      'Integração com as principais formas de pagamento',
    ],
    ctaLabel: 'Conhecer o Biz.io',
    number: '02',
  },
];

const Sistemas = () => {
  return (
    <section id="sistemas" className="sistemas-section">
      <div className="eyebrow">O Ecossistema HRC Lab</div>

      <div className="sistemas-header">
        <h2>
          +1000 criativos <em>premium</em> — e agora,
          <br />sistemas que trabalham por você
        </h2>
        <p>
          Não somos apenas uma agência. Somos desenvolvedores de soluções inteligentes que
          facilitam a vida dos nossos clientes e elevam o padrão da profissão.
        </p>
      </div>

      <div className="sistemas-cards">
        {sistemas.map((s) => (
          <div className="sistema-card" key={s.number}>
            <div className="sistema-badge">{s.badge}</div>
            <div className="sistema-name">
              {s.name}
              <span>{s.nameAccent}</span>
            </div>
            <div className="sistema-tagline">{s.tagline}</div>
            <p className="sistema-desc">{s.description}</p>
            <ul className="sistema-features">
              {s.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>
            <a href="#" className="sistema-cta">
              {s.ctaLabel}
              <ArrowIcon />
            </a>
            <div className="sistema-number">{s.number}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sistemas;
