import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { BentoGrid } from "@/components/bento-grid"
import { Team } from "@/components/team"
import { SectionDivider } from "@/components/section-divider"
import { ClientShowcase } from "@/components/client-showcase"
import { ToolsStack } from "@/components/tools-stack"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return <SmoothScroll><main className="min-h-screen bg-white dark:bg-zinc-950"><Navbar /><Hero /><LogoMarquee /><SectionDivider label="// ΦΟΡΤΩΣΗ_ΥΠΗΡΕΣΙΩΝ" /><BentoGrid /><SectionDivider label="// ΕΝΕΡΓΟΠΟΙΗΣΗ_ΟΜΑΔΑΣ" /><Team /><SectionDivider label="// ΜΕΤΑΒΑΣΗ_ΣΕ_CASE_FILES" /><ClientShowcase /><ToolsStack /><Pricing /><FinalCTA /><Footer /></main></SmoothScroll>
}
