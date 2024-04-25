import Image from "next/image";
import BlackJackImage from "@/public/images/blackjack.jpg";
import ClickerGameImage from "@/public/images/clicker-game.png";
import SnakeGame from "@/public/images/snake.jpg";

export const metadata = {
  title: 'Games - time2shine',
  description: 'Online Gaming Platform',
}

export default function Games() {
  return (
    <section className="relative">
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
            <div className="flex flex-col h-full p-6 bg-gray-800 items-center" data-aos="fade-up">
              <Image className="rounded-2xl mb-5" src={BlackJackImage} width={300} alt="BlackJack Game" />
              <blockquote className="text-lg text-gray-400 grow text-center">Blackjack is a thrill-a-minute duel against the dealer, where you weave a magic hand of cards to conquer 21 and strike gold!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                     href="/blackjack">Play Black Jack</a>
                </div>
              </div>
            </div>

            {/* Röhrig Clicker */}
            <div className="flex flex-col h-full p-6 bg-gray-800 items-center" data-aos="fade-up" data-aos-delay="200">
              <Image className="rounded-2xl mb-5" src={ClickerGameImage} width={300} alt="Roehrig Clicker" />
              <blockquote className="text-lg text-gray-400 grow text-center">In "Röhrig Clicker," become Professor Röhrig's overworked assistant, frantically grading exams one click at a time!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                     href="/roehrig">Play Röhrig Clicker</a>
                </div>
              </div>
            </div>

            {/* Upcoming game */}
            <div className="flex flex-col h-full p-6 bg-gray-800 items-center" data-aos="fade-up" data-aos-delay="400">
              <Image className="rounded-2xl mb-5" src={SnakeGame} width={300} alt="Snake Game" />
              <blockquote className="text-lg text-gray-400 grow text-center">Stay tuned for this upcoming game!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                     href="#">Not playable yet</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
