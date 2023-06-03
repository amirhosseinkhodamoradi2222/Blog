import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '‌Blog',
  description: 'Generated Amir Hossein Khodamoradi',
}

export default function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
