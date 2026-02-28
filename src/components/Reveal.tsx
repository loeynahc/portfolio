'use client'

import { useReveal } from './useReveal'
import styles from './Reveal.module.css'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
