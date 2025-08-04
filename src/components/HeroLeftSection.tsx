import React from 'react';
import GetStartedButton from "./GetStartedButton";
import { Outfit, Teko } from "next/font/google";

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function HeroLeftSection() {
    return (
        <div className="xl:w-1/2 w-fit px-8 relative z-[50] 2xl:py-0">
            <h1
                className={`w-fit text-text-primary relative z-[50] sm:z-[0] font-bold ${teko.className}`}
            >
                DIGITAL
            </h1>

            <div className="w-full h-auto flex items-center 2xl:py-2 relative 2xl:mt-0 -mt-5">
                <p className="w-[40%] py-2 text-text-secondary 2xl:block hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h1
                    className={`2xl:absolute sm:left-[45%] sm:z-[50] sm:w-fit text-[11rem] text-primary font-bold ${teko.className}`}
                >
                    AGENCY
                </h1>
            </div>
            
               <p className="block lg:mt-8 lg:w-full md:w-[80%] lg:mb-2 mb-4 relative z-[50] text-text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                
            <div className="flex-shrink-0 2xl:mt-9">
                <GetStartedButton buttonTitle="OUR PORTFOLIO" />
            </div>
        </div>
    );
}