import { useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CASE_STUDIES } from '../data/caseStudies';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './CaseStudyPage.module.css';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  const containerRef = useRef<HTMLElement>(null);

  useScrollReveal(containerRef);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (!study) {
    return (
      <div className={styles.notFound}>
        <p>Caso de estudio no encontrado.</p>
        <Link to="/works">← Ver trabajos</Link>
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
        <Link to="/works" className={styles.backLink}>← Trabajos</Link>

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
                  <span className={styles.creditRole}> — {credit.role}</span>
                </span>
              ))}
            </div>
          )}
          {study.status === 'active' && (
            <span className={styles.activeBadge} data-reveal="meta">En desarrollo</span>
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
          </section>
        ))}

        {study.subProjects && study.subProjects.length > 0 && (
          <section className={styles.subProjects}>
            <h2 className={styles.sectionTitle} data-reveal="heading">Proyectos</h2>
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
              <span className={styles.navDir}>← Anterior</span>
              <span className={styles.navTitle}>{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/works/${next.slug}`} className={styles.navLink} data-align="right">
              <span className={styles.navDir}>Siguiente →</span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : <div />}
        </nav>
      </article>
    </>
  );
}
