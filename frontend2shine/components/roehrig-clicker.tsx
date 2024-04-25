"use client";

import {useSession} from "next-auth/react";
import {useState} from "react";
import RoehrigImage from '@/public/images/roehrig.png'
import Image from "next/image";

export const RoehrigClickerComponent = () => {
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const {data: session, status: loadingStatus} = useSession();

    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(score + 1);
    };

    const submitScore = async () => {
        if (!session || !session.user) {
            setError('You are not logged in!');
            setIsSuccess(false);
            return;
        }

        if (score === 0) {
            setError('You cannot submit a score of 0!');
            setIsSuccess(false);
            return;
        }

        const params = new URLSearchParams({
            username: session.user.name || '',
            email: session.user.email || '',
            game: 'roehrig-clicker',
            score: score.toString(),
        });

        const response = await fetch(`https://api.maiwald.cc/highscores?${params.toString()}`, {
            method: 'POST',
        });

        if (!response.ok) {
            setError('Failed to submit score');
            setIsSuccess(false);
        } else {
            setError('Score submitted successfully!');
            setIsSuccess(true);
            setScore(0); // reset score after successful submission
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {error && (
                <p className={`text-center py-4 mb-6 rounded ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
                    {error}
                </p>
            )}

            <div>
                <a href="#" onClick={incrementScore}>
                    <Image className="rounded-full" src={RoehrigImage} width={200} alt="Roehrig Clicker" />
                </a>
            </div>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Score: {score}</p>
            <div>
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                   href="#" onClick={submitScore}>Submit Score</a>
            </div>
        </div>
    );
};