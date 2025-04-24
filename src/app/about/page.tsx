import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Web Performance Analyzer</h1>

        <div className="space-y-6">
          <p>
            Web Performance Analyzer is a tool designed to help developers and website owners understand and improve
            their website's performance and accessibility. Our tool provides detailed insights into Core Web Vitals and
            accessibility compliance.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>What We Measure</CardTitle>
              <CardDescription>Key metrics we analyze for your website</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. To provide a good user
                  experience, LCP should occur within 2.5 seconds of when the page first starts loading.
                </li>
                <li>
                  <strong>First Input Delay (FID):</strong> Measures interactivity. To provide a good user experience,
                  pages should have a FID of 100 milliseconds or less.
                </li>
                <li>
                  <strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. To provide a good user
                  experience, pages should maintain a CLS of 0.1 or less.
                </li>
                <li>
                  <strong>Accessibility Score:</strong> Based on WCAG guidelines, measuring how accessible your website
                  is to all users, including those with disabilities.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>The technology behind our analyzer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our tool uses a combination of technologies to provide accurate performance and accessibility metrics:
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                <li>You submit a URL through our interface</li>
                <li>Our FastAPI backend receives the request</li>
                <li>Playwright runs a headless browser to load and analyze the page</li>
                <li>We collect performance metrics and run accessibility audits</li>
                <li>The data is processed and stored for reference</li>
                <li>Results are displayed in an easy-to-understand format with actionable insights</li>
              </ol>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/">Start Analyzing Your Website</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
