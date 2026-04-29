import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./EcosystemDetails.module.css";
import { CTA, Footer } from '../../components';

// Import your real images
import img2 from '../../assets/Rectangle 33 (3).png';
import Project1 from '../../assets/projects/3_3-Photo-min-758x564.jpg';
import Project2 from '../../assets/projects/project2.jpg';
import Project3 from '../../assets/projects/project3.jpg';
import Project4 from '../../assets/projects/project4.jpg';
import Project5 from '../../assets/projects/project5.jpg';
import Project6 from '../../assets/projects/project6.jpg';
import Project7 from '../../assets/projects/project7.jpg';
import Project8 from '../../assets/projects/project8.jpg';
import Project9 from '../../assets/projects/project9.jpg';
import Project10 from '../../assets/projects/project10.jpg';

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

const PROJECTS = {
  residential: [
    {
      name: "Royal Estate",
      img: Project1,
      desc: "Royal Estate is a premium residential development by SK Builders & Developers Pvt. Ltd., offering well-planned homes designed for modern urban living. The project combines quality construction, thoughtful layouts, and a convenient location, making it an ideal choice for families seeking comfort and long-term value.",
      status: "ongoing"
    },
    {
      name: "Royal Mansion",
      img: Project2,
      desc: "Royal Mansion redefines luxury living with its elegant design, spacious layouts, and over 70% open space. The project is crafted to provide a perfect balance of aesthetics, comfort, and modern lifestyle amenities.",
      status: "ongoing"
    },
    {
      name: "Pashupati Residency",
      img: Project3,
      desc: "Pashupati Residency offers a refined living experience with well-designed apartments, open surroundings, and modern architecture. It is built to provide both comfort and style for contemporary families.",
      status: "ongoing"
    },
    {
      name: "Kumar Tower",
      img: Project7,
      desc: "Kumar Tower features thoughtfully designed homes with high-quality specifications including marble flooring, smooth Paris-finished walls, tiled bathrooms, and a functional kitchen setup with durable fittings for everyday convenience.",
      status: "ready"
    },
    {
      name: "Royal Origin",
      img: Project3,
      desc: "Royal Origin offers a modern lifestyle surrounded by open spaces and greenery. With premium design elements and a focus on comfort, the project delivers a peaceful and elegant residential experience.",
      status: "ongoing"
    },
    {
      name: "Royal Arcade",
      img: Project8,
      desc: "Royal Arcade is a well-planned residential project designed with flexibility and modern construction standards. Layouts and specifications are subject to enhancement to ensure the best possible living experience for residents.",
      status: "ready"
    },
    {
      name: "Royal Saroj Apartment",
      img: Project9,
      desc: "Royal Saroj Apartment reflects the legacy of SK Group in delivering quality construction and trusted real estate solutions. With multiple successful projects across Hooghly and Kolkata, the group focuses on sustainable development and customer satisfaction.",
      status: "ongoing"
    },
    {
      name: "Royal Complex",
      img: Project10,
      desc: "Royal Complex is a thoughtfully designed residential project featuring 4 blocks and 13 premium flats in a G+3 structure. Offering spacious 2BHK and 3BHK homes (900–1600 sq. ft.), it ensures a comfortable and modern lifestyle with efficient space utilization.",
      status: "ready"
    }
  ],

  commercial: [
    {
      name: "Office Tower A",
      img: Project3,
      desc: "A modern commercial development designed to support business growth with efficient layouts, accessibility, and a professional environment.",
      status: "ongoing"
    },
    {
      name: "Mall Complex",
      img: Project4,
      desc: "A vibrant retail and commercial hub offering excellent space for shops and businesses, designed to attract high footfall and ensure visibility.",
      status: "ready"
    }
  ],

  garages: [
    {
      name: "Parking Hub A",
      img: Project5,
      desc: "Smart parking solution designed for safety, accessibility, and efficient space management in urban environments.",
      status: "ongoing"
    },
    {
      name: "Garage Zone B",
      img: Project6,
      desc: "Secure and well-planned garage spaces providing convenience and protection for vehicles with optimized layouts.",
      status: "ready"
    }
  ]
};

export default function EcosystemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("ongoing");

  const page = PAGE_DATA[id] || PAGE_DATA.residential;
  const categoryProjects = PROJECTS[id] || PROJECTS.residential;
  const filtered = categoryProjects.filter(p => p.status === tab);
  const [expanded, setExpanded] = useState({});

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
        {filtered.map((p, i) => {
          const isExpanded = expanded[i];
          const shortText = p.desc.slice(0, 100); // adjust length

          return (
            <div
              key={`${p.name}-${i}`}
              onClick={() => navigate(`/property/${p.name.replace(/\s+/g, '-').toLowerCase()}`)}
              className={`${styles.card} ${i === 1 ? styles.cardFeatured : ''}`}
            >
              <div className={styles.cardImgWrap}>
                <img src={p.img} alt={p.name} className={styles.cardImg} />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.name}</h3>

                <p className={styles.cardDesc}>
                  {isExpanded ? p.desc : `${shortText}...`}
                </p>

                <span
                  className={styles.seeMore}
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(prev => ({
                      ...prev,
                      [i]: !prev[i]
                    }));
                  }}
                >
                  {isExpanded ? "Show Less" : "See More"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <CTA />
      <Footer />
    </div>
  );
}