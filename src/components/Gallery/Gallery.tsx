import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Gallery.module.css';

export interface GalleryImage {
  thumb: string;
  full: string;
  alt: string;
}

export interface GalleryGroup {
  label: string;
  images: GalleryImage[];
}

interface GalleryProps {
  groups: GalleryGroup[];
  caption?: string;
  labels: {
    close: string;
    prev: string;
    next: string;
    open: string;
  };
}

export function Gallery({ groups, caption, labels }: GalleryProps) {
  const flat = groups.flatMap((group) =>
    group.images.map((image) => ({ ...image, group: group.label })),
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + flat.length) % flat.length,
      ),
    [flat.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close, step]);

  const current = openIndex === null ? null : flat[openIndex];

  return (
    <div className={styles.gallery}>
      {groups.map((group) => (
        <section key={group.label} className={styles.group}>
          <h3 className={styles.groupLabel}>{group.label}</h3>
          <div className={styles.grid}>
            {group.images.map((image) => (
              <button
                key={image.thumb}
                type="button"
                className={styles.thumbButton}
                onClick={() => setOpenIndex(flat.findIndex((item) => item.thumb === image.thumb))}
                aria-label={`${labels.open}: ${image.alt}`}
              >
                <img
                  src={image.thumb}
                  alt={image.alt}
                  className={styles.thumb}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </section>
      ))}

      {caption && <p className={styles.hint}>{caption}</p>}

      {/* Portal a body: dentro de la página el overlay queda atrapado en el
          contexto de apilamiento del artículo y el header y la barra de dibujo
          se le montan encima. */}
      {current &&
        createPortal(
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
          >
            <header className={styles.bar}>
              <span className={styles.counter}>
                {current.group} · {(openIndex ?? 0) + 1}/{flat.length}
              </span>
              <button
                type="button"
                className={styles.close}
                onClick={close}
                aria-label={labels.close}
                autoFocus
              >
                ✕
              </button>
            </header>

            {/* El scroll vive acá adentro: las capturas de página completa son
                muy altas y solo debe moverse la imagen, no los controles. */}
            <div className={styles.scroll} onClick={close}>
              <img
                src={current.full}
                alt={current.alt}
                className={styles.lightboxImg}
                onClick={(event) => event.stopPropagation()}
              />
            </div>

            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              onClick={() => step(-1)}
              aria-label={labels.prev}
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              onClick={() => step(1)}
              aria-label={labels.next}
            >
              ›
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
