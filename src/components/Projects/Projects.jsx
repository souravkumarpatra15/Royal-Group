import ProjectCard from '../ProjectCard';
import styles from './Projects.module.css';
import { PROJECTS } from '../../data';

/**
 * Projects Props:
 * - projects: array of { id, name, status, desc, image }
 * - title: JSX or string
 * - filterLabel: string
 */
export default function Projects({
  projects = PROJECTS,
  title = <>Potter Ipsum Wand Elf Parchment Wingardium.<br />Great <em className={styles.gold}>Ravenclaw.</em></>,
  filterLabel = "Ongoing · Completed",
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.filter}>{filterLabel}</div>
        <h2 className={styles.heading}>{title}</h2>
        <div className={styles.grid}>
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
      </div>
    </section>
  );
}
