"use client";
import CircularText from "./CircularText";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from './HeroRightSection';


export default function HeroSection({ getHeaderHeight = 0 }: { getHeaderHeight: number }) {
    console.log(getHeaderHeight);

    return (
        <>
        <div
            className="w-full flex lg:h-[100dvh] h-auto justify-center relative items-center" >
            <div className="lg:max-w-[min(94%,1600px)] max-w-[min(92%,1200px)] h-auto  mx-auto flex lg:py-0 py-10 lg:flex-row flex-col">
                <HeroLeftSection />
                <HeroRightSection/>
            </div>
            <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 z-[50]">
              <CircularText />
            </div>
        </div>
        </>
    );
}