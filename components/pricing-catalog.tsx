"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Mail, Search, Monitor, ShieldCheck, ShoppingBag, Layers,
  Bot, Workflow, Wand2, Share2, Megaphone, Check,
} from "lucide-react"

type Item = { name: string; price: string }
type Category = {
  key: string
  label: string
  icon: typeof Mail
  tone: "violet" | "cyan" | "blue" | "pink"
  tagline: string
  items: Item[]
  included: string[]
}

const tones = {
  violet: {
    ring: "border-violet-400/40 dark:border-violet-300/40",
    activeBg: "bg-violet-500 text-white dark:bg-violet-400 dark:text-zinc-950",
    text: "text-violet-600 dark:text-violet-300",
    dot: "bg-violet-500 dark:bg-violet-300",
    glow: "shadow-[0_0_30px_oklch(0.55_0.24_292_/_0.25)] dark:shadow-[0_0_30px_oklch(0.68_0.24_292_/_0.3)]",
  },
  cyan: {
    ring: "border-cyan-400/40 dark:border-cyan-300/40",
    activeBg: "bg-cyan-500 text-white dark:bg-cyan-300 dark:text-zinc-950",
    text: "text-cyan-700 dark:text-cyan-300",
    dot: "bg-cyan-500 dark:bg-cyan-300",
    glow: "shadow-[0_0_30px_oklch(0.6_0.14_225_/_0.25)] dark:shadow-[0_0_30px_oklch(0.78_0.17_225_/_0.3)]",
  },
  blue: {
    ring: "border-blue-400/40 dark:border-blue-300/40",
    activeBg: "bg-blue-500 text-white dark:bg-blue-400 dark:text-zinc-950",
    text: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500 dark:bg-blue-300",
    glow: "shadow-[0_0_30px_oklch(0.55_0.18_260_/_0.25)] dark:shadow-[0_0_30px_oklch(0.65_0.18_260_/_0.3)]",
  },
  pink: {
    ring: "border-pink-400/40 dark:border-pink-300/40",
    activeBg: "bg-pink-500 text-white dark:bg-pink-400 dark:text-zinc-950",
    text: "text-pink-700 dark:text-pink-300",
    dot: "bg-pink-500 dark:bg-pink-300",
    glow: "shadow-[0_0_30px_oklch(0.6_0.2_360_/_0.25)] dark:shadow-[0_0_30px_oklch(0.72_0.19_360_/_0.3)]",
  },
} as const

