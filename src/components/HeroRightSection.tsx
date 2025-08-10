import React, {useState, useEffect} from "react";
import Image from "next/image";

export default function HeroRightSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full relative aspect-[4/5] max-h-[clamp(20rem, 60vh, 45rem)]">

        <div className={`absolute inset-0 transform transition-all duration-1000 ease-out ${isLoaded ? 'scale-100 opacity-100 rotate-0' : 'scale-95 opacity-0 rotate-2'}`}>
          
         
        </div>
      </div>
    </div>
  );
}