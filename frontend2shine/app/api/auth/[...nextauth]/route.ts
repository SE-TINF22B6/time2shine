require('dotenv').config();

import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

if (
    !process.env.GITHUB_ID ||
    !process.env.GITHUB_SECRET ||
    !process.env.NEXTAUTH_SECRET
) {
  throw new Error("Auth required env variables are not set");
}


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
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };