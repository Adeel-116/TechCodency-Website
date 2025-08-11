"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Cube from "@/components/Cube";
import AboutUS from "@/components/AboutUS";
import Services from "@/components/Services";
import PortfolioSection from "@/components/PortfolioSection";
import CTA from "@/components/CTA";
import PricingPlans from "@/components/PricingPlans";
import MarqueeSection from "@/components/MarqueeSection";
export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <div
        className={`w-full relative h-auto bg-white`}
        style={{
          transform: menuOpen
            ? "translateX(-30%) scale(0.7) rotateY(15deg)"
            : "translateX(0) scale(1) rotateY(0)",
          height: menuOpen ? "100dvh" : "100dvh",
          top: menuOpen ? "0" : "0",
          overflow: menuOpen ? "hidden" : "auto",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <header className="w-full h-auto" ref={headerRef}>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         </header>

        <HeroSection getHeaderHeight={0} />
        <MarqueeSection />
      </div>

      {/* Mobile Overlay */}
      <div className="fixed top-0 left-0 -z-[100] w-full h-full bg-[#1D1D1D] flex items-center justify-center">
        
      </div>
    </>
  );
}
