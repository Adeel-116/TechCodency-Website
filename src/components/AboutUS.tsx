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
    <div className="w-full h-auto py-10">
      <div className={`w-[90%] py-5 mx-auto flex ${outfit.className}`}>
        <div className="w-[42%] py-10 px-10">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/about1-img.jpg"
              alt="About our agency"
              width={500}
              height={500}
              className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-105"
              priority
            />
          </div>
        </div>

        <div className="w-[55%] py-10 px-20 relative">
          {/* Background Shape */}
          <div className="absolute -bottom-10 right-0">
            <Image
              src="/images/about-shape1.png"
              alt="Decorative shape"
              width={300}
              height={300}
              className="w-full h-auto moveAnimation"
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center">
              <div className="w-8 h-2 bg-[#C9F31D] rounded-2xl"></div>
              <div
                className={`text-3xl font-bold text-[#E6F620] ml-4 ${teko.className}`}
              >
                ABOUT OUR AGENCY
              </div>
            </div>

            <div>
              <h1
                className={`w-full pt-4 leading-none text-[5.4rem] font-bold text-white ${teko.className}`}
              >
                AI-Driven Agency Promote Your Brand’s
              </h1>
            </div>

            <div>
              <h1
                className={`w-[100%] text-[5rem] leading-tight text-white ${teko.className}`}
              >
                GROWTH AND SUCCESS
              </h1>
            </div>

            <div className="w-full h-auto flex py-5">
              <div className="w-[45%] border-r border-[#BBBBB9] pr-4 relative">
                <div className="flex flex-col items-start relative">
                  <div className="flex items-baseline">
                    <h1
                      className={`text-[180px] text-white leading-none ${teko.className}`}
                    >
                      25
                    </h1>
                    <span
                      className={`text-[120px] text-[#BBBBB9] ml-2 ${teko.className}`}
                    >
                      +
                    </span>
                  </div>
                  <p className="text-[#BBBBB9] text-xl -mt-8">
                    YEARS OF EXPERIENCE
                  </p>
                </div>
              </div>

              {/* Description Section */}
              <div className="w-[55%] pl-6 text-[#BBBBB9]">
                <p className="text-base leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore praesentium et omnis expedita earum? Velit asperiores
                  harum consectetur vel, tempore blanditiis incidunt voluptas
                  aut adipisci officiis eligendi itaque amet cum quas, atque
                  accusantium, modi facilis quibusdam soluta? Recusandae
                  quibusdam iure nesciunt consequatur ex. Praesentium in qui ex
                  maxime sequi neque?
                </p>
                <div className="flex-shrink-0 py-5">
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
