"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Bot } from "lucide-react"

const team = [
  {
    tag: "AGENT_01",
    name: "Michail Alex",
    role: "Chief Engineer",
    ring: "border-violet-400/30 dark:border-violet-300/30",
    glow: "shadow-[0_0_40px_oklch(0.55_0.24_292_/_0.18)] dark:shadow-[0_0_40px_oklch(0.68_0.24_292_/_0.25)]",
    iconBg: "bg-violet-500 dark:bg-violet-400",
    text: "text-violet-600 dark:text-violet-300",
    conic: "from-violet-500 via-fuchsia-400 to-violet-500",
  },
  {
    tag: "AGENT_02",
    name: "Harry Mavraj",
    role: "Pro Coding Agent",
    ring: "border-cyan-400/30 dark:border-cyan-300/30",
    glow: "shadow-[0_0_40px_oklch(0.6_0.14_225_/_0.18)] dark:shadow-[0_0_40px_oklch(0.78_0.17_225_/_0.25)]",
    iconBg: "bg-cyan-500 dark:bg-cyan-300",
    text: "text-cyan-700 dark:text-cyan-300",
    conic: "from-cyan-400 via-blue-400 to-cyan-400",
  },
  {
    tag: "AGENT_03",
    name: "Lelos Babouk",
    role: "Sales Representative",
    ring: "border-blue-400/30 dark:border-blue-300/30",
    glow: "shadow-[0_0_40px_oklch(0.55_0.18_260_/_0.18)] dark:shadow-[0_0_40px_oklch(0.65_0.18_260_/_0.25)]",
    iconBg: "bg-blue-500 dark:bg-blue-400",
    text: "text-blue-700 dark:text-blue-300",
    conic: "from-blue-500 via-cyan-400 to-blue-500",
  },
  {
    tag: "AGENT_04",
    name: "Brick Tok",
    role: "Financial Idea Supervisor",
    ring: "border-pink-400/30 dark:border-pink-300/30",
    glow: "shadow-[0_0_40px_oklch(0.6_0.2_360_/_0.18)] dark:shadow-[0_0_40px_oklch(0.72_0.19_360_/_0.25)]",
    iconBg: "bg-pink-500 dark:bg-pink-400",
    text: "text-pink-700 dark:text-pink-300",
    conic: "from-pink-500 via-violet-400 to-pink-500",
  },
]

function TeamCard({ member, index, isInView }: { member: (typeof team)[number]; index: number; isInView: boolean }) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 200, damping: 18 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 18 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 16)
    rotateX.set(py * -16)
  }

  function handleLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 90, scale: 0.8, rotateX: -25, filter: "blur(16px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className="group relative rounded-3xl p-[1.5px] overflow-hidden"
      >
        <div className={`absolute -inset-[60%] animate-holo-spin bg-conic ${member.conic} opacity-70 dark:opacity-90`} />
        <div className={`relative rounded-3xl border ${member.ring} ${member.glow} bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md p-6 min-h-[280px] flex flex-col overflow-hidden transition-transform`}>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-current to-transparent opacity-[.06] animate-scan-sweep" />
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[.2em] text-zinc-400 dark:text-zinc-600">
            <span>{member.tag}</span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-glow" />online
            </span>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl ${member.iconBg} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              <Bot className="h-10 w-10" strokeWidth={1.75} />
              <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-zinc-950 bg-emerald-400" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="glitch-name text-lg font-black tracking-tight text-zinc-900 dark:text-white">{member.name}</p>
            <p className={`mt-1.5 font-mono text-[11px] uppercase tracking-[.14em] ${member.text}`}>{member.role}</p>
          </div>
          <div className="mt-auto pt-6 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 text-[9px] font-mono uppercase tracking-[.18em] text-zinc-400 dark:text-zinc-600">
            <span>sync 99.9%</span>
            <span>unit_{index + 1}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="team" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-20 dark:opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-violet-500/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 70, scale: 0.94, filter: "blur(12px)" }} animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-violet-600 dark:text-violet-300">// ποιοι είμαστε</p>
            <h2 className="text-5xl sm:text-6xl font-black leading-[.92] tracking-[-.06em] text-zinc-900 dark:text-white max-w-2xl">Η ομάδα πίσω<br /><span className="text-zinc-500">από τη μηχανή.</span></h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-7 max-w-md">Άνθρωποι, bots και ιδέες σε πλήρη σύνδεση — η μονάδα που κρατά το σύστημα online, 24/7.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamCard key={member.tag} member={member} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
