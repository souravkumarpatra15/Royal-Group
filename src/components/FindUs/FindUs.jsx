import styles from './FindUs.module.css';
import { LOCATIONS } from '../../data';

/**
 * FindUs Props:
 * - locations: array of { name, description, city }
 * - mapImage: string (URL to map image) — falls back to SVG
 */
export default function FindUs({ locations = LOCATIONS, mapImage = null }) {
  const location = locations[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Text */}
        <div className={styles.textCol}>
          <h2 className={styles.heading}>
            Where Can You<br />Find Us
          </h2>
          <h3 className={styles.locationName}>{location.name}</h3>
          <p className={styles.desc}>{location.description}</p>
          <button className="btn-outline-gold">See More...</button>
        </div>

        {/* Map */}
        <div className={styles.mapCol}>
          {mapImage ? (
            <img src={mapImage} alt="Location Map" className={styles.mapImg} />
          ) : (
            <div className={styles.mapPlaceholder}>
              <svg width="100%" height="100%" viewBox="0 0 400 300">
                <rect width="400" height="300" fill="#e8dfc8"/>
                <path d="M 80 0 Q 100 80 90 150 Q 80 220 100 300" stroke="#a8c4d0" strokeWidth="24" fill="none" opacity="0.7"/>
                <line x1="100" y1="150" x2="350" y2="150" stroke="#fff" strokeWidth="3" opacity="0.8"/>
                <line x1="200" y1="50" x2="200" y2="280" stroke="#fff" strokeWidth="2.5" opacity="0.7"/>
                <line x1="100" y1="200" x2="380" y2="180" stroke="#fff" strokeWidth="2" opacity="0.6"/>
                <line x1="150" y1="80" x2="380" y2="100" stroke="#fff" strokeWidth="2" opacity="0.6"/>
                <circle cx="210" cy="200" r="10" fill="#C8860A"/>
                <circle cx="210" cy="200" r="5" fill="#fff"/>
                <text x="230" y="145" fill="#333" fontSize="14" fontWeight="bold">Kolkata</text>
                <text x="228" y="160" fill="#333" fontSize="10" opacity="0.7">কলকাতা</text>
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
