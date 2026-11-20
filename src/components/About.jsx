import { motion } from 'motion/react'

export default function About({ t }) {
  return (
    <section id="about" className="section about-section">
      <motion.div className="about-copy" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7 }}>
        <p className="section-kicker">{t.about.kicker}</p>
        <h2>{t.about.heading}</h2>
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </motion.div>
      <motion.figure className="portrait" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7, delay: .08 }}>
        <img src="/portrait.jpg" alt={t.about.portraitAlt} loading="lazy" />
        <span className="portrait-corner portrait-tl" aria-hidden="true" />
        <span className="portrait-corner portrait-br" aria-hidden="true" />
      </motion.figure>
      <motion.div className="about-meta" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7, delay: .14 }}>
        <div className="education">
          <p className="section-kicker">{t.about.education}</p>
          <h3>{t.about.school}</h3>
          <p className="education-major">{t.about.major}</p>
          <p className="education-dept">{t.about.department}</p>
          <span className="education-year">{t.about.expected}</span>
        </div>
        <div className="beyond-block">
          <p className="section-kicker">{t.about.beyondLabel}</p>
          <p>{t.about.beyondText}</p>
        </div>
      </motion.div>
    </section>
  )
}
