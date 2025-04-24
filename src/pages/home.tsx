import { HeroSection } from "../components/hero-section"
import FeaturesSection from "../components/features-section"
import TestimonialsSection from "../components/testimonials-section"
import CtaSection from "../components/cta-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
