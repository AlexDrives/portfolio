import { motion } from 'motion/react'

export default function Contact({ t }) {
  return (
    <footer id="contact" className="contact">
      <motion.div className="tech" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7 }}>
        <p className="section-kicker">{t.contact.kicker}</p>
        <div className="stack-grid">
          {Object.entries(t.contact.stack).map(([group, items]) => (
            <div key={group}>
              <span>{group}</span>
              <p>{items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="contact-bottom" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7 }}>
        <div className="contact-copy">
          <p className="section-kicker">{t.contact.contact}</p>
          <h2>{t.contact.heading}</h2>
          <p>{t.contact.subcopy}</p>
        </div>
        <div className="contact-links">
          <a href="mailto:whichAlex@sjtu.edu.cn">whichAlex@sjtu.edu.cn <span>↗</span></a>
          <a href="https://github.com/AlexDrives" target="_blank" rel="noopener noreferrer">{t.contact.github} <span>↗</span></a>
          <a href={t.cvUrl} target="_blank" rel="noopener noreferrer">{t.contact.resume} <span>↗</span></a>
        </div>
      </motion.div>
      <div className="footer-line">
        <span>© {new Date().getFullYear()} Junhao Liu · 刘俊豪</span>
        <span>{t.contact.flow}</span>
        <span>Shanghai Jiao Tong University</span>
      </div>
    </footer>
  )
}
