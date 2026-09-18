import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]
const rise = (delay) => ({ initial: { y: 16, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: .8, delay, ease } })

export default function Hero({ t }) {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return <section id="home" className="hero">
    <motion.div className="video-wrap" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease }}><video autoPlay muted playsInline loop aria-label="Abstract research film" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4" /></motion.div>
    <motion.div className="hero-footer" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .5, ease }}>
      <div className="hero-copy">
        <motion.p className="eyebrow" {...rise(.6)}><i />{t.hero.eyebrow}</motion.p>
        <motion.h1 {...rise(.8)}>{t.hero.title.map(line => <span key={line}>{line}<br /></span>)}</motion.h1>
        <motion.p className="focus" {...rise(.9)}>{t.hero.focus}</motion.p>
        <motion.div className="hero-actions" {...rise(1)}><button className="button button-dark" onClick={() => scroll('research')}>{t.hero.explore} <span>↓</span></button><button className="button button-outline" onClick={() => scroll('projects')}>{t.hero.projects} <span>↘</span></button></motion.div>
      </div>
    </motion.div>
  </section>
}
