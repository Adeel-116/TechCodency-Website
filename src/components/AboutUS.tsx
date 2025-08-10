"use client";
import React from "react";
import Image from "next/image";
import { Outfit, Teko } from "next/font/google";
import GetStartedButton from "./GetStartedButton";

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function AboutUS() {
  return (
    <div
      className="w-full relative"
      style={{
        paddingTop: "clamp(2rem, 8vw, 5rem)",
        paddingBottom: "clamp(2rem, 8vw, 5rem)",
      }}
    >
      <div className="max-w-[min(95%,1600px)] mx-auto flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Left Side - Enhanced Image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center"
              alt="About Us - Creative Technology Solutions"
              width={800}
              height={600}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        {/* Right Side - Enhanced Text */}
        <div className={`w-full md:w-1/2 flex flex-col justify-center px-4 ${teko.className}`}>
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 w-fit mb-4 ${outfit.className}`}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Digital Innovation Agency
            </span>
          </div>

          <h1
            className="font-bold text-black leading-none mb-2"
            style={{
              fontSize: "clamp(3rem, 5vw, 6rem)",
              background: "linear-gradient(135deg, #000000 0%, #374151 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Where Creativity 
            <span className="block text-blue-600">Meets Technology</span>
          </h1>

          
          <div className={`space-y-4 mb-8 ${outfit.className}`}>
            <p
              className="leading-relaxed text-gray-700"
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              }}
            >
              We are a passionate creative digital agency specializing in innovative solutions 
              that propel brands to new heights in todays competitive landscape. Our expertise 
              spans across cutting-edge website development, strategic branding, and comprehensive 
              digital marketing solutions.
            </p>


            <p
              className="leading-relaxed text-gray-700"
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              }}
            >
              Our mission transcends traditional boundaries—we transform visionary ideas into 
              impactful digital experiences that resonate with audiences and drive measurable results. 
              Every project is a partnership, every solution is crafted with precision, and every 
              client success story becomes part of our legacy.
            </p>
          </div>

          {/* Stats Section */}
          <div className={`flex gap-8 mb-8 ${outfit.className}`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>


          <div className="w-fit group">
            <GetStartedButton buttonTitle='GET STARTED'/>
          </div>

          </div>

        
        </div>
      </div>
    </div>
  );
}