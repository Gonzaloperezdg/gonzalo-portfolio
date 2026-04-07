import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GanttTimeline.module.css';

interface GanttItem {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  startYear: number;
  startMonth: number;
  endYear: number | null;
  endMonth: number | null;
  status: 'active' | 'completed';
  isPrimary?: boolean;
  color: string;
  minWidth?: number;
  fixedLeft?: number;  // 0-100 %
  fixedWidth?: number; // 0-100 %
}

const GANTT_ITEMS: GanttItem[] = [
  {
    slug: 'jbknowledge',
    title: 'JBKnowledge',
    subtitle: 'UX/UI Designer → Lead',
    period: 'Ago 2021 – Presente',
    startYear: 2021, startMonth: 8,
    endYear: null, endMonth: null,
    status: 'active',
    isPrimary: true,
    color: '#1A47E8',
    fixedLeft: 0,
    fixedWidth: 100,
  },
  {
    slug: 'coderhouse',
    title: 'Coderhouse',
    subtitle: 'Instructor UX/UI',
    period: 'May – Oct 2023',
    startYear: 2023, startMonth: 5,
    endYear: 2023, endMonth: 10,
    status: 'completed',
    color: '#7BA7BC',
    fixedLeft: 29.17,
    fixedWidth: 25.00,
  },
  {
    slug: 'ratt',
    title: 'RATT',
    subtitle: 'Narrativa como diseño',
    period: 'Sep 2024 – Feb 2025',
    startYear: 2024, startMonth: 9,
    endYear: 2025, endMonth: 2,
    status: 'completed',
    color: '#A89BC2',
    fixedLeft: 54.17,
    fixedWidth: 25.00,
  },
  {
    slug: 'ai-experiments',
    title: 'AI Experiments',
    subtitle: 'Metodología AI-native',
    period: 'Oct 2025 – Presente',
    startYear: 2025, startMonth: 10,
    endYear: null, endMonth: null,
    status: 'active',
    color: '#0D7377',
    fixedLeft: 79.17,
    fixedWidth: 20.83,
  },
];

const CHART_START = new Date(2021, 7, 1);
const CHART_END   = new Date(2026, 3, 6); // Termina en presente, no en 2027
const YEAR_LABELS = [2021, 2022, 2023, 2024, 2025, 2026];

function toPercent(year: number, month: number): number {
  const ms    = new Date(year, month - 1, 1).getTime() - CHART_START.getTime();
  const total = CHART_END.getTime() - CHART_START.getTime();
  return Math.max(0, Math.min(100, (ms / total) * 100));
}

function nowPercent(): number {
  const ms    = Date.now() - CHART_START.getTime();
  const total = CHART_END.getTime() - CHART_START.getTime();
  return Math.max(0, Math.min(100, (ms / total) * 100));
}

export function GanttTimeline() {
  const navigate = useNavigate();
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const now = nowPercent();

  return (
    <div className={styles.wrapper}>

      {/* Eje de años — alineado con el área de barras */}
      <div className={styles.axisRow}>
        <div className={styles.axisLabels} aria-hidden="true" />
        <div className={styles.axis}>
          {YEAR_LABELS.map(yr => (
            <span
              key={yr}
              className={styles.yearLabel}
              style={{ left: `${toPercent(yr, 1)}%` }}
            >
              {yr}
            </span>
          ))}
        </div>
      </div>

      {/* Filas */}
      <div className={styles.chart}>

        {/* Grid lines — solo en el área de barras */}
        <div className={styles.labelsCol} aria-hidden="true" />
        <div className={styles.trackArea}>
          {YEAR_LABELS.map(yr => (
            <div
              key={yr}
              className={styles.gridLine}
              style={{ left: `${toPercent(yr, 1)}%` }}
              aria-hidden="true"
            />
          ))}
          <div className={styles.nowLine} style={{ left: `${now}%` }} aria-hidden="true">
            <span className={styles.nowLabel}>Hoy</span>
          </div>
        </div>

        {/* Filas de datos */}
        {GANTT_ITEMS.map(item => {
          // Si el item tiene posición fija, usar eso
          let left: number;
          let width: number;

          if (item.fixedLeft !== undefined && item.fixedWidth !== undefined) {
            left = item.fixedLeft;
            width = item.fixedWidth;
          } else {
            // Cálculo dinámico basado en fechas
            left = toPercent(item.startYear, item.startMonth);
            const right = item.endYear
              ? toPercent(item.endYear, item.endMonth!)
              : now;
            const MIN_WIDTH_PERCENT = item.minWidth || 16;
            width = Math.max(right - left, 2);

            if (width < MIN_WIDTH_PERCENT) {
              width = MIN_WIDTH_PERCENT;
              if (left + width > 100) {
                left = Math.max(0, 100 - width);
              }
            } else {
              width = Math.min(width, 100 - left);
            }
          }

          const isHov = hoveredSlug === item.slug;

          return (
            <div key={item.slug} className={`${styles.row} ${item.isPrimary ? styles.rowPrimary : ''}`}>
              {/* Etiqueta izquierda */}
              <div className={styles.rowMeta}>
                <span className={`${styles.rowTitle} ${item.isPrimary ? styles.primary : ''}`}>
                  {item.title}
                </span>
                <span className={styles.rowSubtitle}>{item.subtitle}</span>
              </div>

              {/* Track */}
              <div className={styles.track}>
                <button
                  className={`${styles.bar} ${isHov ? styles.barHovered : ''}`}
                  data-slug={item.slug}
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    background: item.color,
                  }}
                  onClick={() => navigate(`/works/${item.slug}`)}
                  onMouseEnter={() => setHoveredSlug(item.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  aria-label={`${item.title} — ${item.period}`}
                >
                  <div className={styles.barContent}>
                    <span className={styles.barLabel}>{item.title}</span>
                    <span className={styles.barPeriod}>{item.period}</span>
                  </div>
                  {item.status === 'active' && (
                    <span className={styles.activeDot} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
