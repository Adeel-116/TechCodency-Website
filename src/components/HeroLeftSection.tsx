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
        <div className="w-1/2">
            <h1
                className={`w-full text-[14rem] text-text-primary font-bold ${teko.className}`}
            >
                DIGITAL
            </h1>

            <div className="w-full h-auto flex items-center py-2 relative">
                <p className="w-[40%] py-2 text-text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h1
                    className={`absolute left-[45%] z-[50] w-fit text-[14rem] text-primary font-bold ${teko.className}`}
                >
                    AGENCY
                </h1>
            </div>

            <div className="flex-shrink-0 mt-9">
                <GetStartedButton buttonTitle="OUR PORTFOLIO" />
            </div>
        </div>
    );
}