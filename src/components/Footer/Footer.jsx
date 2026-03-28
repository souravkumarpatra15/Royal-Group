import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
import { FOOTER_COLS } from '../../data';

export default function Footer({
  columns = FOOTER_COLS,
  copyright = "© 2024 Royal Group. All rights reserved.",
}) {
  return (
    <footer className={styles.footer}>

      {/* Watermark logo centered in footer background */}
      <div className={styles.watermark}>
        <img src={logo} alt="" aria-hidden="true" className={styles.watermarkImg} />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <div className={styles.colTitle}>{col.title}</div>
              <ul className={styles.links}>
                {col.links.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
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