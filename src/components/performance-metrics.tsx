import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { HelpCircle } from "lucide-react"

interface Metric {
  name: string
  value: number
  unit: string
  rating: "good" | "needs-improvement" | "poor"
  description: string
}

interface PerformanceMetricsProps {
  metrics: Metric[]
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "good":
        return "text-green-500"
      case "needs-improvement":
        return "text-amber-500"
      case "poor":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Web Vitals</CardTitle>
        <CardDescription>Core Web Vitals and performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric) => (
            <div key={metric.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">{metric.name}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{metric.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-bold ${getRatingColor(metric.rating)}`}>
                {metric.value.toFixed(2)}  {metric.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
