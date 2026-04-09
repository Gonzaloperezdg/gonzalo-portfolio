import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { type Theme, type ThemeContextType, type Language, type TranslationKey, translations } from './themeConstants';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored || 'light';
  });

  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null;
    return stored || 'es';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('data-lang', language);
  }, [language]);

  const toggleTheme = useCallback(() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')), []);
  const toggleLanguage = useCallback(() => setLanguage((prev) => (prev === 'es' ? 'en' : 'es')), []);

  const t = useCallback((key: TranslationKey) => translations[language][key] ?? key, [language]);

  const value = useMemo(() => ({
    theme, toggleTheme, language, toggleLanguage, t,
  }), [theme, toggleTheme, language, toggleLanguage, t]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme debe ser usado dentro de ThemeProvider');
  return context;
}

// Re-export types for backward compatibility
export type { Theme, ThemeContextType, Language, TranslationKey } from './themeConstants';
