import { Fragment } from 'react';
import styles from './ProcessDiagram.module.css';

interface ProcessDiagramProps {
  steps: string[];
  /** Índice del paso destacado (el aporte propio al proceso). */
  highlightIndex: number;
  highlightBadge: string;
  caption?: string;
  ariaLabel: string;
}

export function ProcessDiagram({
  steps,
  highlightIndex,
  highlightBadge,
  caption,
  ariaLabel,
}: ProcessDiagramProps) {
  return (
    <figure className={styles.figure} role="img" aria-label={ariaLabel}>
      <div className={styles.flow}>
        {steps.map((step, i) => (
          <Fragment key={step}>
            <div className={`${styles.step} ${i === highlightIndex ? styles.highlight : ''}`}>
              {i === highlightIndex && <span className={styles.badge}>{highlightBadge}</span>}
              <span className={styles.stepLabel}>{step}</span>
            </div>
            {i < steps.length - 1 && (
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
