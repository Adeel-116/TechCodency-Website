import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroRightSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="2xl:w-[45%] xl:w-[37%] lg:w-[50%] w-full relative h-auto flex lg:justify-end justify-center items-center">
      <div
        className={`relative w-full sm:h-[550px] h-[400px] overflow-hidden transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <Image
          src="/images/herosection-image.png"
          alt="Hero Image"
          fill
          className="object-contain" 
        />
      </div>
    </div>
  );
}
