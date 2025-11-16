import React from 'react'
import { motion } from 'framer-motion'

/*
  Co.dev-inspired primary CTA button
  - Slight lift
  - Border glow
  - Expanding background
  - Gradient motion
  - Text shift
*/
export default function AnimatedButton({ children, className = '', onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={false}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-shadow duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(147,51,234,0.1))',
        border: '1px solid rgba(99,102,241,0.5)'
      }}
    >
      <motion.span
        className="absolute inset-0 rounded-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: 'radial-gradient(120% 120% at 0% 0%, rgba(34,211,238,0.25) 0%, rgba(59,130,246,0.15) 40%, rgba(147,51,234,0.25) 100%)'
        }}
      />
      <motion.span
        className="absolute -inset-0.5 rounded-xl pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 0px rgba(34,211,238,0)',
            '0 0 16px rgba(34,211,238,0.35)',
            '0 0 0px rgba(34,211,238,0)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.span
        className="relative z-[1] flex items-center gap-2"
        whileHover={{ x: 1 }}
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-0"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2))',
            'linear-gradient(135deg, rgba(147,51,234,0.2), rgba(34,211,238,0.2))',
            'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2))'
          ]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.button>
  )
}
