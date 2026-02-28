import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
