import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function AnimatedBackground() {
  const id = useMemo(() => Math.random().toString(36).slice(2), [])
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay to deepen colors without blocking interactions */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(60% 60% at 50% 40%, rgba(20,20,40,0) 0%, rgba(10,10,30,0.25) 60%, rgba(10,10,30,0.6) 100%)'
      }} />
      {/* Floating particles for subtle motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={`${id}-${i}`}
            className="absolute block rounded-full mix-blend-screen"
            style={{ width: 6, height: 6, background: 'rgba(34,211,238,0.6)' }}
            initial={{ opacity: 0.2, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              y: ["0%", "-10%", "0%"],
              x: ["0%", "5%", "0%"],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  )
}
