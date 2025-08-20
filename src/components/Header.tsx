'use client';
import React from 'react';
import { Teko } from 'next/font/google';
import Image from 'next/image';
import GetStartedButton from './GetStartedButton';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (open: boolean) => void }) {

  return (
    <>
      <header className={`w-full  relative ${teko.className}`}>
        <div className="max-w-[min(95%,1600px)] mx-auto py-0 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center relative group ">
            <div className="relative w-[clamp(90px,15vw,120px)]  h-[clamp(90px,15vw,130px)]">
              <Image
                src="/images/Group5.png"
                alt="Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <nav className="xl:flex hidden 2xl:space-x-6 xl:space-x-6 text-color-text-secondary font-semibold">
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
                <span className="relative 2xl:text-[22px] xl:text-[20px] z-10 hover:text-primary-orange transition-colors duration-300">
                  {item}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          <div className='w-fit flex items-center gap-x-3'>

            <div className="items-center md:flex hidden">
              <GetStartedButton buttonTitle="GET STARTED" />
            </div>



            {/* Mobile Menu Button */}
            <div className="xl:hidden flex">
              <div
                className="relative cursor-pointer p-1 rounded-sm transition-all duration-500 ease-out group overflow-hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  backgroundColor: menuOpen
                      ? "transparent"
                      : "var(--color-primary-orange)", 
                  transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  if (!menuOpen) {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-secondary-darkblue-support)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!menuOpen) {
                    e.currentTarget.style.backgroundColor =
                      "var(--color-primary-orange)";
                  }
                }}
              >

                <div
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    backgroundColor: menuOpen
                      ? "var(--color-secondary-darkblue)"
                      : "transparent",
                    opacity: menuOpen ? 1 : 0,
                  }}
                />

                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      transition: "all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)",
                    }}
                  >
                    
                    <RiMenu3Line
                      color="white"
                      className="transition-all duration-400 ease-out"
                      size={25}
                      style={{
                        opacity: menuOpen ? 0 : 1,
                        transform: menuOpen ? "rotate(-90deg)" : "rotate(0deg)",
                        transition: "all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)",
                      }}
                    />

                    {/* Close Icon */}
                    <RiCloseLine
                      color="white"
                      className="transition-all duration-400 ease-out"
                      size={32}
                      style={{
                        position: "absolute",
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? "rotate(0deg)" : "rotate(90deg)",
                        transition: "all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
      </header>




    </>
  );
}
