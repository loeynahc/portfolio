import { personal, crafts } from '@/data/portfolio'
import styles from './Hero.module.css'
import GreetingCycler from './GreetingCycler'


export default function Hero() {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Coder & Crafter</p>
        <h1 className={styles.title}>
        👋 <GreetingCycler />, I'm <em>{personal.name}</em>{' '}
          —{' '}
          {personal.tagline.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 ? ' ' : ''}</span>
          ))}
        </h1>
        <p className={styles.desc}>{personal.bio[0]}</p>
      </div>
    </div>
  )
}
