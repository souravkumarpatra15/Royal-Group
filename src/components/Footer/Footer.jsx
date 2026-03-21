import styles from './Footer.module.css';
import { FOOTER_COLS } from '../../data';

/**
 * Footer Props:
 * - columns: array of { title, links: [{ label, href }] }
 * - copyright: string
 */
export default function Footer({
  columns = FOOTER_COLS,
  copyright = "© 2024 Prestige. All rights reserved.",
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <div className={styles.colTitle}>{col.title}</div>
              <ul className={styles.links}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>{copyright}</div>
      </div>
    </footer>
  );
}
