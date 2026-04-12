import styles from "./About.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { CTA, Footer } from "../../components";
import teamImg from "../../assets/Rectangle 22.png"; // use your image
import banner from "../../assets/banner1.png"; // use your image

export default function About() {
    return (
        <div className={styles.page}>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroBanner}>
                    <img src={banner} alt="Building" className={styles.heroImg} />

                    <div className={styles.overlay}></div>

                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>Who We Are</h1>

                        <p className={styles.desc}>
                            SK Group is a progressive construction company delivering residential
                            and commercial projects with integrity, innovation, and disciplined
                            execution, building durable, efficient spaces that reflect quality,
                            reliability, and client-focused excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className={styles.teamSection}>
                <h2 className={styles.teamTitle}>Meet Our Team</h2>
                <p className={styles.teamDesc}>
                    Meet every expert. SK Group blends smart execution with quality
                    construction practices across residential, commercial, and ecosystem
                    solutions.
                </p>

                <div className={styles.teamGrid}>
                    {[1, 2].map((item) => (
                        <div key={item} className={styles.card}>
                            <img src={teamImg} alt="team" className={styles.cardImg} />
                            <h3 className={styles.cardName}>Franklin Young</h3>
                            <p className={styles.cardRole}>Founder & CEO</p>
                            <p className={styles.cardText}>
                                “These spaces aren’t just built structures. They redefine how
                                value aligns with purpose and long-term investment.”
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
}