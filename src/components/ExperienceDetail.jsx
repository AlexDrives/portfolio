import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]

export default function ExperienceDetail({ slug, onHome, t }) {
  const detail = t.detail[slug]
  if (!detail) return <main className="detail-page"><div className="detail-inner"><button className="back-link" onClick={() => onHome({ restorePosition: true })}>← {t.detail.backHome}</button><h1>{t.detail.notFound}</h1></div></main>
  return <main className="detail-page">
    <div className="detail-inner">
      <motion.button className="back-link" onClick={() => onHome({ restorePosition: true })} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, ease }}>← {t.detail.back}</motion.button>
      <motion.header className="detail-header" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: .08, ease }}>
        <p className="section-kicker">{detail.eyebrow}</p>
        <div className="detail-title-row"><div><p className="detail-org">{detail.organization} <span>·</span> {detail.date}</p><h1>{detail.title}</h1></div><div className="detail-tags tags">{detail.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        <p className="detail-lead">{detail.lead}</p>
      </motion.header>
      <motion.div className="detail-summary" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .75, delay: .2, ease }}><span>{t.detail.atGlance}</span><p>{detail.summary}</p></motion.div>
      {detail.media.length > 0 && <div className="detail-media">{detail.media.map((image, i) => <motion.figure key={image.src} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: i * .05 }}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{t.detail.evidence} / {String(i + 1).padStart(2, '0')}</figcaption></motion.figure>)}</div>}
      <div className="detail-layout"><div className="detail-sections">{detail.sections.map((section, i) => <motion.article key={section.label} initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: i * .06 }}><p className="section-kicker">{section.label}</p><h2>{section.title}</h2><p>{section.body}</p></motion.article>)}</div><aside className="detail-aside"><div><p className="section-kicker">{t.detail.working}</p><ol>{detail.steps.map(([label, text]) => <li key={label}><b>{label}</b><span>{text}</span></li>)}</ol></div><div><p className="section-kicker">{t.detail.evidence}</p><ul>{detail.evidence.map(item => <li key={item}>{item}</li>)}</ul></div></aside></div>
      <section className="detail-boundaries"><p className="section-kicker">{t.detail.boundariesKicker}</p><h2>{t.detail.boundariesTitle}</h2><div>{detail.boundaries.map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}</div></section>
      <div className="detail-footer"><button className="back-link" onClick={() => onHome({ restorePosition: true })}>← {t.detail.return}</button><a className="detail-next" href={slug === 'abb' ? '#experience/cocreate' : '#experience/abb'}>{t.detail.viewOther} {detail.other} <span>↗</span></a></div>
    </div>
  </main>
}
