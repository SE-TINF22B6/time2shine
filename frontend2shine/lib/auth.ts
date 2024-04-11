import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

if (
    !process.env.GITHUB_ID ||
    !process.env.GITHUB_SECRET ||
    !process.env.NEXTAUTH_SECRET
) {
    throw new Error("Auth required env variables are not set");
}

// Define authentication options using NextAuthOptions interface
export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/login',
        signOut: '/',
        error: '/', // Error code passed in query string as ?error=
        verifyRequest: '', // (used for check email message)
        // newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    session: {
        strategy: "jwt"
    },

    secret: process.env.NEXTAUTH_SECRET as string,

};