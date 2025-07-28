'use client';

import React, { useRef, useEffect } from 'react';
import { Outfit, Teko } from 'next/font/google';
import ServiceCard from './ServiceCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z" />
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
  ];

  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollEl = scrollRef.current;
    
    if (!container || !scrollEl) return;

    // Calculate proper dimensions
    const cardWidth = 350; // Width of each card
    const cardGap = 40; // Gap between cards (space-x-10 = 2.5rem = 40px)
    const containerPadding = 80; // px-10 = 2.5rem = 40px on each side = 80px total
    const extraBuffer = 200; // Extra space to ensure the last card is fully visible
    
    // Total scroll width calculation
    const totalContentWidth = (services.length * cardWidth) + ((services.length - 1) * cardGap) + containerPadding + extraBuffer;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalContentWidth - viewportWidth;
    
    // Set container height based on scroll distance for smooth scrolling
    const scrollMultiplier = 3.5; // Increased multiplier for more scroll distance
    container.style.height = `${scrollDistance * scrollMultiplier}px`;

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
          // Optional: Add progress indicator or other updates
          console.log('Scroll progress:', self.progress);
        }
      },
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [services.length]);

  return (
    <div className={`w-full  px-4 ${outfit.className}`}>
      <div className="w-[90%] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center">
              <div className="w-10 h-2 bg-[#C9F31D] rounded-2xl"></div>
              <div
                className={`text-[5rem] font-bold text-[#E6F620] ml-4 ${teko.className}`}
              >
                Services We Offer
              </div>
            </div>
          <p className="text-white text-xl max-w-2xl mx-auto">
            Discover our comprehensive range of digital solutions designed to elevate your business
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E6F620] to-neutral-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Horizontal Scroll Section */}
        <div ref={containerRef} className="relative w-full">
          <div className="scroll-pin-target sticky top-0 h-screen overflow-hidden">
            <div
              ref={scrollRef}
              className="flex items-center h-full px-10 space-x-10"
              style={{ width: 'max-content' }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-[350px]">
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;