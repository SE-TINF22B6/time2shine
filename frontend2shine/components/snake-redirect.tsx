import {getSession, signIn, signOut, useSession} from "next-auth/react";
import React, {ChangeEvent, useEffect, useState} from "react";

export const SnakeRedirect = () => {
    const [playNowUrl, setPlayNowUrl] = useState<string | null>(null); // Declare type as string | null
    const [buttonText, setButtonText] = useState('Play Snake Extreme.'); // Change the button text to "Play Snake Extreme."
    const {data: session, status: loadingStatus} = useSession();

    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession();
            const user = session?.user;

            if (user) {
                const url = `https://engine.maiwald.cc/snake.html?username=${encodeURIComponent(user?.name || '')}&email=${encodeURIComponent(user?.email || '')}`;
                setPlayNowUrl(url);
            } else {
                setButtonText('Log in to play Snake Extreme.');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <a className={`btn rounded text-white ${playNowUrl ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 cursor-not-allowed opacity-50'} w-full mb-4 sm:w-auto sm:mb-0`}
               href={undefined}>{buttonText}</a> {/* Use undefined when playNowUrl is null */}
        </div>
    );
};