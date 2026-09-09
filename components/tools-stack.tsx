"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Terminal } from "lucide-react"
import { useRef } from "react"

const tools = [
  { name: "OpenAI", slug: "openai" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "Claude", slug: "claude" },
  { name: "Gemini", slug: "google-gemini" },
  { name: "Perplexity", slug: "perplexity" },
  { name: "Midjourney", slug: "midjourney" },
  { name: "Runway", slug: "runway" },
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "Cursor", slug: "cursor" },
  { name: "Replit", slug: "replit" },
  { name: "Vercel", slug: "vercel" },
  { name: "LangChain", slug: "langchain" },
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Klaviyo", slug: "klaviyo" },
  { name: "Shopify", slug: "shopify" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Figma", slug: "figma" },
  { name: "Framer", slug: "framer" },
  { name: "Google Analytics", slug: "google-analytics" },
  { name: "Notion", slug: "notion" },
  { name: "Supabase", slug: "supabase" },
  { name: "Stripe", slug: "stripe" },
]

const logoUrl = (slug: string) => `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`

function ToolRail({ reverse = false }: { reverse?: boolean }) {
  const items = [...tools, ...tools]
  return (
    <div className={`relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${reverse ? "translate-x-6 sm:translate-x-12" : "-translate-x-3 sm:-translate-x-8"}`}>
      <div className={`flex w-max gap-3 ${reverse ? "animate-marquee-slow [animation-direction:reverse]" : "animate-marquee-slower"}`}>
        {items.map((tool, index) => (
          <div key={`${tool.name}-${index}`} className="group flex h-16 w-[150px] items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 shadow-[0_0_30px_rgba(118,88,255,0.05)] backdrop-blur transition-colors hover:border-cyan-300/50 hover:bg-zinc-800">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30 p-2">
              <img src={logoUrl(tool.slug)} alt={`${tool.name} logo`} className="h-full w-full object-contain opacity-80 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="text-xs font-medium leading-tight text-zinc-300 group-hover:text-white">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ToolsStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="tools" className="relative overflow-hidden border-y border-zinc-800 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-violet-300">// our stack</p>
            <h2 className="text-5xl font-black leading-[.88] tracking-[-.07em] text-white sm:text-7xl">Κώδικας,<br /><span className="text-zinc-600">αλλά με σκοπό.</span></h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-5 font-mono text-xs leading-6 text-zinc-400 backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-cyan-300"><Terminal size={14} /> <span>stack.config</span><span className="ml-auto text-zinc-600">live</span></div>
            <p><span className="text-violet-300">const</span> future = <span className="text-cyan-300">build</span>(strategy, creative, ai)</p>
            <p className="text-zinc-600">// κάθε εργαλείο υπηρετεί την ιδέα</p>
          </div>
        </motion.div>
        <div className="relative rounded-[2rem] border border-white/10 bg-black/20 py-5 shadow-[0_0_80px_rgba(118,88,255,0.08)]">
          <div className="mb-4 flex items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-500"><span>integrations / 024</span><span className="flex items-center gap-2 text-cyan-300"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> synced</span></div>
          <ToolRail />
          <ToolRail reverse />
          <div className="mt-4 flex items-center justify-center gap-2 px-5 text-center font-mono text-[10px] uppercase tracking-[.18em] text-zinc-600"><ArrowUpRight size={12} className="text-violet-300" /> ένα stack που μεγαλώνει μαζί με την ιδέα</div>
        </div>
      </div>
    </section>
  )
}

export default ToolsStack
