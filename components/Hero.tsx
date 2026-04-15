'use client'

import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0d12]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/1776275497970_image.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d12]/95 via-[#0a0d12]/80 to-[#0a0d12]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-transparent to-transparent" />

      {/* Decorative line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#f97316] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-0.5 bg-[#f97316]" />
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">
              Oklahoma City, OK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
          >
            METAL<span className="text-[#f97316]">TECH</span>
            <br />
            <span className="text-white/90 text-4xl sm:text-5xl lg:text-6xl font-bold">INC.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-lg sm:text-xl text-white/70 font-light leading-relaxed"
          >
            Custom Design, Welding &amp; Fabrication
            <br />
            <span className="text-white/50 text-base">Professional metal work delivered fast and right.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-8 py-4 rounded text-base transition-colors duration-150 cursor-pointer inline-block"
            >
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded text-base transition-colors duration-150 cursor-pointer inline-block"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-14 flex gap-10 border-t border-white/10 pt-8"
          >
            {[
              { value: '5.0★', label: 'Google Rating' },
              { value: '100%', label: 'Satisfaction' },
              { value: 'Custom', label: 'Every Project' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-[#f97316]">{stat.value}</div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#f97316] to-transparent"
        />
      </motion.div>
    </section>
  )
}
