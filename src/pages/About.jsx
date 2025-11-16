import React from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function About(){
  return (
    <div className="relative bg-slate-950 text-white">
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fade} initial="hidden" animate="show" className="text-4xl sm:text-5xl font-extrabold">Our story</motion.h1>
          <motion.p variants={fade} initial="hidden" animate="show" className="mt-4 text-white/70 max-w-3xl">AccesInt was founded with a simple belief: technology should be intelligent and accessible. We blend deep engineering with product thinking to create real business outcomes.</motion.p>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Mission', text: 'Enable organizations to move faster with human-centered, AI-powered software.' },
            { title: 'Vision', text: 'A world where every company leverages intelligent systems to create value at scale.' },
            { title: 'Approach', text: 'Engineering-first, outcome-oriented, collaborative delivery with measurable results.' },
          ].map((b) => (
            <motion.div key={b.title} variants={fade} whileInView="show" initial="hidden" viewport={{ once: true }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
              <h3 className="text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-white/70">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl font-bold">Values</motion.h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Craft', 'Integrity', 'Velocity', 'Openness', 'Ownership', 'Empathy'].map((v) => (
              <motion.div key={v} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-cyan-400/40 transition-colors">
                <p className="font-medium">{v}</p>
                <p className="mt-2 text-white/70">We obsess over {v.toLowerCase()} to create durable products and partnerships.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl font-bold">Milestones</motion.h2>
          <div className="mt-8 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="space-y-8">
              {[
                { year: '2019', text: 'AccesInt founded to bring AI-driven development to startups and enterprises.' },
                { year: '2021', text: 'Scaled delivery across cloud, mobile, and platform engineering.' },
                { year: '2023', text: 'Launched automation tools and ML products.' },
              ].map((m, i) => (
                <motion.div key={m.year} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="pl-12">
                  <span className="relative -left-8 inline-block w-4 h-4 rounded-full bg-cyan-400" />
                  <p className="text-white/60 text-sm">{m.year}</p>
                  <p className="font-medium">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl font-bold">Leadership</motion.h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Ariana Chen', role: 'CEO' },
              { name: 'Luis Romero', role: 'CTO' },
              { name: 'Priya Patel', role: 'Head of Design' },
            ].map((p) => (
              <motion.div key={p.name} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
                <p className="mt-4 font-semibold">{p.name}</p>
                <p className="text-white/60">{p.role}</p>
                <div className="mt-3 flex gap-2 text-sm text-white/70">
                  <a href="#" className="hover:text-white">LinkedIn</a>
                  <span>·</span>
                  <a href="#" className="hover:text-white">Twitter</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
