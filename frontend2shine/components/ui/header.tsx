"use client";

import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import { GithubLogin } from '@/components/github-login'
import { NavProfileEntry } from "@/components/nav-profile-entry";
import Logo from '@/public/images/logo.png'
import {SessionProvider, useSession} from "next-auth/react";

export default function Header() {
  return (
      <SessionProvider>
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="rounded-full" src={Logo} width={200} alt="time2shine Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/"
                      className="font-medium text-lg text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games"
                      className="font-medium text-lg text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/stats"
                      className="font-medium text-lg text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Stats
                </Link>
              </li>
                    <NavProfileEntry/>
            </ul>

            <ul className="flex grow justify-end flex-wrap items-center">

              <li>
                <GithubLogin/>

              </li>

            </ul>
          </nav>

          <MobileMenu/>

        </div>
      </div>
    </header>
      </SessionProvider>
  )
}
