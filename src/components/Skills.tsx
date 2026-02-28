import { skills } from '@/data/portfolio'
import Reveal from './Reveal'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <Reveal>
        <p className={styles.sectionLabel}>What I work with</p>
        <h2 className={styles.title}>Tech &amp; Tools</h2>
        <p className={styles.desc}>A curated toolkit I actually enjoy using day-to-day.</p>
      </Reveal>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 60}>
            <div className={styles.card}>
              <div className={styles.icon}>{skill.icon}</div>
              <div className={styles.name}>{skill.name}</div>
              <div className={styles.cardDesc}>{skill.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
