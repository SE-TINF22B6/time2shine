'use client';

import {Helmet} from "react-helmet";
import React from "react";
import {SessionProvider} from "next-auth/react";
import {BlackJackRedirect} from "@/components/blackjack-redirect";

export default function Games() {
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
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">An overview of our current
              and upcoming games.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <SessionProvider>
                    <BlackJackRedirect/>
                </SessionProvider>
              </div>
            </div>
          </div>



          <p>Hallo Test für BJ Regeln: </p>
         <p>1. Kartenwerte zuordnen:</p>
         <p>Niedrige Karten (2, 3, 4, 5, 6) werden mit +1 bewertet.</p>
          <p>Mittlere Karten (7, 8, 9) haben einen Wert von 0.</p>
          <p>Hohe Karten (10, Bube, Dame, König) werden mit -1 bewertet1.</p>
          <p>2.Wie funktioniert das Kartenzählen?:</p>
          <p>Beginne mit einem laufenden Zählwert (Running Count) von 0.</p>
         <p>Addiere oder subtrahiere den entsprechenden Wert für jede ausgeteilte Karte.</p>
         <p>Wenn der laufende Zählwert positiv ist, gibt es mehr hohe Karten im Deck, was für dich vorteilhaft ist.</p>
         <p>Wenn der Wert negativ ist, sind mehr niedrige Karten übrig, was eher dem Dealer hilft.</p>
         <p>3.Wahre Zählung berechnen:</p>
         <p>Berücksichtige die Anzahl der verbleibenden Decks im Schuh.</p>
          <p>Teile den laufenden Zählwert durch die Anzahl der verbleibenden Decks, um den wahren Wert zu erhalten.</p>
          <p>Die wahre Zählung ist entscheidend, um den Vorteil zu maximieren.</p>
        <p>4. Vorteile des Kartenzählens:</p>
         <p> Ein positiver Zählwert bedeutet, dass mehr hohe Karten im Deck sind. Du kannst deine Einsätze erhöhen.</p> Ein positiver Zählwert bedeutet, dass mehr hohe Karten im Deck sind. Du kannst deine Einsätze erhöhen.
          <p>Ein negativer Zählwert signalisiert niedrige Karten. Reduziere deine Einsätze oder pausiere.</p>


        </div>
      </div>
    </section>
  )
}
