import React from 'react';
import UserAvatar from './UserAvatar';
import Image from 'next/image';

export default function HeroRightSection() {
    return (
        <div className="xl:w-1/2 w-full xl:py-5 lg:pr-8 xl:px-8">
            <div className="w-full flex flex-col items-center justify-between xl:sm-0 px-8">
                <p className="2xl:w-[40%] w-full relative z-[50] py-2 lg:pr-0 md:pr-5 text-text-secondary text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <UserAvatar />
            </div>
            <div className="w-full relative">
                {/* Background Shape */}
                <div className="relative w-full h-[150px] md:h-[180px] lg:h-[200px] xl:mt-5">
                    <Image
                        src="/images/h1-shape2.png"
                        alt="Shape"
                        fill
                        className="object-contain mx-auto"
                    />
                </div>

                {/* Banner Image */}
                <div className="absolute top-1/4 md:top-1/4 lg:top-[30%] left-1/2 -translate-x-1/2 w-[250px] w-full lg:w-[500px] h-[300px] aspect-square">
                    <Image
                        src="/images/banner1-img.jpg"
                        alt="Banner"
                        fill
                        className="rounded-tr-[100px] md:rounded-tr-[150px] xl:rounded-tr-[200px] object-cover"
                    />
                </div>
            </div>

        </div>
    );
}
