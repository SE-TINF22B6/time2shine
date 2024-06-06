'use client';

import {BlackJackRedirect} from "@/components/blackjack-redirect";
import {SessionProvider} from "next-auth/react";
import {Helmet} from "react-helmet";
import React from "react";
import {SnakeRedirect} from "@/components/snake-redirect";

export default function BlackjackPage() {
  return (
    <section className="relative">
        <Helmet>
            <title>Games - time2shine</title>
            <meta name="description" content="Online Gaming Platform" />
        </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                  <h1 className="h1 mb-4" data-aos="fade-up">Snake.</h1>
                  <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
                      Enjoy playing the different version of snake</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div data-aos="fade-up" data-aos-delay="400">
                          <SessionProvider>
                              <SnakeRedirect/>
                          </SessionProvider>
                      </div>
                  </div>
              </div>


              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>Snake Extreme Regeln:</p>
              <p>1. Steuere deine Schlange und sammle so viele Punkte wie möglich, indem du Früchte isst. Aber pass auf
                  die Wände und deinen eigenen Körper auf!</p>

              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>2. Spielaufbau:</p>
              <p>Snake Extreme ist eine aufregende Version des klassischen Snake-Spiels. Mit neuen Herausforderungen und
                  coolen Features macht es doppelt so viel Spaß!</p>

              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>3. Spielablauf:</p>
              <p>Jede gegessene Frucht verlängert deine Schlange und bringt dir Punkte.</p>
              <p>Wenn du mit der Schlange gegen die Wand oder in dich selbst fährst, ist das Spiel vorbei. Aber Achtung:
                  Wenn du in der Mitte getroffen wirst, halbiert sich deine Schlange einmalig, um dir eine zweite Chance
                  zu geben!</p>

              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>4. Steuerung:</p>
              <p>Linke Hälfte der Schlange (WASD): Steuere die Schlange nach oben, unten, links und rechts.</p>
              <p>Rechte Hälfte der Schlange (IJKL): Steuere den rechten Teil deiner Schlange.</p>





          </div>
      </div>
    </section>
  )
}
