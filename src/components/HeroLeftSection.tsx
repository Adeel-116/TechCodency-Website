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
        <div className="sm:w-1/2 w-full relative z-[50]">
            <h1
                className={`w-full fluid-text-6xl text-text-primary relative z-[50] sm:z-[0] font-bold ${teko.className}`}
            >
                DIGITAL
            </h1>

            <div className="w-full h-auto flex items-center py-2 relative">
                <p className="w-[40%] py-2 text-text-secondary sm:block hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h1
                    className={`absolute sm:left-[45%] sm:z-[50] sm:w-fit fluid-text-6xl text-primary font-bold ${teko.className}`}
                >
                    AGENCY
                </h1>
            </div>
            
               <p className=" sm:hidden block mt-8 mb-2 relative z-[50] text-text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                
            <div className="flex-shrink-0 sm:mt-9">
                <GetStartedButton buttonTitle="OUR PORTFOLIO" />
            </div>
        </div>
    );
}