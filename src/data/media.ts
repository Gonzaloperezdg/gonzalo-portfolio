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

import portfolioBuilder1Thumb from '../assets/works/portfolio-builder-1-thumb.webp';
import portfolioBuilder1Full from '../assets/works/portfolio-builder-1-full.webp';
import portfolioBuilder2Thumb from '../assets/works/portfolio-builder-2-thumb.webp';
import portfolioBuilder2Full from '../assets/works/portfolio-builder-2-full.webp';
import portfolioBuilder3Thumb from '../assets/works/portfolio-builder-3-thumb.webp';
import portfolioBuilder3Full from '../assets/works/portfolio-builder-3-full.webp';
import portfolioBuilder4Thumb from '../assets/works/portfolio-builder-4-thumb.webp';
import portfolioBuilder4Full from '../assets/works/portfolio-builder-4-full.webp';

import catedra1Thumb from '../assets/works/catedra-1-thumb.webp';
import catedra1Full from '../assets/works/catedra-1-full.webp';
import catedra2Thumb from '../assets/works/catedra-2-thumb.webp';
import catedra2Full from '../assets/works/catedra-2-full.webp';
import catedra3Thumb from '../assets/works/catedra-3-thumb.webp';
import catedra3Full from '../assets/works/catedra-3-full.webp';
import catedra4Thumb from '../assets/works/catedra-4-thumb.webp';
import catedra4Full from '../assets/works/catedra-4-full.webp';

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

/* Galerías de los subproyectos de AI Experiments. La clave del objeto es el
   slug del subproyecto: SubProjectPage la usa para resolver su galería. */
export const SUBPROJECT_GALLERIES: Record<string, MediaPair[]> = {
  'portfolio-builder': [
    { thumb: portfolioBuilder1Thumb, full: portfolioBuilder1Full },
    { thumb: portfolioBuilder2Thumb, full: portfolioBuilder2Full },
    { thumb: portfolioBuilder3Thumb, full: portfolioBuilder3Full },
    { thumb: portfolioBuilder4Thumb, full: portfolioBuilder4Full },
  ],
  catedra: [
    { thumb: catedra1Thumb, full: catedra1Full },
    { thumb: catedra2Thumb, full: catedra2Full },
    { thumb: catedra3Thumb, full: catedra3Full },
    { thumb: catedra4Thumb, full: catedra4Full },
  ],
};
