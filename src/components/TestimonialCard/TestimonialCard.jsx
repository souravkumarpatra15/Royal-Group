import styles from './TestimonialCard.module.css';

/**
 * TestimonialCard Props:
 * - name: string
 * - stars: number (1-5)
 * - text: string
 * - active: boolean
 * - onClick: function
 */
export default function TestimonialCard({ name, stars = 3, text, active = false, onClick }) {
  return (
    <div
      className={`${styles.card} ${active ? styles.active : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.stars}>
        {[1,2,3,4,5].map(i => (
          <span key={i} className={i <= stars ? styles.starFilled : styles.starEmpty}>▲</span>
        ))}
      </div>
      <div className={styles.name}>{name}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
