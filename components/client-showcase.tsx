"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight, BarChart3, Globe2, ShoppingCart, Sparkles } from "lucide-react"
import { useRef } from "react"

const clients = [
  { name: "NOVA / 01", sector: "D2C skincare", result: "+184% οργανική επισκεψιμότητα", detail: "SEO · Shopify · Lifecycle", icon: Globe2, tone: "violet" },
  { name: "Kinetiq", sector: "B2B software", result: "3.2× περισσότερα qualified leads", detail: "AI bot · Content · CRO", icon: Sparkles, tone: "cyan" },
  { name: "Myrto House", sector: "Hospitality", result: "+68% direct bookings", detail: "Website · Email · Analytics", icon: BarChart3, tone: "blue" },
  { name: "Atelier 9", sector: "Fashion commerce", result: "41% repeat purchase rate", detail: "E-shop · Klaviyo · Creative", icon: ShoppingCart, tone: "pink" },
]

export function ClientShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return <section id="clients" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="pointer-events-none absolute inset-0 scanlines opacity-30" />
    <div className="mx-auto max-w-7xl">
      <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-cyan-300">// selected transmissions</p><h2 className="max-w-3xl text-5xl font-black leading-[.88] tracking-[-.07em] text-white sm:text-7xl">Οι ιδέες μας<br /><span className="text-zinc-600">βγαίνουν στην αγορά.</span></h2></div>
        <p className="max-w-sm text-sm leading-6 text-zinc-400">Ενδεικτικά projects από την ομάδα μας. Τα ονόματα και τα αποτελέσματα είναι placeholder μέχρι να ενεργοποιηθεί το portfolio.</p>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-2">
        {clients.map((client, index) => { const Icon = client.icon; return <motion.article key={client.name} initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * .08 }} className={`group relative min-h-[255px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-sm ${index === 0 ? "md:col-span-2 md:min-h-[285px]" : ""}`}><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" /><div className="relative flex items-start justify-between"><div><span className="font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600">0{index + 1} / case file</span><h3 className="mt-3 text-2xl font-black tracking-[-.04em] text-white">{client.name}</h3><p className="mt-1 text-sm text-zinc-500">{client.sector}</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300"><Icon size={20} /></div></div><div className="relative mt-14 flex items-end justify-between gap-4"><div><p className="text-lg font-medium tracking-tight text-white">{client.result}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-500">{client.detail}</p></div><ArrowUpRight className="h-5 w-5 text-violet-300 opacity-60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></motion.article> })}
      </div>
    </div>
  </section>
}

export default ClientShowcase
