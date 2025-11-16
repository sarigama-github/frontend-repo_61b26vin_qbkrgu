import React from 'react'
import { motion } from 'framer-motion'

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Products(){
  return (
    <div className="bg-slate-950 text-white">
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fade} initial="hidden" animate="show" className="text-4xl sm:text-5xl font-extrabold">Products</motion.h1>
          <motion.p variants={fade} initial="hidden" animate="show" className="mt-4 text-white/70 max-w-3xl">Our accelerators and tools shorten time-to-value. Explore demos and feature highlights.</motion.p>
        </div>
      </div>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
              <p className="mt-4 font-semibold">AI Accelerator #{i}</p>
              <p className="text-white/70">Plug-and-play components to integrate AI features quickly.</p>
              <button className="mt-4 text-sm text-cyan-300 hover:text-white">View demo →</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
