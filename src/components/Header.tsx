import { useState } from 'react'
import { profile } from '../data/profile'

const LINKS = ['about', 'skills', 'projects', 'experience', 'github', 'contact']

export function Header() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  function toggle() {
    document.documentElement.classList.toggle('dark', !dark)
    localStorage.setItem('theme', dark ? 'light' : 'dark')
    setDark(!dark)
  }

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-3">
        <a href="#top" className="font-bold tracking-tight">
          {profile.name}
        </a>
        <nav className="ml-auto hidden gap-5 text-sm font-medium text-slate-600 sm:flex dark:text-slate-300">
          {LINKS.filter((l) => l !== 'experience' || profile.experience.length).map((l) => (
            <a key={l} href={`#${l}`} className="capitalize hover:text-indigo-600 dark:hover:text-indigo-400">
              {l === 'github' ? 'GitHub' : l}
            </a>
          ))}
        </nav>
        <button onClick={toggle} aria-label="Toggle dark mode" className="btn ml-auto px-3 sm:ml-0">
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
