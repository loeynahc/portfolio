import { personal } from '@/data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span>Made with care & too much hojicha ☕</span>
    </footer>
  )
}