const categories: Category[] = [
  {
    key: "email", label: "Email Marketing", icon: Mail, tone: "violet",
    tagline: "Turn your customer list into repeat business.",
    items: [
      { name: "Email Marketing Setup", price: "€119 one-time" },
      { name: "Newsletter Design", price: "€49 / email" },
      { name: "Monthly Email Management — 2 campaigns", price: "€95 / month" },
      { name: "Monthly Email Management — 4 campaigns", price: "€155 / month" },
      { name: "Advanced Email Marketing — 8 campaigns", price: "€239 / month" },
      { name: "Welcome Email Automation", price: "€85 one-time" },
      { name: "Abandoned Cart Automation", price: "€95 one-time" },
      { name: "Customer Win-Back Automation", price: "€85 one-time" },
      { name: "Birthday / Special Occasion Automation", price: "€59 one-time" },
      { name: "Customer Segmentation", price: "€59" },
      { name: "WooCommerce Email Integration", price: "€95" },
      { name: "Email Template Design", price: "€59" },
      { name: "Monthly Performance Report", price: "Included in monthly plans" },
    ],
    included: ["Campaign planning", "Professional email design", "Audience segmentation", "Automations", "Performance tracking", "WooCommerce integration"],
  },
  {
    key: "seo", label: "SEO", icon: Search, tone: "cyan",
    tagline: "Get found on Google and build long-term organic traffic.",
    items: [
      { name: "SEO Website Audit", price: "€95 one-time" },
      { name: "Basic SEO Setup", price: "€179 one-time" },
      { name: "Google Search Console Setup", price: "€49" },
      { name: "Google Analytics Setup", price: "€49" },
      { name: "Keyword Research", price: "€69" },
      { name: "Competitor SEO Analysis", price: "€69" },
      { name: "Local SEO Setup", price: "€119" },
      { name: "Google Business Profile Optimization", price: "€85" },
      { name: "Product SEO — WooCommerce", price: "from €119" },
      { name: "Technical SEO Fixes", price: "from €119" },
      { name: "SEO Starter", price: "€119 / month" },
      { name: "SEO Growth", price: "€215 / month" },
      { name: "SEO Pro", price: "€359 / month" },
    ],
    included: ["Keyword monitoring", "On-page optimization", "Meta titles & descriptions", "Internal linking", "Technical SEO checks", "Indexing monitoring", "Competitor tracking", "Local SEO", "Monthly reporting"],
  },
  {
    key: "web", label: "Website Design", icon: Monitor, tone: "blue",
    tagline: "Modern, responsive websites designed to turn visitors into customers.",
    items: [
      { name: "Landing Page", price: "from €239" },
      { name: "One-Page Business Website", price: "from €299" },
      { name: "3–5 Page Website", price: "from €479" },
      { name: "5–10 Page Website", price: "from €719" },
      { name: "Premium Business Website", price: "from €959" },
      { name: "Website Redesign", price: "from €359" },
      { name: "Booking Website", price: "from €599" },
      { name: "Restaurant Website", price: "from €479" },
      { name: "Hotel / Villa Website", price: "from €719" },
      { name: "Multilingual Website", price: "+ €119 / language" },
    ],
    included: ["Responsive design", "Modern UI/UX", "Contact forms", "WhatsApp integration", "Google Maps", "Social media integration", "Basic SEO", "Analytics", "Cookie banner", "SSL", "Performance optimization"],
  },
  {
    key: "hosting", label: "Hosting & Care", icon: ShieldCheck, tone: "pink",
    tagline: "Reliable hosting, maintenance and support after launch.",
    items: [
      { name: "Basic Hosting", price: "€11 / month" },
      { name: "Hosting + Updates", price: "€23 / month" },
      { name: "Business Care", price: "€35 / month" },
      { name: "Premium Care", price: "€59 / month" },
    ],
    included: ["Hosting", "SSL certificate", "Backups", "WordPress & plugin updates", "Security monitoring", "Uptime monitoring", "Small website changes", "Technical support"],
  },
  {
    key: "eshop", label: "WooCommerce E-Shop", icon: ShoppingBag, tone: "violet",
    tagline: "A complete online store without the cost of custom development.",
    items: [
      { name: "Starter E-Shop", price: "from €599" },
      { name: "Professional E-Shop", price: "from €959" },
      { name: "Advanced E-Shop", price: "from €1,439" },
      { name: "Existing WooCommerce Redesign", price: "from €479" },
      { name: "E-Shop Care", price: "€35–€95 / month" },
    ],
    included: ["Product catalogue", "Categories & filters", "Cart & checkout", "Customer accounts", "Coupons", "VAT configuration", "Shipping methods", "COD & bank transfer", "Payment gateway integration", "Stock management", "Basic SEO", "GDPR / cookie setup"],
  },
  {
    key: "custom-ecom", label: "Custom E-Commerce", icon: Layers, tone: "cyan",
    tagline: "When WooCommerce isn't enough. Built around the way your business actually works.",
    items: [
      { name: "Custom E-Shop", price: "from €1,790" },
      { name: "B2B E-Commerce Platform", price: "from €2,150" },
      { name: "Wholesale Ordering Platform", price: "from €1,790" },
      { name: "Marketplace", price: "from €2,990" },
      { name: "Custom Booking Platform", price: "from €1,790" },
      { name: "Custom Customer Portal", price: "from €1,550" },
      { name: "Custom Admin Dashboard", price: "from €950" },
    ],
    included: ["Custom checkout", "B2B pricing", "Wholesale accounts", "Minimum quantities", "Advanced filtering", "Customer & admin dashboards", "ERP/API integrations", "Custom payments", "Sales analytics", "Role-based access", "Multi-language systems"],
  },
  {
    key: "ai", label: "AI Solutions", icon: Bot, tone: "blue",
    tagline: "Practical AI tools that improve customer service, sales and internal workflows.",
    items: [
      { name: "Website AI Chatbot", price: "from €179" },
      { name: "AI Customer Support Bot", price: "from €239" },
      { name: "AI Product Assistant", price: "from €299" },
      { name: "AI FAQ Bot", price: "from €179" },
      { name: "AI Lead Generation Bot", price: "from €239" },
      { name: "AI Booking Assistant", price: "from €299" },
      { name: "AI Internal Knowledge Bot", price: "from €359" },
      { name: "Custom AI Automation", price: "from €359" },
      { name: "AI Management", price: "from €35–€119 / month" },
    ],
    included: ["24/7 customer answers", "Product recommendations", "Lead capture", "FAQ handling", "Website navigation assistance", "Trained on your content, products & policies"],
  },
  {
    key: "automation", label: "Business Automation", icon: Workflow, tone: "pink",
    tagline: "Stop wasting time on repetitive work.",
    items: [
      { name: "Basic Business Automation", price: "from €119" },
      { name: "Email Automation", price: "from €95" },
      { name: "Order Automation", price: "from €179" },
      { name: "Lead Automation", price: "from €179" },
      { name: "CRM Automation", price: "from €239" },
      { name: "Custom Workflow", price: "from €239" },
    ],
    included: ["Order-to-email workflows", "Lead-to-CRM workflows", "Automated follow-ups", "Spreadsheet updates", "Team notifications", "Reporting workflows"],
  },
  {
    key: "custom-digital", label: "Custom Digital", icon: Wand2, tone: "violet",
    tagline: "You bring the problem. We design the solution.",
    items: [
      { name: "Custom Digital Project", price: "from €359" },
    ],
    included: ["Custom web applications", "Business dashboards", "Internal company tools", "Customer portals", "Booking platforms", "Loyalty & membership systems", "QR systems", "Product configurators", "CRM systems", "AI tools", "API integrations"],
  },
  {
    key: "social", label: "Social Media", icon: Share2, tone: "cyan",
    tagline: "Consistent content and a professional presence across the platforms that matter.",
    items: [
      { name: "Social Media Setup", price: "€85 one-time" },
      { name: "4 Posts / Month", price: "€95 / month" },
      { name: "8 Posts / Month", price: "€169 / month" },
      { name: "12 Posts / Month", price: "€239 / month" },
      { name: "Content + Stories", price: "from €299 / month" },
      { name: "Social Media Audit", price: "€59" },
    ],
    included: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Content planning", "Creative design", "Performance overview"],
  },
  {
    key: "ads", label: "Google & Meta Ads", icon: Megaphone, tone: "blue",
    tagline: "Reach customers faster with professionally managed paid campaigns.",
    items: [
      { name: "Google Ads Setup", price: "from €119" },
      { name: "Google Ads Management", price: "from €119 / month" },
      { name: "Meta Ads Setup", price: "from €95" },
      { name: "Meta Ads Management", price: "from €119 / month" },
    ],
    included: ["Campaign setup", "Audience targeting", "Conversion tracking", "Ongoing optimization", "Performance reporting", "Ad spend paid directly by the client"],
  },
]

