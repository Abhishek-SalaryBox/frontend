import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

interface Insight {
  category: string
  title: string
  description: string
  impact: "high" | "medium" | "low"
  recommendation: string
}

interface ActionableInsightsProps {
  insights: Insight[]
}

export function ActionableInsights({ insights }: ActionableInsightsProps) {
  const getImpactBadge = (impact: string) => {
    const baseClasses = "px-2 py-0.5 rounded-full text-xs ml-2"
    switch (impact) {
      case "high":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`
      case "medium":
        return `${baseClasses} bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200`
      case "low":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200`
    }
  }

  // Group insights by category
  const groupedInsights = insights.reduce(
    (acc, insight) => {
      if (!acc[insight.category]) {
        acc[insight.category] = []
      }
      acc[insight.category].push(insight)
      return acc
    },
    {} as Record<string, Insight[]>,
  )

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Actionable Insights</CardTitle>
        <CardDescription>Recommendations to improve your website's performance and accessibility</CardDescription>
      </CardHeader>
      <CardContent>
        {Object.entries(groupedInsights).map(([category, categoryInsights]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-medium mb-3">{category}</h3>
            <Accordion type="single" collapsible className="w-full">
              {categoryInsights.map((insight, index) => (
                <AccordionItem key={index} value={`${category}-${index}`}>
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <span>{insight.title}</span>
                      <span className={getImpactBadge(insight.impact)}>{insight.impact} impact</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pt-2">
                      <p className="text-muted-foreground">{insight.description}</p>
                      <div>
                        <h4 className="font-medium">Recommendation:</h4>
                        <p>{insight.recommendation}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
