"use client"

import { motion, useInView } from "framer-motion"
import {
  ArrowUpRight, ShoppingBag, Home, Building2, Shirt, Palette,
  HeartPulse, Palmtree, TrendingUp, ExternalLink,
} from "lucide-react"
import { useRef } from "react"

const tones = {
  violet: { icon: "bg-violet-500 text-white dark:bg-violet-400 dark:text-zinc-950", text: "text-violet-600 dark:text-violet-300", ring: "border-violet-400/30 dark:border-violet-300/30", glow: "hover:shadow-[0_0_40px_oklch(0.55_0.24_292_/_0.15)] dark:hover:shadow-[0_0_40px_oklch(0.68_0.24_292_/_0.2)]" },
  cyan: { icon: "bg-cyan-500 text-white dark:bg-cyan-300 dark:text-zinc-950", text: "text-cyan-700 dark:text-cyan-300", ring: "border-cyan-400/30 dark:border-cyan-300/30", glow: "hover:shadow-[0_0_40px_oklch(0.6_0.14_225_/_0.15)] dark:hover:shadow-[0_0_40px_oklch(0.78_0.17_225_/_0.2)]" },
  blue: { icon: "bg-blue-500 text-white dark:bg-blue-400 dark:text-zinc-950", text: "text-blue-700 dark:text-blue-300", ring: "border-blue-400/30 dark:border-blue-300/30", glow: "hover:shadow-[0_0_40px_oklch(0.55_0.18_260_/_0.15)] dark:hover:shadow-[0_0_40px_oklch(0.65_0.18_260_/_0.2)]" },
  pink: { icon: "bg-pink-500 text-white dark:bg-pink-400 dark:text-zinc-950", text: "text-pink-700 dark:text-pink-300", ring: "border-pink-400/30 dark:border-pink-300/30", glow: "hover:shadow-[0_0_40px_oklch(0.6_0.2_360_/_0.15)] dark:hover:shadow-[0_0_40px_oklch(0.72_0.19_360_/_0.2)]" },
} as const

const projects = [
  {
    number: "01", name: "Alexandris Shoes", type: "Custom E-Commerce Platform", url: "alexandrisshoes.gr", live: true,
    description: "A fully custom e-commerce experience combining modern design with a fast, scalable Next.js technology stack — built around the needs of a footwear retailer.",
    projectType: "Custom E-Commerce", services: ["Development", "E-Commerce", "SEO", "Email Marketing", "Maintenance"],
    icon: ShoppingBag, tone: "violet",
  },
  {
    number: "02", name: "Mavrakis Home", type: "Custom E-Commerce Platform", url: "mavrakishome.gr", live: true,
    description: "A modern custom e-commerce platform showcasing a large home & lifestyle product catalogue through a clean, intuitive shopping experience across desktop and mobile.",
    projectType: "Custom E-Commerce", services: ["Development", "E-Commerce", "SEO", "Email Marketing", "Maintenance"],
    icon: Home, tone: "cyan",
  },
  {
    number: "03", name: "Hector Footwear", type: "Custom B2B Wholesale Platform", url: "hectorfootwear.gr", live: true,
    description: "A custom B2B wholesale platform designed from the ground up around professional buyers and retailers — not a consumer e-shop, but a real wholesale ordering environment.",
    projectType: "B2B / Wholesale E-Commerce", services: ["Strategy", "Development", "B2B", "SEO", "Email Marketing", "Maintenance"],
    icon: Building2, tone: "blue",
  },
  {
    number: "04", name: "Epiloges Fashion Boutique", type: "Custom Fashion E-Commerce", url: null, live: false,
    description: "A new custom e-commerce experience built around the visual and commercial needs of modern fashion retail — a premium storefront with an intuitive mobile shopping flow.",
    projectType: "Custom Fashion E-Commerce", services: ["Design", "Development", "E-Commerce", "SEO", "Email Marketing", "Maintenance"],
    icon: Shirt, tone: "pink",
  },
  {
    number: "05", name: "Vargiakakis Pottery", type: "Brand & Business Website", url: "vargiakakis.com", live: true,
    description: "A WordPress website presenting the character, craftsmanship and identity behind Vargiakakis pottery — letting the work take centre stage through a clean, visual presence.",
    projectType: "WordPress / Business Website", services: ["Web Design", "WordPress", "SEO", "Email Marketing", "Maintenance"],
    icon: Palette, tone: "violet",
  },
  {
    number: "06", name: "Alki Healthcare", type: "Healthcare & Medical Website", url: "alkihealthcare.com", live: true,
    description: "A professional healthcare website giving patients a clear, trustworthy way to discover the practice, doctors and services — focused on clarity and credibility.",
    projectType: "Healthcare / Professional Website", services: ["Web Design", "Development", "SEO", "Email Marketing", "Maintenance"],
    icon: HeartPulse, tone: "cyan",
  },
  {
    number: "07", name: "Costa Greca", type: "Luxury Villa Digital Experience", url: null, live: false,
    description: "A custom digital experience for a luxury villa in Crete, combining strong visual storytelling with the technology and marketing infrastructure to drive direct bookings.",
    projectType: "Luxury Hospitality / Custom Website", services: ["Strategy", "Design", "Development", "SEO", "Email Marketing", "Maintenance"],
    icon: Palmtree, tone: "blue",
  },
  {
    number: "08", name: "La Pupa", type: "Digital Growth & E-Commerce Marketing", url: "lapupa.gr", live: true,
    description: "An ongoing digital marketing partnership focused on strengthening e-commerce presence, customer retention and organic visibility through SEO and email marketing.",
    projectType: "E-Commerce Growth & Marketing", services: ["SEO", "Email Marketing", "E-Commerce", "Analytics", "Maintenance"],
    icon: TrendingUp, tone: "pink",
  },
] as const

