import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="brand">
          <span className="brand-icon" aria-hidden="true">✈️</span>
          <div>
            <span className="brand-title">TWA a la Chilena</span>
            <span className="brand-subtitle">Agencia de Viajes</span>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Navegación principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Explorar Destinos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}