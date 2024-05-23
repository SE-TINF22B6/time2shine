import Image from 'next/image';
import NotFoundImage from '@/public/images/404.png';

export const metadata = {
    title: 'Home - time2shine',
    description: 'Online Gaming Platform',
}

export default function Custom404() {
    // Generate random values for the animations
    const shakeDuration = Math.random() * 0.5; // random duration between 0 and 0.5 seconds
    const scaleDuration = Math.random() * 2; // random duration between 0 and 2 seconds

    // Text to display
    const text = "Den Gerät hat kaputt.";

    return (
        <>
            <style>{`
                @keyframes blink {
                  0% {opacity: 1;}
                  50% {opacity: 0;}
                  100% {opacity: 1;}
                }

                @keyframes shake {
                  0% { transform: translate(1px, 1px) rotate(0deg); }
                  50% { transform: translate(-1px, -2px) rotate(-1deg); }
                  100% { transform: translate(1px, 1px) rotate(0deg); }
                }

                @keyframes scale {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.1); }
                  100% { transform: scale(1); }
                }
            `}</style>
            <section className="relative">
                <title>Error 404 - time2shine</title>
                <meta name="description" content="Online Gaming Platform" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                        {/* Page header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h1 className="h1">
                                {/* Wrap each letter in a span with a different animation */}
                                {text.split('').map((char, i) => (
                                    <span key={i} style={{
                                        animation: `blink ${Math.random() * 2}s steps(5, end) infinite`,
                                        WebkitAnimation: `blink ${Math.random() * 2}s steps(5, end) infinite`
                                    }}>{char}</span>
                                ))}
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-full"> {/* Added this div */}
                        <Image className="rounded-full" style={{
                            animation: `shake ${shakeDuration}s infinite, scale ${scaleDuration}s infinite`,
                            WebkitAnimation: `shake ${shakeDuration}s infinite, scale ${scaleDuration}s infinite`
                        }} src={NotFoundImage} alt="Sad Hamster Meme"/>
                    </div>
                </div>
            </section>
        </>
    )
}