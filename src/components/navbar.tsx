const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="32" fontFamily="'Inter', sans-serif" fontSize="28" fontWeight="700" fill="white" letterSpacing="2">HRC</text>
          <text x="88" y="38" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="400" fill="white" letterSpacing="3">LAB</text>
          <path d="M8 2 Q18 -4 22 6 Q26 14 16 10 Q26 8 28 18 Q30 26 20 22" stroke="#ff7f00" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <ul className="nav-links">
        <li><a href="#solucoes">Soluções</a></li>
        <li><a href="#sistemas">Sistemas</a></li>
        <li><a href="#processo">Processo</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a href="#cta" className="nav-cta">Iniciar diagnóstico</a>
    </nav>
  );
};

export default Navbar;
