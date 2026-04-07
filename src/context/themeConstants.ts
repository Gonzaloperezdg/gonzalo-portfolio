// Constants for theme context - exported separately to avoid react-refresh/only-export-components issues

import { translations, type Language, type TranslationKey } from '../i18n/translations';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

export { type Language, type TranslationKey, translations };
