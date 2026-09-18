import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'

function Mark() {
  return <svg className="mark" viewBox="0 0 36 36" aria-hidden="true"><path d="M7 7v17c0 3 2 5 5 5 4 0 7-3 7-8V7" /><path d="M17 29 29 7" /><path d="M22 7h7v7" /><circle cx="29" cy="27" r="2" /></svg>
}
function GridIcon() { return <svg viewBox="0 0 18 18" className="grid-icon" aria-hidden="true">{[[4,4],[14,4],[4,14],[14,14]].map(([cx,cy]) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="1.8" />)}</svg> }

export default function Navbar({ menuOpen, setMenuOpen, onHome, language, setLanguage, t }) {
  const links = [['home', t.nav.home], ['research', t.nav.research], ['experience', t.nav.experience], ['projects', t.nav.projects], ['about', t.nav.about], ['contact', t.nav.contact]]
  const go = (id) => { setMenuOpen(false); if (id === 'home' && onHome) return onHome(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <>
    <motion.header className="navbar" initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}>
      <div className="nav-left">
        <button className="identity" onClick={onHome} aria-label={t.nav.home}><Mark /><span>{t.nav.identity}</span></button>
        <div className="research-pill"><span>{language === 'zh' ? '具身智能' : 'Embodied AI'}</span><i /><span>{language === 'zh' ? '三维视觉' : '3D Vision'}</span></div>
      </div>
      <div className="nav-right">
        <button className="system-pill" onClick={() => go('research')}><b><GridIcon /></b><span>{t.nav.system}</span></button>
        <div className="language-switcher" role="group" aria-label={t.switchLabel}><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button><span>/</span><button className={language === 'zh' ? 'active' : ''} onClick={() => setLanguage('zh')}>中</button></div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}><b><Plus size={12} strokeWidth={3} /></b><span>{t.nav.menu}</span></button>
      </div>
    </motion.header>
    <AnimatePresence>
      {menuOpen && <motion.nav className="menu-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}>
        <div className="overlay-bg" onClick={() => setMenuOpen(false)} />
        <motion.div className="menu-panel" initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} transition={{ duration: .35, ease: [0.16, 1, 0.3, 1] }}>
          <span className="menu-eyebrow">{t.nav.navigate}</span>
          {links.map(([id, label], index) => <button key={id} onClick={() => go(id)}><em>0{index + 1}</em>{label}<span>↘</span></button>)}
        </motion.div>
      </motion.nav>}
    </AnimatePresence>
  </>
}
