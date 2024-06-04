'use client';

import React, { useEffect, useState } from 'react';
import {getSession, SessionProvider} from "next-auth/react";

import Image from "next/image";
import BlackJackImage from "@/public/images/blackjack.jpg";
import ClickerGameImage from "@/public/images/clicker-game.png";
import SnakeGame from "@/public/images/snake.jpg";
import {Helmet} from "react-helmet";
import {BlackJackRedirect} from "@/components/blackjack-redirect";
import {RoehrigRedirect} from "@/components/roehrig-redirect";
import {SnakeRedirect} from "@/components/snake-redirect";

export default function Games() {
  const [playNowUrl, setPlayNowUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      const user = session?.user;

      // Prepare the URL with user details as query parameters
      const url = `https://engine.maiwald.cc?username=${encodeURIComponent(user?.name || '')}&email=${encodeURIComponent(user?.email || '')}`;

      setPlayNowUrl(url);
    };

    fetchData();
  }, []);

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
            <h1 className="h1 mb-4" data-aos="fade-up">time2shine games.</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">An overview of our current
              and upcoming games.</p>
          </div>

          {/* Games Overview */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* BlackJack */}
            <div className="rounded-xl flex flex-col h-full p-6 bg-gray-800 items-center" data-aos="fade-up">
              <Image className="rounded-2xl mb-5" src={BlackJackImage} width={300} alt="BlackJack Game" />
              <blockquote className="text-lg text-gray-400 grow text-center">Blackjack is a thrill-a-minute duel against the dealer, where you weave a magic hand of cards to conquer 21 and strike gold!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 mb-2">
                <div data-aos="fade-up" data-aos-delay="400">
                <SessionProvider>
                  <BlackJackRedirect/>
                </SessionProvider>
                </div>
                <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                  <a className="btn text-gray-400 hover:text-purple-700" href="/games/blackjack">Learn more</a>
                </div>
              </div>
            </div>

            {/* Röhrig Clicker */}
            <div className="rounded-xl flex flex-col h-full p-6 bg-gray-800 items-center" data-aos="fade-up"
                 data-aos-delay="200">
            <Image className="rounded-2xl mb-5" src={ClickerGameImage} width={300} alt="Roehrig Clicker" />
              <blockquote className="text-lg text-gray-400 grow text-center">In "Röhrig Clicker," become Professor Röhrig's overworked assistant, frantically grading exams one click at a time!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 mb-2">
                <div data-aos="fade-up" data-aos-delay="400">
                  <SessionProvider>
                    <RoehrigRedirect/>
                  </SessionProvider>
                </div>
                <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                  <a className="btn text-gray-400 hover:text-purple-700" href="/games/roehrigclicker">Learn more</a>
                </div>
              </div>

            </div>

            {/* Snake Extreme */}
            <div className="rounded-xl flex flex-col h-full p-6 bg-gray-800 items-center" data-aos="fade-up"
                 data-aos-delay="400">
              <Image className="rounded-2xl mb-5" src={SnakeGame} width={300} alt="Snake Game" />
              <blockquote className="text-lg text-gray-400 grow text-center">In Snake Extreme, crank up the speed and outsmart your own lengthening serpent, gobbling pixelated goodies for a high-score frenzy!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 mb-2">
                <div data-aos="fade-up" data-aos-delay="400">
                  <SessionProvider>
                    <SnakeRedirect/>
                  </SessionProvider>
                </div>
                <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                  <a className="btn text-gray-400 hover:text-purple-700" href="#">Learn more</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
