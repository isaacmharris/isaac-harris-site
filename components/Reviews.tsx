'use client'

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

const reviews = [
  {
    name: "Randal Moody",
    text: "Good guys right here! If you've got production needs, MetalTech should be your first call. Top notch quality!",
    stars: 5,
  },
  {
    name: "Alex Stephens",
    text: "MetalTech inc is a professional and convenient company. Working with them was fast and easy. MetalTech was able to create the vision I saw in my head. Highly recommend.",
    stars: 5,
  },
  {
    name: "Cliff Norwood",
    text: "The guys at MetalTech are great people and they do excellent work and great service. I rate 5 stars and I'm a very satisfied customer.",
    stars: 5,
  },
  {
    name: "Verified Customer",
    text: "Great company to work with, I definitely recommend them.",
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f97316] fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#111827] border border-[#2a3441] rounded-lg p-7 flex flex-col gap-4"
    >
      <StarRating count={review.stars} />
      <p className="text-white/75 text-sm leading-relaxed flex-1">"{review.text}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-[#2a3441]">
        <div className="w-9 h-9 rounded-full bg-[#f97316]/20 flex items-center justify-center text-[#f97316] font-bold text-sm">
          {review.name[0]}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{review.name}</div>
          <div className="text-white/40 text-xs">Google Review</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reviews" className="py-24 bg-[#0a0d12]">
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
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <div className="w-8 h-0.5 bg-[#f97316]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">What Clients Say</h2>
          <div className="mt-6 inline-flex items-center gap-3 bg-[#111827] border border-[#2a3441] rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#f97316] fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-white/50 text-sm">— 9 Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
