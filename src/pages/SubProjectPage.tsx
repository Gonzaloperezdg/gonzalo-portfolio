import { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getCaseStudies } from '../data/caseStudies';
import { useTheme } from '../context/ThemeContext';
import styles from './SubProjectPage.module.css';

export function SubProjectPage() {
  const { slug, projectSlug } = useParams<{ slug: string; projectSlug: string }>();
  const location = useLocation();
  const { language, t } = useTheme();
  const CASE_STUDIES = getCaseStudies(language);
  const parent = CASE_STUDIES.find((s) => s.slug === slug);
  const project = parent?.subProjects?.find((sp) => sp.slug === projectSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (!parent || !project) {
    return (
      <div className={styles.notFound}>
        <p>{t('sp_not_found')}</p>
        <Link to="/works">{t('cs_back_works')}</Link>
      </div>
    );
  }

  const allSubs = parent.subProjects ?? [];
  const currentIdx = allSubs.findIndex((sp) => sp.slug === projectSlug);
  const prev = currentIdx > 0 ? allSubs[currentIdx - 1] : null;
  const next = currentIdx < allSubs.length - 1 ? allSubs[currentIdx + 1] : null;

  return (
    <>
      <Helmet>
        <title>{project.title}: {parent.title} | Gonzalo Daniel Pérez</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <article className={styles.page}>
        <Link to={`/works/${parent.slug}`} className={styles.backLink}>
          ← {parent.title}
        </Link>

        <header className={styles.header}>
          {project.generation && (
            <span className={styles.gen}>{project.generation}</span>
          )}
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.period}>{project.period}</p>
          {project.status === 'active' && (
            <span className={styles.activeBadge}>{t('cs_active_badge')}</span>
          )}
        </header>

        {project.sections && project.sections.length > 0 ? (
          <>
            {project.sections.map((section) => (
              <section key={section.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.content.map((paragraph, i) => (
                  <p key={i} className={styles.text}>{paragraph}</p>
                ))}
                {section.pullQuote && (
                  <blockquote className={styles.pullQuote}>
                    {section.pullQuote}
                  </blockquote>
                )}
              </section>
            ))}
          </>
        ) : (
          <>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t('sp_section_description')}</h2>
              <p className={styles.text}>{project.description}</p>
            </section>

            {project.motivation && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('sp_section_motivation')}</h2>
                <p className={styles.text}>{project.motivation}</p>
              </section>
            )}

            {project.stack && project.stack.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('sp_section_stack')}</h2>
                <div className={styles.tags}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </section>
            )}

            {project.workflow && project.workflow.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('sp_section_workflow')}</h2>
                <ol className={styles.workflow}>
                  {project.workflow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </section>
            )}

            {project.insights && project.insights.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t('sp_section_insights')}</h2>
                <ul className={styles.insights}>
                  {project.insights.map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}

        <nav className={styles.navFooter}>
          {prev ? (
            <Link to={`/works/${parent.slug}/${prev.slug}`} className={styles.navLink}>
              <span className={styles.navDir}>{t('cs_nav_prev')}</span>
              <span className={styles.navTitle}>{prev.title}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/works/${parent.slug}/${next.slug}`} className={styles.navLink} data-align="right">
              <span className={styles.navDir}>{t('cs_nav_next')}</span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : <div />}
        </nav>
      </article>
    </>
  );
}
