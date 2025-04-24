"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Loader2, ArrowLeft, Share2, Download, AlertTriangle } from "lucide-react"

// Mock data for demonstration
const mockResults = {
  url: "https://example.com",
  timestamp: new Date().toISOString(),
  performance: {
    score: 87,
    metrics: [
      { name: "First Contentful Paint", value: 1.2, unit: "s", rating: "good" },
      { name: "Largest Contentful Paint", value: 2.4, unit: "s", rating: "good" },
      { name: "Cumulative Layout Shift", value: 0.05, unit: "", rating: "good" },
      { name: "Total Blocking Time", value: 120, unit: "ms", rating: "needs-improvement" },
    ],
  },
  accessibility: {
    score: 92,
    issues: [
      {
        type: "Color contrast",
        description: "Some text elements do not have sufficient contrast",
        impact: "moderate",
        count: 2,
      },
      { type: "Missing alt text", description: "Images missing alternative text", impact: "serious", count: 1 },
    ],
  },
  recommendations: [
    {
      category: "Performance",
      title: "Optimize images",
      description: "Properly size images and use modern formats",
      impact: "high",
    },
    {
      category: "Accessibility",
      title: "Add alt text",
      description: "Provide alternative text for all images",
      impact: "high",
    },
    {
      category: "Performance",
      title: "Reduce JavaScript",
      description: "Minimize and defer non-critical JavaScript",
      impact: "medium",
    },
  ],
}

const ResultsPage = () => {
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call to fetch results
    const fetchResults = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch(`${import.meta.env.VITE_API_URL}/results/${id}`)
        // if (!response.ok) throw new Error("Failed to fetch results")
        // const data = await response.json()

        // Simulate API delay
        setTimeout(() => {
          setResults(mockResults)
          setLoading(false)
        }, 1000)
      } catch (err) {
        setError("Failed to load results. Please try again.")
        setLoading(false)
      }
    }

    fetchResults()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 dark:text-blue-400 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Loading results...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Error Loading Results</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  if (!results) {
    return null
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 dark:text-green-400"
    if (score >= 70) return "text-amber-600 dark:text-amber-400"
    return "text-red-600 dark:text-red-400"
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-100 dark:bg-green-900"
    if (score >= 70) return "bg-amber-100 dark:bg-amber-900"
    return "bg-red-100 dark:bg-red-900"
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "good":
        return "text-green-600 dark:text-green-400"
      case "needs-improvement":
        return "text-amber-600 dark:text-amber-400"
      case "poor":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  const getImpactBadge = (impact: string) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    switch (impact) {
      case "high":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`
      case "medium":
        return `${baseClasses} bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200`
      case "low":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`
      case "critical":
        return `${baseClasses} bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200`
      case "serious":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`
      case "moderate":
        return `${baseClasses} bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200`
      case "minor":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`
    }
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Performance Report</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{results.url}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                Analyzed on {new Date(results.timestamp).toLocaleString()}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-2">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                <Download className="mr-2 h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Score Overview */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Performance Score */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Performance Score</h2>
              <div className="flex items-center">
                <div className={`text-5xl font-bold ${getScoreColor(results.performance.score)}`}>
                  {results.performance.score}
                </div>
                <div
                  className={`ml-4 h-16 w-16 rounded-full ${getScoreBg(results.performance.score)} flex items-center justify-center`}
                >
                  <span className={`text-2xl font-bold ${getScoreColor(results.performance.score)}`}>
                    {results.performance.score}/100
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {results.performance.metrics.map((metric: any, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{metric.name}</span>
                    <span className={`text-sm font-medium ${getRatingColor(metric.rating)}`}>
                      {metric.value}
                      {metric.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accessibility Score */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Accessibility Score</h2>
              <div className="flex items-center">
                <div className={`text-5xl font-bold ${getScoreColor(results.accessibility.score)}`}>
                  {results.accessibility.score}
                </div>
                <div
                  className={`ml-4 h-16 w-16 rounded-full ${getScoreBg(results.accessibility.score)} flex items-center justify-center`}
                >
                  <span className={`text-2xl font-bold ${getScoreColor(results.accessibility.score)}`}>
                    {results.accessibility.score}/100
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Issues Found:</h3>
                {results.accessibility.issues.length === 0 ? (
                  <p className="text-sm text-green-600 dark:text-green-400">No accessibility issues found!</p>
                ) : (
                  <div className="space-y-3">
                    {results.accessibility.issues.map((issue: any, index: number) => (
                      <div key={index} className="text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300">{issue.type}</span>
                          <span className={getImpactBadge(issue.impact)}>
                            {issue.impact} ({issue.count})
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{issue.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recommendations</h2>

            <div className="space-y-4">
              {results.recommendations.map((rec: any, index: number) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">{rec.title}</h3>
                    <span className={getImpactBadge(rec.impact)}>{rec.impact} impact</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{rec.description}</p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">Category: {rec.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Analyze Another Website
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage
