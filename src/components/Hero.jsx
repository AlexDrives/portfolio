import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]
const rise = (delay) => ({ initial: { y: 16, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: .75, delay, ease } })

export default function Hero({ t }) {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero" ref={heroRef}>
      <motion.div
        className="video-wrap"
        style={{ y: videoY, scale: videoScale }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          aria-label="Abstract monochrome research backdrop"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
        />
      </motion.div>
      <div className="hero-grid-overlay" aria-hidden="true">
        <span className="crosshair crosshair-tl" />
        <span className="crosshair crosshair-tr" />
      </div>
      <div className="hero-footer">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...rise(.18)}><i />{t.hero.eyebrow}</motion.p>
          <motion.h1 {...rise(.3)}>
            {t.hero.title.map((line) => <span key={line}>{line}<br /></span>)}
          </motion.h1>
          <motion.p className="focus" {...rise(.42)}>{t.hero.focus}</motion.p>
          <motion.div className="hero-actions" {...rise(.54)}>
            <button className="button button-dark" onClick={() => scroll('projects')}>{t.hero.primaryCta} <span>↓</span></button>
            <button className="button button-outline" onClick={() => scroll('experience')}>{t.hero.secondaryCta} <span>↓</span></button>
            <a className="hero-text-link" href={t.cvUrl} target="_blank" rel="noopener noreferrer">{t.hero.cvCta} <span>↗</span></a>
            <a className="hero-text-link" href="https://github.com/AlexDrives" target="_blank" rel="noopener noreferrer">{t.hero.githubCta} <span>↗</span></a>
            <a className="hero-text-link" href="https://alexdrives.github.io/literally-me/" target="_blank" rel="noopener noreferrer">{t.hero.easterEggCta} <span>↗</span></a>
          </motion.div>
        </div>
        <motion.aside className="hero-ledger" {...rise(.48)}>
          {t.hero.highlights.map(([label, value], idx) => (
            <div className="ledger-row" key={label}>
              <span>{idx === 0 && <i className="pulse-dot" aria-hidden="true" />}{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  )
}
