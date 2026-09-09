"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = { Εξερεύνηση: [["Υπηρεσίες", "#services"], ["Προσέγγιση", "#process"], ["Clients", "#clients"], ["Stack", "#tools"]], Εταιρεία: [["Σχετικά με εμάς", "#"], ["Μίλησέ μας", "#contact"], ["Instagram", "#"]] }

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return <footer ref={ref} className="border-t border-zinc-800 bg-zinc-950"><div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16"><motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="grid grid-cols-2 md:grid-cols-4 gap-10"><div className="col-span-2"><a href="#" className="flex items-center gap-2 text-white mb-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[oklch(0.78 0.17 225)] text-[oklch(0.11 0.025 276)] font-black text-sm shadow-[0_0_18px_oklch(0.78_0.17_225_/_0.35)]">e/</span><span className="font-medium">an email company</span></a><p className="text-zinc-500 max-w-xs leading-6 text-sm">Ένα digital agency για επιχειρήσεις έτοιμες να κάνουν το επόμενο βήμα.</p></div>{Object.entries(footerLinks).map(([title, links]) => <div key={title}><h4 className="text-sm font-semibold text-white mb-5">{title}</h4><ul className="space-y-3">{links.map(([label, href]) => <li key={label}><a href={href} className="text-sm text-zinc-500 hover:text-[oklch(0.68 0.24 292)] transition-colors">{label}</a></li>)}</ul></div>)}</motion.div><div className="mt-16 pt-7 border-t border-zinc-800 flex flex-col sm:flex-row justify-between gap-4 text-sm text-zinc-600"><span>© {new Date().getFullYear()} an email company</span><span>Φτιαγμένο για το επόμενο βήμα.</span></div></div></footer>
}
