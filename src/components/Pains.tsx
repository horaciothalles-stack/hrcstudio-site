const dorItems = [
  {
    text: (
      <>
        Você investe em marketing, o trabalho aumenta, mas o{' '}
        <strong>faturamento não acompanha o ritmo</strong> — e você não sabe por quê.
      </>
    ),
  },
  {
    text: (
      <>
        Você é bom no que faz, mas sua marca não transmite isso.{' '}
        <strong>Clientes chegam pelo preço</strong>, não pelo valor que você entrega.
      </>
    ),
  },
  {
    text: (
      <>
        Você já tentou várias agências, mas nenhuma entendeu seu negócio de verdade. Recebeu design bonito, mas{' '}
        <strong>sem estratégia e sem resultado</strong>.
      </>
    ),
  },
];

const Dor = () => {
  return (
    <section className="dor-section">
      <div className="eyebrow">Pra quem é isso</div>
      <h2>
        Se você está aqui, provavelmente está vivendo{' '}
        <em>pelo menos uma</em> dessas situações:
      </h2>

      <div className="dor-items">
        {dorItems.map((item, index) => (
          <div className="dor-item" key={index}>
            <div className="dor-marker" />
            <p className="dor-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="dor-cta">
        <a href="#cta" className="btn-primary">Quero mudar esse cenário</a>
      </div>
    </section>
  );
};


          </a>
        </motion.div>
      </div>
    </section>
  );
}
