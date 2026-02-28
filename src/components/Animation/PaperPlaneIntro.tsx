'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import styles from './PaperPlaneIntro.module.css'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default function PaperPlaneIntro() {
  const sectionRef = useRef(null)
  const planeRef   = useRef(null)
  const labelRef   = useRef(null)

  useEffect(() => {
    console.log('🛩️ useEffect fired')

    const section = sectionRef.current
    const plane   = planeRef.current
    const label   = labelRef.current

    if (!section || !plane || !label) {
      console.log('❌ missing refs:', { section, plane, label })
      return
    }

    console.log('✅ all refs found, starting GSAP')

    const ctx = gsap.context(() => {
      gsap.from(label, { opacity: 0, y: 12, duration: 1, delay: 0.4, ease: 'power2.out' })

      const idle = gsap.to(plane, {
        y: -8, rotation: 2, duration: 2.4,
        repeat: -1, yoyo: true, ease: 'sine.inOut',
        transformOrigin: '50% 50%',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=3000',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onEnter:     () => idle.pause(),
          onLeaveBack: () => idle.resume(),
        },
      })

      tl.to(plane, {
        motionPath: {
          path: '#flightPath',
          align: '#flightPath',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        ease: 'none',
        duration: 0.85,
      }, 0)

      tl.to(label,   { opacity: 0, duration: 0.1 }, 0)
      tl.to(section, { opacity: 0, duration: 0.15 }, 0.85)

    }, section)

    return () => ctx.revert()
  }, [])

  // Enters from right, big clockwise circle loop,
  // curls into a small wave crest, exits left — like the reference image
  const flightPath = `
    M 660,310
    C 560,310 480,250 480,220
    C 480,100 380,40  280,60
    C 160,85  110,190 130,290
    C 150,390 240,440 330,420
    C 390,408 430,370 430,330
    C 430,295 410,270 385,268
    C 355,266 335,290 340,315
    C 350,355 310,370 265,365
    C 215,358 175,325 160,310
    C 145,295 130,310 80,310
    C 40,310 -20,305 -80,310
  `.trim()
  
  return (
    <div ref={sectionRef} className={styles.section}>
      <svg
        className={styles.svg}
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* dotted guide path */}
        <path
          d={flightPath}
          fill="none"
          stroke="#1a1714"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 10"
          strokeOpacity="0.2"
        />

        <path id="flightPath" d={flightPath} fill="none" stroke="none" />

        {/* plane starts at right entry point */}
        <g ref={planeRef} style={{ transformOrigin: '660px 310px' }}>
          <g transform="translate(-22, -14)">
            <polygon points="0,14 44,7 0,0" fill="var(--accent)" />
            <polygon points="0,14 22,10.5 0,7" fill="#3a3530" />
            <line x1="0" y1="7" x2="34" y2="7.5"
              stroke="#faf8f4" strokeWidth="0.5" strokeOpacity="0.35" />
          </g>
        </g>
      </svg>

      <div ref={labelRef} className={styles.label}>
        <span className={styles.labelText}>scroll to fly</span>
        <span className={styles.labelArrow}>↓</span>
      </div>
    </div>
  )
}