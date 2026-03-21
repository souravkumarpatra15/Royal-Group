import styles from './ProjectCard.module.css';

/**
 * ProjectCard Props:
 * - name: string
 * - status: string
 * - desc: string
 * - image: string (URL) — falls back to SVG
 * - colorIndex: number (0,1,2) for SVG color variant
 * - onExpand: function
 */
export default function ProjectCard({ name, status, desc, image = null, colorIndex = 0, onExpand }) {
  const bgColors = ['#7a9a6a', '#6a8a5a', '#8aaa7a'];

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap} style={{ background: bgColors[colorIndex % 3] }}>
        {image ? (
          <img src={image} alt={name} className={styles.img} />
        ) : (
          <svg width="100%" height="220" viewBox="0 0 260 220">
            <rect width="260" height="220" fill={bgColors[colorIndex % 3]}/>
            <rect x="30" y="40" width="200" height="160" fill="#c8b890" rx="2"/>
            {[0,1,2].map(r => [0,1,2].map(c => (
              <rect key={`${r}-${c}`} x={45+c*62} y={55+r*42} width="46" height="32" fill="#d8c8a0" rx="1"/>
            )))}
            <circle cx="20" cy="180" r="25" fill="#4a7a42"/>
            <circle cx="240" cy="185" r="20" fill="#5a8a52"/>
          </svg>
        )}
        <button className={styles.expandBtn} onClick={onExpand} aria-label="Expand">⤢</button>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
