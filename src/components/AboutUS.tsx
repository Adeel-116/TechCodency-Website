"use client";
import React, { useEffect, useRef } from "react";
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

// TypeScript interface for GSAP
interface GSAPType {
  set: (target: any, vars: any) => void;
  to: (target: any, vars: any) => any;
  timeline: (options?: any) => any;
  registerPlugin?: (plugin: any) => void;
}

declare global {
  interface Window {
    gsap: GSAPType;
  }
}

export default function AboutUS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== 'undefined' && window.gsap) {
        const gsap = window.gsap;
        
        // Set initial states - ensure elements exist
        const elements = [labelRef.current, titleRef.current, subtitleRef.current].filter(Boolean);
        const paragraphs = paragraphsRef.current.filter(Boolean);
        const stats = statsRef.current.filter(Boolean);
        
        if (elements.length > 0) {
          gsap.set(elements, { opacity: 0, y: 80, scale: 0.9 });
        }
        if (paragraphs.length > 0) {
          gsap.set(paragraphs, { opacity: 0, y: 50, scale: 0.95 });
        }
        if (stats.length > 0) {
          gsap.set(stats, { opacity: 0, scale: 0.7, y: 30 });
        }
        if (buttonRef.current) {
          gsap.set(buttonRef.current, { opacity: 0, scale: 0.8, y: 20 });
        }

        // Create master timeline with better timing
        const masterTL = gsap.timeline({ 
          delay: 0.3,
          onComplete: () => {
            console.log('Animation complete');
          }
        });

        // Label animation with bounce
        if (labelRef.current) {
          masterTL.to(labelRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.4)"
          });
        }

        // Title animation with stagger effect
        if (titleRef.current) {
          masterTL.to(titleRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out"
          }, "-=0.8");
        }

        // Subtitle with different timing
        if (subtitleRef.current) {
          masterTL.to(subtitleRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out"
          }, "-=1.0");
        }

        // Paragraphs with stagger
        if (paragraphs.length > 0) {
          masterTL.to(paragraphs, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
          }, "-=0.6");
        }

        // Stats with bounce effect
        if (stats.length > 0) {
          masterTL.to(stats, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "back.out(2)"
          }, "-=0.4");
        }

        // Button final reveal
        if (buttonRef.current) {
          masterTL.to(buttonRef.current, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.7)"
          }, "-=0.5");
        }

        // Enhanced hover animations
        stats.forEach((stat, index) => {
          if (stat) {
            const statNumber = stat.querySelector('.stat-number') as HTMLElement;
            
            stat.addEventListener('mouseenter', () => {
              gsap.to(stat, { 
                scale: 1.15, 
                duration: 0.4, 
                ease: "power2.out",
                transformOrigin: "center center"
              });
              
              if (statNumber) {
                gsap.to(statNumber, { 
                  rotationY: 360, 
                  duration: 0.8, 
                  ease: "power2.inOut",
                  transformOrigin: "center center"
                });
              }
            });
            
            stat.addEventListener('mouseleave', () => {
              gsap.to(stat, { 
                scale: 1, 
                duration: 0.4, 
                ease: "power2.out" 
              });
            });
          }
        });

        // Title hover with magnetic effect
        if (titleRef.current) {
          const title = titleRef.current;
          
          title.addEventListener('mouseenter', () => {
            gsap.to(title, {
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
              transformOrigin: "center center"
            });
          });
          
          title.addEventListener('mouseleave', () => {
            gsap.to(title, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }

        // Subtitle hover effect
        if (subtitleRef.current) {
          const subtitle = subtitleRef.current;
          
          subtitle.addEventListener('mouseenter', () => {
            gsap.to(subtitle, {
              scale: 1.03,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          subtitle.addEventListener('mouseleave', () => {
            gsap.to(subtitle, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      }
    };

    // Load GSAP and initialize
    if (typeof window !== 'undefined') {
      if (window.gsap) {
        initAnimations();
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = () => {
          setTimeout(initAnimations, 100); // Small delay to ensure GSAP is ready
        };
        script.onerror = () => {
          console.error('Failed to load GSAP');
        };
        document.head.appendChild(script);
        
        return () => {
          if (document.head.contains(script)) {
            document.head.removeChild(script);
          }
        };
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "clamp(4rem, 12vw, 8rem)",
        paddingBottom: "clamp(4rem, 12vw, 8rem)",
      }}
    >
      <div className="max-w-[min(92%,1500px)] mx-auto">
        
        {/* Main Content - Full Width */}
        <div className={`w-full flex flex-col justify-center items-center text-center px-4 ${teko.className}`}>
          
          {/* Enhanced Label */}
          <div 
            ref={labelRef}
            className={`inline-flex items-center gap-4 w-fit mb-12 ${outfit.className} relative group cursor-pointer`}
          >
            <div className="w-16 h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-50"></div>
            </div>
            <span className="text-blue-600 font-black text-base uppercase tracking-[0.2em] relative px-4 py-2">
              Digital Innovation Agency
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl -z-10"></div>
            </span>
            <div className="w-16 h-[3px] bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>

          {/* Enhanced Main Title - Fixed visibility */}
          <h1
            ref={titleRef}
            className={`font-black leading-[0.9] mb-8 cursor-pointer relative group ${teko.className}`}
            style={{
              fontSize: "clamp(4rem, 11vw, 8rem)",
              color: "#000000",
              textShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontWeight: 900
            }}
          >
            <span className="block relative transform hover:scale-105 transition-transform duration-300">
              Where Creativity Meet Expectations
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/8 to-purple-600/8 scale-0 group-hover:scale-100 transition-all duration-700 rounded-3xl -z-10 blur-sm"></div>
            </span>
          </h1>

          {/* Enhanced Content Paragraphs */}
          <div className={`max-w-6xl space-y-10 mb-20 ${outfit.className}`}>
            <p
              ref={(el) => {
                paragraphsRef.current[0] = el;
              }}
              className="leading-relaxed text-gray-700 hover:text-gray-900 transition-all duration-500 cursor-default group relative"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontWeight: 400
              }}
            >
              <span className="relative z-10">
                We are a passionate creative digital agency specializing in innovative solutions 
                that propel brands to new heights in todays competitive landscape. Our expertise 
                spans across cutting-edge website development, strategic branding, and comprehensive 
                digital marketing solutions.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl -z-10 opacity-50"></div>
            </p>

            <p
              ref={(el) => {
                paragraphsRef.current[1] = el;
              }}
              className="leading-relaxed text-gray-700 hover:text-gray-900 transition-all duration-500 cursor-default group relative"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontWeight: 400
              }}
            >
              <span className="relative z-10">
                Our mission transcends traditional boundaries—we transform visionary ideas into 
                impactful digital experiences that resonate with audiences and drive measurable results. 
                Every project is a partnership, every solution is crafted with precision, and every 
                client success story becomes part of our legacy.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl -z-10 opacity-50"></div>
            </p>
          </div>

          {/* Enhanced Stats Section */}
          <div className={`flex flex-col sm:flex-row gap-16 sm:gap-24 mb-20 ${outfit.className}`}>
            <div 
              ref={(el) => {
                statsRef.current[0] = el;
              }}
              className="text-center group cursor-pointer relative"
            >
              <div className="stat-number text-7xl font-black text-blue-600 mb-6 relative transform-gpu">
                150+
                <div className="absolute inset-0 bg-blue-600/15 scale-0 group-hover:scale-125 transition-all duration-500 rounded-2xl -z-10 blur-sm"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 scale-0 group-hover:scale-110 transition-all duration-300 rounded-xl -z-20"></div>
              </div>
              <div className="text-xl font-bold text-gray-600 group-hover:text-gray-800 transition-colors duration-300 tracking-wide">
                Projects Completed
              </div>
            </div>
            
            <div 
              ref={(el) => {
                statsRef.current[1] = el;
              }}
              className="text-center group cursor-pointer relative"
            >
              <div className="stat-number text-7xl font-black text-purple-600 mb-6 relative transform-gpu">
                98%
                <div className="absolute inset-0 bg-purple-600/15 scale-0 group-hover:scale-125 transition-all duration-500 rounded-2xl -z-10 blur-sm"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-purple-600/20 scale-0 group-hover:scale-110 transition-all duration-300 rounded-xl -z-20"></div>
              </div>
              <div className="text-xl font-bold text-gray-600 group-hover:text-gray-800 transition-colors duration-300 tracking-wide">
                Client Satisfaction
              </div>
            </div>
          </div>

          {/* Enhanced Button */}
          <div ref={buttonRef} className="w-fit group relative">
            <GetStartedButton buttonTitle='GET STARTED'/>
          </div>

        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
}