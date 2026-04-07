import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="mailto:gonzaloperezdg@gmail.com">Email</a>
        <span className={styles.separator}>·</span>
        <a href="https://www.linkedin.com/in/gonzaloperezdg/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className={styles.separator}>·</span>
        <a href="https://github.com/Gonzaloperezdg" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p className={styles.copy}>Gonzalo Daniel Pérez — Corrientes, Argentina</p>
    </footer>
  );
}
