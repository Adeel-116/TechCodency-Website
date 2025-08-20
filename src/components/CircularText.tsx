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
      <div className="2xl:w-[150px] 2xl:h-[150px] w-[130px] h-[130px] sm:bg-bg rounded-full flex items-center justify-center relative">
        <svg
          className="sm:w-[170px] sm:h-[170px] w-[130px] h-[130px]"
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

          <circle cx="90" cy="90" r="40" fill="#000000" />
          <circle cx="90" cy="90" r="30" fill="#DB4619" />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bg-white">
          <FaArrowDownLong size={24} />
        </div>
      </div>

  );
}
