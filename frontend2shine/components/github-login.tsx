"use client"; // Indicates that this module is client-side code.

import {signIn, signOut, useSession} from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import {useSearchParams, useRouter} from "next/navigation"; // Import Next.js navigation utilities.
import {ChangeEvent, useState} from "react";

export const GithubLogin = () => {
    const router = useRouter(); // Initialize the Next.js router.
    const [loading, setLoading] = useState(false); // State for managing loading state.
    const [error, setError] = useState(""); // State for handling errors during authentication.
    const searchParams = useSearchParams(); // Get query parameters from the URL.
    const callbackUrl = searchParams.get("callbackUrl") || "/profile"; // Define a callback URL or use a default one.
    const {data: session, status: loadingStatus} = useSession(); // Get the current user session.

    // Button text based on user session
    const buttonText = session ? "Sign out" : "Sign in with GitHub";
    const isLoggedIn = session


    return (<div>
            {error && (<p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>)}

            <div>
                <a
                    className="font-medium text-white bg-purple-600 rounded hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    style={{backgroundColor: ""}}
                    onClick={() => session ? signOut() : signIn("github", {callbackUrl})}
                    role="button"
                >
                    {!isLoggedIn ? <img
                        className="pr-2"
                        src="/images/github-logo.svg"
                        alt=""
                        style={{height: "1.8rem"}}
                    /> : ""}
                    {buttonText}
                </a>
            </div>
        </div>);
};