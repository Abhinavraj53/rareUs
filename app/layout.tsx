import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { League_Spartan } from "next/font/google"
import ClientLayout from "./ClientLayout"
import "./globals.css"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
})

export const metadata: Metadata = {
  title: "rareUs - Digital Services Company",
  description:
    "Transform your digital presence with rareUs - Your strategic partner for digital marketing, web development, and business growth solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${leagueSpartan.variable}`}>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
