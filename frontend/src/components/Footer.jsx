import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__title">Akham Travel</p>
          <p>Voyages sur mesure au cœur du Sahara et de la Vallée du M'Zab.</p>
        </div>
        <nav className="site-footer__links">
          <Link to="/programs">Programmes</Link>
          <Link to="/hotel">Hôtel</Link>
          <Link to="/etiquette">Étiquette</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="site-footer__copy">© {year} Akham Travel. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
