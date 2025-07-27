import React from 'react';
import UserAvatar from './UserAvatar';

export default function HeroRightSection() {
    return (
        <div className="w-1/2 py-5">
            <div className="w-full py-7 mt-8 flex items-center justify-between px-8">
                <p className="w-[40%] py-2 text-[#939493] text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <UserAvatar />
            </div>

            <div className="w-full h-auto relative">
                <img
                    src="images/h1-shape2.png"
                    alt=""
                    className="mx-auto w-[500px] h-auto"
                />
                <div className="absolute top-[20%]">
                    <img
                        src="images/banner1-img.jpg"
                        alt=""
                        className="rounded-tr-[200px]"
                    />
                </div>
            </div>
        </div>
    );
}
