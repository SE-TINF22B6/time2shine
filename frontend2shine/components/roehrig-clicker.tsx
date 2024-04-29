"use client";

import {useSession} from "next-auth/react";
import {useState, useEffect} from "react";
import RoehrigImage from '@/public/images/roehrig.png'
import Image from "next/image";

export const RoehrigClickerComponent = () => {
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const {data: session, status: loadingStatus} = useSession();
    const [score, setScore] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [roehrigs, setRoehrigs] = useState(0);


    // Clicker Game Logic
    useEffect(() => {
        const id = setInterval(() => {
            setScore(score => score + roehrigs);
        }, 1000); // 1000 ms = 1 second

        // Clear interval on component unmount
        return () => clearInterval(id);
    }, [roehrigs]);

    const buyRoehrig = (amount: number) => {
        // Deduct the cost of new Roehrigs from the score
        const cost = amount * 10; // Assume each Roehrig costs 10 points
        if (score >= cost) {
            setScore(score - cost);
            setRoehrigs(roehrigs + amount);
        } else {
            setError(`Not enough points to buy ${amount} Roehrig(s)!`);
            setIsSuccess(false);

            // Clear the error message after 3 seconds
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    };

    const handleMouseDown = () => {
        setIsClicked(true);
    };

    const handleMouseUp = () => {
        setIsClicked(false);
    };

    const incrementScore = () => {
        setScore(score + 1);
    };

    // Code for submitting the score to the backend

    const submitScore = async () => {
        if (!session || !session.user) {
            setError('You are not logged in!');
            setIsSuccess(false);

            // Clear the error message after 3 seconds
            setTimeout(() => {
                setError("");
            }, 3000);
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
            <div className="flex space-x-4 mb-8 flex-nowrap justify-center">
                <button
                    className="btn rounded text-white bg-purple-600 hover:bg-purple-700 w-32 mb-4 sm:w-auto sm:mb-0"
                    onClick={() => buyRoehrig(1)}>Buy One Roehrig
                </button>
                <button
                    className="btn rounded text-white bg-purple-600 hover:bg-purple-700 w-32 mb-4 sm:w-auto sm:mb-0"
                    onClick={() => buyRoehrig(10)}>Buy 10 Roehrigs
                </button>
                <button
                    className="btn rounded text-white bg-purple-600 hover:bg-purple-700 w-32 mb-4 sm:w-auto sm:mb-0"
                    onClick={() => buyRoehrig(100)}>Buy 100 Roehrigs
                </button>
            </div>

            <div
                style={{
                    transform: isClicked ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.2s',
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // handle the case when the mouse is moved away while clicking
            >
                <a href="#" onClick={incrementScore}>
                    <Image className="rounded-full" src={RoehrigImage} width={200} alt="Roehrig Clicker"/>
                </a>
            </div>
            <p className="text-xl text-gray-400 mb-4" data-aos="fade-up" data-aos-delay="200">Score: {score}</p>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Your Roehrigs: {roehrigs}</p>

            <div className="mb-4">
                <a className="btn rounded text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                   href="#" onClick={submitScore}>Submit Score</a>
            </div>

            {error && (
                <p className={`btn text-white text-center py-3 mb-6 rounded ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
                    {error}
                </p>
            )}
        </div>
    );
};