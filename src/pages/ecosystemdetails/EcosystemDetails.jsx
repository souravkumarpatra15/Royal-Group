import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./EcosystemDetails.module.css";
import { CTA, Footer } from '../../components';

// Import your real images
import img1 from '../../assets/Rectangle 8.png';
import img2 from '../../assets/Rectangle 33 (3).png';
import img3 from '../../assets/Rectangle 34.png';
import img4 from '../../assets/Rectangle 35.png';

const PAGE_DATA = {
  residential: {
    heroTitle1: "Our",
    heroTitle2: "Collection.",
    bigTitle1: "Resid",
    bigTitle2: "ential",
    desc: "Thoughtfully designed homes crafted to offer comfort, security, and enduring value for families across generations.",
    heroDesc: "Smartly planned residential communities designed to maximize space efficiency, enhance safety standards, ensure easy accessibility, and deliver long-term durability through structured layouts and quality construction practices.",
  },
  commercial: {
    heroTitle1: "Our",
    heroTitle2: "Collection.",
    bigTitle1: "Comm",
    bigTitle2: "ercial",
    desc: "Efficient commercial spaces crafted for productivity and business growth.",
    heroDesc: "Smartly planned commercial spaces designed to maximize space efficiency, enhance safety standards, ensure easy accessibility, and deliver long-term durability through structured layouts and quality construction practices.",
  },
  garages: {
    heroTitle1: "Our",
    heroTitle2: "Collection.",
    bigTitle1: "Garages / ",
    bigTitle2: "Parking Spaces",
    desc: "Smart parking and garage solutions ensuring safety and maximum space efficiency.",
    heroDesc: "Smartly planned parking and garage solutions designed to maximize space efficiency, enhance safety standards, ensure easy accessibility, and deliver long-term durability through structured layouts and quality construction practices.",
  },
};

const ALL_PROJECTS = [
  { name: "Apartment A", img: img1, desc: "Potter ipsum wand elf parchment wingardium. Prophecies blotts ickle dirigible witch padma remember juice us norwegian. Headless cottage bouxbatons prefect's and.", status: "ongoing" },
  { name: "Apartment A", img: img2, desc: "Potter ipsum wand elf parchment wingardium. Prophecies blotts ickle dirigible witch padma remember juice us norwegian. Headless cottage bouxbatons prefect's and.", status: "ongoing" },
  { name: "Apartment A", img: img3, desc: "Potter ipsum wand elf parchment wingardium. Prophecies blotts ickle dirigible witch padma remember juice us norwegian. Headless cottage bouxbatons prefect's and.", status: "ready" },
  { name: "Apartment A", img: img4, desc: "Potter ipsum wand elf parchment wingardium. Prophecies blotts ickle dirigible witch padma remember juice us norwegian. Headless cottage bouxbatons prefect's and.", status: "ongoing" },
  { name: "Apartment A", img: img1, desc: "Potter ipsum wand elf parchment wingardium. Prophecies blotts ickle dirigible witch padma remember juice us norwegian. Headless cottage bouxbatons prefect's and.", status: "ready" },
  { name: "Apartment A", img: img2, desc: "Potter ipsum wand elf parchment wingardium. Prophecies blotts ickle dirigible witch padma remember juice us norwegian. Headless cottage bouxbatons prefect's and.", status: "ongoing" },
];

export default function EcosystemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("ongoing");

  const page = PAGE_DATA[id] || PAGE_DATA.residential;
  const filtered = ALL_PROJECTS.filter(p => p.status === tab);

  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── HERO: 50/50 split ── */}
      <div className={styles.hero}>

        {/* Left — building image */}
        <div className={styles.heroLeft}>
          <img src={img2} alt="Property" className={styles.heroImg} />
        </div>

        {/* Right — title + description */}
        <div className={styles.heroRight}>
          <h1 className={styles.heroTitle}>
            {page.heroTitle1}{' '}
            <span className={styles.gold}>{page.heroTitle2}</span>
          </h1>
          <p className={styles.heroDesc}>{page.heroDesc}</p>
        </div>
      </div>

      {/* ── BIG OVERLAPPING TITLE + TABS ── */}
      <div className={styles.titleSection}>
        <h2 className={styles.bigTitle}>
          <span className={styles.dark}>{page.bigTitle1}</span>
          <span className={styles.gold}>{page.bigTitle2}</span>
        </h2>

        {/* Filter tabs pill */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${tab === 'ongoing' ? styles.tabActive : styles.tabInactive}`}
              onClick={() => setTab('ongoing')}
            >
              Ongoing
            </button>
            <button
              className={`${styles.tab} ${tab === 'ready' ? styles.tabActive : styles.tabInactive}`}
              onClick={() => setTab('ready')}
            >
              Ready to Move
            </button>
          </div>
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className={styles.grid}>
        {filtered.map((p, i) => (
          <div
            key={`${p.name}-${i}`} onClick={() => navigate(`/property/${p.name}`)}
            className={`${styles.card} ${i === 1 ? styles.cardFeatured : ''}`}
          >
            <div className={styles.cardImgWrap}>
              <img src={p.img} alt={p.name} className={styles.cardImg} />
            </div>
            <div className={`${styles.cardBody}`}>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <span className={styles.seeMore}>See More...</span>
            </div>
          </div>
        ))}
      </div>

      <CTA />
      <Footer />
    </div>
  );
}