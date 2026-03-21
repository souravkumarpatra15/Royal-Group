import StatCard from '../StatCard';
import styles from './Achievements.module.css';
import { STATS } from '../../data';

/**
 * Achievements Props:
 * - stats: array of { value, label }
 * - title: string
 * - description: string
 * - buildingImage: string (URL) — falls back to SVG illustration
 */
export default function Achievements({
  stats = STATS,
  title = "Our Achievement's",
  description = "Porro ipsam amet ut laudantium rem quibusdam. Praesentium culpa dolores alias et magnam harum. Quidem rem quibusdam provident harum porro ipsam provident laudantium.",
  buildingImage = null,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Building Image */}
        <div className={styles.imageCol}>
          {buildingImage ? (
            <img src={buildingImage} alt="Building" className={styles.img} />
          ) : (
            <div className={styles.imgPlaceholder}>
              <svg width="100%" height="100%" viewBox="0 0 400 340">
                <rect width="400" height="340" fill="#8aaa7a"/>
                <rect x="60" y="60" width="280" height="280" fill="#c8b89a" rx="2"/>
                <rect x="80" y="40" width="240" height="30" fill="#b8a88a" rx="2"/>
                {[0,1,2,3,4].map(row => [0,1,2,3].map(col => (
                  <rect key={`${row}-${col}`} x={90 + col*60} y={80 + row*48} width="40" height="32" fill="#d8c8a8" opacity="0.8" rx="1"/>
                )))}
                <circle cx="30" cy="280" r="30" fill="#4a7a42" opacity="0.9"/>
                <circle cx="370" cy="290" r="25" fill="#5a8a52" opacity="0.9"/>
                <rect x="0" y="310" width="400" height="30" fill="#8a9a6a"/>
              </svg>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className={styles.textCol}>
          <h2 className={styles.heading}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
