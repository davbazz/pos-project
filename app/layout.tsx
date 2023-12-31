import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'
import NotSupportedMessage from '@/components/molecules/NotSupportedMessage'
import type { Metadata } from 'next'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QPOS',
  description: 'QRCode based POS system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <main className="hidden lg:block">{children}</main>
        <NotSupportedMessage />
        <Analytics />
      </body>
    </html>
  )
}
