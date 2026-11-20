import { motion } from 'motion/react'

const view = { once: true, amount: .2 }

function trackSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function Research({ t }) {
  return (
    <section id="research" className="section research-section">
      <motion.div className="section-intro" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={view} transition={{ duration: .7 }}>
        <p className="section-kicker">{t.research.kicker}</p>
        <h2>{t.research.heading}</h2>
      </motion.div>
      <div className="research-grid">
        {t.research.items.map((item, i) => (
          <motion.article
            className="research-card spotlight-card"
            key={item.number}
            onMouseMove={trackSpotlight}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={view}
            transition={{ duration: .65, delay: i * .07 }}
          >
            <div className="research-card-top">
              <span>{item.number}</span>
              <em aria-hidden="true">{item.number}</em>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="research-flow">
              {item.flow.split(' → ').map((step, idx, arr) => (
                <span key={step} className="flow-step">
                  {step}
                  {idx < arr.length - 1 && <i aria-hidden="true">→</i>}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
