'use client';

import {RoehrigClickerComponent} from "@/components/roehrig-clicker";
import {SessionProvider} from "next-auth/react";
import {Helmet} from "react-helmet";
import React from "react";


export default function RoehrigPage() {
  return (
    <section className="relative">
        <Helmet>
            <title>Stats - time2shine</title>
            <meta name="description" content="Online Gaming Platform" />
        </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                  <h1 className="h1" data-aos="fade-up">Röhrig Clicker.</h1>
                  <p className="text-xs text-gray-500 mb-8" data-aos="fade-up" data-aos-delay="200">*All similarity to
                      real existing persons is purely coincidental.</p>
                  <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Help Röhrig grade
                      exams by clicking him as often as possible.</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                  </div>
              </div>
              <SessionProvider>
                  <RoehrigClickerComponent/>
              </SessionProvider>
          </div>
      </div>
    </section>
  )
}
