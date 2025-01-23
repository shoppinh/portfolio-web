import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mac Trung Kien - Full-Stack Developer",
  description: "Building seamless and scalable applications with a touch of innovation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

