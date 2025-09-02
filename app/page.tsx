import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { HighlightCards } from "@/components/highlight-cards"
import { UMKMSection } from "@/components/umkm-section"
import { NewsSection } from "@/components/news-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation/>
      <main className="flex-1">
        <HeroSection/>
        <HighlightCards/>
        <UMKMSection/>
        <NewsSection/>
      </main>
      <Footer/>
    </div>
  )
}
