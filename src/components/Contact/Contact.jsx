import styles from "./Contact.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { CTA, Footer } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* CONTACT CARD */}
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>

          {/* LEFT PANEL */}
          <div className={styles.left}>
            <h2 className={styles.headerTitle} style={{ fontSize: '35px' }}>Contact Information</h2>
            <p style={{ marginTop: '-100px' }}>Say something to start a live chat!</p>

            <div className={styles.info}>
              <a href="tel:+1023456789" className={styles.infoItem}>
                <FontAwesomeIcon icon={faPhone} />
                <span>+102 3456 789</span>
              </a>

              <a href="mailto:demo@gmail.com" className={styles.infoItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>demo@gmail.com</span>
              </a>

              <a
                href="https://www.google.com/maps?q=132+Dartmouth+Street+Boston"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                  132 Dartmouth Street Boston,<br />
                  Massachusetts 02156 United States
                </span>
              </a>
            </div>

            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className={styles.right}>
            <div className={styles.row}>
              <div className={styles.field}>
                <input type="text" required />
                <label>First Name</label>
              </div>

              <div className={styles.field}>
                <input type="text" required />
                <label>Last Name</label>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <input type="text" required />
                <label>Phone Number</label>
              </div>

              <div className={styles.field}>
                <input type="email" required />
                <label>Email Address</label>
              </div>
            </div>

            <div className={styles.field}>
              <textarea required></textarea>
              <label>Message</label>
            </div>

            <button className={styles.btn}>Send Message</button>
          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}