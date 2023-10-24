import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import NavBar from './components/Navbar/Navbar'
import Loading from './components/Loading/Loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Academy',
  description: 'A fun supplemental educational tool!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
          <NavBar />
          <main className='p-5'>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
      </body>
    </html>
  )
}
