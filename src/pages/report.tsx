import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { PerformanceMetrics } from "../components/performance-metrics"
import { AccessibilityScore } from "../components/accessibility-score"
import { ActionableInsights } from "../components/actionable-insights"
import { ShareReport } from "../components/share-report"
import { Loader2 } from "lucide-react"

interface ReportData {
  id: string
  url: string
  timestamp: string
  metrics: any[]
  accessibility: any
  insights: any[]
}

export default function ReportPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [reportData, setReportData] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/report/${id}`)

        if (!response.ok) {
          if (response.status === 404) {
            navigate("/not-found", { replace: true })
            return
          }
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        setReportData(data)
      } catch (err) {
        setError((err as Error).message)
        console.error("Failed to fetch report:", err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchReportData()
    }
  }, [id, navigate])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p>Loading report data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto p-6 bg-destructive/10 rounded-lg">
          <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Report</h1>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!reportData) {
    return null
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Performance Report: {reportData.url}</h1>
        <p className="text-muted-foreground">Analyzed on {new Date(reportData.timestamp).toLocaleString()}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PerformanceMetrics metrics={reportData.metrics} />
        <AccessibilityScore score={reportData.accessibility} />
      </div>

      <ActionableInsights insights={reportData.insights} />

      <div className="mt-8">
        <ShareReport reportId={id || ""} url={reportData.url} />
      </div>
    </main>
  )
}
