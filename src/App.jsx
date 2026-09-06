import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ExperienceDetail from './components/ExperienceDetail'

function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash.startsWith('experience/')) return hash.split('/')[1]
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '')
  return path.startsWith('experience/') ? path.split('/')[1] : null
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [route, setRoute] = useState(currentRoute)
  useEffect(() => { const onHashChange = () => setRoute(currentRoute()); window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange) }, [])
  const goHome = () => { if (window.location.hash) window.location.hash = ''; if (window.location.pathname !== '/') window.history.pushState({}, '', '/'); setRoute(null); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  if (route) return <><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onHome={goHome} /><ExperienceDetail slug={route} onHome={goHome} /></>
  return <><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onHome={goHome} /><main><Hero /><Research /><Experience /><Projects /><About /></main><Contact /></>
}
