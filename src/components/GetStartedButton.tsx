'use client';

import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Poppins } from 'next/font/google';

interface GetStartedButtonProps {
  buttonTitle?: string;
}

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const GetStartedButton = ({ buttonTitle }: GetStartedButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flex items-center ${poppins.className} cursor-pointer group`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Main Button */}
      <button
        className="font-semibold rounded-full flex items-center shadow-md transition-all duration-700 ease-out transform group-hover:scale-[1.02] group-hover:shadow-xl relative overflow-hidden"
        style={{
          padding: 'clamp(0.6rem, 1vw, 0.7rem) clamp(0.9rem, 2vw, 1.4rem)',
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
          backgroundColor: hover ? 'var(--color-secondary-darkblue-support)' : 'var(--color-primary-orange)',
          color:  'white',
          border: hover ? '1px solid var(--color-secondary-darkblue-support)' : '1px solid transparent',
        }}
      >
        {/* Animated background overlay */}
        <span 
          className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
          style={{
            background: hover 
              ? 'linear-gradient(135deg, var(--color-secondary-darkblue-support), var(--color-secondary))' 
              : 'linear-gradient(135deg, var(--color-primary-orange-support), var(--color-accent))',
            opacity: hover ? 1 : 0,
            transform: hover ? 'scale(1)' : 'scale(0.8)',
          }}
        />
        
        {/* Shimmer effect */}
        <span 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
            transform: hover ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.8s ease-out',
          }}
        />
        
        {/* Button text with enhanced animation */}
        <span 
          className="relative z-10 transition-all leading-tight duration-500 ease-out"
          style={{
            transform: hover ? 'translateY(-1px)' : 'translateY(0)',
            letterSpacing: hover ? '0.5px' : '0px',
          }}
        >
          {buttonTitle}
        </span>
      </button>

      {/* Icon Circle with enhanced animations */}
      <span
        className="relative z-[10] flex items-center justify-center rounded-full border-[2px] transition-all duration-700 ease-out overflow-hidden group-hover:rotate-[360deg] group-hover:scale-110"
        style={{
          width: 'clamp(2.2rem, 3vw, 3rem)',   
          height: 'clamp(2.2rem, 3vw, 3rem)',
          fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
          left: 'clamp(-0.75rem, -1vw, -1rem)', 
          backgroundColor: hover ? 'var(--color-secondary-darkblue-support)' : 'var(--color-primary-orange)',
          color: 'white',
          borderColor: hover ? 'white' : 'white',
          boxShadow: hover ? '0 8px 25px rgba(0,0,0,0.15)' : '0 4px 15px rgba(0,0,0,0.1)',
        }}
      >
        {/* Pulsing background effect */}
        <span 
          className="absolute inset-0 rounded-full transition-all duration-700"
          style={{
            background: hover 
              ? 'radial-gradient(circle, var(--color-secondary-darkblue-support) 0%, var(--color-secondary-darkblue) 100%)'
              : 'radial-gradient(circle, var(--color-primary-orange-support) 0%, var(--color-accent) 100%)',
            transform: hover ? 'scale(1.1)' : 'scale(1)',
            opacity: hover ? 0.8 : 0.6,
          }}
        />
        
        {/* Icon with enhanced animation */}
        <MdArrowOutward 
          className="relative z-10 transition-all duration-500 ease-out"
          style={{
            transform: hover ? 'translate(2px, -2px) scale(1.1)' : 'translate(0, 0) scale(1)',
            filter: hover ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none',
          }}
        />
        
        {/* Ripple effect */}
        <span 
          className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100"
          style={{
            borderColor: hover ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.3)',
            transform: hover ? 'scale(1.4)' : 'scale(1)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      </span>
      
      {/* Floating particles effect (optional) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-70 transition-all duration-1000"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
              transform: hover ? `translateY(-${20 + i * 10}px) translateX(${10 - i * 5}px)` : 'translate(0, 0)',
              transitionDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GetStartedButton;