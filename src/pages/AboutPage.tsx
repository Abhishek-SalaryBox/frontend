import { Link } from "react-router-dom"
import { ArrowRight, Zap, Shield } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About WebPerformance Analyzer</h1>

          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              WebPerformance Analyzer is a tool designed to help developers and website owners understand and improve
              their website's performance and accessibility. Our tool provides detailed insights into Core Web Vitals
              and accessibility compliance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that the web should be fast and accessible for everyone. Our mission is to provide tools that
              make it easy for developers and website owners to identify performance and accessibility issues and fix
              them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">What We Measure</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <ul className="space-y-4">
                <li className="flex">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 dark:text-white">Largest Contentful Paint (LCP):</strong>
                    <p className="text-gray-600 dark:text-gray-300">
                      Measures loading performance. To provide a good user experience, LCP should occur within 2.5
                      seconds of when the page first starts loading.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 dark:text-white">First Input Delay (FID):</strong>
                    <p className="text-gray-600 dark:text-gray-300">
                      Measures interactivity. To provide a good user experience, pages should have a FID of 100
                      milliseconds or less.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 dark:text-white">Cumulative Layout Shift (CLS):</strong>
                    <p className="text-gray-600 dark:text-gray-300">
                      Measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1
                      or less.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 dark:text-white">Accessibility Score:</strong>
                    <p className="text-gray-600 dark:text-gray-300">
                      Based on WCAG guidelines, measuring how accessible your website is to all users, including those
                      with disabilities.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">How It Works</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-gray-900 dark:text-white">
                  <span>You submit a URL through our interface</span>
                </li>
                <li className="text-gray-900 dark:text-white">
                  <span>Our backend receives the request</span>
                </li>
                <li className="text-gray-900 dark:text-white">
                  <span>We run a headless browser to load and analyze the page</span>
                </li>
                <li className="text-gray-900 dark:text-white">
                  <span>We collect performance metrics and run accessibility audits</span>
                </li>
                <li className="text-gray-900 dark:text-white">
                  <span>The data is processed and stored for reference</span>
                </li>
                <li className="text-gray-900 dark:text-white">
                  <span>Results are displayed in an easy-to-understand format with actionable insights</span>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We are a team of passionate web developers and designers who care deeply about web performance and
              accessibility. Our combined experience spans over a decade in building fast, accessible, and user-friendly
              web applications.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Start Analyzing Your Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
