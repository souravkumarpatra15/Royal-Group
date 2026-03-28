import styles from './ProjectCard.module.css';

export default function ProjectCard({ name, status, desc, image = null, colorIndex = 0, onExpand }) {
  const bgColors = ['#7a9a6a', '#6a8a5a', '#8aaa7a'];

  return (
    <div className={styles.card}>

      {/* Full-height image */}
      <div className={styles.imageWrap} style={{ background: bgColors[colorIndex % 3] }}>
        {image ? (
          <img src={image} alt={name} className={styles.img} />
        ) : (
          <svg width="100%" height="100%" viewBox="0 0 260 340" preserveAspectRatio="xMidYMid slice">
            <rect width="260" height="340" fill={bgColors[colorIndex % 3]}/>
            <rect x="30" y="40" width="200" height="260" fill="#c8b890" rx="2"/>
            {[0,1,2,3].map(r => [0,1,2].map(c => (
              <rect key={`${r}-${c}`} x={45+c*62} y={55+r*52} width="46" height="36" fill="#d8c8a0" rx="1"/>
            )))}
            <circle cx="20" cy="300" r="28" fill="#4a7a42"/>
            <circle cx="240" cy="308" r="22" fill="#5a8a52"/>
          </svg>
        )}

        {/* Dark gradient overlay at bottom */}
        <div className={styles.overlay} />

        {/* Text + button overlaid on image bottom */}
        <div className={styles.infoOverlay}>
          <div className={styles.textGroup}>
            <div className={styles.name}>{name}</div>
            <p className={styles.desc}>{desc}</p>
          </div>
          <button className={styles.expandBtn} onClick={onExpand} aria-label="Expand">
            {/* Arrow icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}