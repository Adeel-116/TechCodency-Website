"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutUS from "@/components/AboutUS";
import Services from "@/components/Services";
import LenisWrapper from "@/components/LenisWrapper";
import Practice from "@/components/Practice";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudy from "@/components/CaseStudy";

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
        className={`w-full relative h-auto bg-white`}
        style={{
          transform: menuOpen
            ? "translateX(-30%) scale(0.7) rotateY(15deg)"
            : "translateX(0) scale(1) rotateY(0)",
          height: menuOpen ? "100dvh" : "auto",
          top: menuOpen ? "0" : "0",
          overflow: menuOpen ? "hidden" : "visible",
          transition: "all 0.5s ease-in-out",
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

       
          {/* <CaseStudy /> */}
      
       
        
       
      </div>
      
      <div className="fixed top-0 left-0 -z-[100] w-full h-full bg-[#1D1D1D] flex items-center justify-center">
      </div>
    </LenisWrapper>


      {/* <Practice /> */}
       
       
    </>

  );
}