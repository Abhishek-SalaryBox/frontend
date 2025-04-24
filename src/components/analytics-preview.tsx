"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Progress } from "./ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

export function AnalyticsPreview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sample performance data
  const performanceData = [
    { name: "LCP", value: 2.1, limit: 2.5, color: "#22c55e" },
    { name: "FID", value: 85, limit: 100, color: "#22c55e" },
    { name: "CLS", value: 0.08, limit: 0.1, color: "#22c55e" },
    { name: "TTFB", value: 210, limit: 200, color: "#eab308" },
  ]

  // Sample accessibility data
  const accessibilityData = [
    { name: "Contrast", value: 92 },
    { name: "Alt Text", value: 85 },
    { name: "ARIA", value: 78 },
    { name: "Keyboard", value: 95 },
  ]

  // Sample colors for pie chart
  const COLORS = ["#3b82f6", "#22c55e", "#eab308", "#ef4444"]

  // Sample historical data
  const historicalData = [
    { date: "Jan", score: 72 },
    { date: "Feb", score: 75 },
    { date: "Mar", score: 78 },
    { date: "Apr", score: 82 },
    { date: "May", score: 85 },
    { date: "Jun", score: 89 },
  ]

  if (!mounted) {
    return (
      <Card className="w-full max-w-xl shadow-lg border-2">
        <CardContent className="p-6">
          <div className="h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Loading analytics preview...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-xl shadow-lg border-2">
      <CardContent className="p-6">
        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <h3 className="text-lg font-medium">Core Web Vitals</h3>
            <div className="space-y-6">
              {performanceData.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground">
                        ({item.value} / {item.limit} {item.name === "CLS" ? "" : "ms"})
                      </span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        item.value <= item.limit ? "text-green-500" : "text-amber-500"
                      }`}
                    >
                      {item.value <= item.limit ? "Good" : "Needs Improvement"}
                    </span>
                  </div>
                  <Progress
                    value={(item.value / item.limit) * 100}
                    className={`h-2 ${item.value <= item.limit ? "bg-green-500" : "bg-amber-500"}`}
                  />
                </div>
              ))}
            </div>

            <div className="h-[200px] mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#3b82f6" name="Value" />
                  <Bar dataKey="limit" fill="#94a3b8" name="Limit" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-4">
            <h3 className="text-lg font-medium">Accessibility Score</h3>
            <div className="flex justify-center mb-6">
              <div className="relative flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle cx="64" cy="64" r="60" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 60 * 0.88} ${2 * Math.PI * 60 * (1 - 0.88)}`}
                    strokeDashoffset={2 * Math.PI * 60 * 0.25}
                    strokeLinecap="round"
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-3xl font-bold">88</div>
                  <div className="text-sm text-muted-foreground">/ 100</div>
                </div>
              </div>
            </div>

            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={accessibilityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {accessibilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <h3 className="text-lg font-medium">Performance Trends</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Performance Score"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
