"use client";
import GetStartedButton from "./GetStartedButton";
import { Outfit, Teko } from "next/font/google";
import { FaArrowDownLong } from "react-icons/fa6";
// Fonts
const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function HeroSection() {
    return (
        <div className="w-full h-auto">
            <div className={`w-[90%] py-5 mx-auto flex ${outfit.className}`}>
                <div className="w-1/2">
                    <h1
                        className={`w-full text-[14rem] text-white font-bold ${teko.className}`}
                    >
                        DIGITAL
                    </h1>

                    <div className="w-full h-auto flex items-center py-2 relative">
                        <p className="w-[40%] py-2 text-[#939493]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h1
                            className={`absolute left-[45%] z-[50] w-fit text-[14rem]  text-[#E6F620] font-bold ${teko.className}`}
                        >
                            AGENCY
                        </h1>
                    </div>

                    <div className="flex-shrink-0 mt-9">
                        <GetStartedButton buttonTitle="OUR PORTFOLIO" />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 py-5">
                    <div className="w-full py-7 mt-8 flex items-center justify-between px-8">
                        {/* Left Text */}
                        <p className="w-[40%] py-2 text-[#939493] text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* User Avatars */}
                        <div className="flex flex-col">
                            <div className="relative w-fit z-10 float-x-rotate-x">
                                <div className="white-border-glow"></div>
                                <div className="w-fit flex items-center px-3 py-2 border border-[#b1b1b1] rounded-full relative z-10">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img
                                            src="/images/man.jpg"
                                            alt="User 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-12 h-12 rounded-full overflow-hidden -ml-3">
                                        <img
                                            src="/images/female.jpg"
                                            alt="User 2"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-12 h-12 rounded-full overflow-hidden -ml-3">
                                        <img
                                            src="/images/female3.jpg"
                                            alt="User 3"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#C9F31D] flex items-center justify-center text-black font-bold text-[16px] -ml-3">
                                        20+
                                    </div>
                                </div>
                            </div>
                            <p className="mt-1.5 mx-auto text-[#E6F620]">Excellent Reviews</p>
                        </div>
                    </div>

                    {/* Banner Image with Top-Right Radius */}
                    <div className="w-full h-auto relative">
                        <img
                            src="images/h1-shape2.png"
                            alt=""
                            className="mx-auto w-[500px] h-auto"
                        />
                        <div className="absolute top-[20%]">
                            <img
                                src="images/banner1-img.jpg"
                                alt=""
                                className="rounded-tr-[200px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto py-10 flex items-center justify-center relative z-[50]">
                <div className="w-[190px] h-[190px] bg-black rounded-full flex items-center justify-center relative">
                    <svg
                        className="w-[170px] h-[170px]"
                        viewBox="0 0 180 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Define circular path for text */}
                        <defs>
                            <path
                                id="textCirclePath"
                                d="
                                 M 90, 90
                                 m -60, 0
                                 a 60,60 0 1,1 120,0
                                 a 60,60 0 1,1 -120,0
            "
                            />
                        </defs>

                        {/* Big Circle */}
                        <circle
                            cx="90"
                            cy="90"
                            r="85"
                            stroke="#1D1D1D"
                            strokeWidth="10"
                            fill="#1D1D1D"
                        />

                        {/* Rotating text along circular path */}
                        <g>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="0 90 90;360 90 90"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                            <text
                                className={`${outfit.className} text-[#B1B1AF] fill-[#B1B1AF]`}
                                fontSize="22"
                                wordSpacing={10}
                                letterSpacing={2}
                            >
                                <textPath href="#textCirclePath" startOffset="0%">
                                    Explore More. Explore More.
                                </textPath>
                            </text>
                        </g>

                        {/* Center smaller circles */}
                        <circle cx="90" cy="90" r="40" fill="#1D1D1D" />
                        <circle cx="90" cy="90" r="30" fill="#E6F620" />
                    </svg>

                    {/* Arrow centered inside yellow circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                        <FaArrowDownLong size={24} />
                    </div>
                </div>

                <div className="absolute top-0 -left-[500px] w-full h-full flex items-center justify-center">
                    <img
                        src="/images/h1-shape1.png"
                        alt="shape"
                        className="moveAnimation"
                    />
                </div>
            </div>

            <div>

            </div>
          

           <div className="marquee-container">
    {/* First marquee section - Right to Left (Infinite Loop) */}
    {/* <div className="w-full h-auto py-6 bg-[#E6F620] relative z-[50] flex items-center justify-center overflow-hidden">
        <div className="flex animate-marquee-rtl whitespace-nowrap gap-x-4" style={{ width: 'max-content' }}>
            {[...Array(4)].flatMap((_, arrayIndex) =>
                Array.from({ length: 15 }).map((_, index) => (
                    <div
                        key={`green-${arrayIndex}-${index}`}
                        className="flex items-center justify-center px-4 flex-shrink-0"
                    >
                        <span
                            className={`inline-flex font-bold text-3xl ${teko.className} text-[#1D1D1D] justify-center items-center px-2`}
                        >
                            Website Design
                        </span>
                        <img src="/images/icon1.png" alt="Icon" className="ml-2" />
                    </div>
                ))
            )}
        </div>
    </div> */}
<div className="w-full h-auto py-6 bg-[#E6F620] relative z-[50] flex items-center justify-center overflow-hidden">
       <div className="flex animate-marquee-rtl whitespace-nowrap gap-x-4" style={{ width: 'max-content' }}>
            {[...Array(4)].flatMap((_, arrayIndex) =>
                 Array.from({ length: 15 }).map((_, index) => (
                    <div
                        key={`dark-${arrayIndex}-${index}`}
                        className="flex items-center justify-center px-4 flex-shrink-0"
                    >
                        <span
                            className={`inline-flex font-bold text-3xl ${teko.className} text-[#1D1D1D] justify-center items-center px-2`}
                        >
                            Website Design
                        </span>
                        <img src="/images/icon1.png" alt="Icon" className="ml-2" />
                    </div>
                ))
            )}
        </div>
    </div>

    {/* Second marquee section - Left to Right (Infinite Loop) */}
    <div className="w-full h-auto py-6 bg-[#1D1D1D] relative z-[50] flex items-center justify-center overflow-hidden">
       <div className="flex animate-marquee-ltr whitespace-nowrap gap-x-4" style={{ width: 'max-content' }}>
            {[...Array(4)].flatMap((_, arrayIndex) =>
                 Array.from({ length: 15 }).map((_, index) => (
                    <div
                        key={`dark-${arrayIndex}-${index}`}
                        className="flex items-center justify-center px-4 flex-shrink-0"
                    >
                        <span
                            className={`inline-flex font-bold text-3xl ${teko.className} text-[#E6F620] justify-center items-center px-2`}
                        >
                            Website Design
                        </span>
                        <img src="/images/icon2.png" alt="Icon" className="ml-2" />
                    </div>
                ))
            )}
        </div>
    </div>
</div>


        </div>
    );
}
