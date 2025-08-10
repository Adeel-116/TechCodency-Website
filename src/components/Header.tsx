'use client';
import React from 'react';
import { Outfit, Teko} from 'next/font/google';
import Image from 'next/image';
import GetStartedButton from './GetStartedButton';

const outfit = Outfit({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});
const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function Header() {
  return (
    <header className={`w-full  relative ${teko.className}`}>
     
      <div className="max-w-[min(95%,1600px)] mx-auto py-4 flex items-center justify-between ">

        {/* Logo */}
        <div className="flex items-center relative group">
          <div className="relative w-[clamp(50px,8vw,70px)] h-[clamp(50px,8vw,70px)]">
            <Image
              src="/images/logo4.png"
              alt="Logo"
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span
              className="font-black text-left tracking-wide text-bg bg-clip-text"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
                lineHeight: '1.5',
                marginBottom: '-0.25rem',
              }}
            >
              TECH
            </span>
            <span
              className="font-black text-primary text-left leading-none"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              }}
            >
              CODENCY
            </span>
          </div>
        </div>
        <nav className="xl:flex hidden 2xl:space-x-6 xl:space-x-6 text-black font-semibold">
          {[
            'HOME',
            'ABOUT US',
            'SERVICE',
            'CASE STUDY',
            'PORTFOLIO',
            'PACKAGES',
            'CONTACT US'
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group py-2 transition-all duration-300"
            >
              <span className="relative 2xl:text-[22px] xl:text-[20px] z-10 hover:text-primary transition-colors duration-300">
                {item}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </nav>

        {/* Get Started Button */}
        <div className="flex items-center">
          <GetStartedButton buttonTitle="GET STARTED" />
        </div>

      </div>
    </header>
  );
}
