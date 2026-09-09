"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function SectionDivider({ label = "// SYSTEM_LINK" }: { label?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-4">
      <div className="relative h-px w-full overflow-visible">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "center" }}
          className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-violet-500 dark:via-violet-400 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "center" }}
          className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-300 to-transparent blur-[3px] opacity-70"
        />
        <motion.div
          initial={{ left: "0%", opacity: 0 }}
          animate={isInView ? { left: "100%", opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 1.3, delay: 0.15, ease: "easeInOut" }}
          className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_6px_oklch(0.68_0.24_292_/_0.7)]"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-violet-400/30 dark:border-violet-300/30 bg-white dark:bg-zinc-950 px-4 py-1.5 font-mono text-[9px] uppercase tracking-[.2em] text-violet-600 dark:text-violet-300 shadow-[0_0_20px_oklch(0.68_0.24_292_/_0.15)]"
        >
          {label}
        </motion.span>
      </div>
    </div>
  )
}
