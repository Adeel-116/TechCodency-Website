import React from 'react';
import UserAvatar from './UserAvatar';
import Image from 'next/image';

export default function HeroRightSection() {
    return (
        <div className="xl:w-1/2 w-full xl:py-5 px-15">
            <div className="w-full flex items-center justify-between xl:px-8">
                <p className="2xl:w-[40%] w-full relative z-[50] py-2 text-text-secondary text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <UserAvatar />
            </div>

            <div className="w-full relative">
                
                <div className="relative w-full xl:h-[200px] xl:mt-5">
                    <Image
                        src="/images/h1-shape2.png"
                        alt="Shape"
                        fill
                        className="object-contain mx-auto"
                    />
                </div>

             
                <div className="absolute xl:top-[25%] -top-[10%] left-1/2 -translate-x-1/2 lg:w-full h-auto aspect-square">
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
