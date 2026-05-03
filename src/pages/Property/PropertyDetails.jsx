import styles from "./PropertyDetails.module.css";
import Navbar from "../../components/Navbar/Navbar";
import CTA from "../../components/Black/CTA/CTA";
import Footer from "../../components/Black/Footer/Footer";
import Projects from "../../components/Projects/ProjectsBlack";
import banner from "../../assets/banner1.png";
import img from "../../assets/Rectangle 33.png";
import img2 from "../../assets/Rectangle 77.png";
import img3 from "../../assets/Rectangle 70.png";
import shieldIcon from "../../assets/Vector.svg";

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
            Potter ipsum wand elf parchment wingardium. Prophecies blotts ickle dirigible witch padma remember juice us norwegian. Quaffle ollivanders flying hoops bezoar remembrall cup floating. Hats poltergeist prongs grayback drills cutting hagrid spine knew heir.
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
        <p>Explore our diverse range of unit plans designed to suit your lifestyle.</p>
        <div className={styles.tabs}>
          <span>Option A</span>
          <span>Option B</span>
          <span>Option C</span>
        </div>
        <img src={img2} className={styles.planImg} />
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <h2>Gallery</h2>
        <p>Take a visual tour of our luxurious amenities and well-designed spaces.</p>

        <div className={styles.galleryGrid}>
          <img src={img3} className={styles.big} />
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
          <p>Premium facilities designed for your comfort. SK Royal Estates </p>

          <div className={styles.amenityList}>
            {Array(8).fill("Safety and Security").map((a, i) => (
              <div key={i} className={styles.amenityItem}>
                <img src={shieldIcon} className={styles.amenityItemImage} alt="icon" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>

        <img src={img} />
      </section>

      <Projects />

      <CTA />
      <Footer />
    </div>
  );
}