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
        {/* NEW TOP CONTENT */}
        <div className={styles.topContent}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageDesc}>
            Have a question or need assistance? Reach out to SK Royal Group — our team is here to help you with property inquiries, project details, and any support you need.
          </p>
        </div>

        <div className={styles.contactCard}>

          {/* LEFT PANEL */}
          <div className={styles.left}>
            <h2 className={styles.headerTitle} style={{ fontSize: '35px' }}>Contact Information</h2>
            <p>Say something to start a live chat!</p>

            <div className={styles.info}>
              <a href="tel:+919830279622" className={styles.infoItem}>
                <FontAwesomeIcon icon={faPhone} />
                <span>+91 98302 79622</span>
              </a>

              <a href="mailto:info@skroyalgroup.com" className={styles.infoItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@skroyalgroup.com</span>
              </a>

              <a
                href="https://www.google.com/maps?q=16%2F1AM%20Abdul%20Hamid%20(British%20India)%20Street,%20(1st%20Floor)%20,%20Kolkata%20–%20700069"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                Office address:
                <span>
                  16/1AM Abdul Hamid (British India) Street, (1st Floor) , Kolkata – 700069
                </span>
              </a>
              <a
                href="https://www.google.com/maps?q=16%2F1AM%20Abdul%20Hamid%20(British%20India)%20Street,%20(1st%20Floor)%20,%20Kolkata%20–%20700069"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <FontAwesomeIcon icon={faLocationDot} />
                Branch address:
                <span>
                  105 B. K. Street, Near Telephone Exchange Uttarpara,
                  Hooghly – 712258
                  Tel (O) : 033 2663 6545
                  Mobile : 98302 79622
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