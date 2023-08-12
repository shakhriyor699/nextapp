import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.scss'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyApp',
  description: 'This is description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
