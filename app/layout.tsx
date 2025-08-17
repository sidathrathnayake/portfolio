import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "AI Travel Planner - Your Next Adventure Awaits",
  description:
    "Create personalized travel itineraries with AI. Plan your perfect trip with smart recommendations for destinations, activities, and experiences.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
  --font-heading: ${spaceGrotesk.variable};
}
        `}</style>
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
