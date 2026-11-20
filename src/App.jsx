import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ExperienceDetail from './components/ExperienceDetail'
import { localized } from './data/content'

const SECTION_IDS = new Set(['research', 'experience', 'projects', 'about', 'contact'])

function parseLocation() {
  const rawHash = window.location.hash.replace(/^#/, '')
  if (rawHash.startsWith('experience/')) {
    return { route: rawHash.split('/')[1], section: null }
  }
  if (rawHash.startsWith('contact/')) {
    return { route: null, section: 'contact' }
  }
  if (SECTION_IDS.has(rawHash)) {
    return { route: null, section: rawHash }
  }
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '')
  if (path.startsWith('experience/')) {
    return { route: path.split('/')[1], section: null }
  }
  return { route: null, section: null }
}

export default function App() {
  const initial = parseLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en')
  const [route, setRoute] = useState(initial.route)
  const [pendingSection, setPendingSection] = useState(initial.section)
  const [activeSection, setActiveSection] = useState('home')
  const previousRoute = useRef(route)
  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 })

  useEffect(() => {
    const onHashChange = () => {
      const next = parseLocation()
      setRoute(next.route)
      if (next.section) setPendingSection(next.section)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  useEffect(() => { localStorage.setItem('portfolio-language', language); document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'; document.title = language === 'zh' ? '刘俊豪 — 具身智能与机器人' : 'Junhao Liu — Embodied AI & Robotics' }, [language])
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = 'auto' }
  }, [])
  const restoreExperiencePosition = () => {
    const savedPosition = Number(sessionStorage.getItem('portfolio-return-scroll') || 0)
    sessionStorage.removeItem('portfolio-return-scroll')
    sessionStorage.removeItem('portfolio-return-pending')
    window.scrollTo({ top: savedPosition, behavior: 'auto' })
  }
  useEffect(() => {
    const cameFromDetail = previousRoute.current && !route
    previousRoute.current = route
    if (route) requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }))
    if (cameFromDetail && sessionStorage.getItem('portfolio-return-pending') === 'true') requestAnimationFrame(restoreExperiencePosition)
  }, [route])
  useEffect(() => {
    if (pendingSection) {
      const timer = requestAnimationFrame(() => {
        document.getElementById(pendingSection)?.scrollIntoView({ behavior: 'smooth' })
      })
      setPendingSection(null)
      return () => cancelAnimationFrame(timer)
    }
  }, [route, pendingSection])
  useEffect(() => {
    if (route) return
    const ids = ['home', 'research', 'experience', 'projects', 'about', 'contact']
    const updateActive = () => {
      if (window.scrollY < 120) {
        setActiveSection('home')
        return
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        setActiveSection('contact')
        return
      }
      const triggerY = window.innerHeight * 0.36
      let current = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= triggerY) {
          current = id
        }
      }
      setActiveSection(current)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [route])
  const openExperience = () => {
    sessionStorage.setItem('portfolio-return-scroll', String(window.scrollY))
    sessionStorage.setItem('portfolio-return-pending', 'true')
  }
  const goHome = ({ restorePosition = false, section } = {}) => {
    const nextHash = section ? `#${section}` : ''
    if (window.location.hash !== nextHash) {
      window.history.pushState({}, '', nextHash || '/')
    }
    setRoute(null)
    if (restorePosition) sessionStorage.setItem('portfolio-return-pending', 'true')
    else {
      sessionStorage.removeItem('portfolio-return-scroll')
      sessionStorage.removeItem('portfolio-return-pending')
      if (section) setPendingSection(section)
      else requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }))
    }
  }
  const t = localized(language)
  const changeLanguage = (next) => setLanguage(next)
  const progressBar = <motion.div className="scroll-progress-bar" style={{ scaleX: progressScaleX }} aria-hidden="true" />
  if (route) return <>{progressBar}<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onHome={goHome} language={language} setLanguage={changeLanguage} t={t} activeSection="experience" /><ExperienceDetail slug={route} onHome={goHome} t={t} language={language} /><Contact t={t} /></>
  return <>{progressBar}<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onHome={goHome} language={language} setLanguage={changeLanguage} t={t} activeSection={activeSection} /><main><Hero t={t} /><Research t={t} /><Experience t={t} onOpenExperience={openExperience} /><Projects t={t} /><About t={t} /></main><Contact t={t} /></>
}
