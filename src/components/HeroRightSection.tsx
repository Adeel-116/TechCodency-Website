import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroRightSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div className="w-full relative h-auto bg-amber-300 flex justify-center items-center">

      <div
        className={`relative w-full 2xl:h-[600px] h-[500px]  overflow-hidden transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
        style={{
          WebkitMaskImage: "url('/images/mask.png')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          maskImage: "url('/images/mask.png')",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
        }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="w-full h-full transition-transform duration-700 ease-out hover:scale-105"
          style={{
            transform: `translate(${mousePosition.x * 10 - 5}px, ${
              mousePosition.y * 10 - 5
            }px)`,
          }}
        >
          <Image
            src="/images/service.jpg"
            alt="Masked Image"
            fill
            className="object-cover bg-red-900 transition-all duration-500 hover:brightness-110"
          />
        </div>
      </div>

      {/* Overlay Image ABOVE the mask */}
      {/* <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/overlay.png" // Replace with your overlay image path
            alt="Overlay Image"
            fill
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
          />
        </div> */}

      {/* Overlay gradient */}
      {/* <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: 0.3 + mousePosition.x * 0.2,
          }}
        />

        <div
          className="absolute w-32 h-32 rounded-full pointer-events-none transition-all duration-500 ease-out"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: "translate(-50%, -50%)",
            filter: "blur(20px)",
          }}
        /> */}

      {/* Animated border glow */}
      {/* <div className="absolute inset-0 rounded-lg animate-pulse-border" />

        <style jsx>{`
          @keyframes pulse-border {
            0%,
            100% {
              box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.1);
            }
            50% {
              box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.2);
            }
          }
          .animate-pulse-border {
            animation: pulse-border 4s ease-in-out infinite;
          }
        `}</style>
      </div> */}

      {/* </div> */}
    </div>
  );
}
