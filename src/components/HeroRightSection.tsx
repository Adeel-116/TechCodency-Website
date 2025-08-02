import React from 'react';
import UserAvatar from './UserAvatar';
import Image from 'next/image';

export default function HeroRightSection() {
    return (
        <div className="w-1/2 py-5">
            <div className="w-full py-7 mt-8 flex items-center justify-between px-8">
                <p className="w-[40%] py-2 text-text-secondary text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <UserAvatar />
            </div>

            <div className="w-full h-auto relative">
                <Image
                    src="/images/h1-shape2.png"
                    alt="Shape"
                    width={500}
                    height={300}
                    className="mx-auto w-[500px] h-auto"
                />
                <div className="absolute top-[20%]">
                    <Image
                        src="/images/banner1-img.jpg"
                        alt="Banner"
                        width={800}
                        height={800}
                        className="rounded-tr-[200px]"
                    />
                </div>
            </div>
        </div>
    );
}
