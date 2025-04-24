import { Loader2 } from "lucide-react"
import { PerformanceMetrics } from "./performance-metrics"
import { AccessibilityScore } from "./accessibility-score"
import { ActionableInsights } from "./actionable-insights"
import { ShareReport } from "./share-report"
import { Card, CardContent } from "./ui/card"

interface ResultsDisplayProps {
  results: any
  isLoading: boolean
  error: string | null
}

export function ResultsDisplay({ results, isLoading, error }: ResultsDisplayProps) {
  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-lg font-medium">Analyzing website...</p>
          <p className="text-muted-foreground">This may take a few moments</p>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardContent className="py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-destructive mb-2">Analysis Failed</h3>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!results) {
    return (
      <Card>
        <CardContent className="py-12">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">No Analysis Results</h3>
            <p className="text-muted-foreground">Enter a URL and click "Analyze Website" to get started</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Analysis Results</h2>
        <p className="text-muted-foreground">
          Analysis for{" "}
          <a href={results.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {results.url}
          </a>
          <span className="text-muted-foreground ml-2">{new Date(results.timestamp).toLocaleString()}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PerformanceMetrics metrics={results.metrics} />
        <AccessibilityScore score={results.accessibility} />
      </div>

      <ActionableInsights insights={results.insights} />

      <div className="mt-6">
        <ShareReport reportId={results.id} url={results.url} />
      </div>
    </div>
  )
}
