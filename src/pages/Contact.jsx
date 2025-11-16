import React, { useState } from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setSent(true); setLoading(false) }, 800)
  }

  return (
    <div className="bg-slate-950 text-white">
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fade} initial="hidden" animate="show" className="text-4xl sm:text-5xl font-extrabold">Contact</motion.h1>
          <motion.p variants={fade} initial="hidden" animate="show" className="mt-4 text-white/70 max-w-3xl">Tell us about your project. We’ll get back within one business day.</motion.p>
        </div>
      </div>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-3xl p-6 bg-slate-900/60 border border-white/10">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Full name' },
                  { name: 'email', label: 'Email' },
                  { name: 'phone', label: 'Phone' },
                  { name: 'company', label: 'Company' },
                ].map((f) => (
                  <label key={f.name} className="group relative">
                    <span className="absolute -top-2 left-3 px-2 text-xs text-cyan-300 bg-slate-900/90 rounded opacity-0 group-focus-within:opacity-100 transition">{f.label}</span>
                    <input required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder={f.label} />
                  </label>
                ))}
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <label className="group relative">
                  <span className="absolute -top-2 left-3 px-2 text-xs text-cyan-300 bg-slate-900/90 rounded opacity-0 group-focus-within:opacity-100 transition">Budget</span>
                  <input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Budget" />
                </label>
                <label className="group relative">
                  <span className="absolute -top-2 left-3 px-2 text-xs text-cyan-300 bg-slate-900/90 rounded opacity-0 group-focus-within:opacity-100 transition">Timeline</span>
                  <input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Timeline" />
                </label>
              </div>
              <label className="group relative block mt-4">
                <span className="absolute -top-2 left-3 px-2 text-xs text-cyan-300 bg-slate-900/90 rounded opacity-0 group-focus-within:opacity-100 transition">Project details</span>
                <textarea rows={6} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell us about your goals, scope, and challenges" />
              </label>
              <button disabled={loading} className="mt-6 relative px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 transition disabled:opacity-60">
                {loading ? 'Sending…' : 'Send message'}
              </button>
              {sent && <p className="mt-3 text-cyan-300">Thanks! We’ll be in touch shortly.</p>}
            </form>
          </div>
          <div className="rounded-3xl p-6 bg-slate-900/60 border border-white/10">
            <p className="font-semibold">Our offices</p>
            <p className="mt-2 text-white/70">Remote-first with hubs in SF, NYC, and London.</p>
            <div className="mt-6 h-56 rounded-xl bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 border border-white/10" />
            <p className="mt-6 text-sm text-white/60">We typically respond within one business day.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
