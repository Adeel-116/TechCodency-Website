"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutUS from "@/components/AboutUS";
import Services from "@/components/Services";
import LenisWrapper from "@/components/LenisWrapper";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudy from "@/components/CaseStudy";
import PricingPlans from "@/components/PricingPlans";
import { Teko } from "next/font/google";



const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <LenisWrapper>
        <div
  className={`w-full relative bg-bg-white`}
  style={{
    transform: menuOpen
      ? "translateX(-30%) scale(0.7) rotateY(15deg)"
      : "translateX(0) scale(1) rotateY(0deg)",
    height: "100dvh", // 👈 always fixed height
    top: 0,
    overflow: menuOpen ? "hidden" : "auto",
    transition: "all 0.5s ease-in-out",
    transformOrigin: "left center", // 👈 ensures smooth pivot
  }}
>
          <header className="w-full h-auto">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </header>

          <HeroSection getHeaderHeight={0} />

          <MarqueeSection />

          <AboutUS/> 

          <Services />
          <PortfolioSection />
          <PricingPlans />


           <CaseStudy />




        </div>

        <div className="fixed top-0 left-0 -z-[100] w-full h-full bg-primary-orange flex items-center justify-end">
          <div className="w-auto pr-8 pl-3 flex justify-center items-center">
            <nav className={`flex flex-col text-white font-semibold space-y-3 ${teko.className}`}>
              {[
                "HOME",
                "ABOUT US",
                "SERVICE",
                "CASE STUDY",
                "PORTFOLIO",
                "PACKAGES",
                "CONTACT US",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-all duration-300 hover:text-primary-orange text-xl"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

      </LenisWrapper>


      {/* <Practice /> */}


    </>

  );
}