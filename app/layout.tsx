import "@/styles/globals.css"
import { Metadata } from "next"
import BgGradieant from "@/ui/BgGradieant"

import { siteConfig } from "@/config/site"
import { fontOutfit, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"

import Background3D from "../components/ui/Background3D"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "hsl(var(--primary))",
    },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "bg-background  remove-scroll-bar relative h-screen overflow-y-scroll  pt-28   font-sans antialiased",
            fontSans.variable,
            fontOutfit.variable
          )}
        >
          <BgGradieant />
          <SiteHeader />
          <Background3D />
          {children}
        </body>
      </html>
    </>
  )
}
