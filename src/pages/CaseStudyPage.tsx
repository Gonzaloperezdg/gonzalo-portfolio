import { useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getCaseStudies } from '../data/caseStudies';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Figure } from '../components/Figure/Figure';
import { Gallery } from '../components/Gallery/Gallery';
import { GenerationsDiagram } from '../components/GenerationsDiagram/GenerationsDiagram';
import { ImpactPanel } from '../components/ImpactPanel/ImpactPanel';
import { HERO_INSURTECH, CODERHOUSE_CLASE, RATT_ANTES, RATT_DESPUES } from '../data/media';
import { getCoderhouseImpact } from '../data/coderhouseImpact';
import styles from './CaseStudyPage.module.css';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { language, t } = useTheme();
  const CASE_STUDIES = getCaseStudies(language);
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  const containerRef = useRef<HTMLElement>(null);

  useScrollReveal(containerRef);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (!study) {
    return (
      <div className={styles.notFound}>
        <p>{t('cs_not_found')}</p>
        <Link to="/works">{t('cs_back_works')}</Link>
      </div>
    );
  }

  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const prev = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : null;
  const next = currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{study.seoTitle}</title>
        <meta name="description" content={study.seoDescription} />
      </Helmet>

      <article ref={containerRef} className={styles.page}>
        <Link to="/works" className={styles.backLink}>{t('cs_back_works')}</Link>

        {study.slug === 'insurtech-global' && (
          <Figure src={HERO_INSURTECH} alt={t('media_insurtech_alt')} bare priority />
        )}

        <header className={styles.header}>
          <span className={styles.badge} data-reveal="meta">{study.type}</span>
          <h1 className={styles.title} data-reveal="heading">{study.title}</h1>
          <p className={styles.subtitle} data-reveal="text">{study.subtitle}</p>
          <div className={styles.meta} data-reveal="meta">
            <span>{study.role}</span>
            <span className={styles.sep}>·</span>
            <span>{study.period}</span>
          </div>
          {study.credits && study.credits.length > 0 && (
            <div className={styles.credits} data-reveal="text">
              {study.credits.map((credit) => (
                <span key={credit.name} className={styles.credit}>
                  {credit.url ? (
                    <a href={credit.url} target="_blank" rel="noopener noreferrer">
                      {credit.name}
                    </a>
                  ) : (
                    credit.name
                  )}
                  <span className={styles.creditRole}>, {credit.role}</span>
                </span>
              ))}
            </div>
          )}
          {study.status === 'active' && (
            <span className={styles.activeBadge} data-reveal="meta">{t('cs_active_badge')}</span>
          )}
        </header>

        {study.sections.map((section) => (
          <section key={section.id} className={styles.section} data-reveal="section">
            <h2 className={styles.sectionTitle} data-reveal="heading">{section.title}</h2>
            {section.content.map((paragraph, i) => (
              <p key={i} className={styles.paragraph} data-reveal="text">{paragraph}</p>
            ))}
            {section.pullQuote && (
              <blockquote className={styles.pullQuote} data-reveal="quote">
                {section.pullQuote}
              </blockquote>
            )}

            {study.slug === 'coderhouse' && section.id === 'show' && (
              <Figure
                src={CODERHOUSE_CLASE}
                alt={t('media_coderhouse_alt')}
                caption={t('media_coderhouse_caption')}
                maxWidth="440px"
              />
            )}

            {study.slug === 'coderhouse' && section.id === 'results' && (
              <ImpactPanel data={getCoderhouseImpact(language)} />
            )}

            {study.slug === 'ratt' && section.id === 'narrative' && (
              <Gallery
                caption={t('media_ratt_hint')}
                labels={{
                  open: t('media_lightbox_open'),
                  close: t('media_lightbox_close'),
                  prev: t('media_lightbox_prev'),
                  next: t('media_lightbox_next'),
                }}
                groups={[
                  {
                    label: t('media_ratt_before'),
                    images: RATT_ANTES.map((pair, i) => ({
                      ...pair,
                      alt: `${t('media_ratt_before_alt')} ${i + 1}`,
                    })),
                  },
                  {
                    label: t('media_ratt_after'),
                    images: RATT_DESPUES.map((pair, i) => ({
                      ...pair,
                      alt: `${t('media_ratt_after_alt')} ${i + 1}`,
                    })),
                  },
                ]}
              />
            )}

            {study.slug === 'ai-experiments' && section.id === 'evolution' && (
              <GenerationsDiagram
                ariaLabel={t('diagram_gen_aria')}
                caption={t('diagram_gen_caption')}
                generations={[
                  {
                    label: t('diagram_gen1_label'),
                    period: t('diagram_gen1_period'),
                    title: t('diagram_gen1_title'),
                    tools: ['ChatGPT', 'Stitch', 'Google AI Studio', 'Antigravity', 'Netlify'],
                    color: '#1A47E8',
                  },
                  {
                    label: t('diagram_gen2_label'),
                    period: t('diagram_gen2_period'),
                    title: t('diagram_gen2_title'),
                    tools: ['NotebookLM + MCP', 'Antigravity', 'React + Vite + TS', 'Supabase'],
                    color: '#0D7377',
                  },
                  {
                    label: t('diagram_gen3_label'),
                    period: t('diagram_gen3_period'),
                    title: t('diagram_gen3_title'),
                    tools: ['Claude Code', 'NotebookLM + Perplexity', 'ASCII mockups', 'PRD + Design System'],
                    color: '#A89BC2',
                  },
                ]}
              />
            )}
          </section>
        ))}

        {study.subProjects && study.subProjects.length > 0 && (
          <section className={styles.subProjects}>
            <h2 className={styles.sectionTitle} data-reveal="heading">{t('cs_subprojects_title')}</h2>
            <div className={styles.subGrid} data-reveal="cards">
              {study.subProjects.map((sp) => (
                <Link
                  key={sp.slug}
                  to={`/works/${study.slug}/${sp.slug}`}
                  className={styles.subCard}
                  data-reveal="card"
                >
                  <span className={styles.subGen}>{sp.generation}</span>
                  <h3 className={styles.subTitle}>{sp.title}</h3>
                  <p className={styles.subDesc}>{sp.description}</p>
                  <span className={styles.subPeriod}>{sp.period}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <nav className={styles.navFooter}>
          {prev ? (
            <Link to={`/works/${prev.slug}`} className={styles.navLink}>
              <span className={styles.navDir}>{t('cs_nav_prev')}</span>
              <span className={styles.navTitle}>{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/works/${next.slug}`} className={styles.navLink} data-align="right">
              <span className={styles.navDir}>{t('cs_nav_next')}</span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : <div />}
        </nav>
      </article>
    </>
  );
}
