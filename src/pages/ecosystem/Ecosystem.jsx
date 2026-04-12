import { useNavigate } from 'react-router-dom';
import styles from '../ecosystem/Ecosystem.module.css';
import Navbar from '../../components/Navbar/Navbar';
import img1 from '../../assets/Rectangle 33 (2).png';  // aerial building — Residential
import img2 from '../../assets/Rectangle 34 (2).png';   // building front — Commercial
import img3 from '../../assets/Rectangle 35 (2).png';  // gate/entrance — Garages

const PANELS = [
  {
    id: 'residential',
    label: 'Residential',
    desc: 'Thoughtfully designed homes built for comfort, security, and lasting value.',
    image: img1,
  },
  {
    id: 'commercial',
    label: 'Commercial',
    desc: 'Efficient commercial spaces crafted for productivity and business growth.',
    image: img2,
  },
  {
    id: 'garages',
    label: 'Garages /\nParking Spaces',
    desc: 'Smartly planned parking and garage solutions ensuring safety, accessibility, and durability.',
    image: img3,
  },
];

export default function Ecosystem() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Navbar />

      <div className={styles.panels}>
        {PANELS.map((panel, i) => (
          <div
            key={panel.id}
            className={`${styles.panel}`} onClick={() => navigate('/ecosystem/' + panel.id)}
          >
            {/* Background image */}
            <img
              src={panel.image}
              alt={panel.label}
              className={styles.panelImg}
            />

            {/* Dark overlay — heavier at bottom */}
            <div className={styles.overlay} />

            {/* Text at bottom */}
            <div className={`${styles.panelText}`}>
              {panel.desc && (
                <p className={styles.panelDesc}>{panel.desc}</p>
              )}
              <h2 className={styles.panelLabel}>
                {panel.label.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < panel.label.split('\n').length - 1 && <br/>}</span>
                ))}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Back button */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}