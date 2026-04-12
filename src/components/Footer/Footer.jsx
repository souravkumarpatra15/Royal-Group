import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
import { FOOTER_COLS } from '../../data';

export default function Footer({
  columns = FOOTER_COLS,
  copyright,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      {/* Watermark logo */}
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
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className={styles.bottom}>
          © {currentYear} Royal Group. All rights reserved. <br />
          Developed by{" "}
          <a
            href="https://ngwebd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NGWEBD
          </a>
        </div>
      </div>

    </footer>
  );
}