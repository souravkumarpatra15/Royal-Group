import styles from './CTA.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

export default function CTA({
  title = "Looking For The Right",
  highlight = "Property?",
  buttonText = "Talk To Us",
  onButtonClick,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/contact");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.watermark}>
        <img src={logo} alt="" className={styles.watermarkImg} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>
          {title} <span className={styles.gold}>{highlight}</span>
        </h2>

        <button className={styles.btn} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}