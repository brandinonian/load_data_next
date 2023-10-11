import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/_components/navbar'

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
    <html lang='en'>
      <body>
        <header>
          <Navbar />
        </header>

        <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}
