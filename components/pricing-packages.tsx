"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Start",
    price: "95",
    tag: "AGENT_01",
    featured: false,
    items: ["Hosting", "Website maintenance", "Basic SEO monitoring", "Analytics", "Monthly website report"],
  },
  {
    name: "Grow",
    price: "179",
    tag: "AGENT_02",
    featured: true,
    badge: "MOST POPULAR",
    items: ["Όλα του Start", "Μηνιαίο SEO", "2 email campaigns", "Google Business optimization", "Website updates", "Monthly performance report"],
  },
  {
    name: "Scale",
    price: "299",
    tag: "AGENT_03",
    featured: false,
    items: ["Advanced SEO", "4 email campaigns", "Website management", "Conversion optimization", "Competitor monitoring", "Priority support", "Monthly strategy report"],
  },
  {
    name: "E-Commerce",
    price: "359",
    tag: "AGENT_04",
    featured: false,
    items: ["E-shop maintenance", "Technical monitoring", "SEO & Product SEO", "4 email campaigns", "Abandoned cart optimization", "Conversion monitoring", "Monthly growth report"],
  },
]

export function PricingPackages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="packages" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-15 dark:opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 70, scale: 0.94, filter: "blur(12px)" }} animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-violet-600 dark:text-violet-300">// monthly growth packages</p>
            <h2 className="text-5xl sm:text-6xl font-black leading-[.92] tracking-[-.06em] text-zinc-900 dark:text-white max-w-2xl">Απλά πακέτα.<br /><span className="text-zinc-500">Προβλέψιμη ανάπτυξη.</span></h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-7 max-w-md">Σταθερά μηνιαία πλάνα σχεδιασμένα να δημιουργούν προβλέψιμο digital growth. Αναβάθμισε, υποβάθμισε ή ακύρωσε όποτε θες.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 70, scale: 0.88, filter: "blur(14px)" }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={pkg.featured ? "relative lg:-translate-y-4" : "relative"}
            >
              {pkg.featured && (
                <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-400 to-cyan-400 opacity-80 blur-[2px]" aria-hidden="true" />
              )}
              <div className={`relative flex h-full flex-col rounded-[2rem] border p-7 transition-transform hover:-translate-y-1 ${pkg.featured ? "border-transparent bg-zinc-950 text-white shadow-[0_0_60px_oklch(0.6_0.22_292_/_0.35)]" : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white"}`}>
                {pkg.featured && pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-white shadow-lg">
                    <Sparkles className="h-3 w-3" />{pkg.badge}
                  </span>
                )}
                <div className={`flex items-center justify-between font-mono text-[9px] uppercase tracking-[.2em] ${pkg.featured ? "text-zinc-500" : "text-zinc-400 dark:text-zinc-600"}`}>
                  <span>{pkg.tag}</span>
                  <span className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-glow" />online</span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-tight">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight">€{pkg.price}</span>
                  <span className={`text-sm ${pkg.featured ? "text-zinc-400" : "text-zinc-500"}`}>/ μήνα</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.featured ? "text-cyan-300" : "text-violet-600 dark:text-violet-300"}`} />
                      <span className={pkg.featured ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-400"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`mt-8 rounded-full ${pkg.featured ? "bg-white text-zinc-950 hover:bg-zinc-200" : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-700 dark:hover:bg-zinc-200"}`}>
                  <a href="#contact">Ξεκίνα <ArrowUpRight className="ml-1.5 h-4 w-4" /></a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
