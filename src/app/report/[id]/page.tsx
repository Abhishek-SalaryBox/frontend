import { notFound } from "next/navigation"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { AccessibilityScore } from "@/components/accessibility-score"
import { ActionableInsights } from "@/components/actionable-insights"
import { ShareReport } from "@/components/share-report"

interface ReportPageProps {
  params: {
    id: string
  }
}

async function getReportData(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/report/${id}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("Failed to fetch report:", error)
    return null
  }
}

export default async function ReportPage({ params }: ReportPageProps) {
  const reportData = await getReportData(params.id)

  if (!reportData) {
    notFound()
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
        <ShareReport reportId={params.id} url={reportData.url} />
      </div>
    </main>
  )
}
