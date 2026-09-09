"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Εμείς", href: "#team" },
  { label: "Προσέγγιση", href: "#process" },
  { label: "Δυνατότητες", href: "#work" },
  { label: "Clients", href: "#clients" },
  { label: "Stack", href: "#tools" },
]

const desktopNavItems = navItems.filter((item) => item.label !== "Δυνατότητες")

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <nav className="flex items-center justify-between px-4 sm:px-5 py-3 rounded-full bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border border-zinc-200 dark:border-zinc-800">
        <a href="#" className="flex items-center gap-2.5 text-zinc-900 dark:text-white">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[oklch(0.78 0.17 225)] text-[oklch(0.11 0.025 276)] font-[family-name:var(--font-baloo)] font-extrabold text-base shadow-[0_0_18px_oklch(0.78_0.17_225_/_0.35)]">e/</span>
          <span className="font-[family-name:var(--font-baloo)] text-lg font-extrabold tracking-tight">an email company.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {desktopNavItems.map((item) => <a key={item.label} href={item.href} className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">{item.label}</a>)}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm" className="bg-cyan-300 text-zinc-950 hover:bg-violet-300 rounded-full px-4"><a href="#contact">Ξεκίνα ένα project <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></a></Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button className="p-2 text-zinc-600 dark:text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      {mobileMenuOpen && <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 md:hidden"><div className="flex flex-col gap-2">{navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900">{item.label}</a>)}<Button asChild className="mt-2 bg-cyan-300 text-zinc-950 hover:bg-violet-300 rounded-full"><a href="#contact">Ξεκίνα ένα project</a></Button></div></div>}
    </motion.header>
  )
}
