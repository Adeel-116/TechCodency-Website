import React from 'react';
import UserAvatar from './UserAvatar';
import Image from 'next/image';

export default function HeroRightSection() {
    return (
        <div className="sm:w-1/2 w-full sm:py-5">
            <div className="w-full sm:py-7 sm:mt-8 flex items-center justify-between sm:px-8">
                <p className="sm:w-[40%] w-full py-2 text-text-secondary text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <UserAvatar />
            </div>

            <div className="w-full relative">
                {/* Shape Image (Background-like) */}
                <div className="relative w-full h-[100px] sm:h-[400px] -mt-5">
                    <Image
                        src="/images/h1-shape2.png"
                        alt="Shape"
                        fill
                        className="object-contain mx-auto"
                    />
                </div>

                {/* Banner Image (Positioned Above) */}
                <div className="absolute sm:top-[20%] -top-[10%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[400px] md:w-[500px] aspect-square">
                    <Image
                        src="/images/banner1-img.jpg"
                        alt="Banner"
                        fill
                        className="sm:rounded-tr-[200px] sm:object-cover object-contain"
                    />
                </div>
            </div>

        </div>
    );
}
