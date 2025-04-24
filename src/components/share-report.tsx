"use client"

import { useState } from "react"
import { Share2, Check, Copy } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { useToast } from "../hooks/use-toast"

interface ShareReportProps {
  reportId: string
  url: string
}

export function ShareReport({ reportId, url }: ShareReportProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  // Since we're not using report IDs anymore with direct response,
  // we'll just share the current URL
  const reportUrl = window.location.href

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(reportUrl)
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Report URL copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually",
        variant: "destructive",
      })
    }
  }

  const shareReport = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Web Performance Report for ${url}`,
          text: `Check out this web performance and accessibility report for ${url}`,
          url: reportUrl,
        })
        toast({
          title: "Shared!",
          description: "Report shared successfully",
        })
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast({
            title: "Failed to share",
            description: "Please try again or copy the link manually",
            variant: "destructive",
          })
        }
      }
    } else {
      copyToClipboard()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share This Report</CardTitle>
        <CardDescription>Share these insights with your team or clients</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Input value={reportUrl} readOnly />
          <Button variant="outline" size="icon" onClick={copyToClipboard} className="shrink-0">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy</span>
          </Button>
          <Button onClick={shareReport} className="shrink-0">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
