import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../context/ThemeContext';
import gonzaloImg from '../assets/un_poco_de_mi.jpg';
import styles from './AboutPage.module.css';

export function AboutPage() {
  const { t } = useTheme();
  const containerRef = useRef<HTMLElement>(null);
  useScrollReveal(containerRef);

  return (
    <>
      <Helmet>
        <title>{`${t('about_title')} — Gonzalo Daniel Pérez`}</title>
        <meta name="description" content="UX/UI Designer. De Paint de niño a metodología AI-native hoy." />
      </Helmet>

      <article ref={containerRef} className={styles.page}>
        <div className={styles.profileCard} data-fade>
          <img src={gonzaloImg} alt="Gonzalo Daniel Pérez" className={styles.profileImg} />
          <div className={styles.profileMeta}>
            <h1 className={styles.pageTitle}>{t('about_title')}</h1>
            <p className={styles.profileRole}>UX/UI Designer — Corrientes, Argentina</p>
          </div>
        </div>
        <section className={styles.section} data-reveal="section">
          <h2 className={styles.heading} data-reveal="heading">{t('about_origin_title')}</h2>
          <p>{t('about_origin_p1')}</p>
        </section>

        <section className={styles.section} data-reveal="section">
          <h2 className={styles.heading} data-reveal="heading">{t('about_path_title')}</h2>
          <p>{t('about_path_p1')}</p>
          <p>{t('about_path_p2')}</p>
        </section>

        <section className={styles.section} data-reveal="section">
          <h2 className={styles.heading} data-reveal="heading">{t('about_discovery_title')}</h2>
          <p>{t('about_discovery_p1')}</p>
          <p>{t('about_discovery_p2')}</p>
          <p>{t('about_discovery_p3')}</p>
          <p>{t('about_discovery_p4')}</p>
          <p className={styles.highlight}>{t('about_discovery_p5')}</p>
        </section>

        <section className={styles.section} data-reveal="section">
          <h2 className={styles.heading} data-reveal="heading">{t('about_driving_title')}</h2>
          <p>{t('about_driving_p1')}</p>
          <ul className={styles.list}>
            <li>
              <strong>{t('about_empathy_user')}</strong> {t('about_empathy_user_desc')}
            </li>
            <li>
              <strong>{t('about_empathy_team')}</strong> {t('about_empathy_team_desc')}
            </li>
            <li>
              <strong>{t('about_empathy_client')}</strong> {t('about_empathy_client_desc')}
            </li>
          </ul>
          <p>{t('about_driving_p2')}</p>
        </section>

        <section className={styles.section} data-reveal="section">
          <h2 className={styles.heading} data-reveal="heading">{t('about_ai_title')}</h2>
          <p>{t('about_ai_p1')}</p>
          <p>{t('about_ai_p2')}</p>
          <p>{t('about_ai_p3')}</p>
          <p className={styles.highlight}>{t('about_ai_p4')}</p>
          <p>{t('about_ai_p5')}</p>
        </section>

        <section className={styles.section} data-reveal="section">
          <h2 className={styles.heading} data-reveal="heading">{t('about_offline_title')}</h2>
          <p>{t('about_offline_p1')}</p>
          <p>{t('about_offline_p2')}</p>
          <p>{t('about_offline_p3')}</p>
        </section>

        <section className={styles.section} data-reveal="section">
          <h2 className={styles.heading} data-reveal="heading">{t('about_contact_title')}</h2>
          <p>{t('about_contact_p1')}</p>
        </section>
      </article>
    </>
  );
}

