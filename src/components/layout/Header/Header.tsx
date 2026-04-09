import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './Header.module.css';

const ICON_SIZE = 16;

export function Header() {
  const { theme, toggleTheme, language, toggleLanguage, t } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) setThemeOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

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

  const isMobile = () => window.matchMedia('(max-width: 640px)').matches;

  const handleLangClick = () => {
    if (isMobile()) {
      toggleLanguage();
    } else {
      setLangOpen(!langOpen);
      setThemeOpen(false);
    }
  };

  const handleThemeClick = () => {
    if (isMobile()) {
      toggleTheme();
    } else {
      setThemeOpen(!themeOpen);
      setLangOpen(false);
    }
  };

  const handleLangSelect = (lang: 'es' | 'en') => {
    if (lang !== language) toggleLanguage();
    setLangOpen(false);
  };

  const handleThemeSelect = (selected: 'light' | 'dark') => {
    if (selected !== theme) toggleTheme();
    setThemeOpen(false);
  };

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
        {/* Language selector */}
        <div className={styles.selectorWrap} ref={langRef}>
          <button
            className={`${styles.actionBtn} ${langOpen ? styles.actionBtnOpen : ''}`}
            onClick={handleLangClick}
            title={t('language_toggle_title')}
            aria-label={t('language_toggle_title')}
          >
            <Globe size={ICON_SIZE} />
            <span className={styles.actionLabel}>{t('header_language')}</span>
            <span className={styles.actionLabelMobile}>{language.toUpperCase()}</span>
          </button>
          {langOpen && (
            <div className={styles.dropdown}>
              <button
                className={`${styles.dropdownItem} ${language === 'es' ? styles.dropdownItemActive : ''}`}
                onClick={() => handleLangSelect('es')}
              >
                Español
              </button>
              <button
                className={`${styles.dropdownItem} ${language === 'en' ? styles.dropdownItemActive : ''}`}
                onClick={() => handleLangSelect('en')}
              >
                English
              </button>
            </div>
          )}
        </div>

        {/* Theme selector */}
        <div className={styles.selectorWrap} ref={themeRef}>
          <button
            className={`${styles.actionBtn} ${themeOpen ? styles.actionBtnOpen : ''}`}
            onClick={handleThemeClick}
            title={theme === 'light' ? t('header_theme_dark') : t('header_theme_light')}
            aria-label={theme === 'light' ? t('header_theme_dark') : t('header_theme_light')}
          >
            {theme === 'light' ? <Sun size={ICON_SIZE} /> : <Moon size={ICON_SIZE} />}
            <span className={styles.actionLabel}>{t('header_theme')}</span>
          </button>
          {themeOpen && (
            <div className={styles.dropdown}>
              <button
                className={`${styles.dropdownItem} ${theme === 'light' ? styles.dropdownItemActive : ''}`}
                onClick={() => handleThemeSelect('light')}
              >
                <Sun size={14} />
                {t('header_theme_light')}
              </button>
              <button
                className={`${styles.dropdownItem} ${theme === 'dark' ? styles.dropdownItemActive : ''}`}
                onClick={() => handleThemeSelect('dark')}
              >
                <Moon size={14} />
                {t('header_theme_dark')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close menu on tap outside */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
}
