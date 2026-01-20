import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScrollWrapper } from "@/components/smooth-scroll-wrapper"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: "MM Yazılım - Yazılımın Dünyası",
  description: "Modern teknolojilerle işinizi geleceğe taşıyoruz. Web, mobil ve kurumsal yazılım çözümleri.",
  metadataBase: new URL("https://mmyazilim.com.tr"),
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={instrumentSerif.variable}>
      <body className={`font-sans antialiased`}>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <Analytics />
      </body>
    </html>
  )
}
