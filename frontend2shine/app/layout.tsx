import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'time2shine',
  description: 'Online Gaming Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
    <PageIllustration/>
    <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Footer/>
          <Banner />
        </div>
      </body>
    </html>
  )
}
 