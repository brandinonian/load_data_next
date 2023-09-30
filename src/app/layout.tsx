import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Load Data Live',
  description: 'By Brandon Phillips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div>
      <Navbar />
      <main className={inter.className}>{children}</main>
    </div>
  )
}
