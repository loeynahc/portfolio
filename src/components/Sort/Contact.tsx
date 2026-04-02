import { personal } from '@/data/portfolio'
import Reveal from '../Reveal/Reveal'
import styles from './Contact.module.css'

const links = [
  { emoji: '✉️', label: 'Email me',  href: `mailto:${personal.email}` },
  { emoji: '🐙', label: 'GitHub',    href: personal.github },
  { emoji: '💼', label: 'LinkedIn',  href: personal.linkedin },
  { emoji: '📸', label: 'Instagram', href: personal.instagram },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Reveal>
        <p className={styles.sectionLabel}>Get in touch</p>
        <h2 className={styles.title}>Let&apos;s connect</h2>
        <p className={styles.desc}>
          Whether you want to talk code, collaborate on a project, or just admire each other&apos;s keycap collections.
        </p>

        <div className={styles.links}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>{l.emoji}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
