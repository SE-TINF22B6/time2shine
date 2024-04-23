export const metadata = {
  title: 'Black Jack stats - time2shine',
  description: 'Online Gaming Platform',
}

import Link from 'next/link'

export default function Stats() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">BlackJack statistics.</h1>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">Rank</th>
                      <th scope="col" className="px-6 py-4">Player</th>
                      <th scope="col" className="px-6 py-4">Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td className="whitespace-nowrap px-6 py-4">Player 1</td>
                      <td className="whitespace-nowrap px-6 py-4">1000</td>
                    </tr>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                      <td className="whitespace-nowrap px-6 py-4">Player 2</td>
                      <td className="whitespace-nowrap px-6 py-4">900</td>
                    </tr>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                      <td className="whitespace-nowrap px-6 py-4">Player 3</td>
                      <td className="whitespace-nowrap px-6 py-4">800</td>
                    </tr>
                    {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
