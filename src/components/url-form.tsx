"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2, Search } from "lucide-react"

import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { useToast } from "../hooks/use-toast"

const formSchema = z.object({
  url: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .refine((url) => url.startsWith("http://") || url.startsWith("https://"), {
      message: "URL must start with http:// or https://",
    }),
})

export function UrlForm() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: values.url }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to analyze URL")
      }

      const analysisResults = await response.json()
      localStorage.setItem("analysisResults", JSON.stringify(analysisResults))
      navigate("/results")
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to analyze the URL. Please try again.",
        variant: "destructive",
      })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 text-muted-foreground">
                      <Search className="h-5 w-5" />
                    </div>
                    <Input
                      placeholder="Enter website URL (e.g., https://example.com)"
                      {...field}
                      disabled={isLoading}
                      className="h-14 pl-12 pr-32 text-base rounded-full border-2 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-2 h-10 px-6 rounded-full bg-primary hover:bg-primary/90 transition-colors"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing
                        </>
                      ) : (
                        "Analyze"
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="mt-2 text-center" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
