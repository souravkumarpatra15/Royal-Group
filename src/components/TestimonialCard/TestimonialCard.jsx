import styles from './TestimonialCard.module.css';

export default function TestimonialCard({
  name,
  text,
  active = false,
  onClick,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={`${styles.card} ${active ? styles.active : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onKeyDown={handleKeyDown}
    >
      {/* Quote */}
      <div className={styles.quote}>“</div>

      {/* Name */}
      <div className={styles.name}>{name}</div>

      {/* Text */}
      <p className={styles.text}>{text}</p>
    </div>
  );
}