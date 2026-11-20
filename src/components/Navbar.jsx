import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'

function Mark() {
  return <svg className="mark" viewBox="0 0 36 36" aria-hidden="true"><path d="M7 7v17c0 3 2 5 5 5 4 0 7-3 7-8V7" /><path d="M17 29 29 7" /><path d="M22 7h7v7" /><circle cx="29" cy="27" r="2" /></svg>
}

export default function Navbar({ menuOpen, setMenuOpen, onHome, language, setLanguage, t, activeSection }) {
  const inlineLinks = [['research', t.nav.research], ['experience', t.nav.experience], ['projects', t.nav.projects], ['about', t.nav.about], ['contact', t.nav.contact]]
  const drawerLinks = [['home', t.nav.home], ...inlineLinks]
  const go = (id) => {
    setMenuOpen(false)
    if (id === 'home') return onHome?.()
    const target = document.getElementById(id)
    if (target) return target.scrollIntoView({ behavior: 'smooth' })
    onHome?.({ section: id })
  }
  return <>
    <motion.header className="navbar" initial={{ y: -14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }}>
      <div className="nav-left">
        <button className="identity" onClick={() => onHome?.()} aria-label={t.nav.home}>
          <Mark />
          <span className="identity-primary">{t.nav.identity}</span>
          <span className="identity-secondary">{t.nav.subIdentity}</span>
        </button>
      </div>
      <nav className="nav-center" aria-label={t.nav.navigate}>
        {inlineLinks.map(([id, label]) => {
          const isActive = activeSection === id
          return (
            <button key={id} type="button" className={isActive ? 'active' : ''} onClick={() => go(id)}>
              {isActive && <motion.span layoutId="nav-active-pill" className="nav-active-pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              <span className="nav-link-label">{label}</span>
            </button>
          )
        })}
      </nav>
      <div className="nav-right">
        <a className="cv-pill" href={t.cvUrl} target="_blank" rel="noopener noreferrer">{t.nav.cv} <span>↗</span></a>
        <div className="language-switcher" role="group" aria-label={t.switchLabel}>
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          <span>/</span>
          <button className={language === 'zh' ? 'active' : ''} onClick={() => setLanguage('zh')}>中</button>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={t.nav.menu}>
          <b><Plus size={12} strokeWidth={2.75} /></b>
          <span>{t.nav.menu}</span>
        </button>
      </div>
    </motion.header>
    <AnimatePresence>
      {menuOpen && <motion.nav className="menu-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
        <div className="overlay-bg" onClick={() => setMenuOpen(false)} />
        <motion.div className="menu-panel" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}>
          <span className="menu-eyebrow">{t.nav.navigate}</span>
          {drawerLinks.map(([id, label], index) => <button key={id} onClick={() => go(id)}><em>0{index + 1}</em>{label}<span>↘</span></button>)}
        </motion.div>
      </motion.nav>}
    </AnimatePresence>
  </>
}
