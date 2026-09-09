"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return <section id="contact" className="px-5 sm:px-8 lg:px-12 py-32"><motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[oklch(0.68_0.24_292)] via-[oklch(0.58_0.22_305)] to-[oklch(0.48_0.2_250)] text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-[0_0_80px_oklch(0.5_0.2_292/.18)]"><div className="relative z-10 max-w-3xl"><p className="text-sm uppercase tracking-[.2em] mb-6 opacity-70">Το επόμενο κεφάλαιο ξεκινά εδώ</p><h2 className="text-5xl sm:text-7xl lg:text-8xl leading-[.9] tracking-[-.06em] font-bold mb-8">Έχεις μια καλή<br />ιδέα για εμάς;</h2><p className="max-w-lg text-lg leading-7 opacity-75 mb-10">Πες μας τι ετοιμάζεις, τι έχει κολλήσει ή τι θέλεις να κάνεις πραγματικότητα. Θα επιστρέψουμε με μια ξεκάθαρη άποψη.</p><Button asChild size="lg" className="rounded-full bg-white text-zinc-950 hover:bg-zinc-200 h-14 px-8"><a href="mailto:hello@anemailcompany.com">hello@anemailcompany.com <ArrowUpRight className="ml-2 h-5 w-5" /></a></Button></div><div className="absolute -right-10 -bottom-28 text-[22rem] leading-none font-bold tracking-[-.15em] opacity-10">e/</div></motion.div></section>
}
