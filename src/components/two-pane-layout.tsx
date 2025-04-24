import { useState } from "react"
import { UrlForm } from "./url-form"
import { ResultsDisplay } from "./results-display"

export function TwoPaneLayout() {
  const [analysisResults, setAnalysisResults] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalysisComplete = (results: any) => {
    setAnalysisResults(results)
    setIsLoading(false)
    setError(null)
  }

  const handleAnalysisStart = () => {
    setIsLoading(true)
    setError(null)
  }

  const handleAnalysisError = (errorMessage: string) => {
    setError(errorMessage)
    setIsLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <UrlForm
          onAnalysisStart={handleAnalysisStart}
          onAnalysisComplete={handleAnalysisComplete}
          onAnalysisError={handleAnalysisError}
        />
      </div>
      <div>
        <ResultsDisplay results={analysisResults} isLoading={isLoading} error={error} />
      </div>
    </div>
  )
}
