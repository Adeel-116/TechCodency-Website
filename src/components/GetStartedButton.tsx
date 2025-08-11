'use client';

import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Outfit, Teko, Poppins } from 'next/font/google';
interface GetStartedButtonProps {
  buttonTitle?: string;
}

const outfit = Outfit({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const GetStartedButton = ({ buttonTitle }: GetStartedButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flex items-center ${poppins.className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Main Button */}
      <button
        className="font-semibold rounded-full flex items-center shadow-md transition-all duration-500 ease-out"
        style={{
          padding: 'clamp(0.6rem, 1vw, 0.7rem) clamp(0.9rem, 2vw, 1.4rem)',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
          backgroundColor: hover ? 'var(--color-bg)' : 'var(--color-secondary)',
          color: hover ? 'var(--color-secondary)' : 'var(--color-bg)',
          border: hover ? '1px solid var(--color-secondary)' : '',
        }}
      >
        {buttonTitle}
      </button>

      {/* Icon Circle */}
      <span
        className="relative z-[10] flex items-center justify-center rounded-full border-[2px] transition-all duration-500 ease-out"
        style={{
          width: 'clamp(2.2rem, 3vw, 3rem)',   
          height: 'clamp(2.2rem, 3vw, 3rem)',
          fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
          left: 'clamp(-0.75rem, -1vw, -1rem)', 
          backgroundColor: hover ? 'var(--color-bg)' : 'var(--color-secondary)',
          color: hover ? 'var(--color-secondary)' : 'var(--color-bg)',
          borderColor: hover ? 'var(--color-secondary)' : 'var(--color-bg)',
        }}
      >
        <MdArrowOutward />
      </span>
    </div>
  );
};

export default GetStartedButton;
