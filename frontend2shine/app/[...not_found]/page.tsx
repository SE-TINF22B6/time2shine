import Image from 'next/image';
import NotFoundImage from '@/public/images/404.png';
import TestimonialImage01 from "@/public/images/testimonial-01.jpg";

export const metadata = {
    title: 'Home - time2shine',
    description: 'Online Gaming Platform',
}


export default function Custom404() {
  return (
      <section className="relative">
          <title>Error 404 - time2shine</title>
          <meta name="description" content="Online Gaming Platform" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Den Gerät hat kaputt.</h1>
            </div>
          </div>
            <div className="flex justify-center items-center h-full"> {/* Added this div */}
                <Image className="rounded-full" src={NotFoundImage} alt="Sad Hamster Meme"/>
            </div>
        </div>
      </section>
  )
}