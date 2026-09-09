"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, RefreshCw } from "lucide-react"

export function PricingTrust() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-28 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-violet-600 dark:text-violet-300">// agency quality. startup pricing.</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-[-.05em] text-zinc-900 dark:text-white">Διαφανείς τιμές.<br className="sm:hidden" /> <span className="text-zinc-500">Χωρίς εκπλήξεις.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.94 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300"><Zap className="h-5 w-5" /></div>
            <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-white">One-time projects</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Ένα project. Μία ξεκάθαρη τιμή. Το κρατάς — χωρίς μηνιαία δέσμευση.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.94 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"><RefreshCw className="h-5 w-5" /></div>
            <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Monthly services</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Απλά μηνιαία πλάνα. Αναβάθμισε, υποβάθμισε ή ακύρωσε όποτε θες.</p>
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.35 }} className="mt-10 text-center text-xs leading-6 text-zinc-400 dark:text-zinc-600 max-w-2xl mx-auto">
          Οι τιμές είναι ενδεικτικές αρχικές τιμές και μπορεί να διαφέρουν ανάλογα με τις απαιτήσεις του project, integrations, όγκο περιεχομένου και κόστη τρίτων. Διαφημιστικό budget, paid software, premium plugins, domains και εξωτερικά API δεν περιλαμβάνονται εκτός αν αναφέρεται ρητά.
        </motion.p>
      </div>
    </section>
  )
}
