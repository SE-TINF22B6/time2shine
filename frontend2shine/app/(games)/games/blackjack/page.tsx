'use client';

import {BlackJackRedirect} from "@/components/blackjack-redirect";
import {SessionProvider} from "next-auth/react";
import {Helmet} from "react-helmet";
import React from "react";

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
                  <h1 className="h1 mb-4" data-aos="fade-up">BlackJack.</h1>
                  <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">An overview of our
                      current
                      and upcoming games.</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div data-aos="fade-up" data-aos-delay="400">
                          <SessionProvider>
                              <BlackJackRedirect/>
                          </SessionProvider>
                      </div>
                  </div>
              </div>


              <p style={{color: ' rgb(147 51 234)', fontSize: `35px` }}> BJ Regeln: </p>
              <p>1. Schlage die Hand des Dealers, ohne die 21 Punkte zu überschreiten. Wenn du direkt 21 Punkte
                  erhältst, hast du Blackjack.</p>
              <p style={{ color: ' rgb(147 51 234)', fontSize: `35px` }}>2. Spielaufbau: </p>
                  <p>Es können dem Dealer insgesamt sechs Spieler gegenüber. Diese Spieler spielen einzeln
                  gegen den Dealer</p>
              <p style={{ color: ' rgb(147 51 234)', fontSize: `35px` }}>3. Spielablauf:</p>
              <p>Du erhältst zu Beginn zwei Karten.</p>
              <p>Durch das Ziehen von weiteren Karten versuchst du, möglichst nahe an 21 Punkte zu kommen.</p>
              <p>Wenn du näher an der 21 bist als der Dealer, gewinnst du die Runde.</p>
              <p>Überschreitest du die 21, verlierst du die Runde.</p>
              <p style={{ color: ' rgb(147 51 234)', fontSize: `35px` }}>4. Weitere Optionen</p>
              <p>Stand: Du behältst deine aktuellen Karten.</p>
              <p>Hit: Du ziehst eine weitere Karte.</p>
              <p> Split: Wenn du zwei gleichwertige Karten hast, kannst du sie aufteilen und mit zwei Händen
                  spielen.</p>
              <p>Double: Du verdoppelst deinen Einsatz und erhältst nur eine weitere Karte.</p>

              <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                 href="/games/blackjack/karten">Tricks für BlackJack</a>
          </div>
      </div>
    </section>
  )
}
