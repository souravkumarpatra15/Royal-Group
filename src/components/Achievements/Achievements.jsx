import { useState, useEffect, useRef } from 'react';
import styles from './Achievements.module.css';
import { STATS, BUILDING_IMAGES  } from '../../data';

const INTERVAL = 3500; // ms between auto-slides

/**
 * Achievements Props:
 * - stats: array of { value, label }
 * - title: string
 * - description: string
 * - images: string[] — array of image URLs for carousel
 *                      Falls back to SVG placeholder if empty/null
 */
export default function Achievements({
  stats = STATS,
  title = "Our Achievement's",
  description = "Driven by integrity and precision, SK Group continues to shape lasting spaces that reflect reliability, thoughtful planning, and uncompromising quality, earning the confidence of homeowners and communities alike.",
  images = BUILDING_IMAGES,
}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const total = images.length || 1;

  const goTo = (idx) => {
    setCurrent(((idx % total) + total) % total);
  };

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, INTERVAL);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [total]);

  const handleDot = (idx) => {
    clearInterval(timerRef.current);
    goTo(idx);
    startAuto();
  };

  // Split stats: first 2 in row-1, rest in row-2
  const row1 = stats.slice(0, 2);
  const row2 = stats.slice(2);

  return (
    <section className={styles.section}>

      {/* ── LEFT: image carousel ── */}
      <div className={styles.imageCol}>

        {images.length > 0 ? (
          images.map((src, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === current ? styles.active : ''}`}
            >
              <img src={src} alt={`Building view ${i + 1}`} className={styles.slideImg} />
            </div>
          ))
        ) : (
          /* Single SVG placeholder when no images provided */
          <div className={`${styles.slide} ${styles.active}`}>
            <svg width="100%" height="100%" viewBox="0 0 500 580" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="580" fill="#5A7A52"/>
              <rect width="500" height="180" fill="#87CEEB" opacity="0.45"/>
              <rect x="60" y="90" width="380" height="490" fill="#C8B890" rx="2"/>
              {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
                <rect key={`${row}-${col}`} x={75+col*68} y={110+row*58} width="52" height="40" fill="#A8C8E8" opacity={0.8 - row*0.08} rx="1"/>
              )))}
              <rect x="185" y="380" width="130" height="200" fill="#B8A880" rx="2"/>
              <circle cx="35" cy="530" r="45" fill="#3A6830" opacity="0.9"/>
              <circle cx="465" cy="535" r="40" fill="#4A7840" opacity="0.88"/>
            </svg>
          </div>
        )}

        {/* Dots — only show when multiple images */}
        {images.length > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => handleDot(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── RIGHT: cream stats panel ── */}
      <div className={styles.textCol}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.desc}>{description}</p>

        <div className={styles.statsWrapper}>

          {/* Row 1 — 2 large stats */}
          <div className={styles.statsRow1}>
            {row1.map(stat => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValueLg}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Row 2 — remaining stats (up to 3) */}
          {row2.length > 0 && (
            <div className={styles.statsRow2}>
              {row2.map(stat => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValueMd}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

    </section>
  );
}