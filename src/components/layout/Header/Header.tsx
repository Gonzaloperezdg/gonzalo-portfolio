import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme, language, toggleLanguage, t } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Hamburger button - mobile only */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen1 : ''}`} />
        <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen2 : ''}`} />
        <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineOpen3 : ''}`} />
      </button>

      {/* Logo - desktop only */}
      <Link to="/" className={styles.logo}>
        {t('nav_home')}
      </Link>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        {/* Inicio — first item in mobile dropdown only */}
        <NavLink to="/" className={({ isActive }) => `${styles.mobileOnly} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
          {t('nav_home')}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeMenu}>
          {t('nav_about')}
        </NavLink>
        <NavLink to="/works" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeMenu}>
          {t('nav_works')}
        </NavLink>
        <a href="#contacto" onClick={handleContactClick} className={styles.contactNav}>
          {t('nav_contact')}
        </a>
      </nav>

      <div className={styles.actionGroup}>
        <button
          className={styles.actionBtn}
          onClick={toggleLanguage}
          title="Cambiar idioma"
          aria-label="Cambiar idioma"
        >
          {language.toUpperCase()}
        </button>

        <button
          className={styles.actionBtn}
          onClick={toggleTheme}
          title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
          aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
        >
          {theme === 'light' ? '○' : '●'}
        </button>
      </div>

      {/* Overlay to close menu on tap outside */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
}
