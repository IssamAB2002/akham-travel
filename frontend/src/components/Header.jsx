import { NavLink } from 'react-router-dom';
import './Header.css';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/programs', label: 'Programmes' },
  { to: '/hotel', label: 'Hôtel' },
  { to: '/etiquette', label: 'Étiquette' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo">
          Akham Travel
        </NavLink>
        <nav className="site-header__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'site-header__link is-active' : 'site-header__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
