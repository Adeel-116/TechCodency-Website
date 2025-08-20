import React from "react";
import { Teko } from "next/font/google";

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function MarqueeSection() {
  const marqueeItems = [
    "Website Design",
    "Mobile Apps",
    "E-commerce",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Strategy",
  ];

  // Simple diamond SVG icon
  const SeparatorIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sm:ml-3 ml-2 flex-shrink-0"
    >
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        fill="#DB4619"
      />
    </svg>
  );

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
        {/* Right to Left */}
        <div className="w-full h-auto sm:py-6 py-3 bg-secondary-darkblue relative z-[50] flex items-center justify-center overflow-hidden">
          <div className="animate-marquee-rtl whitespace-nowrap">
            <div className="marquee-content">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div
                  key={`rtl-${index}`}
                  className="flex items-center justify-center px-6 flex-shrink-0"
                >
                  <span
                    className={`inline-flex font-bold text-2xl sm:text-3xl ${teko.className} text-white justify-center items-center sm:px-2`}
                  >
                    {item}
                  </span>
                  <SeparatorIcon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}