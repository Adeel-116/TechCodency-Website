'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Outfit, Teko } from 'next/font/google';
import ServiceCard from './ServiceCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTA from './CTA';
gsap.registerPlugin(ScrollTrigger);

const outfit = Outfit({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});
const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Services = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      ),
      title: 'Web Development',
      description:
        'Create stunning, responsive websites that captivate your audience and drive results with cutting-edge technology.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focus', 'Modern Frameworks'],
      cta: 'Get Started',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" />
        </svg>
      ),
      title: 'Digital Marketing',
      description:
        "Amplify your brand's reach with data-driven marketing strategies that convert visitors into loyal customers.",
      features: ['Social Media Marketing', 'PPC Campaigns', 'Content Strategy', 'Analytics & Reporting'],
      cta: 'Learn More',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
        </svg>
      ),
      title: 'Brand Strategy',
      description:
        'Build a powerful brand identity that resonates with your target audience and sets you apart from competitors.',
      features: ['Logo & Identity Design', 'Brand Guidelines', 'Market Research', 'Brand Positioning'],
      cta: 'Explore',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M20 6L9 17L4 12L5.41 10.59L9 14.17L18.59 4.59L20 6Z" />
        </svg>
      ),
      title: 'UI/UX Design',
      description:
        'Design intuitive, user-centered interfaces that provide exceptional experiences and maximize user engagement.',
      features: ['User Research', 'Wireframing & Prototyping', 'Usability Testing', 'Design Systems'],
      cta: 'View Work',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
        </svg>
      ),
      title: 'Content Creation',
      description:
        'Craft compelling content that tells your story, engages your audience, and drives meaningful connections.',
      features: ['Video Production', 'Photography', 'Copywriting', 'Social Media Content'],
      cta: 'Create',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
        </svg>
      ),
      title: 'E-commerce Solutions',
      description:
        'Build powerful online stores that drive sales with seamless shopping experiences and secure payment systems.',
      features: ['Custom Online Stores', 'Payment Integration', 'Inventory Management', 'Mobile Commerce'],
      cta: 'Start Selling',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M13 7H11V11H7V13H11V17H13V7ZM12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z" />
        </svg>
      ),
      title: 'Consulting Services',
      description:
        'Get expert guidance and strategic insights to accelerate your business growth and digital transformation.',
      features: ['Digital Strategy', 'Tech Consulting', 'Business Analysis', 'Growth Planning'],
      cta: 'Consult',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      ),
      title: 'App Development',
      description:
        'Create powerful mobile and web applications that deliver exceptional user experiences across all platforms.',
      features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'API Development', 'App Store Optimization'],
      cta: 'Build App',
    },

     {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      ),
      title: 'Custom Solution',
      description:
        'Create powerful mobile and web applications that deliver exceptional user experiences across all platforms.',
      features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'API Development', 'App Store Optimization'],
      cta: 'Build App',
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollEl = scrollRef.current;

    if (!container || !scrollEl) return;

    // Calculate proper dimensions
    const cardWidth = 350;
    const cardGap = 40;
    const containerPadding = 160; // 80px on each side
    const viewportWidth = window.innerWidth;

    // Calculate total width needed to show all cards
    const totalCardsWidth = (services.length * cardWidth) + ((services.length - 1) * cardGap);
    const totalContentWidth = totalCardsWidth + containerPadding;
    
    // Calculate how much we need to scroll to show the last card properly
    const scrollDistance = Math.max(0, totalContentWidth - viewportWidth + 100); // Added 100px buffer for last card

    // Adjust multiplier for smoother scrolling
    const scrollMultiplier = 2.5;
    container.style.height = `${Math.max(scrollDistance * scrollMultiplier, window.innerHeight)}px`;

    // Create the scroll animation
    const scrollTween = gsap.to(scrollEl, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: '.scroll-pin-target',
        anticipatePin: 1,
        onUpdate: (self) => {
          // Update progress bar
          setScrollProgress(self.progress * 100);

          // Calculate active card based on scroll progress with better distribution
          const progress = self.progress;
          let cardIndex;
          
          if (progress >= 0.95) {
            // Ensure last card is active at the end
            cardIndex = services.length - 1;
          } else {
            // Distribute other cards evenly across the scroll progress
            cardIndex = Math.floor(progress * (services.length - 1));
          }
          
          const clampedIndex = Math.min(Math.max(cardIndex, 0), services.length - 1);
          setActiveCardIndex(clampedIndex);
        }
      },
    });

    ScrollTrigger.refresh();

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [services.length]);

  return (
    <div className={`w-full py-10 px-4 ${outfit.className} relative`}>
      <div className="max-w-[min(95%,1600px)] mx-auto">
  
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-2 bg-gradient-to-r from-primary to-[#9FEC1C] rounded-full"></div>
            <div
              className={`text-[5rem] font-bold text-black ml-6 ${teko.className} relative`}
              style={{ lineHeight: '1' }}
            >
              Services We Offer
            </div>
          </div>
          <p className="text-black text-xl max-w-2xl mx-auto opacity-80"
            style={{ lineHeight: '1.4' }}
          >
            Discover our comprehensive range of digital solutions designed to elevate your business
          </p>
        </div>

        {/* Enhanced Horizontal Scroll Section */}
        <div ref={containerRef} className="relative w-full">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #E6F620 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #9FEC1C 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="scroll-pin-target sticky top-0 h-screen overflow-hidden flex flex-col">
            {/* Main content area */}
            <div className="flex-1 flex items-center">
              <div
                ref={scrollRef}
                className="flex items-center h-full px-20 space-x-10"
                style={{ width: 'max-content', minWidth: '100%' }}
              >
                {services.map((service, index) => (
                  <div key={index} className="flex-shrink-0 w-[350px] h-full flex items-center">
                    <ServiceCard
                      service={service}
                      index={index}
                      isActive={index === activeCardIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full px-10 pb-8">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-[#9FEC1C] rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-4">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;