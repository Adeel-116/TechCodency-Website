import React from 'react';
import UserAvatar from './UserAvatar';
import Image from 'next/image';

export default function HeroRightSection() {
    return (
        <div className="xl:w-1/2 w-full xl:py-5 lg:pr-8 px-8">
            <div className="w-full flex items-center justify-between ">
                <p className="2xl:w-[40%] w-full relative z-[50] py-2 lg:pr-0 md:pr-5 text-text-secondary text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <UserAvatar />
            </div>

            <div className="w-full relative ">
                
                <div className="relative w-full lg:h-[200px] xl:mt-5">
                    <Image
                        src="/images/h1-shape2.png"
                        alt="Shape"
                        fill
                        className="object-contain mx-auto"
                    />
                </div>

             
                <div className="absolute lg:top-[30%] -top-[10%] left-1/2 -translate-x-1/2 xl:w-full lg:w-[500px] w-full lg:h-auto aspect-square">
                    <Image
                        src="/images/banner1-img.jpg"
                        alt="Banner"
                        fill
                        className="xl:rounded-tr-[200px] rounded-tr-[100px] sm:object-cover object-contain"
                    />
                </div>
            </div>

        </div>
    );
}
