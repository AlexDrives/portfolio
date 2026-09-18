import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ExperienceDetail from './components/ExperienceDetail'
import { localized } from './data/content'

function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash.startsWith('experience/')) return hash.split('/')[1]
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '')
  return path.startsWith('experience/') ? path.split('/')[1] : null
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en')
  const [route, setRoute] = useState(currentRoute)
  useEffect(() => { const onHashChange = () => setRoute(currentRoute()); window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange) }, [])
  useEffect(() => { localStorage.setItem('portfolio-language', language); document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'; document.title = language === 'zh' ? '刘俊豪 — 具身智能' : 'Junhao Liu — Embodied AI' }, [language])
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = 'auto' }
  }, [])
  useEffect(() => {
    if (route) requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  }, [route])
  const goHome = ({ restorePosition = false } = {}) => {
    if (window.location.hash) window.location.hash = ''
    if (window.location.pathname !== '/') window.history.pushState({}, '', '/')
    setRoute(null)
    const savedPosition = Number(sessionStorage.getItem('portfolio-return-scroll') || 0)
    sessionStorage.removeItem('portfolio-return-scroll')
    requestAnimationFrame(() => window.scrollTo({ top: restorePosition ? savedPosition : 0, behavior: 'instant' }))
  }
  const t = localized(language)
  const changeLanguage = (next) => setLanguage(next)
  if (route) return <><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onHome={goHome} language={language} setLanguage={changeLanguage} t={t} /><ExperienceDetail slug={route} onHome={goHome} t={t} /></>
  return <><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onHome={goHome} language={language} setLanguage={changeLanguage} t={t} /><main><Hero t={t} /><Research t={t} /><Experience t={t} /><Projects t={t} /><About t={t} /></main><Contact t={t} /></>
}
