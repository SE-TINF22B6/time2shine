"use client"; // Indicates that this module is client-side code.

import {signIn, useSession} from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import Link from 'next/link'

export const NavProfileEntry = () => {
    const {data: session, status: loadingStatus} = useSession(); // Get the current user session.

    // Button text based on user session
    const buttonText = session ? "My Profile" : "";


    return (
        <div>
            <Link href="/profile">
                {buttonText}
            </Link>
        </div>
    );
};