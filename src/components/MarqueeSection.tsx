import React from 'react';
import { Teko } from "next/font/google";

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function MarqueeSection() {
    // Create array of items to avoid repetition
    const marqueeItems = [
        "Website Design",
        "Mobile Apps", 
        "E-commerce",
        "UI/UX Design",
        "Digital Marketing",
        "Brand Strategy"
    ];

    return (
        <>
            <style jsx>{`
                @keyframes marquee-rtl {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                @keyframes marquee-ltr {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }
                
                .animate-marquee-rtl {
                    animation: marquee-rtl 20s linear infinite;
                }
                
                .animate-marquee-ltr {
                    animation: marquee-ltr 25s linear infinite;
                }
                
                .marquee-content {
                    display: flex;
                    width: max-content;
                }
            `}</style>
            
            <div className="marquee-container">
                {/* First marquee section - Right to Left */}
                <div className="w-full h-auto py-6 bg-[#E6F620] relative z-[50] flex items-center justify-center overflow-hidden">
                    <div className="animate-marquee-rtl whitespace-nowrap">
                        <div className="marquee-content">
                            {/* First set */}
                            {marqueeItems.map((item, index) => (
                                <div
                                    key={`green-set1-${index}`}
                                    className="flex items-center justify-center px-6 flex-shrink-0"
                                >
                                    <span
                                        className={`inline-flex font-bold text-3xl ${teko.className} text-[#1D1D1D] justify-center items-center px-2`}
                                    >
                                        {item}
                                    </span>
                                    <img src="/images/icon1.png" alt="Icon" className="ml-3 w-6 h-6" />
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {marqueeItems.map((item, index) => (
                                <div
                                    key={`green-set2-${index}`}
                                    className="flex items-center justify-center px-6 flex-shrink-0"
                                >
                                    <span
                                        className={`inline-flex font-bold text-3xl ${teko.className} text-[#1D1D1D] justify-center items-center px-2`}
                                    >
                                        {item}
                                    </span>
                                    <img src="/images/icon1.png" alt="Icon" className="ml-3 w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second marquee section - Left to Right */}
                <div className="w-full h-auto py-6 bg-[#1D1D1D] relative z-[50] flex items-center justify-center overflow-hidden">
                    <div className="animate-marquee-ltr whitespace-nowrap">
                        <div className="marquee-content">
                            {/* First set */}
                            {marqueeItems.map((item, index) => (
                                <div
                                    key={`dark-set1-${index}`}
                                    className="flex items-center justify-center px-6 flex-shrink-0"
                                >
                                    <span
                                        className={`inline-flex font-bold text-3xl ${teko.className} text-[#E6F620] justify-center items-center px-2`}
                                    >
                                        {item}
                                    </span>
                                    <img src="/images/icon2.png" alt="Icon" className="ml-3 w-6 h-6" />
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {marqueeItems.map((item, index) => (
                                <div
                                    key={`dark-set2-${index}`}
                                    className="flex items-center justify-center px-6 flex-shrink-0"
                                >
                                    <span
                                        className={`inline-flex font-bold text-3xl ${teko.className} text-[#E6F620] justify-center items-center px-2`}
                                    >
                                        {item}
                                    </span>
                                    <img src="/images/icon2.png" alt="Icon" className="ml-3 w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}