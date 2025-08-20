'use client';
import React from 'react';
import { Teko } from 'next/font/google';
import Image from 'next/image';
import GetStartedButton from './GetStartedButton';
import { RiMenu3Line } from 'react-icons/ri';


const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (open: boolean) => void }) {

  return (
    <>
      <header className={`w-full  relative ${teko.className}`}>
        <div className="max-w-[min(95%,1600px)] mx-auto py-1 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center relative group ">
            <div className="relative w-[clamp(90px,15vw,110px)]  h-[clamp(90px,15vw,120px)]">
              <Image
                src="/images/Group5.png"
                alt="Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <nav className="lg:flex hidden 2xl:space-x-6 xl:space-x-6 lg:space-x-3 text-color-text-secondary font-semibold">
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
                <span className="relative 2xl:text-[22px] xl:text-[20px] lg:text-[17px] z-10 hover:text-primary-orange transition-colors duration-300">
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
            <div className="lg:hidden flex">



              <div className="lg:hidden flex">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-1.5 rounded-full bg-primary-orange"
                >
                  <RiMenu3Line size={23} color={"white"} />
                </button>
              </div>









            </div>


          </div>


        </div>
      </header>




    </>
  );
}
