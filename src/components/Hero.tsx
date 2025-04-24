import { ArrowRight } from "lucide-react"
import UrlForm from "./UrlForm"

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Left column - Text content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Analyze Your</span>
                <span className="block text-blue-600 dark:text-blue-400">Website Performance</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                Get detailed insights on web vitals and accessibility scores for any public URL. Improve your website's
                performance with actionable recommendations.
              </p>
              <div className="mt-2">
                <a
                  href="#analyze"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Start analyzing now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right column - Image/Animation */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-xl">
              {/* Placeholder for graphic/GIF */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <span className="text-sm">Visualization graphic will appear here</span>
              </div>
            </div>
          </div>

          {/* URL Form */}
          <div id="analyze" className="mt-16 max-w-3xl mx-auto">
            <UrlForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
