"use client"; // Indicates that this module is client-side code.

import { signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import { useSearchParams, useRouter } from "next/navigation"; // Import Next.js navigation utilities.
import { ChangeEvent, useState } from "react";
import Link from "next/link"; // Import React hooks for managing component state.

export const LoginForm = () => {
    const router = useRouter(); // Initialize the Next.js router.
    const [loading, setLoading] = useState(false); // State for managing loading state.
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    }); // State for form input values.
    const [error, setError] = useState(""); // State for handling errors during authentication.

    const searchParams = useSearchParams(); // Get query parameters from the URL.
    const callbackUrl = searchParams.get("callbackUrl") || "/profile"; // Define a callback URL or use a default one.

    // Handle form submission
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        try {
            setLoading(true); // Set loading state to true.
            setFormValues({ email: "", password: "" }); // Clear form input values.

            // Attempt to sign in using the credentials (email and password).
            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false); // Set loading state back to false.

            console.log(res); // Log the authentication response.
            if (!res?.error) {
                router.push(callbackUrl); // Redirect to the callback URL on successful authentication.
            } else {
                setError("invalid email or password"); // Set an error message for invalid credentials.
            }
        } catch (error: any) {
            setLoading(false); // Set loading state back to false on error.
            setError(error); // Set the error message for any other errors.
        }
    };

    // Handle input field changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value }); // Update the form input values.
    };


    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h1 className="h1">Great to have you back.</h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">
                    <form onSubmit={onSubmit}>
                        {error && (
                            <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
                        )}
                        {/* Sign In with GitHub button */}
                        <a
                            className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                            style={{backgroundColor: "#000000"}}
                            onClick={() => signIn("github", {callbackUrl})}
                            role="button"
                        >
                            <img
                                className="pr-2"
                                src="/images/github-logo.svg"
                                alt=""
                                style={{height: "2.2rem"}}
                            />
                            Continue with GitHub
                        </a>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                        <div className="text-gray-400">Or, sign in with your email</div>
                        <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                    </div>

                    <form>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block text-gray-300 text-sm font-medium mb-1"
                                       htmlFor="email">Email</label>
                                <input value={formValues.email} onChange={handleChange} id="email" type="email"
                                       className="form-input w-full text-gray-300" placeholder="davis@1und1.de"
                                       required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block text-gray-300 text-sm font-medium mb-1"
                                       htmlFor="password">Password</label>
                                <input value={formValues.password} onChange={handleChange} id="password" type="password"
                                       className="form-input w-full text-gray-300" placeholder="Password" required/>
                            </div>
                        </div>
                        {/*<div className="flex flex-wrap -mx-3 mb-4">*/}
                        {/*    <div className="w-full px-3">*/}
                        {/*        <div className="flex justify-between">*/}
                        {/*            <label className="flex items-center">*/}
                        {/*                <input type="checkbox" className="form-checkbox"/>*/}
                        {/*                <span className="text-gray-400 ml-2">Keep me signed in</span>*/}
                        {/*            </label>*/}
                        {/*            <Link href="/reset-password"*/}
                        {/*                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot*/}
                        {/*                Password?</Link>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="w-full px-3">
                                <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="text-gray-400 text-center mt-6">
                        Don’t you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};