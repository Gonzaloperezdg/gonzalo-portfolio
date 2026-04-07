import type { TimelineEntry } from '../types';
import type { Language } from '../i18n/translations';

const TIMELINE_ES: TimelineEntry[] = [
  {
    slug: 'jbknowledge',
    title: 'InsurTech Global',
    subtitle: 'UX/UI Designer → UX/UI Lead',
    period: 'Agosto 2021 – Presente',
    status: 'active',
    description: 'Trabajo continuo en una tech company que desarrolla soluciones para empresas de seguros. A lo largo del tiempo lideré proyectos de diseño, armé sistemas y adopté IA en el flujo de trabajo.',
    note: 'Los proyectos siguientes se desarrollaron en paralelo con InsurTech Global.',
  },
  {
    slug: 'coderhouse',
    title: 'Coderhouse',
    subtitle: 'Instructor UX/UI Design',
    period: 'Mayo 2023 – Octubre 2023',
    status: 'completed',
    description: '70+ estudiantes con backgrounds muy distintos. Rating promedio 4.92/5.',
    parallel: true,
  },
  {
    slug: 'ratt',
    title: 'RATT',
    subtitle: 'Narrativa como decisión de diseño',
    period: 'Septiembre 2024 – Febrero 2025',
    status: 'completed',
    description: 'Rediseño UX/UI como voluntariado. Narrativa emocional como decisión central de diseño.',
    parallel: true,
  },
  {
    slug: 'ai-experiments',
    title: 'AI Experiments',
    subtitle: '3 generaciones de metodología AI-native',
    period: 'Octubre 2025 – Presente',
    status: 'active',
    description: 'Proyectos propios que evolucionaron de herramientas aisladas a metodología reproducible.',
    parallel: true,
  },
];

const TIMELINE_EN: TimelineEntry[] = [
  {
    slug: 'jbknowledge',
    title: 'InsurTech Global',
    subtitle: 'UX/UI Designer → UX/UI Lead',
    period: 'August 2021 – Present',
    status: 'active',
    description: 'Ongoing work at a tech company building software solutions for insurance companies. Over time I led design projects, built systems, and adopted AI into the workflow.',
    note: 'The following projects were developed in parallel with InsurTech Global.',
  },
  {
    slug: 'coderhouse',
    title: 'Coderhouse',
    subtitle: 'UX/UI Design Instructor',
    period: 'May 2023 – October 2023',
    status: 'completed',
    description: '70+ students with very different backgrounds. Average rating 4.92/5.',
    parallel: true,
  },
  {
    slug: 'ratt',
    title: 'RATT',
    subtitle: 'Narrative as a design decision',
    period: 'September 2024 – February 2025',
    status: 'completed',
    description: 'UX/UI redesign as volunteer work. Emotional narrative as the central design decision.',
    parallel: true,
  },
  {
    slug: 'ai-experiments',
    title: 'AI Experiments',
    subtitle: '3 generations of AI-native methodology',
    period: 'October 2025 – Present',
    status: 'active',
    description: 'Personal projects that evolved from isolated tools to a reproducible methodology.',
    parallel: true,
  },
];

export const TIMELINE = TIMELINE_ES;

export function getTimeline(lang: Language): TimelineEntry[] {
  return lang === 'en' ? TIMELINE_EN : TIMELINE_ES;
}
