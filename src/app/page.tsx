"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutUS from "@/components/AboutUS";
import Services from "@/components/Services";
import PricingPlans from "@/components/PricingPlans";
import {Teko } from "next/font/google";
import { RiCloseLine } from "react-icons/ri";
import CaseStudy from "@/components/CaseStudy";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT US",
    "SERVICE",
    "CASE STUDY",
    "PORTFOLIO",
    "PACKAGES",
    "CONTACT US",
  ];

  const services = [
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "E-Commerce Solutions",
    "SEO Optimization",
    "Digital Marketing",
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
 
        <div
          className={`w-full relative bg-bg-white h-[100dvh] top-0 transition-all duration-500 ease-in-out origin-left ${menuOpen
            ? "sm:translate-x-[-15%] translate-x-[-42%] scale-75 rotate-y-15"
            : "translate-x-0 scale-100 rotate-y-0"
            } ${menuOpen ? "overflow-hidden" : "overflow-auto"}`}
          style={{ zIndex: menuOpen ? 10 : 'auto' }}
        >
          <header className="w-full h-auto">
            <Header setMenuOpen={setMenuOpen} />
          </header>

          <HeroSection getHeaderHeight={0} />
          <MarqueeSection />
          <AboutUS />
          <Services />
          <PricingPlans />
          <CaseStudy />
          <TestimonialsSection />
          <Footer />
      
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-primary-orange-support transition-all duration-500 ${menuOpen ? 'z-[5] opacity-100' : 'z-[-100] opacity-0'
            }`}
        >

<div className="absolute top-5 right-0 mr-5">
  <button
    onClick={() => setMenuOpen(false)}
    className="text-[var(--color-bg-white)] p-2 rounded-full shadow-md 
               transition-all duration-300 ease-in-out 
              hover:rotate-90 hover:scale-110 
               hover:shadow-2xl hover:shadow-orange-200/50
               active:scale-95 active:rotate-45 active:duration-75
               transform-gpu will-change-transform
               group relative overflow-hidden"
  >
    {/* Icon with subtle bounce */}
    <div className="relative z-10 transition-transform duration-200 group-hover:scale-105">
      <RiCloseLine size={30} />
    </div>
  </button>
</div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-fit md:pr-50 sm:pr-30 pr-25 pl-3 flex justify-center items-center">
            <nav className={`flex flex-col fixed z-[100] text-white font-semibold space-y-1 ${teko.className}  sm:text-[26px] text-[26px]`}>
              {menuItems.map((item) =>
                item === "SERVICE" ? (
                  <div key={item} className="relative sm:min-w-[220px] min-w-[190px] " >
                    <button
                      onClick={() => setServiceOpen(!serviceOpen)}
                      className="w-full text-left transition-all duration-300 flex items-center justify-between"
                    >
                      {item}
                      <span className={`ml-1 transition-transform duration-300 ${serviceOpen ? 'rotate-180' : 'rotate-0'}`}>
                        ▼
                      </span>
                    </button>

                    {/* Dropdown with animation */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${serviceOpen ? 'max-h-45 overflow-y-auto custom-scrollbar' : 'max-h-0 overflow-hidden'}`
                      }
                    >
                      <div
                        className={`ml-2 flex flex-col space-y-1 border-l-1 border-bg-white sm:text-xl text-[21px] pl-2 `}
                    >
                      {services.map((srv, index) => (
                        <a
                          key={srv}
                          href="#"
                          className="transition-all duration-300 transform hover:translate-x-2"
                          style={{
                            animationDelay: serviceOpen ? `${index * 100}ms` : '0ms'
                          }}
                        >
                          {srv}
                        </a>
                      ))}
                    </div>
                  </div>
                  </div>
          ) : (
          <a
            key={item}
            href="#"
            className="transition-all duration-300"
          >
            {item}
          </a>
          )
              )}
        </nav>
      </div>

    </div >
   
    </>
  );
}