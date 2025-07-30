'use client';
import React, { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUS from '@/components/AboutUS';
import ServicesCard from '@/components/Services';
import SmoothScrolling from '@/components/SmoothScrolling';
import PortfolioSection from '@/components/PortfolioSection';
import CTA from '@/components/CTA';
import CaseStudy from '@/components/CaseStudy';
import PricingPlans from '@/components/PricingPlans';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="w-full h-auto bg-black relative overflow-hidden">

      {/* Header */}
      <header className="w-full absolute top-0 left-0 z-100" ref={headerRef}>
        <Header />
      </header>

      {/* Main content with dynamic margin top */}
      <main className="w-full h-auto z-50 relative" style={{ marginTop: `${headerHeight}px` }}>

        {/* Hero Section with background glows */}
        <section className="relative w-full h-auto">

          {/* Top-right glow */}
          <div
            className="w-[500px] h-[500px] absolute rounded-full -top-[200px] -right-[50px] m-4 bg-[#32370F] opacity-100"
            style={{
              filter: 'blur(150px)',
              boxShadow:
                '0 0 300px rgba(50, 55, 15, 1), ' +
                '0 0 600px rgba(50, 55, 15, 0.9), ' +
                '0 0 900px rgba(50, 55, 15, 0.7), ' +
                '0 0 1300px rgba(50, 55, 15, 0.5), ' +
                'inset 0 0 200px rgba(107, 127, 47, 0.6)'
            }}
          ></div>

          <div
            className="w-[300px] h-[300px] absolute rounded-full -top-[50px] -right-[70px] bg-[#6B7F2F] opacity-80"
            style={{
              filter: 'blur(100px)',
              boxShadow:
                '0 0 200px rgba(107, 127, 47, 1), ' +
                '0 0 200px rgba(139, 179, 63, 0.8), ' +
                '0 0 200px rgba(180, 220, 90, 0.4)'
            }}
          ></div>

          {/* Hero content */}
          <HeroSection />

          {/* Bottom-left glow */}
          <div
            className="w-[300px] h-[200px] absolute rounded-full -bottom-[130px] -left-[80px] m-4 bg-[#32370F] opacity-100"
            style={{
              filter: 'blur(150px)',
              boxShadow:
                '0 0 280px rgba(50, 55, 15, 1), ' +
                '0 0 260px rgba(50, 55, 15, 0.9), ' +
                '0 0 440px rgba(50, 55, 15, 0.7), ' +
                '0 0 700px rgba(50, 55, 15, 0.5), ' +
                'inset 0 0 180px rgba(107, 127, 47, 0.6)'
            }}
          ></div>

          <div
            className="w-[200px] h-[200px] absolute rounded-full -bottom-[60px] -left-[60px] bg-[#6B7F2F] opacity-80"
            style={{
              filter: 'blur(80px)',
              boxShadow:
                '0 0 200px rgba(107, 127, 47, 1), ' +
                '0 0 200px rgba(139, 179, 63, 0.8), ' +
                '0 0 200px rgba(180, 220, 90, 0.4)'
            }}
          ></div>

        </section>

        {/* About Section comes after HeroSection */}
        <AboutUS />
        <ServicesCard />
        <SmoothScrolling />
        <PortfolioSection />
        <CTA />
        <CaseStudy />
        <PricingPlans />
        <TestimonialsSection />
        <ContactForm />
      </main>
    </div>
  );
}
