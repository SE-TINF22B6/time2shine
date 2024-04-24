'use client';

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Asynchronous function for the Profile page
export default async function Profile() {
    const session = await getServerSession(authOptions); // Get the session from the server
    const user = session?.user; // Get the user from the session

    type Highscores = { [key: string]: number };
    const [highscores, setHighscores] = useState<Highscores>({});

    useEffect(() => {
        if (user) {
            // Fetch highscores for each game for the logged-in user
            ['blackjack', 'poker'].forEach(game => {
                fetch(`https://api.maiwald.cc/highscores?username=${user.name}&game=${game}`)
                    .then(response => response.json())
                    .then(data => setHighscores(prevScores => ({...prevScores, [game]: data})));
            });
        }
    }, [user]);

    return (
        <>
            <section className="bg-ct-blue-600  min-h-screen pt-20">
                <Helmet>
                    <title>Stats - time2shine</title>
                    <meta name="description" content="Online Gaming Platform" />
                </Helmet>

                <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
                    <div>
                        <p className="mb-3 text-5xl text-center font-semibold">
                            Profile Page
                        </p>
                        {/* If the user is not loaded yet, show a loading message */}
                        {!user ? (
                            <p>Cannot fetch user data</p>
                        ) : (
                            // If the user is loaded, show their profile information
                            <div className="flex items-center gap-8">
                                <div>
                                    <img
                                        src={user.image ? user.image : "/images/default.png"}
                                        className="max-h-36"
                                        alt={`profile photo of ${user.name}`}
                                    />
                                </div>
                                <div className="mt-8">
                                    <p className="mb-3">Name: {user.name}</p>
                                    <p className="mb-3">Email: {user.email}</p>
                                    {/* New code to display highscores */}
                                    <p className="mb-3">Your Highscores:</p>
                                    {Object.entries(highscores).map(([game, score]) => (
                                        <p key={game}>{game}: {score}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}