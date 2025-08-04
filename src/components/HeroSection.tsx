"use client";
import { Outfit } from "next/font/google";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from './HeroRightSection';
import CircularText from './CircularText';
import MarqueeSection from './MarqueeSection';

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function HeroSection() {
    return (
        <div className="w-full h-screen flex items-center">
            <div className={`xl:w-[90%] sm:py-5 mx-auto sm:flex ${outfit.className}`}>
                <HeroLeftSection />
                <HeroRightSection />
            </div>

            <CircularText />
            {/* <MarqueeSection /> */}
        </div>
    );
}