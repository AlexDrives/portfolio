import { motion } from 'motion/react'
import ExperienceDiagram from './ExperienceDiagram'

const ease = [0.16, 1, 0.3, 1]

function trackSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function ExperienceDetail({ slug, onHome, t, language }) {
  const normalizedSlug = slug === 'cocreate' ? 'sharetronic' : slug
  const detail = t.detail[normalizedSlug] || t.detail[slug]
  if (!detail) {
    return (
      <main className="detail-page">
        <div className="detail-band detail-band-white">
          <div className="detail-inner">
            <button className="back-link" onClick={() => onHome({ restorePosition: true })}>← {t.detail.backHome}</button>
            <h1 style={{ marginTop: 32 }}>{t.detail.notFound}</h1>
          </div>
        </div>
      </main>
    )
  }

  const nextHref = `#experience/${detail.otherSlug || (normalizedSlug === 'abb' ? 'sharetronic' : 'abb')}`

  return (
    <main className="detail-page">
      {/* Band 1: Crisp White Case-Study Header */}
      <div className="detail-band detail-band-white detail-hero-band">
        <div className="detail-inner">
          <div className="detail-topbar">
            <motion.button
              className="back-link"
              onClick={() => onHome({ restorePosition: true })}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .45, ease }}
            >
              ← {t.detail.back}
            </motion.button>
            <div className="detail-switcher" role="navigation" aria-label={t.detail.switchCase}>
              <a
                href="#experience/abb"
                className={normalizedSlug === 'abb' ? 'active' : ''}
              >
                01 · ABB Robotics
              </a>
              <a
                href="#experience/sharetronic"
                className={normalizedSlug === 'sharetronic' ? 'active' : ''}
              >
                02 · ShareTronic
              </a>
            </div>
          </div>

          <motion.header
            className="detail-header"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .65, delay: .04, ease }}
          >
            <p className="section-kicker">{detail.eyebrow}</p>
            <div className="detail-title-row">
              <div>
                <p className="detail-org">{detail.organization} <span>·</span> {detail.date}</p>
                <h1>{detail.title}</h1>
              </div>
              <div className="detail-tags tags">
                {detail.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <p className="detail-lead">{detail.lead}</p>
            <p className="detail-exec-summary">{detail.summary}</p>
          </motion.header>

          {detail.confidentialityNotice && (
            <motion.aside
              className="confidentiality-callout"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .55, delay: .08, ease }}
            >
              <div className="confidentiality-head">
                <span className="section-kicker">{detail.confidentialityNotice.kicker}</span>
                <span className="confidentiality-badge">{detail.confidentialityNotice.badge}</span>
              </div>
              <p>{detail.confidentialityNotice.body}</p>
            </motion.aside>
          )}

          {detail.facts && (
            <motion.div
              className="detail-facts-grid"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6, delay: .12, ease }}
            >
              {detail.facts.map(([label, value]) => (
                <div className="detail-fact-cell" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Band 2: Architecture Schematic, Studio Visuals & Technical Matrix */}
      <div className="detail-band detail-band-gray">
        <div className="detail-inner">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .65, delay: .16, ease }}
          >
            <ExperienceDiagram slug={normalizedSlug} language={language} />
          </motion.div>

          {detail.media && detail.media.length > 0 && (
            <section className="detail-gallery-block">
              <div className="detail-subhead">
                <span className="section-kicker">{t.detail.visualsKicker}</span>
                <h2>{detail.visualsTitle}</h2>
              </div>
              <div className="detail-media-grid">
                {detail.media.map((image, i) => (
                  <motion.figure
                    className="detail-figure-card"
                    key={image.src}
                    initial={{ y: 18, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: .15 }}
                    transition={{ duration: .6, delay: i * .06 }}
                  >
                    <div className="detail-figure-frame">
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                    <figcaption>
                      <div className="fig-meta">
                        <span>{t.detail.figureLabel} 0{i + 1}</span>
                        {image.title ? <strong>{image.title}</strong> : null}
                      </div>
                      <p>{image.caption}</p>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </section>
          )}

          {(detail.formulaBlock || detail.specTable) && (
            <section className="detail-spec-block">
              <div className="detail-subhead">
                <span className="section-kicker">{detail.specKicker}</span>
                <h2>{detail.specTitle}</h2>
              </div>

              {detail.formulaBlock && (
                <div className="formula-callout">
                  <div className="formula-eq-box">
                    <span>{detail.formulaBlock.label}</span>
                    <code>{detail.formulaBlock.equation}</code>
                    <small>{detail.formulaBlock.subEquation}</small>
                  </div>
                  <p>{detail.formulaBlock.explanation}</p>
                </div>
              )}

              {detail.specTable && (
                <div className="spec-table-wrap">
                  <table className="spec-table">
                    <thead>
                      <tr>
                        {detail.specTable.headers.map((h) => <th key={h}>{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {detail.specTable.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, idx) => (
                            <td key={idx} className={idx === 0 ? 'spec-col-primary' : ''}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}
        </div>
      </div>

      {/* Band 3: 2x2 Architectural Deep-Dive Modules */}
      <div className="detail-band detail-band-white">
        <div className="detail-inner">
          <div className="detail-subhead">
            <span className="section-kicker">{t.detail.modulesKicker}</span>
            <h2>{detail.modulesTitle}</h2>
          </div>
          <div className="detail-modules-grid">
            {detail.sections.map((section, i) => (
              <motion.article
                className="detail-module-card spotlight-card"
                key={section.label}
                onMouseMove={trackSpotlight}
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .6, delay: i * .05 }}
              >
                <span className="section-kicker">{section.label}</span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
                {section.takeaway && <div className="module-takeaway">{section.takeaway}</div>}
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Band 4: Trajectory Connection & Open Research Questions */}
      <div className="detail-band detail-band-gray detail-bottom-band">
        <div className="detail-inner">
          {detail.trajectoryNote && (
            <div className="trajectory-bridge">
              <span className="section-kicker">{detail.trajectoryNote.kicker}</span>
              <p>{detail.trajectoryNote.body}</p>
            </div>
          )}

          <section className="detail-boundaries">
            <p className="section-kicker">{t.detail.boundariesKicker}</p>
            <h2>{t.detail.boundariesTitle}</h2>
            <div>
              {detail.boundaries.map((item, i) => (
                <div className="boundary-card" key={item.title || item}>
                  <span>0{i + 1} {item.title ? `· ${item.title}` : ''}</span>
                  <p>{item.body || item}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="detail-footer">
            <button className="back-link" onClick={() => onHome({ restorePosition: true })}>← {t.detail.return}</button>
            <a className="detail-next" href={nextHref}>{t.detail.viewOther} {detail.other} <span>→</span></a>
          </div>
        </div>
      </div>
    </main>
  )
}
