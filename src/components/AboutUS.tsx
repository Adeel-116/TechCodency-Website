"use client";
import Image from "next/image";
import { Outfit, Teko } from "next/font/google";
import GetStartedButton from "./GetStartedButton";

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function AboutUS() {
  return (
    <div className="w-full min-h-screen py-8 md:py-16 lg:py-20">
      <div className={`w-[95%] lg:w-[90%] py-4 md:py-8 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0 ${outfit.className}`}>
        {/* Image Section */}
        <div className="w-full lg:w-[42%] py-6 md:py-10 px-4 md:px-6 lg:px-10">
          <div className="relative overflow-hidden w-full h-screen rounded-lg shadow-lg">
            <Image
              src="/images/about1-img.jpg"
              alt="About our agency"
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              priority
            />
          </div>

        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[55%] py-6 md:py-10 px-4 md:px-12 lg:px-20 relative">
          {/* Content */}
          <div className="relative z-10">
            {/* Section Header */}
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-6 md:w-8 h-1.5 md:h-2 bg-[#C9F31D] rounded-2xl"></div>
              <div
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#E6F620] ml-3 md:ml-4 ${teko.className}`}
              >
                ABOUT OUR AGENCY
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-4 md:mb-6">
              <h2
                className={`leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white ${teko.className}`}
              >
                AI-Driven Agency Promote Your Brand
              </h2>
            </div>

            <div className="mb-6 md:mb-8">
              <h2
                className={`leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white ${teko.className}`}
              >
                GROWTH AND SUCCESS
              </h2>
            </div>

            {/* Stats and Description Section */}
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0 py-4 md:py-8">
              {/* Stats Section */}
              <div className="w-full md:w-[45%] md:border-r border-[#BBBBB9] md:pr-4 relative">
                <div className="flex flex-col items-center md:items-start relative">
                  <div className="flex items-baseline justify-center md:justify-start">
                    <span
                      className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] 2xl:text-[180px] text-white leading-none ${teko.className}`}
                    >
                      25
                    </span>
                    <span
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] 2xl:text-[120px] text-[#BBBBB9] ml-2 ${teko.className}`}
                    >
                      +
                    </span>
                  </div>
                  <p className="text-[#BBBBB9] text-sm sm:text-base md:text-lg lg:text-xl -mt-4 md:-mt-6 lg:-mt-8 text-center md:text-left">
                    YEARS OF EXPERIENCE
                  </p>
                </div>
              </div>

              {/* Description Section */}
              <div className="w-full md:w-[55%] md:pl-6 text-[#BBBBB9]">
                <p className="text-sm sm:text-base leading-relaxed mb-6 md:mb-8 text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore praesentium et omnis expedita earum? Velit asperiores
                  harum consectetur vel, tempore blanditiis incidunt voluptas
                  aut adipisci officiis eligendi itaque amet cum quas, atque
                  accusantium, modi facilis quibusdam soluta? Recusandae
                  quibusdam iure nesciunt consequatur ex. Praesentium in qui
                  maxime sequi neque?
                </p>
                <div className="flex justify-center md:justify-start">
                  <GetStartedButton buttonTitle="EXPLORE MORE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}