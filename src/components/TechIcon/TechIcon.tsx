import type { ComponentType } from 'react';
import { Sparkles } from 'lucide-react';
import {
  SiNetlify,
  SiReact,
  SiReactrouter,
  SiSupabase,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

interface IconProps {
  size?: number;
  className?: string;
}

/* Las claves se normalizan (minúsculas, sin espacios) para que "React 19" y
   "React Router" caigan en el ícono correcto sin duplicar entradas. */
const ICONS: Record<string, ComponentType<IconProps>> = {
  react: SiReact,
  react19: SiReact,
  reactrouter: SiReactrouter,
  vite: SiVite,
  typescript: SiTypescript,
  supabase: SiSupabase,
  netlify: SiNetlify,
  // Antigravity no tiene ícono de marca en react-icons: cae en el genérico.
};

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

export function TechIcon({ tech, size = 14, className }: TechIconProps) {
  const key = tech.toLowerCase().replace(/[\s.-]/g, '');
  const Icon = ICONS[key] ?? Sparkles;

  return <Icon size={size} className={className} aria-hidden="true" />;
}
