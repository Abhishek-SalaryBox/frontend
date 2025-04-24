import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

interface AccessibilityIssue {
  type: string
  description: string
  impact: "critical" | "serious" | "moderate" | "minor"
  count: number
}

interface AccessibilityScoreProps {
  score: {
    overall: number
    issues: AccessibilityIssue[]
  }
}

export function AccessibilityScore({ score }: AccessibilityScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 70) return "text-amber-500"
    return "text-red-500"
  }

  const getProgressColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-amber-500"
    return "bg-red-500"
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "serious":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "minor":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accessibility</CardTitle>
        <CardDescription>WCAG compliance and accessibility issues</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 text-center">
          <span className={`text-5xl font-bold ${getScoreColor(score.overall)}`}>{score.overall}</span>
          <span className="text-2xl">/100</span>
          <Progress value={score.overall} className={`h-2 mt-2 ${getProgressColor(score.overall)}`} />
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="font-medium">Issues Found:</h3>
          {score.issues.length === 0 ? (
            <p className="text-green-500">No accessibility issues found!</p>
          ) : (
            <div className="space-y-2">
              {score.issues.map((issue, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-center justify-between">
                    <span>{issue.type}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getImpactColor(issue.impact)}`}>
                      {issue.impact} ({issue.count})
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">{issue.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
