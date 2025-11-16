import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const services = [
  {
    key: 'software-development',
    title: 'Software Development',
    overview: 'Robust, scalable platforms engineered for reliability with modern stacks and cloud-native patterns.',
    capabilities: ['Architecture & system design', 'Microservices & APIs', 'Performance & observability', 'Security best practices'],
    tools: ['Python', 'Node.js', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
    benefit: ['Faster delivery', 'Lower risk', 'Future-proof foundations'],
  },
  {
    key: 'mobile-apps',
    title: 'Mobile App Development',
    overview: 'Native & cross-platform apps with delightful UX and real-world performance.',
    capabilities: ['iOS & Android', 'React Native', 'Offline-first', 'App store deployment'],
    tools: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    benefit: ['Premium UX', 'Device integrations', 'Scalable codebases'],
  },
  {
    key: 'ai-ml',
    title: 'AI & Machine Learning',
    overview: 'Applied AI for automation, insight generation, and new product capabilities.',
    capabilities: ['LLM apps & agents', 'Recommendations', 'Computer vision', 'MLOps'],
    tools: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI'],
    benefit: ['Automation', 'New insights', 'Competitive edge'],
  },
]

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Services(){
  return (
    <div className="bg-slate-950 text-white">
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 variants={fade} initial="hidden" animate="show" className="text-4xl sm:text-5xl font-extrabold">Services</motion.h1>
          <motion.p variants={fade} initial="hidden" animate="show" className="mt-4 text-white/70 max-w-3xl">End-to-end product engineering with an AI-first approach. Explore our core offerings and delivery process.</motion.p>
        </div>
      </div>

      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((s, idx) => (
            <motion.section key={s.key} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-900/40">
              <div className="p-8">
                <h2 className="text-2xl font-bold">{s.title}</h2>
                <p className="mt-2 text-white/70">{s.overview}</p>
                <div className="mt-6 grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-white/80 font-medium">Key capabilities</p>
                    <ul className="mt-3 space-y-2">
                      {s.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2"><CheckCircle2 className="text-cyan-300 mt-0.5" size={18}/><span>{c}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/80 font-medium">Process</p>
                    <ol className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/80">
                      {['Discover', 'Design', 'Build', 'Test', 'Deploy', 'Support'].map((p) => (
                        <li key={p} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">{p}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <p className="text-white/80 font-medium">Tools & technologies</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.tools.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                    <p className="text-white/80 font-medium">Benefits</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.benefit.map((b) => (
                        <span key={b} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">{b}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl p-4 bg-white/5 border border-white/10">
                    <p className="text-white/80 font-medium">Example</p>
                    <p className="mt-2 text-white/70">A recent engagement delivered measurable outcomes leveraging this service area.</p>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}
