import styles from './CTA.module.css';
import logo from '../../assets/logo.png';

export default function CTA({
  title = "Looking For The Right",
  highlight = "Property?",
  buttonText = "Talk To Us",
  onButtonClick,
}) {
  return (
    <section className={styles.section}>

      {/* Watermark logo in background */}
      <div className={styles.watermark}>
        <img src={logo} alt="" aria-hidden="true" className={styles.watermarkImg} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>
          {title} <span className={styles.gold}>{highlight}</span>
        </h2>
        <button className={styles.btn} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>

    </section>
  );
}