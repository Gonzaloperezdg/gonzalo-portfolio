import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme, language, toggleLanguage, t } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Gonzalo —
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
          {t('nav_about')}
        </NavLink>
        <NavLink to="/works" className={({ isActive }) => isActive ? styles.active : ''}>
          {t('nav_works')}
        </NavLink>
        <a href="#contacto" onClick={handleContactClick} className={styles.contactNav}>
          {t('nav_contact')}
        </a>

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
      </nav>
    </header>
  );
}
