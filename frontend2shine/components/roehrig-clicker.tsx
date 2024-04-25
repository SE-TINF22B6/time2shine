"use client"; // Indicates that this module is client-side code.

import {useSession} from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import {ChangeEvent, useState} from "react";

export const RoehrigClickerComponent = () => {
    const [error, setError] = useState(""); // State for handling errors during authentication.
    const {data: session, status: loadingStatus} = useSession(); // Get the current user session.

    // Button text based on user session
    const buttonText = session ? "Sign out" : "Sign in with GitHub";
    const isLoggedIn = session

    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(score + 1);
    };

    return (<div className="flex flex-col items-center justify-center">
        {error && (<p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>)}

        <div>
            <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
               href="#" onClick={incrementScore}>Play Röhrig Clicker</a>
        </div>
        <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Score: {score}</p>
    </div>);
};