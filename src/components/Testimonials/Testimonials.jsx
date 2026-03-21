import { useState } from 'react';
import TestimonialCard from '../TestimonialCard';
import styles from './Testimonials.module.css';
import { TESTIMONIALS } from '../../data';

/**
 * Testimonials Props:
 * - testimonials: array of { name, stars, text }
 * - featuredImage: string (URL) — video thumbnail
 * - featuredTitle: string
 * - featuredDesc: string
 */
export default function Testimonials({
  testimonials = TESTIMONIALS,
  featuredImage = null,
  featuredTitle = "Name of Property",
  featuredDesc = "Porro ipsam amet ut laudantium rem quibusdam. Praesentium culpa dolores alias et magnam provident harum.",
}) {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Customer's Say</h2>
        <p className={styles.subheading}>Porro ipsam amet ut laudantium rem quibusdam.</p>

        <div className={styles.grid}>
          {/* Testimonial List */}
          <div className={styles.list}>
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                name={t.name}
                stars={t.stars}
                text={t.text}
                active={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          {/* Featured Property Video Card */}
          <div className={styles.videoCard}>
            <div className={styles.videoThumb}>
              {featuredImage ? (
                <img src={featuredImage} alt={featuredTitle} className={styles.thumbImg} />
              ) : (
                <svg width="100%" height="100%" viewBox="0 0 400 220" style={{ position: 'absolute', inset: 0 }}>
                  <rect width="400" height="220" fill="#6a9a60"/>
                  <circle cx="60" cy="160" r="40" fill="#4a7a42"/>
                  <circle cx="340" cy="150" r="35" fill="#5a8a52"/>
                  <rect x="80" y="40" width="240" height="140" fill="#c8b890" rx="4"/>
                  {[0,1,2].map(r => [0,1,2,3].map(c => (
                    <rect key={`${r}-${c}`} x={95+c*55} y={55+r*38} width="38" height="28" fill="#d8c8a0" rx="1"/>
                  )))}
                </svg>
              )}
              <button className={styles.playBtn}>▶</button>
            </div>
            <div className={styles.videoInfo}>
              <div className={styles.videoTitle}>{featuredTitle}</div>
              <p className={styles.videoDesc}>{featuredDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
