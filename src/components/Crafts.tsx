import { crafts } from '@/data/portfolio'
import Reveal from './Reveal'
import styles from './Crafts.module.css'

export default function Crafts() {
  return (
    <section id="crafts" className={styles.crafts}>
      <Reveal>
        <p className={styles.sectionLabel}>Beyond the screen</p>
        <h2 className={styles.title}>The making corner</h2>
        <p className={styles.desc}>
          A peek into the other half of my brain — swap placeholders with your real photos in{' '}
          <code className={styles.code}>src/data/portfolio.ts</code>!
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className={styles.grid}>
          {crafts.map((craft, i) => (
            <div
              key={craft.label}
              className={`${styles.item} ${craft.span === 'large' ? styles.large : ''}`}
            >
              {/* If craft.image is set, render an img; otherwise show placeholder */}
              {(craft as any).image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={(craft as any).image}
                  alt={craft.label}
                  className={styles.photo}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderEmoji}>{craft.emoji}</span>
                  <span className={styles.placeholderLabel}>{craft.label}</span>
                </div>
              )}
              <div className={styles.overlay}>
                <span className={styles.overlayTitle}>{craft.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
