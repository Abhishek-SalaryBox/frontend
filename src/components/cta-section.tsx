"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export default function CtaSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Improve Your Website?</h2>
          <p className="max-w-[700px] md:text-xl">
            Start analyzing your website's performance and get actionable insights today.
          </p>
          <Button onClick={scrollToTop} variant="secondary" size="lg" className="mt-4 group">
            Analyze Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
