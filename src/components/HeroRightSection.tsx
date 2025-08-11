import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroRightSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div className="w-full relative h-auto flex justify-center items-center">

      <div
        className={`relative w-full 2xl:h-[600px] md:h-[500px] h-[450px] overflow-hidden transition-all duration-1000 ease-out ${
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
            className="object-contain transition-all duration-500 hover:brightness-110"
          />
        </div>



      </div>

     

    </div>
  );
}
