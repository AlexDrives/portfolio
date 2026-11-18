import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]
const rise = (delay) => ({ initial: { y: 14, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: .75, delay, ease } })

export default function Hero({ t }) {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="home" className="hero">
      <motion.div className="video-wrap" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease }}>
        <video
          autoPlay
          muted
          playsInline
          loop
          aria-label="Abstract monochrome research backdrop"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
        />
      </motion.div>
      <div className="hero-footer">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...rise(.2)}><i />{t.hero.eyebrow}</motion.p>
          <motion.h1 {...rise(.32)}>
            {t.hero.title.map((line) => <span key={line}>{line}<br /></span>)}
          </motion.h1>
          <motion.p className="focus" {...rise(.44)}>{t.hero.focus}</motion.p>
          <motion.div className="hero-actions" {...rise(.56)}>
            <button className="button button-dark" onClick={() => scroll('projects')}>{t.hero.primaryCta} <span>↓</span></button>
            <button className="button button-outline" onClick={() => scroll('experience')}>{t.hero.secondaryCta} <span>↓</span></button>
            <a className="hero-text-link" href={t.cvUrl} target="_blank" rel="noopener noreferrer">{t.hero.cvCta} <span>↗</span></a>
            <a className="hero-text-link" href="https://github.com/AlexDrives" target="_blank" rel="noopener noreferrer">{t.hero.githubCta} <span>↗</span></a>
          </motion.div>
        </div>
        <motion.aside className="hero-ledger" {...rise(.5)}>
          {t.hero.highlights.map(([label, value]) => (
            <div className="ledger-row" key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  )
}
