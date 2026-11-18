import { useState } from 'react'
import { motion } from 'motion/react'

export default function Contact({ t, activeEmail }) {
  const [copiedId, setCopiedId] = useState(null)

  const copyAddress = async (id, address) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedId(id)
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1600)
    } catch {
      window.location.href = `mailto:${address}`
    }
  }

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
          <div className="contact-resource-links">
            <a href="https://github.com/AlexDrives" target="_blank" rel="noopener noreferrer">{t.contact.github} <span>↗</span></a>
            <a href={t.cvUrl} target="_blank" rel="noopener noreferrer">{t.contact.resume} <span>↗</span></a>
          </div>
        </div>

        <div className="email-directory" aria-label={t.contact.routingLabel}>
          <span className="email-directory-kicker">{t.contact.routingLabel}</span>
          {t.contact.emails.map((item, index) => (
            <div
              id={`email-${item.id}`}
              key={item.id}
              className={`email-channel${activeEmail === item.id ? ' email-channel-active' : ''}`}
            >
              <div className="email-channel-top">
                <span className="email-channel-badge">0{index + 1} · {item.badge}</span>
                <button
                  type="button"
                  className="email-copy-btn"
                  onClick={() => copyAddress(item.id, item.address)}
                >
                  {copiedId === item.id ? t.contact.copied : t.contact.copy}
                </button>
              </div>
              <a className="email-channel-address" href={`mailto:${item.address}`}>
                {item.address} <span>↗</span>
              </a>
              <p className="email-channel-desc">{item.description}</p>
            </div>
          ))}
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
