import styles from './CTA.module.css';

/**
 * CTA Props:
 * - title: string
 * - highlight: string (gold word)
 * - buttonText: string
 * - onButtonClick: function
 */
export default function CTA({
  title = "Looking For The Right",
  highlight = "Property?",
  buttonText = "Talk To Us",
  onButtonClick,
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        {title} <span className={styles.gold}>{highlight}</span>
      </h2>
      <button className="btn-outline-gold" onClick={onButtonClick}>
        {buttonText}
      </button>
    </section>
  );
}
