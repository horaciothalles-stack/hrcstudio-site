const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-badge">HRC Lab · Diferente por Design</div>

      <h1>
        Transformar marcas em<br />
        <em>ativos financeiros</em>
        <br />de alto valor.
      </h1>

      <p className="hero-sub">
        Nós construímos posicionamento focado em ROI para empresas que querem dominar o mercado Premium e sair da guerra de preços.
      </p>

      <div className="hero-actions">
        <a href="#cta" className="btn-primary">Iniciar diagnóstico estratégico →</a>
        <a href="#solucoes" className="btn-ghost">Ver nosso trabalho</a>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-num">+200</div>
          <div className="stat-label">Projetos entregues</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">8×</div>
          <div className="stat-label">Retorno médio</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">+1000</div>
          <div className="stat-label">Criativos no ecossistema</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">5 anos</div>
          <div className="stat-label">De experiência comprovada</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
