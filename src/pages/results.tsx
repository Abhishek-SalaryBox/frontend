import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PerformanceMetrics } from "../components/performance-metrics"
import { AccessibilityScore } from "../components/accessibility-score"
import { ActionableInsights } from "../components/actionable-insights"
// import { ShareReport } from "../components/share-report"
import { Loader2 } from "lucide-react"

interface PerformanceMetric {
  name: string
  value: number
  unit: string
  rating: "good" | "needs-improvement" | "poor"
  description: string
}

interface AccessibilityIssue {
  type: string
  description: string
  impact: "critical" | "serious" | "moderate" | "minor"
  count: number
}

interface Insight {
  category: string
  title: string
  description: string
  impact: "high" | "medium" | "low"
  recommendation: string
}

interface AnalysisResults {
  id: string
  url: string
  timestamp: string
  metrics: PerformanceMetric[]
  accessibility: {
    overall: number
    issues: AccessibilityIssue[]
  }
  insights: Insight[]
}

export default function ResultsPage() {
  const [results, setResults] = useState<AnalysisResults | null>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Get results from localStorage
    const storedResults = localStorage.getItem("analysisResults")

    if (storedResults) {
      try {
        setResults(JSON.parse(storedResults))
      } catch (error) {
        console.error("Failed to parse stored results:", error)
        navigate("/")
      }
    } else {
      // If no results, redirect to home
      navigate("/")
    }

    setLoading(false)
  }, [navigate])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p>Loading results...</p>
        </div>
      </div>
    )
  }

  if (!results) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto p-6 bg-destructive/10 rounded-lg">
          <h1 className="text-2xl font-bold text-destructive mb-2">No Results Found</h1>
          <p>Please return to the home page and analyze a website.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Performance Report: {results.url}</h1>
        <p className="text-muted-foreground">Analyzed on {new Date(results.timestamp).toLocaleString()}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PerformanceMetrics metrics={results.metrics} />
        <AccessibilityScore score={results.accessibility} />
      </div>

      <ActionableInsights insights={results.insights} />

      {/* <div className="mt-8">
        <ShareReport reportId={results.id} url={results.url} />
      </div> */}
    </main>
  )
}
