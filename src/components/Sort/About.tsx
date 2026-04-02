import { personal } from '@/data/portfolio'
import Reveal from '../Reveal/Reveal'
import styles from './About.module.css'

const stats = [
  { num: '∞',  label: 'Keycaps sculpted' },
  { num: '📦', label: 'Projects shipped' },
  { num: '🧶', label: 'WIPs on the hook' },
  { num: '☕', label: 'Cups of tea' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Reveal className={styles.left}>
        <p className={styles.sectionLabel}>About me</p>
        <h2 className={styles.title}>
          A developer with<br /><em>crafty hands.</em>
        </h2>
        {personal.bio.map((para, i) => (
          <p key={i} className={styles.para}>{para}</p>
        ))}
        <div className={styles.tags}>
          {personal.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120} className={styles.right}>
        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