export function PricingCatalog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeKey, setActiveKey] = useState(categories[0].key)
  const active = categories.find((c) => c.key === activeKey)!
  const tone = tones[active.tone]

  return (
    <section id="catalog" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-15 dark:opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 70, scale: 0.94, filter: "blur(12px)" }} animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-cyan-700 dark:text-cyan-300">// full service catalog</p>
          <h2 className="text-5xl sm:text-6xl font-black leading-[.92] tracking-[-.06em] text-zinc-900 dark:text-white max-w-2xl">Κάθε υπηρεσία,<br /><span className="text-zinc-500">μία καθαρή τιμή.</span></h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const t = tones[cat.tone]
            const isActive = cat.key === activeKey
            const Icon = cat.icon
            return (
              <button
                key={cat.key}
                onClick={() => setActiveKey(cat.key)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${isActive ? `${t.activeBg} border-transparent ${t.glow}` : `border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-white bg-white dark:bg-zinc-950`}`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-[2rem] border ${tone.ring} bg-white dark:bg-zinc-950/80 backdrop-blur-sm p-6 sm:p-10 ${tone.glow}`}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tone.activeBg}`}>
                  <active.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">{active.label}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 max-w-md">{active.tagline}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                {active.included.map((inc) => (
                  <span key={inc} className={`inline-flex items-center gap-1.5 rounded-full border ${tone.ring} px-3 py-1 text-[11px] ${tone.text}`}>
                    <Check className="h-3 w-3" />{inc}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {active.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-100 dark:border-zinc-900 px-4 py-3.5 transition-colors hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                >
                  <span className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    {item.name}
                  </span>
                  <span className={`shrink-0 font-mono text-sm font-bold whitespace-nowrap ${tone.text}`}>{item.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
