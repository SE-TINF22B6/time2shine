// Metadata for the page
export const metadata = {
    title: 'My Profile - time2shine', // Page title
    description: 'Online Gaming Platform', // Page description
}

// Importing necessary modules
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Asynchronous function for the Profile page
export default async function Profile() {
    // Get the session from the server
    const session = await getServerSession(authOptions);
    // Get the user from the session
    const user = session?.user;

    // Return the JSX for the page
    return (
        <>
            <section className="bg-ct-blue-600  min-h-screen pt-20">
                <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
                    <div>
                        <p className="mb-3 text-5xl text-center font-semibold">
                            Profile Page
                        </p>
                        {/* If the user is not loaded yet, show a loading message */}
                        {!user ? (
                            <p>Loading...</p>
                        ) : (
                            // If the user is loaded, show their profile information
                            <div className="flex items-center gap-8">
                                <div>
                                    <img
                                        src={user.image ? user.image : "/images/default.png"}
                                        className="max-h-36"
                                        alt={`profile photo of ${user.name}`}
                                    />
                                </div>
                                <div className="mt-8">
                                    <p className="mb-3">Name: {user.name}</p>
                                    <p className="mb-3">Email: {user.email}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}