import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MetalTech, Inc. | Custom Welding & Metal Fabrication | Oklahoma City, OK",
  description:
    "MetalTech, Inc. is Oklahoma City's trusted metal fabrication and welding company. Custom design, professional welding, and production fabrication. 5-star rated. Call (405) 659-9911.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
