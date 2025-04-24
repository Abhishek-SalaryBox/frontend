import type React from "react"
import { ThemeProvider } from "./theme-provider"
import { Toaster } from "./ui/toaster"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
      <Toaster />
    </ThemeProvider>
  )
}
