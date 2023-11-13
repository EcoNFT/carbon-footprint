import '@/styles/globals.css'

import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

import ClientLayout from '@/components/Web3Provider'

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

// Meta details
export const metadata: Metadata = {
  title: 'EcoNFT - A new way to protect Ecosystem',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
