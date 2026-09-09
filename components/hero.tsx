"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [spotlightOn, setSpotlightOn] = useState(false)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "75% start"] })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -160])
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 260])
  const blobX = useTransform(scrollYProgress, [0, 1], [0, -60])
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.8])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -160])
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -4])
  const eRotate = useTransform(scrollYProgress, [0, 1], [0, 30])
  const eScale = useTransform(scrollYProgress, [0, 1], [1, 1.7])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const spotlightX = useSpring(mouseX, { stiffness: 200, damping: 24 })
  const spotlightY = useSpring(mouseY, { stiffness: 200, damping: 24 })
  const spotlightBg = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}px ${spotlightY}px, oklch(0.62 0.25 292 / 0.55), oklch(0.68 0.2 225 / 0.32) 35%, transparent 68%)`

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return <section
    ref={sectionRef}
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setSpotlightOn(true)}
    onMouseLeave={() => setSpotlightOn(false)}
    className="relative min-h-screen flex items-center px-5 sm:px-8 lg:px-12 pt-32 pb-16 overflow-hidden"
  >
    <motion.div style={{ scale: bgScale }} className="absolute inset-0 bg-gradient-to-br from-white via-[oklch(0.97_0.008_275)] to-[oklch(0.94_0.03_292)] dark:from-[oklch(0.055_0.03_276)] dark:via-[oklch(0.09_0.025_276)] dark:to-[oklch(0.14_0.05_292)]" />
    <motion.div style={{ y: gridY }} className="absolute inset-0 tech-grid opacity-30 dark:opacity-80" />
    <div className="absolute inset-0 scanlines opacity-0 dark:opacity-20" />
    <motion.div style={{ y: blobY, x: blobX, scale: blobScale }} className="absolute right-[-10%] top-[15%] h-[520px] w-[520px] rounded-full bg-[oklch(0.68_0.24_292)]/10 dark:bg-[oklch(0.68_0.24_292)]/15 blur-[120px]" />
    <motion.div
      style={{ background: spotlightBg, opacity: spotlightOn ? 1 : 0 }}
      className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-300"
      aria-hidden="true"
    />
    <motion.div
      style={{ left: spotlightX, top: spotlightY, opacity: spotlightOn ? 1 : 0 }}
      className="pointer-events-none absolute z-[6] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.62_0.25_292)] dark:bg-cyan-300 blur-[1px] shadow-[0_0_28px_6px_oklch(0.62_0.25_292_/_0.65)] dark:shadow-[0_0_28px_6px_oklch(0.78_0.17_225_/_0.65)] transition-opacity duration-300"
      aria-hidden="true"
    />
    <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-end">
      <motion.div style={{ y: textY, opacity: textOpacity, scale: textScale }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .15 }} className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-[.22em] text-zinc-600 dark:text-zinc-400"><span className="flex items-center gap-2 rounded-full border border-violet-400/30 dark:border-violet-300/30 bg-violet-400/10 dark:bg-violet-300/10 px-3 py-1.5 text-violet-700 dark:text-violet-200"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300 pulse-glow" />STUDIO_01</span><span>Digital marketing agency</span></motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }} className="max-w-5xl text-[4.35rem] sm:text-7xl lg:text-[8.5rem] leading-[.84] tracking-[-.075em] font-black text-zinc-900 dark:text-white">Κάνε το<br /><span className="text-[oklch(0.55_0.17_225)] dark:text-[oklch(0.78_0.17_225)]">επόμενο βήμα.</span></motion.h1>
        <div className="mt-7 flex max-w-xl items-center gap-3 text-[10px] font-mono uppercase tracking-[.18em] text-cyan-700 dark:text-cyan-300/70"><span className="h-px w-8 bg-cyan-600/60 dark:bg-cyan-300/60" /> strategy / design / technology</div><motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .45 }} className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg sm:leading-8">Η an email company είναι η ομάδα πίσω από όλα όσα χρειάζεται η επιχείρησή σου για να αναπτυχθεί online — από SEO και email μέχρι AI bots, websites και e-shops.</motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .55 }} className="mt-10 flex flex-wrap gap-4"><Button asChild size="lg" className="h-13 rounded-full bg-[oklch(0.68_0.24_292)] text-white dark:text-zinc-950 hover:bg-[oklch(0.78_0.17_225)] px-7"><a href="#contact">Πες μας τι ακολουθεί <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button><Button asChild variant="outline" size="lg" className="h-13 rounded-full border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-7"><a href="#services">Δες τις υπηρεσίες <ArrowDownRight className="ml-2 h-4 w-4" /></a></Button></motion.div>
      </motion.div>
      <motion.div style={{ y: cardY, rotate: cardRotate }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .45 }} className="mt-12 block pb-2 lg:mt-0 lg:pb-3"><div className="border-t border-zinc-300 dark:border-zinc-700 pt-5 text-sm text-zinc-500 flex justify-between"><span>Scroll to explore</span><span>01 / 05</span></div><div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-cyan-600/20 dark:border-cyan-300/20 bg-white/90 dark:bg-zinc-950/80 shadow-[0_0_50px_oklch(0.78_0.17_225_/_0.08)] dark:shadow-[0_0_50px_oklch(0.78_0.17_225_/_0.12)] backdrop-blur lg:mt-20"><div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-cyan-600/20 dark:border-cyan-300/20 shadow-[0_0_50px_oklch(0.78_0.17_225_/_0.1)] dark:shadow-[0_0_50px_oklch(0.78_0.17_225_/_0.18)]" /><div className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 rounded-full border border-violet-400/20 dark:border-violet-300/20" /><div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3"><span className="h-2 w-2 rounded-full bg-violet-400 dark:bg-violet-300" /><span className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-300" /><span className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-600" /><span className="ml-auto font-mono text-[9px] uppercase tracking-[.18em] text-zinc-400 dark:text-zinc-600">terminal / hello</span></div><div className="p-5 font-mono text-xs leading-6"><div className="text-zinc-500">$ ./an-email-company</div><div className="text-cyan-600 dark:text-cyan-300">&gt; hello world<span className="ml-1 inline-block h-4 w-1 animate-pulse bg-violet-500 dark:bg-violet-300 align-middle" /></div><div className="text-zinc-500">&gt; ideas ready to ship_</div></div></div><motion.div style={{ rotate: eRotate, scale: eScale }} className="mt-10 text-7xl text-[oklch(0.55_0.17_225_/_0.6)] dark:text-[oklch(0.78_0.17_225_/_0.7)] font-medium tracking-tighter drop-shadow-[0_0_24px_oklch(0.78_0.17_225_/_0.15)] dark:drop-shadow-[0_0_24px_oklch(0.78_0.17_225_/_0.25)]">e/</motion.div></motion.div>
    </div>
  </section>
}
