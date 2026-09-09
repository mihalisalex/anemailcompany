"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const capabilities = ["SEO", "Email marketing", "AI bots", "Websites", "E-shops", "Στρατηγική"]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return <section ref={ref} id="work" className="border-y border-zinc-200 dark:border-zinc-800 py-7 overflow-hidden"><motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="flex min-w-max animate-marquee">{[...capabilities, ...capabilities].map((item, index) => <div key={`${item}-${index}`} className="flex items-center gap-8 px-8 text-sm uppercase tracking-[.2em] text-zinc-500"><span className="h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-300" />{item}</div>)}</motion.div></section>
}
