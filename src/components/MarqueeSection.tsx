import React from 'react';
import { Teko } from "next/font/google";

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function MarqueeSection() {
    return (
        <div className="marquee-container">
            {/* First marquee section - Right to Left */}
            <div className="w-full h-auto py-6 bg-[#E6F620] relative z-[50] flex items-center justify-center overflow-hidden">
                <div className="flex animate-marquee-rtl whitespace-nowrap" style={{ width: 'max-content' }}>
                    {/* First set */}
                    <div className="flex">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={`green-set1-${index}`}
                                className="flex items-center justify-center px-4 flex-shrink-0"
                            >
                                <span
                                    className={`inline-flex font-bold text-3xl ${teko.className} text-[#1D1D1D] justify-center items-center px-2`}
                                >
                                    Website Design
                                </span>
                                <img src="/images/icon1.png" alt="Icon" className="ml-2" />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={`green-set2-${index}`}
                                className="flex items-center justify-center px-4 flex-shrink-0"
                            >
                                <span
                                    className={`inline-flex font-bold text-3xl ${teko.className} text-[#1D1D1D] justify-center items-center px-2`}
                                >
                                    Website Design
                                </span>
                                <img src="/images/icon1.png" alt="Icon" className="ml-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Second marquee section - Left to Right */}
            <div className="w-full h-auto py-6 bg-[#1D1D1D] relative z-[50] flex items-center justify-center overflow-hidden">
                <div className="flex animate-marquee-ltr whitespace-nowrap" style={{ width: 'max-content' }}>
                    {/* First set */}
                    <div className="flex">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={`dark-set1-${index}`}
                                className="flex items-center justify-center px-4 flex-shrink-0"
                            >
                                <span
                                    className={`inline-flex font-bold text-3xl ${teko.className} text-[#E6F620] justify-center items-center px-2`}
                                >
                                    Website Design
                                </span>
                                <img src="/images/icon2.png" alt="Icon" className="ml-2" />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div
                                key={`dark-set2-${index}`}
                                className="flex items-center justify-center px-4 flex-shrink-0"
                            >
                                <span
                                    className={`inline-flex font-bold text-3xl ${teko.className} text-[#E6F620] justify-center items-center px-2`}
                                >
                                    Website Design
                                </span>
                                <img src="/images/icon2.png" alt="Icon" className="ml-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}