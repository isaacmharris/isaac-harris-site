'use client'

import { motion, AnimatePresence } from "motion/react"
import { useInView } from "motion/react"
import { useRef, useState } from "react"
import Image from "next/image"

const images = [
  '1776275497970_image.png',
  '1776275513133_image.png',
  '1776275519783_image.png',
  '1776275530023_image.png',
  '1776275540865_image.png',
  '1776275549295_image.png',
  '1776275555880_image.png',
  '1776275561723_image.png',
  '1776275571865_image.png',
  '1776275583322_image.png',
  '1776275603707_image.png',
  '1776275608698_image.png',
  '1776275614085_image.png',
  '1776275621942_image.png',
  '1776275637513_image.png',
  '1776275649664_image.png',
  '1776275669643_image.png',
  '1776275698303_image.png',
  '1776275721938_image.png',
  '1776275744385_image.png',
  '1776275805214_image.png',
  '1776275812813_image.png',
  '1776275818212_image.png',
  '1776275825823_image.png',
  '1776275830898_image.png',
  '1776275836746_image.png',
  '1776275841614_image.png',
  '1776275847678_image.png',
  '1776275854281_image.png',
  '1776275868501_image.png',
  '1776275875445_image.png',
  '1776275884567_image.png',
  '1776275892717_image.png',
  '1776275913339_image.png',
  '1776275938960_image.png',
  '1776275947428_image.png',
  '1776275954748_image.png',
  '1776275962956_image.png',
  '1776275973815_image.png',
  '1776275979688_image.png',
  '1776276070985_image.png',
  '1776276078071_image.png',
  '1776276083635_image.png',
  '1776276099547_image.png',
  '1776276105453_image.png',
  '1776276110187_image.png',
  '1776276116065_image.png',
  '1776276122566_image.png',
  '1776276129526_image.png',
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [selected, setSelected] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? images : images.slice(0, 12)

  return (
    <section id="gallery" className="py-24 bg-[#0d1117]">
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
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <div className="w-8 h-0.5 bg-[#f97316]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Our Work</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base">
            Browse our fabrication and welding projects — every piece built to spec.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {visible.map((img, i) => (
            <motion.button
              key={img}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.5) }}
              onClick={() => setSelected(img)}
              className="relative aspect-square overflow-hidden rounded bg-[#111827] border border-[#2a3441] hover:border-[#f97316]/50 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={`/images/${img}`}
                alt={`MetalTech fabrication work ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
            </motion.button>
          ))}
        </div>

        {!showAll && images.length > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="border border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold px-8 py-3 rounded transition-colors duration-150 cursor-pointer"
            >
              View All {images.length} Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/${selected}`}
                alt="MetalTech project"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
