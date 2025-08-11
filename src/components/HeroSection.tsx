"use client";
import { Outfit } from "next/font/google";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from './HeroRightSection';
import CircularText from './CircularText';
import MarqueeSection from "./MarqueeSection";

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function HeroSection({ getHeaderHeight = 0 }: { getHeaderHeight: number }) {
    console.log(getHeaderHeight);

    return (
        <>
        <div
            className="w-full flex justify-center bg-red-300"
            style={{
                height: `calc(100dvh - ${getHeaderHeight}px)`,
            }}
        >
            <div className="max-w-[min(95%,1600px)] mx-auto flex lg:flex-row flex-col">
                <HeroLeftSection />
                <HeroRightSection/>
            </div>
        </div>
             <div className="w-full h-auto bg-pink-400">
                <MarqueeSection />
            </div>
        </>
    );
}