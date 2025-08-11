"use client";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from './HeroRightSection';


export default function HeroSection({ getHeaderHeight = 0 }: { getHeaderHeight: number }) {
    console.log(getHeaderHeight);

    return (
        <>
        <div
            className="w-full flex h-auto justify-center"
            style={{ paddingTop: 'clamp(1rem, 5vw, 3.5rem)', 
                   }}

            >
            <div className="max-w-[min(95%,1600px)] mx-auto flex lg:flex-row flex-col">
                <HeroLeftSection />
                <HeroRightSection/>
            </div>
        </div>
        </>
    );
}