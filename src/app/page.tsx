import { UrlForm } from "@/components/url-form"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <HeroSection />
      <div className="max-w-2xl mx-auto mt-8">
        <UrlForm />
      </div>
    </main>
  )
}
