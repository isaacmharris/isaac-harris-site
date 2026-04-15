'use client'

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

const services = [
  {
    title: "Custom Design",
    description: "We work with your vision from concept to blueprint. Whether you have detailed plans or just an idea, our team translates it into precise, buildable designs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Professional Welding",
    description: "Precision welding for structural, production, and manufacturing applications. Every weld is executed to the highest standard for strength and longevity.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Metal Fabrication",
    description: "Full-service fabrication for production and manufacturing. From single pieces to production runs, we deliver consistent quality on time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Production & Manufacturing",
    description: "Scaled production services for industrial and manufacturing clients. Reliable output with rigorous quality control at every step.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-[#111827] border border-[#2a3441] hover:border-[#f97316]/50 rounded-lg p-8 transition-colors duration-200"
    >
      <div className="w-14 h-14 rounded bg-[#f97316]/10 flex items-center justify-center text-[#f97316] mb-6 group-hover:bg-[#f97316]/20 transition-colors duration-200">
        {service.icon}
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-[#0a0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#f97316]" />
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <div className="w-8 h-0.5 bg-[#f97316]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Our Services</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base">
            From concept to completion — we handle every step of the metal fabrication process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Why choose us bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-[#f97316] rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Fast Turnaround', desc: 'We value your time as much as our craft.' },
            { label: 'High-Quality Work', desc: 'Precision and care on every single project.' },
            { label: 'Your Vision, Built', desc: 'We fabricate exactly what you have in mind.' },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
              <div>
                <div className="text-white font-bold text-lg">{item.label}</div>
                <div className="text-white/80 text-sm mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
