"use client";
import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { FaArrowDownLong } from "react-icons/fa6";

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function CircularText() {
  return (
    <div className="w-full h-auto py-10 flex items-center justify-center relative z-[50]">
      <div className="w-[190px] h-[190px] bg-bg rounded-full flex items-center justify-center relative">
        <svg
          className="w-[170px] h-[170px]"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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

          <circle
            cx="90"
            cy="90"
            r="85"
            stroke="#1D1D1D"
            strokeWidth="10"
            fill="#1D1D1D"
          />

          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 90 90;360 90 90"
              dur="10s"
              repeatCount="indefinite"
            />
            <text
              className={`${outfit.className} text-text-secondary fill-text-primary`}
              fontSize="22"
              wordSpacing={10}
              letterSpacing={2}
            >
              <textPath href="#textCirclePath" startOffset="0%">
                Explore More. Explore More.
              </textPath>
            </text>
          </g>

          <circle cx="90" cy="90" r="40" fill="#1D1D1D" />
          <circle cx="90" cy="90" r="30" fill="#E6F620" />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
          <FaArrowDownLong size={24} />
        </div>
      </div>

      <div className="absolute top-0 -left-[500px] w-full h-full flex items-center justify-center">
        <Image
          src="/images/h1-shape1.png"
          alt="shape"
          width={300}
          height={300}
          className="moveAnimation"
        />
      </div>
    </div>
  );
}
