import type React from "react"
import type { Metadata } from "next"
import { Manrope, Baloo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin", "greek"], variable: "--font-manrope" })
const baloo = Baloo_2({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-baloo" })

export const metadata: Metadata = {
  title: "an email company — Κάνε το επόμενο βήμα",
  description: "SEO, email, AI bots, websites και e-shops για επιχειρήσεις που θέλουν να προχωρήσουν.",
  generator: "v0.app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className={`${manrope.variable} ${baloo.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
