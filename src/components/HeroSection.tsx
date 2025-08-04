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
        <div className="w-full lg:h-screen md:flex-auto0 flex lg:items-center">
            <div className={`xl:w-[90%] w-full xl:py-5 py-30 mx-auto flex lg:flex-row flex-col ${outfit.className}`}>
                <HeroLeftSection />
                <HeroRightSection />
            </div>

            {/* <CircularText /> */}
            {/* <MarqueeSection /> */}
        </div>
    );
}