interface SolucaoCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const solucoes: SolucaoCard[] = [
  {
    title: 'Tráfego Pago',
    description: 'Criação e gestão de campanhas pagas que convertem. Da segmentação ao criativo, entregamos resultado mensurável.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: 'Identidade & Branding',
    description: 'Posicionamento estratégico e identidade visual que comunica premium. Construímos marcas que justificam preço maior.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Conteúdo & Criativos',
    description: 'Produção de conteúdo estratégico que educa, posiciona e vende. Cada peça com intenção de resultado.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 1 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: 'Social Media',
    description: 'Gestão estratégica de redes sociais com foco em autoridade, audiência e geração de oportunidades de negócio.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0" />
      </svg>
    ),
  },
  {
    title: 'Sites & Landing Pages',
    description: 'Páginas de alta conversão com design premium. Cada elemento posicionado para transformar visitante em cliente.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Consultoria & Funil',
    description: 'Diagnóstico completo de marca e estrutura de funil. Estratégia clara com foco em escala e lucratividade.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
];

const Solucoes = () => {
  return (
    <section id="solucoes">
      <div className="eyebrow">O que oferecemos</div>
      <h2 style={{ fontFamily: "'Spectral', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
        Soluções <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>end-to-end</em> para sua marca crescer
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: '15px', maxWidth: '540px', marginBottom: 0 }}>
        A estratégia e a entrega nunca mais vão estar separadas. Todos os seus ativos de marca, em um só lugar, disponíveis por escala.
      </p>

      <div className="solucoes-grid">
        {solucoes.map((sol) => (
          <div className="sol-card" key={sol.title}>
            <div className="sol-icon">{sol.icon}</div>
            <h3>{sol.title}</h3>
            <p>{sol.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solucoes;
