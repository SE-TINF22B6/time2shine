'use client';

import {BlackJackRedirect} from "@/components/blackjack-redirect";
import {SessionProvider} from "next-auth/react";
import {Helmet} from "react-helmet";
import React from "react";
import {RoehrigRedirect} from "@/components/roehrig-redirect";

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
                  <h1 className="h1 mb-4" data-aos="fade-up">RoehrigClicker.</h1>
                  <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Enjoy the one and only Roehrig Clicker</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div data-aos="fade-up" data-aos-delay="400">
                          <SessionProvider>
                              <RoehrigRedirect/>
                          </SessionProvider>
                      </div>
                  </div>
              </div>


              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>RoehrigClicker Regeln:</p>
              <p>1. Klicke auf die Roehrig, um Punkte zu sammeln. Jeder Klick bringt dich näher zum ultimativen
                  Ruhm!</p>
              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>2. Spielaufbau:</p>
              <p>RoehrigClicker ist inspiriert von CookieClicker, einem der süßesten und süchtig machendsten Spiele
                  überhaupt. Anstatt Kekse zu backen, sammelst du Roehrig-Punkte, die in die unendliche Roehrig-Welt
                  führen.</p>
              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>3. Spielablauf:</p>
              <p>Jeder Klick bringt dir einen Roehrig-Punkt.</p>
              <p>Mit den gesammelten Punkten kannst du Upgrades kaufen, die dir helfen, noch mehr Punkte zu sammeln.</p>
              <p>Je mehr Punkte du hast, desto schneller kannst du neue Level erreichen und Roehrig-Meisterschaften
                  freischalten.</p>
              <p style={{color: 'rgb(147 51 234)', fontSize: `35px`}}>4. Weitere Optionen:</p>
              <p>Automatische Klicks: Kaufe automatisierte Klicker, die für dich Punkte sammeln, auch wenn du gerade
                  nicht klickst.</p>
              <p>Booster: Erhöhe die Anzahl der Punkte, die du pro Klick erhältst, mit speziellen Boostern.</p>
              <p>Herausforderungen: Stelle dich speziellen Herausforderungen, um noch mehr Belohnungen zu erhalten.</p>

          </div>
      </div>
    </section>
  )
}
