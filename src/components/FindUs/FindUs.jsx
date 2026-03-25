import styles from './FindUs.module.css';
import { LOCATIONS } from '../../data';
import mapImg from '../../assets/kolkata-map.png';

export default function FindUs({ locations = LOCATIONS, mapImage = mapImg }) {
  return (
    <section className={styles.section}>

      {/* Map fills full background — ::before top fade, ::after bottom fade via CSS */}
      <div className={styles.mapBg}>
        <img src={mapImage} alt="Kolkata Map" className={styles.mapImg} />
      </div>

      {/* Right edge fade */}
      <div className={styles.mapRightFade} />

      {/* Text overlay — left side */}
      <div className={styles.textOverlay}>
        <h2 className={styles.heading}>Building Our<br />Legacy</h2>

        <div className={styles.pinGrid}>
          {['Hooghly', 'Rajarhat', 'Howrah', 'Sonarpur'].map(label => (
            <span key={label} className={styles.pinItem}>
              <svg width="13" height="17" viewBox="0 0 14 19" fill="none" aria-hidden="true">
                <path d="M7 0C3.134 0 0 3.358 0 7.5 0 13.125 7 19 7 19S14 13.125 14 7.5C14 3.358 10.866 0 7 0z" fill="#D4821A"/>
                <circle cx="7" cy="7.5" r="2.8" fill="#fff"/>
              </svg>
              {label}
            </span>
          ))}
        </div>

        <p className={styles.desc}>
          SK Group proudly operates across key locations including Hooghly,
          Howrah, Rajarhat, and Sonarpur. With a strong local presence in these
          regions, we deliver trusted construction solutions backed by quality,
          precision, and commitment.
        </p>

        <button className={styles.seeMoreBtn}>See More...</button>
      </div>

    </section>
  );
}