const missionServices = ["Web Design", "Custom Development", "E-Commerce", "B2B", "SEO", "Email Marketing", "AI", "Automation", "Maintenance"]

export function ClientShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return <section id="clients" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="pointer-events-none absolute inset-0 scanlines opacity-0 dark:opacity-30" />
    <div className="mx-auto max-w-7xl">
      <motion.div ref={ref} initial={{ opacity: 0, y: 70, scale: 0.94, filter: "blur(12px)" }} animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-cyan-700 dark:text-cyan-300">// selected projects</p><h2 className="max-w-3xl text-5xl font-black leading-[.88] tracking-[-.07em] text-zinc-900 dark:text-white sm:text-7xl">Οι ιδέες μας<br /><span className="text-zinc-500 dark:text-zinc-600">βγαίνουν στην αγορά.</span></h2></div>
        <p className="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">A selection of e-commerce platforms, business websites and digital growth projects designed, developed and supported by our agency.</p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon
          const tone = tones[project.tone]
          return (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 60, scale: 0.94, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border ${tone.ring} bg-white dark:bg-zinc-900/80 p-7 shadow-sm dark:shadow-none backdrop-blur-sm transition-shadow ${tone.glow}`}
            >
              <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-current opacity-[.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[.12] ${tone.text}`} />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[.2em] text-zinc-400 dark:text-zinc-600">{project.number} / case file</span>
                    <h3 className="mt-0.5 text-xl font-black tracking-[-.03em] text-zinc-900 dark:text-white">{project.name}</h3>
                  </div>
                </div>
                {project.live ? (
                  <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[.16em] text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-glow" />live
                  </span>
                ) : (
                  <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[.16em] text-amber-600 dark:text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 pulse-glow" />in development
                  </span>
                )}
              </div>

              <p className={`relative mt-1 text-xs font-medium uppercase tracking-[.1em] ${tone.text}`}>{project.type}</p>

              {project.url && (
                <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="relative mt-3 inline-flex w-fit items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {project.url}<ExternalLink className="h-3 w-3" />
                </a>
              )}

              <p className="relative mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>

              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {project.services.map((service) => (
                  <span key={service} className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-2.5 py-1 text-[10px] text-zinc-500 dark:text-zinc-500">{service}</span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[.16em] text-zinc-400 dark:text-zinc-600">{project.projectType}</span>
                <ArrowUpRight className={`h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${tone.text}`} />
              </div>
            </motion.article>
          )
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }} animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mt-16 rounded-[1.75rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-8 sm:p-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[.22em] text-violet-600 dark:text-violet-300 mb-4">Design. Technology. Growth.</p>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-zinc-700 dark:text-zinc-300">
          We don't simply deliver websites. We create and continuously support the digital infrastructure behind modern businesses — combining strategy, design, custom development, e-commerce, SEO, email marketing and ongoing optimization.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-500">
          From WordPress websites to fully custom Next.js platforms and B2B systems, every project is built around the requirements of the business behind it.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          {missionServices.map((service, i) => (
            <span key={service} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-400 dark:text-zinc-600">
              {service}{i < missionServices.length - 1 && <span className="text-violet-400 dark:text-violet-300">·</span>}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
}

export default ClientShowcase
