import type React from "react"
import { Zap, Shield, Smartphone, BarChart4, Search, FileText } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 space-y-2 rounded-lg transition-all hover:bg-muted/50">
      <div className="p-2 bg-primary/10 rounded-full text-primary">{icon}</div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Our web performance analyzer provides comprehensive insights to help you optimize your website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Zap className="h-6 w-6" />}
            title="Performance Metrics"
            description="Measure Core Web Vitals including LCP, FID, and CLS to understand your site's speed."
          />
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Accessibility Audit"
            description="Ensure your website is accessible to all users with WCAG compliance checks."
          />
          <Feature
            icon={<Smartphone className="h-6 w-6" />}
            title="Mobile Responsiveness"
            description="Test how your site performs across different devices and screen sizes."
          />
          <Feature
            icon={<BarChart4 className="h-6 w-6" />}
            title="Detailed Reports"
            description="Get comprehensive reports with actionable insights to improve your website."
          />
          <Feature
            icon={<Search className="h-6 w-6" />}
            title="SEO Analysis"
            description="Identify SEO issues that might be affecting your search engine rankings."
          />
          <Feature
            icon={<FileText className="h-6 w-6" />}
            title="Best Practices"
            description="Evaluate your site against web development best practices and standards."
          />
        </div>
      </div>
    </section>
  )
}
