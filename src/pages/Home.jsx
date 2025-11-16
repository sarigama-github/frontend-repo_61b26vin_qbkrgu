import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Cpu, Cloud, Bot, Layers, MonitorSmartphone, Palette, Code2 } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'
import AnimatedButton from '../components/AnimatedButton'

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Home(){
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 pt-28 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <p className="text-cyan-300/80 text-sm font-semibold tracking-widest uppercase">Future-ready technology partner</p>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
                AccesInt builds intelligent, accessible digital products that move businesses forward.
              </h1>
              <p className="mt-6 text-white/70 text-lg">We combine engineering-first execution with AI-driven methods to ship reliable software, faster. From strategy to scale, we partner for outcomes.</p>
              <div className="mt-8 flex items-center gap-4">
                <AnimatedButton>
                  <span>Generate Proposal</span>
                  <ArrowRight size={18} />
                </AnimatedButton>
                <a href="#services" className="px-6 py-3 rounded-xl text-white/90 hover:text-white transition-colors" style={{ border: '1px solid rgba(99,102,241,0.4)', background: 'linear-gradient(135deg, rgba(2,6,23,0.2), rgba(2,6,23,0.35))' }}>Explore services</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Snapshot */}
      <section id="services" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="text-3xl sm:text-4xl font-bold">What we do</motion.h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Software Development', icon: Code2, desc: 'Robust platforms engineered for scale and reliability.' },
              { title: 'Mobile App Development', icon: MonitorSmartphone, desc: 'Native and cross-platform apps users love.' },
              { title: 'AI & Machine Learning', icon: Bot, desc: 'Applied AI for automation, insights, and new capabilities.' },
              { title: 'Web App Engineering', icon: Layers, desc: 'Modern web applications with exceptional UX.' },
              { title: 'Cloud & DevOps', icon: Cloud, desc: 'Secure, scalable infrastructure and CI/CD pipelines.' },
              { title: 'Product Design (UI/UX)', icon: Palette, desc: 'User-centered design from wireframes to polish.' },
            ].map((s, idx) => (
              <motion.div key={s.title} variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 overflow-hidden">
                <div className="relative rounded-2xl p-6 h-full bg-slate-900/60 backdrop-blur">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(60% 60% at 30% 20%, rgba(34,211,238,0.15) 0%, rgba(147,51,234,0.1) 60%, rgba(147,51,234,0.2) 100%)' }} />
                  <div className="relative z-10">
                    <s.icon className="text-cyan-300" />
                    <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-white/70">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Why choose AccesInt</motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Engineering-first mindset', desc: 'Pragmatic architecture, clean code, measurable outcomes.', icon: Cpu },
              { title: 'AI-driven development', desc: 'Leverage AI across the lifecycle to accelerate delivery.', icon: Bot },
              { title: 'Fast, reliable execution', desc: 'Tight feedback loops, automation, and strong QA.', icon: Cloud },
            ].map((v, i) => (
              <motion.div key={v.title} variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
                <v.icon className="text-cyan-300" />
                <h3 className="mt-3 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-white/70">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Our technology stack</motion.h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { cat: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'] },
              { cat: 'Backend', items: ['FastAPI', 'Node.js', 'Django', 'GraphQL'] },
              { cat: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
              { cat: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'] },
              { cat: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI'] },
              { cat: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elastic'] },
            ].map((g, i) => (
              <motion.div key={g.cat} variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
                <p className="text-white/80 font-medium">{g.cat}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Case studies</motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { p: 'Manual onboarding slowed growth', s: 'Built automated KYC flows with AI document parsing', o: '80% faster onboarding, 35% conversion lift' },
              { p: 'Legacy stack blocked feature velocity', s: 'Re-architected to microservices with CI/CD', o: 'Deploys 10x/week, 60% fewer incidents' },
              { p: 'Low retention on mobile', s: 'UX overhaul with native performance improvements', o: '+24% DAU, 4.8★ ratings' },
            ].map((c, i) => (
              <motion.div key={i} variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} className="group rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20">
                <div className="rounded-2xl p-6 h-full bg-slate-900/60 border border-white/5">
                  <p className="text-white/50 text-xs">Problem</p>
                  <p className="font-medium">{c.p}</p>
                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="text-white/50 text-xs">Solution</p>
                  <p className="font-medium">{c.s}</p>
                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="text-white/50 text-xs">Outcome</p>
                  <p className="font-medium">{c.o}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">What clients say</motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Elena M', role: 'VP Product, Fintech', quote: 'AccesInt delivers at startup speed with enterprise quality.' },
              { name: 'Ravi K', role: 'CTO, HealthTech', quote: 'Their AI-first approach shortened our roadmap by months.' },
              { name: 'Sarah B', role: 'Founder, SaaS', quote: 'A true partner from idea to scale. Highly recommended.' },
            ].map((t, i) => (
              <motion.div key={i} variants={sectionFade} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-white/60 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-white/80">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-cta" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-8 bg-slate-900/60 border border-cyan-400/30">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(80% 80% at 50% 50%, rgba(34,211,238,0.15), rgba(147,51,234,0.1))' }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">Ready to build?</h3>
                <p className="mt-2 text-white/70">Tell us about your project and we’ll propose the best path forward.</p>
              </div>
              <AnimatedButton className="shrink-0">
                <span>Start a project</span>
                <ArrowRight size={18} />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
