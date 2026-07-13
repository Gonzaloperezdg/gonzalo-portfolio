import { Fragment } from 'react';
import styles from './GenerationsDiagram.module.css';

export interface Generation {
  label: string;
  period: string;
  title: string;
  tools: string[];
  /** Mismo color que la barra del Gantt de esa etapa. */
  color: string;
}

interface GenerationsDiagramProps {
  generations: Generation[];
  caption?: string;
  ariaLabel: string;
}

export function GenerationsDiagram({ generations, caption, ariaLabel }: GenerationsDiagramProps) {
  return (
    <figure className={styles.figure} role="img" aria-label={ariaLabel}>
      <div className={styles.track}>
        {generations.map((gen, i) => (
          <Fragment key={gen.label}>
            <div className={styles.column}>
              <span className={styles.bar} style={{ background: gen.color }} />
              <span className={styles.label} style={{ color: gen.color }}>
                {gen.label}
              </span>
              <span className={styles.period}>{gen.period}</span>
              <span className={styles.title}>{gen.title}</span>
              <ul className={styles.tools}>
                {gen.tools.map((tool) => (
                  <li key={tool} className={styles.tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            {i < generations.length - 1 && (
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
