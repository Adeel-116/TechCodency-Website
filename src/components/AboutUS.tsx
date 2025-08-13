"use client";
import React from "react";
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
    <div
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "clamp(4rem, 12vw, 8rem)",
        paddingBottom: "clamp(4rem, 12vw, 8rem)",
      }}
    >
      <div className="max-w-[min(92%,1500px)] mx-auto">
        <div
          className={`w-full flex flex-col justify-center items-center text-center px-4 ${teko.className}`}
        >
          {/* Label */}
          <div
            className={`inline-flex items-center gap-4 w-fit mb-12 ${outfit.className} relative group`}
          >
            <div className="w-16 h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-50"></div>
            </div>
            <span className="text-blue-600 font-black text-base uppercase tracking-[0.2em] relative px-4 py-2">
              Digital Innovation Agency
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl -z-10"></div>
            </span>
            <div className="w-16 h-[3px] bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className={`font-black leading-[0.9] mb-8 ${teko.className}`}
            style={{
              fontSize: "clamp(4rem, 11vw, 8rem)",
              color: "#000000",
              textShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontWeight: 900,
            }}
          >
            Where Creativity Meet Expectations
          </h1>

          {/* Paragraphs */}
          <div className={`max-w-6xl space-y-10 mb-20 ${outfit.className}`}>
            <p
              className="leading-relaxed text-gray-700"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontWeight: 400,
              }}
            >
              We are a passionate creative digital agency specializing in
              innovative solutions that propel brands to new heights in today's
              competitive landscape. Our expertise spans across cutting-edge
              website development, strategic branding, and comprehensive digital
              marketing solutions.
            </p>

            <p
              className="leading-relaxed text-gray-700"
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
          <div className="w-fit">
            <GetStartedButton buttonTitle="GET STARTED" />
          </div>
        </div>
      </div>
    </div>
  );
}
