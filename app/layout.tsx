import { Landing } from "@/sections/Landing"

import "@/styles/globals.css"
import { Metadata } from "next"
import BgGradieant from "@/ui/BgGradieant"

import { siteConfig } from "@/config/site"
import { fontOutfit, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "red" },
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
            "bg-background scrollbar-track-primary/40 scrollbar-w-1  scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar relative  h-screen  font-sans antialiased ",
            fontSans.variable,
            fontOutfit.variable
          )}
        >
          <BgGradieant />
          <SiteHeader />
          <main className="  relative h-screen   ">
            <Landing />
            {children}
          </main>
        </body>
      </html>
    </>
  )
}
