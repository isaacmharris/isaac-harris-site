'use client'

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 bg-[#0d1117]">
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
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Reach Us</span>
            <div className="w-8 h-0.5 bg-[#f97316]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Get In Touch</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base">
            Ready to start your project? Call us or send a message — we respond fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Big CTA phone */}
            <div className="bg-[#f97316] rounded-lg p-8">
              <div className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">Call Us Directly</div>
              <a
                href="tel:4056599911"
                className="text-white font-black text-4xl hover:text-white/90 transition-colors cursor-pointer block"
              >
                (405) 659-9911
              </a>
              <p className="text-white/70 text-sm mt-3">Mon–Fri &nbsp;·&nbsp; 8:00 AM – 4:30 PM</p>
            </div>

            {/* Details */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  label: 'Address',
                  value: '7714 Melrose Ln\nOklahoma City, OK 73127',
                  href: 'https://maps.google.com/?q=7714+Melrose+Ln+Oklahoma+City+OK+73127',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  label: 'Business Hours',
                  value: 'Mon–Fri: 8:00 AM – 4:30 PM\nSat–Sun: Closed',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#f97316]/10 flex items-center justify-center text-[#f97316] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm hover:text-white transition-colors cursor-pointer whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white/80 text-sm whitespace-pre-line">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111827] border border-[#2a3441] rounded-lg p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-white font-bold text-xl">Send a Message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-white/50 text-xs uppercase tracking-wide mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#0d1117] border border-[#2a3441] focus:border-[#f97316] rounded px-4 py-3 text-white text-sm outline-none transition-colors placeholder-white/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white/50 text-xs uppercase tracking-wide mb-2">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(405) 000-0000"
                  className="w-full bg-[#0d1117] border border-[#2a3441] focus:border-[#f97316] rounded px-4 py-3 text-white text-sm outline-none transition-colors placeholder-white/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-white/50 text-xs uppercase tracking-wide mb-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#0d1117] border border-[#2a3441] focus:border-[#f97316] rounded px-4 py-3 text-white text-sm outline-none transition-colors placeholder-white/20"
              />
            </div>
            <div>
              <label htmlFor="project" className="block text-white/50 text-xs uppercase tracking-wide mb-2">Project Details</label>
              <textarea
                id="project"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-[#0d1117] border border-[#2a3441] focus:border-[#f97316] rounded px-4 py-3 text-white text-sm outline-none transition-colors resize-none placeholder-white/20"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 rounded text-base transition-colors duration-150 cursor-pointer"
            >
              Request a Quote
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
