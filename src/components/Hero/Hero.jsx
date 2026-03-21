import Navbar from '../Navbar';
import styles from './Hero.module.css';

/**
 * Hero Props:
 * - title: string (supports <span> for gold highlight)
 * - subtitle: string
 * - backgroundImage: string (URL) — falls back to CSS gradient
 */
export default function Hero({
  title = <>Building <span className={styles.gold}>Trust,</span><br />Creating Landmarks</>,
  subtitle = "Porro ipsam amet ut laudantium rem quibusdam. Presentium culpa dolores lorem ipsum amet laudantium porro harum consequatur consequuntur harum lorem ipsum.",
  backgroundImage = null,
}) {
  return (
    <section
      className={styles.hero}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <Navbar />
      <div className={styles.overlay} />

      {/* SVG building illustration (replace with <img> when real photo is available) */}
      {!backgroundImage && (
        <svg className={styles.buildingSvg} viewBox="0 0 800 220" preserveAspectRatio="none">
          <rect x="50" y="60" width="120" height="160" fill="#5a7a52" opacity="0.8" rx="2"/>
          <rect x="70" y="40" width="80" height="20" fill="#4a6a42" opacity="0.9" rx="1"/>
          <rect x="180" y="80" width="140" height="140" fill="#6a8a62" opacity="0.8" rx="2"/>
          <rect x="330" y="50" width="100" height="170" fill="#527248" opacity="0.9" rx="2"/>
          <rect x="440" y="70" width="130" height="150" fill="#5e7e55" opacity="0.8" rx="2"/>
          <rect x="580" y="40" width="110" height="180" fill="#4e6e46" opacity="0.9" rx="2"/>
          <rect x="700" y="90" width="90" height="130" fill="#607856" opacity="0.8" rx="2"/>
        </svg>
      )}

      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{title}</h1>
        </div>
        <div className={styles.right}>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
