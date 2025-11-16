import React, { useState } from 'react'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 blur-md bg-cyan-400/40 rounded-full" />
              <Sparkles className="relative text-cyan-300" size={22} />
            </div>
            <span className="font-bold tracking-tight text-white">AccesInt</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `text-sm transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/70'}`}
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href="#contact-cta"
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white/90 hover:text-white transition-colors"
              style={{ border: '1px solid rgba(56,189,248,0.4)', background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(147,51,234,0.12))' }}
            >
              <span className="absolute inset-0 rounded-lg -z-0" style={{
                background: 'radial-gradient(100% 100% at 0% 0%, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.12) 42%, rgba(147,51,234,0.18) 100%)'
              }} />
              <span className="relative z-[1]">Start a project</span>
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-900/70 backdrop-blur-sm border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((n) => (
                <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({isActive})=>`block px-3 py-2 rounded-lg ${isActive?'bg-white/10 text-white':'text-white/80'} hover:bg-white/10`}>
                  {n.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
