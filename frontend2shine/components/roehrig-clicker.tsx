import {useSession} from "next-auth/react";
import {useState} from "react";
import Image from "next/image";
import RoehrigImage from '@/public/images/roehrig.png'

export const RoehrigClickerComponent = () => {
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const {data: session, status: loadingStatus} = useSession();
    const [score, setScore] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const incrementScore = () => {
        setScore(score + 1);
    };

    const handleMouseDown = () => {
        setIsClicked(true);
    };

    const handleMouseUp = () => {
        setIsClicked(false);
    };

    const submitScore = async () => {
        // existing error handling code...
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {error && (
                <p className={`btn text-white text-center py-3 mb-6 rounded ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
                    {error}
                </p>
            )}

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
                    <Image className="rounded-full" src={RoehrigImage} width={200} alt="Roehrig Clicker" />
                </a>
            </div>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Score: {score}</p>
            <div>
                <a className="btn rounded text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                   href="#" onClick={submitScore}>Submit Score</a>
            </div>
        </div>
    );
};