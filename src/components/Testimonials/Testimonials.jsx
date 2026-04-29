import { useState } from 'react';
import TestimonialCard from '../TestimonialCard';
import styles from './Testimonials.module.css';
import { TESTIMONIALS } from '../../data';
import Banner from "../../assets/Rectangle 14.png";

const ITEM_HEIGHT = 110; // MUST match card height

export default function Testimonials({
  testimonials = TESTIMONIALS,
  featuredImage = Banner,
  featuredTitle = "Customer's Review",
  featuredDesc = "Real experiences from homeowners who trusted SK Group and found quality, transparency, and reliability in every step of their journey.",
}) {
  const [active, setActive] = useState(1); // start from middle

  const handlePrev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);

  const handleNext = () =>
    setActive((i) => (i + 1) % testimonials.length);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Customer's Say</h2>
        <p className={styles.subheading}>
          Sk Royal Connect is an exclusive loyalty initiative for the residents of Srijan Realty, designed to unleash the power of happier communities.
        </p>

        <div className={styles.grid}>

          {/* LEFT SIDE */}
          <div className={styles.leftCol}>

            {/* Arrows */}
            <div className={styles.navCol}>
              <button onClick={handlePrev} className={styles.navBtn}>↑</button>
              <button onClick={handleNext} className={styles.navBtn}>↓</button>
            </div>

            {/* List */}
            <div className={styles.listWrapper}>
              <div
                className={styles.list}
                style={{
                  transform: `translateY(${ITEM_HEIGHT - active * ITEM_HEIGHT}px)`
                }}
              >
                {testimonials.map((t, i) => (
                  <TestimonialCard
                    key={i}
                    {...t}
                    active={i === active}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className={styles.videoCard}>
            <div className={styles.videoThumb}>
              <img src={featuredImage} alt={featuredTitle} className={styles.thumbImg} />

              <button className={styles.playBtn}>
                <div className={styles.playIcon} />
              </button>

              <div className={styles.fadeBottom}></div>
            </div>

            <div className={styles.videoInfo}>
              <div className={styles.videoTitle}>{featuredTitle}</div>
              <p className={styles.videoDesc}>{featuredDesc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}