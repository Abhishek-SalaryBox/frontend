import { Zap, Shield, BarChart3, Lightbulb } from "lucide-react"

const features = [
  {
    name: "Performance Metrics",
    description: "Measure Core Web Vitals including LCP, FID, and CLS to understand your site's performance.",
    icon: Zap,
  },
  {
    name: "Accessibility Audit",
    description: "Comprehensive accessibility checks based on WCAG guidelines to ensure your site works for everyone.",
    icon: Shield,
  },
  {
    name: "Detailed Reports",
    description: "Get comprehensive reports with visualizations to understand your site's strengths and weaknesses.",
    icon: BarChart3,
  },
  {
    name: "Actionable Insights",
    description: "Receive specific recommendations to improve your site's performance and accessibility.",
    icon: Lightbulb,
  },
]

const Features = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Everything you need to analyze and improve your website's performance
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
              >
                <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
