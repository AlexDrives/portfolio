import { motion } from 'motion/react'

export default function About({ t }) {
  return <section id="about" className="section about-section">
    <motion.div className="about-copy" initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}>
      <p className="section-kicker">{t.about.kicker}</p>
      <h2>{t.about.heading}</h2>
      <p>{t.about.body}</p>
      <span>{t.about.school} · {t.about.major} · {t.about.expected}</span>
    </motion.div>
    <motion.figure className="portrait" initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: .08 }}>
      <img src="/portrait.jpg" alt={t.about.portraitAlt} loading="lazy" />
    </motion.figure>
    <motion.div className="education" initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: .16 }}>
      <p className="section-kicker">{t.about.education}</p>
      <h3>{t.about.school}</h3>
      <p>{t.about.major}</p>
      <div><span>{t.about.expected}</span><span>{t.about.gpa}</span></div>
    </motion.div>
  </section>
}
