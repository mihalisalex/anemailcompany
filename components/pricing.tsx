"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const models = [
  { title: "Ένα στοχευμένο project", text: "Ένα νέο website, μια πιο δυνατή βάση SEO ή ένα email σύστημα που επιτέλους λειτουργεί. Καθαρό scope, έμπειρη ομάδα, συγκεκριμένο αποτέλεσμα.", items: ["Ξεκάθαρο αποτέλεσμα", "Αφοσιωμένη ομάδα", "Launch και παράδοση"], featured: false },
  { title: "Ένα growth sprint", text: "Για τις στιγμές που χρειάζεται να κινηθείς γρήγορα. Βρίσκουμε την ευκαιρία με τον μεγαλύτερο αντίκτυπο και την υλοποιούμε σε εβδομάδες, όχι τρίμηνα.", items: ["Στρατηγική και προτεραιότητες", "Γρήγορη δημιουργία και υλοποίηση", "Μετράμε τι άλλαξε"], featured: true },
  { title: "Η digital ομάδα σου", text: "Ένας σταθερός συνεργάτης για όλα τα ενδιάμεσα. Ευέλικτη υποστήριξη, φρέσκια σκέψη και καθόλου agency θέατρο.", items: ["Μηνιαία διαθεσιμότητα", "Συνεχής βελτιστοποίηση", "Μια ομάδα που σε ξέρει"], featured: false },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return <section id="process" className="px-5 sm:px-8 lg:px-12 py-28 bg-zinc-50 dark:bg-zinc-900/40"><div className="max-w-7xl mx-auto"><motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6"><div><p className="text-sm uppercase tracking-[.2em] text-violet-600 dark:text-violet-300 mb-5">Πώς δουλεύουμε</p><h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white">Καλή δουλειά,<br /><span className="text-zinc-500">χωρίς περιττές διαδρομές.</span></h2></div><p className="text-zinc-600 dark:text-zinc-400 leading-7 max-w-md">Διάλεξε τον τρόπο που ταιριάζει στην ανάγκη σου. Κάθε συνεργασία ξεκινά με μια συζήτηση, όχι με έναν τιμοκατάλογο.</p></motion.div><div className="grid grid-cols-1 lg:grid-cols-3 gap-4">{models.map((model, index) => <motion.article key={model.title} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * .1 }} className={`relative flex min-h-[350px] flex-col rounded-2xl p-7 border ${model.featured ? "bg-violet-400 text-zinc-950 border-violet-300" : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white"}`}><span className="text-sm font-mono opacity-60">0{index + 1}</span><h3 className="text-2xl font-semibold mt-8 mb-4">{model.title}</h3><p className="text-sm leading-6 opacity-70 mb-5">{model.text}</p><ul className="space-y-2">{model.items.map(item => <li key={item} className="flex gap-3 items-center text-sm"><Check className="h-4 w-4 shrink-0" />{item}</li>)}</ul><Button asChild variant={model.featured ? "default" : "outline"} className={`mt-auto self-start rounded-full ${model.featured ? "bg-zinc-950 text-white hover:bg-zinc-800" : "border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"}`}><a href="#contact">Ας μιλήσουμε <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button></motion.article>)}</div></div></section>
}
