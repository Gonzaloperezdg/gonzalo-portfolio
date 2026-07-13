import styles from './Figure.module.css';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  /** Limita el ancho de la figura (p. ej. fotos verticales, que si no ocupan medio scroll). */
  maxWidth?: string;
  /** Sin marco ni fondo: para PNG/WebP con transparencia, que van directo sobre la página. */
  bare?: boolean;
  /** Carga eager + alta prioridad. Solo para la primera imagen visible (hero). */
  priority?: boolean;
}

export function Figure({
  src,
  alt,
  caption,
  aspectRatio,
  objectFit = 'cover',
  objectPosition,
  maxWidth,
  bare = false,
  priority = false,
}: FigureProps) {
  const img = (
    <img
      src={src}
      alt={alt}
      className={bare ? styles.bareImg : styles.img}
      style={bare ? undefined : { objectFit, objectPosition }}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );

  return (
    <figure className={styles.figure} style={{ maxWidth }}>
      {bare ? img : <div className={styles.frame} style={{ aspectRatio }}>{img}</div>}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
