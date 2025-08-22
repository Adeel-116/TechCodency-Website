"use client";
import React, { useState, useEffect } from "react";
import { Outfit, Teko } from "next/font/google";

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const useCounter = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay, hasAnimated]);

  const startAnimation = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return { count, startAnimation };
};

// Individual Stat Card Component
const StatCard = ({ number, suffix, label, delay, gradient }) => {
  const { count, startAnimation } = useCounter(number, 2000, delay);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      startAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, [startAnimation]);

  return (
    <div 
      className={`relative group transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card Container */}
      <div className="relative  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2">
        
        {/* Gradient Background Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-all duration-700 rounded-2xl transform group-hover:rotate-1"
          style={{
            background: gradient,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Number */}
          <div className="mb-3 transform group-hover:scale-110 transition-transform duration-500">
            <span 
              className={`text-6xl font-black leading-none group-hover:drop-shadow-lg transition-all duration-500 ${teko.className}`}
              style={{
                background: gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: 'clamp(3rem, 5vw, 4rem)',
              }}
            >
              {count}{suffix}
            </span>
          </div>
          
          {/* Label */}
          <p 
            className={`text-gray-700 font-medium tracking-wide uppercase transform group-hover:translate-x-2 transition-all duration-500 group-hover:text-gray-900 ${outfit.className}`}
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              letterSpacing: '0.1em',
            }}
          >
            {label}
          </p>
        </div>

        {/* Hover Effect Line */}
        <div 
          className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 rounded-full"
          style={{ background: gradient }}
        />
        
        {/* Additional Hover Effects */}
        <div
          className={`absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 transition-all duration-500 ${
            gradient.includes('orange')
              ? 'group-hover:ring-[var(--color-primary-orange)]'
              : 'group-hover:ring-[var(--color-secondary-darkblue)]'
          }`}
          
        />
      </div>
    </div>
  );
};

export default function StatsSection() {
  const stats = [
    {
      number: 150,
      suffix: '+',
      label: 'Projects Completed',
      gradient: 'linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))',
    },
    {
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      gradient: 'linear-gradient(135deg, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support))',
    },
    {
      number: 10,
      suffix: '+',
      label: 'Years Experience',
      gradient: 'linear-gradient(135deg, var(--color-primary-orange-support), var(--color-primary-orange))',
    },
    {
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      gradient: 'linear-gradient(135deg, var(--color-secondary-darkblue-support), var(--color-secondary-darkblue))',
    },
  ];

  return (
    <div className="w-full" style={{ 
      paddingTop: 'clamp(3rem, 8vw, 5rem)',
      paddingBottom: 'clamp(2rem, 6vw, 4rem)'
    }}>
      <div className="max-w-[min(92%,1400px)] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-4 w-fit mb-6 relative ${outfit.className}`}>
            {/* Left Line */}
            <div
              className="w-12 h-[2px] rounded-full relative"
              style={{
                background: 'linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))',
              }}
            />

            {/* Text with gradient */}
            <span
              className="font-black text-sm uppercase tracking-[0.2em] relative px-3 py-1"
              style={{
                background: 'linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              OUR ACHIEVEMENTS
            </span>

            {/* Right Line */}
            <div
              className="w-12 h-[2px] rounded-full relative"
              style={{
                background: 'linear-gradient(to right, var(--color-primary-orange-support), var(--color-primary-orange))',
              }}
            />
          </div>

          <h2
            className={`font-black leading-tight ${teko.className}`}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              color: 'var(--color-secondary-darkblue)',
            }}
          >
            Numbers That Speak Volumes
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
              gradient={stat.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}