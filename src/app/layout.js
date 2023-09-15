import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@components/Header'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TitanStar Legends',
  description: 'Rune mastery loadout for TitanStar Legends.',
}

// Set the global site layout. In this case, all pages will have the same
// Header and Footer.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
