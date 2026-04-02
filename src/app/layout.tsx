import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('@/components/Cursor/Cursor'), { ssr: false })

export const metadata: Metadata = {
  title: 'Ami',
  description: 'Software developer',
  openGraph: {
    title: 'Ami',
    description: 'Software developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}