import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin", "greek"], variable: "--font-manrope" })

export const metadata: Metadata = {
  title: "an email company — Κάνε το επόμενο βήμα",
  description: "SEO, email, AI bots, websites και e-shops για επιχειρήσεις που θέλουν να προχωρήσουν.",
  generator: "v0.app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="el" className="dark"><body className={`${manrope.variable} font-sans antialiased`}><div className="noise-overlay" aria-hidden="true" />{children}<Analytics /></body></html>
}
