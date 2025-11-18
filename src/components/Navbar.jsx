import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1">
      <NavLink to="/" onClick={() => setOpen(false)} className={({isActive}) => `px-4 py-2 rounded-xl transition-all text-sm font-medium ${isActive ? 'text-violet-300' : 'text-slate-200/80 hover:text-white'}`}>Home</NavLink>
      <NavLink to="/about" onClick={() => setOpen(false)} className={({isActive}) => `px-4 py-2 rounded-xl transition-all text-sm font-medium ${isActive ? 'text-violet-300' : 'text-slate-200/80 hover:text-white'}`}>About</NavLink>
      <NavLink to="/services" onClick={() => setOpen(false)} className={({isActive}) => `px-4 py-2 rounded-xl transition-all text-sm font-medium ${isActive ? 'text-violet-300' : 'text-slate-200/80 hover:text-white'}`}>Services</NavLink>
      <NavLink to="/contact" onClick={() => setOpen(false)} className={({isActive}) => `px-4 py-2 rounded-xl transition-all text-sm font-medium ${isActive ? 'text-violet-300' : 'text-slate-200/80 hover:text-white'}`}>Contact</NavLink>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl/0"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 glass-metal chrome-edges neon-underglow flex items-center justify-between rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-800/40 px-4 py-3 shadow-2xl">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl metal-sheen border border-slate-700/70 shadow-inner"></div>
            <span className="text-slate-100 font-semibold tracking-tight">Chrome Neon Dark Metal</span>
          </Link>

          <nav className="hidden md:block">{navItem}</nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-block futuristic-btn">Get Started</a>
            <button aria-label="menu" onClick={() => setOpen(v=>!v)} className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-white/5">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden mt-2">
          <div className="glass-metal chrome-edges neon-underglow rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/90 to-slate-800/70 p-3">
            {navItem}
          </div>
        </div>
      )}
    </header>
  )
}
