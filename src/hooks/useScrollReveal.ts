import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook para animaciones de scroll — temática Paint/Brutalista Terminal
 * Anima elementos con atributo data-reveal en el DOM
 */
export function useScrollReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // ─── Headings: Scan reveal de izquierda — como línea de terminal ───
      gsap.utils.toArray<HTMLElement>('[data-reveal="heading"]').forEach((el) => {
        gsap.from(el, {
          x: -40,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

      // ─── Párrafos: fade-in stagger hacia arriba ───
      gsap.utils.toArray<HTMLElement>('[data-reveal="text"]').forEach((el) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.35,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });

      // ─── Cards: stagger desde abajo — como líneas de código apareciendo ───
      const cardGroups = gsap.utils.toArray<HTMLElement>('[data-reveal="cards"]');
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll<HTMLElement>('[data-reveal="card"]');
        if (cards.length) {
          gsap.from(cards, {
            y: 32,
            opacity: 0,
            duration: 0.35,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // ─── Pull quotes: slide desde izquierda con blink inicial ───
      gsap.utils.toArray<HTMLElement>('[data-reveal="quote"]').forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
        tl.from(el, { x: -24, opacity: 0, duration: 0.3, ease: 'power2.out' })
          .from(el, { backgroundColor: 'rgba(33,42,26,0.15)', duration: 0.15 }, '<0.1');
      });

      // ─── Metadata / mono labels: blink de terminal ───
      gsap.utils.toArray<HTMLElement>('[data-reveal="meta"]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 0.5,
          ease: 'steps(4)',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        });
      });

      // ─── Secciones completas: fade-in suave ───
      gsap.utils.toArray<HTMLElement>('[data-reveal="section"]').forEach((el) => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.4,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}
