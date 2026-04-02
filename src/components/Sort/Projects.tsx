import { projects } from '@/data/portfolio'
import Reveal from '../Reveal'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Reveal>
        <p className={styles.sectionLabel}>Selected work</p>
        <h2 className={styles.title}>Things I&apos;ve built</h2>
        <p className={styles.desc}>Real projects, real code — click to explore.</p>
      </Reveal>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{project.icon}</span>
                <span className={styles.arrow}>↗</span>
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                  onClick={e => e.stopPropagation()}
                >
                  GitHub →
                </a>
              )}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
