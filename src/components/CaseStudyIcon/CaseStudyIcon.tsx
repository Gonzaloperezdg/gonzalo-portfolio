import { GraduationCap, HeartHandshake, Shield, Sparkles } from 'lucide-react';

/* No hay logos de marca disponibles: se usan íconos semánticos. El color es el
   mismo de la barra del proyecto en el Gantt, así el ícono identifica al proyecto
   de forma consistente en toda la navegación (Home, Works, etc.). */
const ICONS = {
  'insurtech-global': { Icon: Shield, color: '#1A47E8' },
  coderhouse: { Icon: GraduationCap, color: '#7BA7BC' },
  ratt: { Icon: HeartHandshake, color: '#A89BC2' },
  'ai-experiments': { Icon: Sparkles, color: '#0D7377' },
} as const;

interface CaseStudyIconProps {
  slug: string;
  size?: number;
  className?: string;
}

export function CaseStudyIcon({ slug, size = 15, className }: CaseStudyIconProps) {
  const entry = ICONS[slug as keyof typeof ICONS];
  if (!entry) return null;

  const { Icon, color } = entry;
  return <Icon size={size} color={color} className={className} aria-hidden="true" />;
}
