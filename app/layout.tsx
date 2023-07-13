import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contabilidade 4G',
  description: 'Escritório de contabilidade 4G - Maringá',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="flex flex-col items-center justify-between p-4">
          <div className="w-full h-[calc(100vh-7rem)] relative">
          {children}
          </div>
        </main>
      </body>
    </html>
  )
}
