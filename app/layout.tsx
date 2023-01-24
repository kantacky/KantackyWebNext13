import '../styles/reset.scss'
import { Roboto } from '@next/font/google'
import React from 'react'
import '../styles/globals.scss'
import Footer from './Footer'
import Header from './Header'

const roboto = Roboto({ weight: ['100', '400'], subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} className={roboto.className}>
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
