'use client'
import React from 'react';
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import GetStartedButton from './GetStartedButton';

const outfit = Outfit({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className={`w-[90%] mx-auto py-4 ${outfit.className}`}>
      <div className="flex items-center justify-between">

   <div className="flex items-center relative group">
  {/* Logo */}
  <div className="relative w-16 h-16 sm:w-24 sm:h-28 md:w-28 md:h-20">
    <Image
      src="/images/logo.png"
      alt="Logo"
      fill
      className="object-contain group-hover:scale-110 transition-transform duration-300"
    />
  </div>

  {/* Branding Text: Column on mobile, row on sm+ */}
  <div className="flex flex-col sm:flex-row sm:ml-3">
    <span
      className="text-xl sm:text-2xl font-black text-left tracking-wide text-white bg-clip-text group-hover:from-[#8BB33F] group-hover:via-white group-hover:to-[#8BB33F] transition-all duration-500"
      style={{
        textShadow: '0 0 20px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3)',
      }}
    >
      TECH
    </span>
    <span className="text-xl sm:text-2xl font-black text-[#DAF220] text-center sm:text-left">
      CODENCY
    </span>
  </div>
</div>


        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-white">
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">HOME</a>
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">SERVICE</a>
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">ABOUT</a>
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">PORTFOLIO</a>
        </nav>

        {/* Get Started Button */}
        <div className="flex-shrink-0 sm:block hidden">
          <GetStartedButton buttonTitle='GET STARTED' />
        </div>
      </div>
    </header>
  );
}
