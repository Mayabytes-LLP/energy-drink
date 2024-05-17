import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"

const satoshi = localFont({
  src: [
    {
      path: "../../public/assets/fonts/satoshi/Fonts/Satoshi-Variable.eot",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/satoshi/Fonts/Satoshi-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/satoshi/Fonts/Satoshi-Variable.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/satoshi/Fonts/Satoshi-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "100 900",
  style: "normal",
  preload: true,
  variable: "--font-satoshi",
})

const clashdisplay = localFont({
  src: [
    {
      path: "../../public/assets/fonts/clashdisplay/Fonts/ClashDisplay-Variable.eot",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/clashdisplay/Fonts/ClashDisplay-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/clashdisplay/Fonts/ClashDisplay-Variablewoff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/clashdisplay/Fonts/ClashDisplay-Variableoff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  weight: "100 900",
  style: "normal",
  preload: true,
  variable: "--font-clashdisplay",
})

export const metadata: Metadata = {
  title: "Energy Drinks",
  description: "Energy Drinks",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(satoshi.className, clashdisplay.variable, "min-h-screen")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
