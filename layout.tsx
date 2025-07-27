import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MedFlux - Sistema de Gestão Clínica",
  description: "Sistema completo para gestão de clínicas e consultórios médicos",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/logo-icon.png" type="image/png" />
      </Head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
