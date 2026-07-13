import type { ImpactData } from '../../data/coderhouseImpact';
import styles from './ImpactPanel.module.css';

interface ImpactPanelProps {
  data: ImpactData;
}

export function ImpactPanel({ data }: ImpactPanelProps) {
  const max = Math.max(...data.strengths.map((s) => s.percent));

  return (
    <div className={styles.panel}>
      <dl className={styles.stats}>
        {data.stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.statValue}>{stat.value}</dt>
            <dd className={styles.statLabel}>{stat.label}</dd>
          </div>
        ))}
      </dl>

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>{data.strengthsTitle}</h3>
        <ul className={styles.bars}>
          {data.strengths.map((strength) => (
            <li key={strength.label} className={styles.bar}>
              <span className={styles.barLabel}>{strength.label}</span>
              <span className={styles.barTrack}>
                {/* La barra se escala contra el máximo, no contra 100:
                    con 23% como tope, todas se verían casi vacías. */}
                <span
                  className={styles.barFill}
                  style={{ width: `${(strength.percent / max) * 100}%` }}
                />
              </span>
              <span className={styles.barPercent}>{strength.percent}%</span>
            </li>
          ))}
        </ul>
        <p className={styles.note}>{data.strengthsNote}</p>
      </section>

      <section className={styles.block}>
        <h3 className={styles.blockTitle}>{data.testimonialsTitle}</h3>
        <div className={styles.quotes}>
          {data.testimonials.map((testimonial) => (
            <blockquote key={testimonial.quote} className={styles.quote}>
              {testimonial.quote}
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
