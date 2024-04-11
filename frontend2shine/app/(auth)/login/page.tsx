export const metadata = {
    title: 'Sign In - time2shine',
    description: 'Online Gaming Platform',
}

import Link from 'next/link'
import { LoginForm } from '@/components/login'

export default function LoginPage() {
  return (
      <>
        <section className="bg-ct-blue-600 min-h-screen pt-20">

          <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <LoginForm />
            </div>
          </div>
        </section>
      </>
  );
}
