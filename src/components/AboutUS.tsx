"use client";
import React from "react";
import { Outfit, Teko } from "next/font/google";
import Image from "next/image";
import GetStartedButton from "./GetStartedButton";
import StatsSection from "./StatsSection";

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
    <div
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "clamp(3rem, 10vw, 6rem)",
        paddingBottom: "clamp(3rem, 10vw, 6rem)",
      }}
    >
      <div className="max-w-[min(92%,1500px)] relative mx-auto">

        <div className="absolute top-[90%] left-0 w-full h-full">
          <div
            className="relative -rotate-20"
            style={{
              width: "clamp(70px, 8vw, 160px)", 
              height: "clamp(70px, 8vw, 160px)",  
            }}
          >
            <Image
              src="/images/about-us-icon.png"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div
          className={`w-full flex flex-col justify-center items-center text-center ${teko.className}`}
        >
          {/* Label */}
          <div
            className={`inline-flex items-center gap-4 w-fit mb-5 ${outfit.className} relative`}
          >
            {/* Left Line */}
            <div
              className="w-16 h-[3px] rounded-full relative"
              style={{
                background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))",
              }}
            >
              <div
                className="absolute inset-0 rounded-full blur-sm opacity-50"
                style={{
                  background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))",
                }}
              ></div>
            </div>

            {/* Text with gradient */}
            <span
              className="font-black text-base uppercase tracking-[0.2em] relative sm:px-4 px-0 py-2"
              style={{
                background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ABOUT US
            </span>

            {/* Right Line */}
            <div
              className="w-16 h-[3px] rounded-full relative"
              style={{
                background: "linear-gradient(to right, var(--color-primary-orange-support), var(--color-primary-orange))",
              }}
            >
            </div>
          </div>

          {/* Main Title */}
          <h1
            className={`font-black leading-[0.9] mb-8 ${teko.className}`}
            style={{
              fontSize: "clamp(4rem, 11vw, 5rem)",
              color: "#000000",
              textShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontWeight: 800,
            }}
          >
            Shaping Ideas into Powerful <span className="text-secondary-darkblue">Digital Experiences</span>
          </h1>

          {/* Paragraphs */}
          <div className={`space-y-8 xl:w-[80%] lg:w-[90%] sm:w-[97%] w-full sm:text-center text-start ${outfit.className}`}>
            <p
              className="leading-relaxed text-text-primary"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontWeight: 400,
              }}
            >
              We are a passionate creative digital agency specializing in
              innovative solutions that propel brands to new heights in todays
              competitive landscape. Our expertise spans across cutting-edge
              website development, strategic branding, and comprehensive digital
              marketing solutions.
            </p>

            <p
              className="leading-relaxed text-text-primary"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontWeight: 400,
              }}
            >
              Our mission transcends traditional boundaries—we transform
              visionary ideas into impactful digital experiences that resonate
              with audiences and drive measurable results. Every project is a
              partnership, every solution is crafted with precision, and every
              client success story becomes part of our legacy.
            </p>
          </div>

          {/* Button */}
          <div className="w-fit" style={{ paddingTop: "clamp(2rem, 6vw, 4rem)" }}>
            <GetStartedButton buttonTitle="GET STARTED" />
          </div>

           {/* Stats Section - Added after second paragraph */}
    
        </div>
      </div>

           <StatsSection />
    </div>
  );
}