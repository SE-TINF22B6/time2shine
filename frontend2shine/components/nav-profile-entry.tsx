"use client"; // Indicates that this module is client-side code.

import {signIn, useSession} from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import Link from 'next/link'

export const NavProfileEntry = () => {
    const {data: session, status: loadingStatus} = useSession(); // Get the current user session.

    // Button text based on user session
    const buttonText = session ? "My Profile" : "";


    return (
        <li className="font-medium text-lg text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
            <Link href="/profile">
                {buttonText}
            </Link>
        </li>
);
};