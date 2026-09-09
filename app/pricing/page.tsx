import type { Metadata } from "next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { PricingHero } from "@/components/pricing-hero"
import { SectionDivider } from "@/components/section-divider"
import { PricingPackages } from "@/components/pricing-packages"
import { PricingCatalog } from "@/components/pricing-catalog"
import { PricingTrust } from "@/components/pricing-trust"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Τιμές — an email company",
  description: "Agency quality, startup pricing. Διαφανείς τιμές για websites, e-shops, SEO, AI και digital growth.",
}

export default function PricingPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        <Navbar />
        <PricingHero />
        <SectionDivider label="// ΦΟΡΤΩΣΗ_ΠΑΚΕΤΩΝ" />
        <PricingPackages />
        <SectionDivider label="// ΠΛΗΡΗΣ_ΚΑΤΑΛΟΓΟΣ" />
        <PricingCatalog />
        <PricingTrust />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
