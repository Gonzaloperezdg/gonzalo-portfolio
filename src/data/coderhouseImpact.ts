/* Datos reales del rol docente en Coderhouse (panel de instructor).
   Fuente: Research/Experiencia_como_profesor_notas — 672 evaluaciones registradas. */

import type { Language } from '../i18n/translations';

export interface Stat {
  value: string;
  label: string;
}

export interface Strength {
  label: string;
  percent: number;
}

export interface Testimonial {
  quote: string;
}

export interface ImpactData {
  statsTitle: string;
  stats: Stat[];
  strengthsTitle: string;
  strengthsNote: string;
  strengths: Strength[];
  testimonialsTitle: string;
  testimonials: Testimonial[];
}

const IMPACT_ES: ImpactData = {
  statsTitle: 'Los números',
  stats: [
    { value: '4.92', label: 'Rating promedio sobre 5' },
    { value: '672', label: 'Evaluaciones de estudiantes' },
    { value: '70+', label: 'Estudiantes en 6 meses' },
  ],
  strengthsTitle: 'Lo que más valoraron',
  strengthsNote: 'Porcentaje de menciones sobre las 672 evaluaciones registradas.',
  strengths: [
    { label: 'Explica de forma clara y fácil de entender', percent: 23 },
    { label: 'Se asegura de que hayan entendido el tema', percent: 19.1 },
    { label: 'Responde preguntas y despeja dudas', percent: 17.4 },
    { label: 'Da buenos ejemplos', percent: 14.5 },
    { label: 'Es dinámico', percent: 12.5 },
    { label: 'Mantiene la atención y el interés', percent: 10.4 },
  ],
  testimonialsTitle: 'Lo que escribieron',
  testimonials: [
    { quote: 'Me gustan los ejemplos reales, aterrizan los conceptos y los dejan en la memoria.' },
    { quote: 'Muy comprensible, las explicaciones son claras y no se va por las ramas.' },
    { quote: 'Me encanta la explicación de Gonzalo ya que es muy claro en todo y se asegura de que hayamos entendido.' },
    { quote: 'Me gusta que regularmente pregunte si hay alguna duda, es muy comprensivo con los estudiantes.' },
    { quote: 'Fueron muchas cosas nuevas, pero al explicar muy bien no me quedó ninguna duda.' },
  ],
};

const IMPACT_EN: ImpactData = {
  statsTitle: 'The numbers',
  stats: [
    { value: '4.92', label: 'Average rating out of 5' },
    { value: '672', label: 'Student evaluations' },
    { value: '70+', label: 'Students in 6 months' },
  ],
  strengthsTitle: 'What they valued most',
  strengthsNote: 'Share of mentions across the 672 recorded evaluations.',
  strengths: [
    { label: 'Explains clearly and is easy to follow', percent: 23 },
    { label: 'Makes sure everyone understood the topic', percent: 19.1 },
    { label: 'Answers questions and clears up doubts', percent: 17.4 },
    { label: 'Gives good examples', percent: 14.5 },
    { label: 'Keeps the class dynamic', percent: 12.5 },
    { label: 'Holds attention and interest', percent: 10.4 },
  ],
  testimonialsTitle: 'What they wrote',
  testimonials: [
    { quote: 'I like the real-world examples, they ground the concepts and make them stick.' },
    { quote: 'Very easy to follow, the explanations are clear and he never rambles.' },
    { quote: "I love Gonzalo's explanations, he is clear about everything and makes sure we understood." },
    { quote: 'I like that he regularly asks whether anyone has doubts, he is very understanding with students.' },
    { quote: 'There was a lot of new material, but he explained it so well that I was left with no doubts.' },
  ],
};

export function getCoderhouseImpact(lang: Language): ImpactData {
  return lang === 'en' ? IMPACT_EN : IMPACT_ES;
}
