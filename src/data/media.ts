/* Assets multimedia de los case studies. Los WebP se generan desde
   Contenido/Imagenes/ImagenesPortfolio con el pipeline de sharp. */

import heroInsurtech from '../assets/works/hero-insurtech.webp';
import coderhouseClase from '../assets/works/coderhouse-clase.webp';

import rattAntes1Thumb from '../assets/works/ratt-antes-1-thumb.webp';
import rattAntes1Full from '../assets/works/ratt-antes-1-full.webp';
import rattAntes2Thumb from '../assets/works/ratt-antes-2-thumb.webp';
import rattAntes2Full from '../assets/works/ratt-antes-2-full.webp';
import rattAntes3Thumb from '../assets/works/ratt-antes-3-thumb.webp';
import rattAntes3Full from '../assets/works/ratt-antes-3-full.webp';

import rattDespues1Thumb from '../assets/works/ratt-despues-1-thumb.webp';
import rattDespues1Full from '../assets/works/ratt-despues-1-full.webp';
import rattDespues2Thumb from '../assets/works/ratt-despues-2-thumb.webp';
import rattDespues2Full from '../assets/works/ratt-despues-2-full.webp';
import rattDespues3Thumb from '../assets/works/ratt-despues-3-thumb.webp';
import rattDespues3Full from '../assets/works/ratt-despues-3-full.webp';
import rattDespues4Thumb from '../assets/works/ratt-despues-4-thumb.webp';
import rattDespues4Full from '../assets/works/ratt-despues-4-full.webp';
import rattDespues5Thumb from '../assets/works/ratt-despues-5-thumb.webp';
import rattDespues5Full from '../assets/works/ratt-despues-5-full.webp';
import rattDespues6Thumb from '../assets/works/ratt-despues-6-thumb.webp';
import rattDespues6Full from '../assets/works/ratt-despues-6-full.webp';
import rattDespues7Thumb from '../assets/works/ratt-despues-7-thumb.webp';
import rattDespues7Full from '../assets/works/ratt-despues-7-full.webp';

export interface MediaPair {
  thumb: string;
  full: string;
}

export const HERO_INSURTECH = heroInsurtech;
export const CODERHOUSE_CLASE = coderhouseClase;

export const RATT_ANTES: MediaPair[] = [
  { thumb: rattAntes1Thumb, full: rattAntes1Full },
  { thumb: rattAntes2Thumb, full: rattAntes2Full },
  { thumb: rattAntes3Thumb, full: rattAntes3Full },
];

export const RATT_DESPUES: MediaPair[] = [
  { thumb: rattDespues1Thumb, full: rattDespues1Full },
  { thumb: rattDespues2Thumb, full: rattDespues2Full },
  { thumb: rattDespues3Thumb, full: rattDespues3Full },
  { thumb: rattDespues4Thumb, full: rattDespues4Full },
  { thumb: rattDespues5Thumb, full: rattDespues5Full },
  { thumb: rattDespues6Thumb, full: rattDespues6Full },
  { thumb: rattDespues7Thumb, full: rattDespues7Full },
];
