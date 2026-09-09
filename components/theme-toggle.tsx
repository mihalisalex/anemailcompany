"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Ενεργοποίηση light mode" : "Ενεργοποίηση dark mode") : "Toggle theme"}
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition-colors hover:border-violet-400/60 hover:text-violet-500 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:border-cyan-300/50 dark:hover:text-cyan-300 ${className}`}
    >
      <Sun className={`absolute h-4 w-4 transition-all duration-300 ${mounted && !isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"}`} />
      <Moon className={`absolute h-4 w-4 transition-all duration-300 ${mounted && isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-90"}`} />
    </button>
  )
}
