import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Socially — Social analytics, made clear",
  description: "Track reach, engagement, audience growth, and top-performing content across your social channels.",
}

export const viewport: Viewport = {
  themeColor: "#f7f8f5",
  colorScheme: "light",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  )
}
