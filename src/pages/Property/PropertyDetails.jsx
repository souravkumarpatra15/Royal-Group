import styles from "./PropertyDetails.module.css";
import Navbar from "../../components/Navbar/Navbar";
import CTA from "../../components/Black/CTA/CTA";
import Footer from "../../components/Black/Footer/Footer";
import banner from "../../assets/banner1.png";
import img from "../../assets/Rectangle 33.png";

export default function PropertyDetails() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <img src={banner} className={styles.heroImg} />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>
            Royal <br /><span>Estates</span>
          </h1>
          <p>Your dream world of apartments in Kolkata</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className={styles.overview}>
        <img src={img} className={styles.overviewImg} />

        <div className={styles.overviewRight}>
          <h3>Overview</h3>
          <p>
            Premium residential apartments designed with comfort and modern
            lifestyle in mind.
          </p>

          <div className={styles.stats}>
            <div><h2>2,800+</h2><span>Homes Delivered</span></div>
            <div><h2>2,800+</h2><span>Homes Delivered</span></div>
            <div><h2>2,800+</h2><span>Homes Delivered</span></div>
          </div>
        </div>
      </section>

      {/* UNIT PLAN */}
      <section className={styles.unit}>
        <h2>Unit Plan</h2>
        <div className={styles.tabs}>
          <span>Option A</span>
          <span>Option B</span>
          <span>Option C</span>
        </div>
        <img src={img} className={styles.planImg} />
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <h2>Gallery</h2>

        <div className={styles.galleryGrid}>
          <img src={img} className={styles.big} />
          <div className={styles.side}>
            <img src={img} />
            <img src={img} />
            <img src={img} />
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className={styles.amenities}>
        <div>
          <h2>Our Amenities</h2>
          <p>Premium facilities designed for your comfort.</p>

          <div className={styles.amenityList}>
            {Array(8).fill("Safety and Security").map((a, i) => (
              <div key={i}>🛡 {a}</div>
            ))}
          </div>
        </div>

        <img src={img} />
      </section>

      {/* MORE PROPERTIES */}
      <section className={styles.more}>
        <h2>More Properties From Us</h2>

        <div className={styles.cards}>
          {[1,2,3].map(i => (
            <div key={i} className={styles.propertyCard}>
              <img src={img} />
              <div>
                <h4>Apartment {i}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}