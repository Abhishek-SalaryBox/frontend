
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { UrlForm } from "./url-form"
import { PerformanceVisualization } from "./performance-visualization"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Pane - Headline and Form */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Analyze Your Website Performance
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                Get detailed insights on web vitals and accessibility scores for any public URL. Improve your website's
                performance with actionable recommendations.
              </p>
            </div>

            <div className="mt-6" id="analyze">
              <UrlForm />
            </div>

            <Link to="/about">
              <Button variant="ghost">Learn More</Button>
            </Link>
          </div>

          {/* Right Pane - Performance Visualization */}
          <div className="flex justify-center items-center h-[400px]">
            <PerformanceVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}
