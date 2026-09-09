"use client"

import { motion } from "framer-motion"
import { ArrowDownRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "υπηρεσίες", value: "13" },
  { label: "κρυφές χρεώσεις", value: "0" },
  { label: "διαφάνεια", value: "100%" },
]

export function PricingHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-40 pb-20 sm:px-8 lg:px-12 lg:pt-48 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[oklch(0.97_0.008_275)] to-[oklch(0.94_0.03_292)] dark:from-[oklch(0.055_0.03_276)] dark:via-[oklch(0.09_0.025_276)] dark:to-[oklch(0.14_0.05_292)]" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25 dark:opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[oklch(0.68_0.24_292)]/12 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/30 dark:border-violet-300/30 bg-violet-400/10 dark:bg-violet-300/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[.22em] text-violet-700 dark:text-violet-200">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300 pulse-glow" />// PRICING_MATRIX
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-[3.4rem] leading-[.94] tracking-[-.06em] font-black text-zinc-900 dark:text-white sm:text-7xl lg:text-8xl">
          Ποιότητα agency.<br /><span className="text-[oklch(0.55_0.17_225)] dark:text-[oklch(0.78_0.17_225)]">Τιμές startup.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg sm:leading-8">
          Websites, e-shops, SEO, AI και digital growth χωρίς τα κόστη ενός παραδοσιακού agency. Διαφανείς τιμές, χωρίς κρυφές χρεώσεις, χωρίς περιττά retainers.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="h-13 rounded-full bg-[oklch(0.68_0.24_292)] text-white dark:text-zinc-950 hover:bg-[oklch(0.78_0.17_225)] px-7">
            <a href="#packages">Δες τα μηνιαία πακέτα <ArrowDownRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-7">
            <a href="#catalog">Δες όλες τις υπηρεσίες</a>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mx-auto mt-14 flex max-w-lg items-center justify-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-sm px-4 py-2 text-xs text-zinc-500 dark:text-zinc-500">
          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
          <span>One-time projects: μία τιμή, το κρατάς. Μηνιαίες υπηρεσίες: αναβάθμιση ή ακύρωση όποτε θες.</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }} className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm py-4">
              <p className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[.16em] text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
