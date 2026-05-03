import { useRef } from 'react';
import ProjectCard from '../ProjectCard';
import styles from './Projects.module.css';
import { PROJECTS } from '../../data';

export default function ProjectsBlack({
  projects = PROJECTS,
  title = <><em className={styles.gold}>Designed With Precision,</em> Delivered With<br />Commitment.</>,
  filterLabel = "Ongoing · Ready to Move",
}) {
  const trackRef = useRef(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.filter}>{filterLabel}</div>
        <h2 className={styles.heading2}>{title}</h2>
      </div>

      {/* Scrollable track — full width, no max-width so cards bleed to edges */}
      <div className={styles.scrollOuter}>
        <div className={styles.fadeLeft} />
        <div className={styles.track} ref={trackRef}>
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              name={p.name}
              status={p.status}
              desc={p.desc}
              image={p.image}
              colorIndex={i}
            />
          ))}
        </div>

        {/* Right-edge cream fade so it's clear cards continue */}
        <div className={styles.fadeRight} />
      </div>
    </section>
  );
}