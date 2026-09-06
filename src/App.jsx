import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App() { const [menuOpen, setMenuOpen] = useState(false); return <><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero /><Research /><Experience /><Projects /><About /></main><Contact /></> }
