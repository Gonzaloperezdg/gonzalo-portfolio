import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext';
import { GanttTimeline } from '../components/GanttTimeline/GanttTimeline';
import styles from './WorksPage.module.css';

export function WorksPage() {
  const { t } = useTheme();

  return (
    <>
      <Helmet>
        <title>{`${t('works_title')} | Gonzalo Daniel Pérez`}</title>
        <meta name="description" content="Proyectos: InsurTech Global, Coderhouse, RATT ONG, AI Experiments." />
      </Helmet>

      <div className={styles.page}>
        <h1 className={styles.pageTitle}>{t('works_title')}</h1>
        <p className={styles.intro}>
          {t('works_intro')}
        </p>
        <GanttTimeline />
      </div>
    </>
  );
}
