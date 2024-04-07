export const metadata = {
  title: 'time2shine',
  description: 'Online Gaming Platform',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  )

}

