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


interface UseCounterReturn {
  count: number;
  startAnimation: () => void;
}

interface StatData {
  number: number;
  suffix: string;
  label: string;
  gradient: string;
}

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
  delay: number;
  gradient: string;
}

const useCounter = (end: number, duration: number = 2000, delay: number = 0): UseCounterReturn => {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

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

  const startAnimation = (): void => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return { count, startAnimation };
};

// Individual Stat Card Component
const StatCard: React.FC<StatCardProps> = ({ number, suffix, label, delay, gradient }) => {
  const { count, startAnimation } = useCounter(number, 2000, delay);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      startAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, [startAnimation]);

  // Determine if gradient contains orange for ring color
  const isOrangeGradient = gradient.includes('orange');

  return (
    <div
      className={`relative group transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div
        className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer ${isHovered ? 'shadow-2xl scale-105 -translate-y-2' : ''
          }`}
        style={{
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
      >

        {/* Gradient Background Effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-700 transform ${isHovered ? 'opacity-15 rotate-1' : 'opacity-0'
            }`}
          style={{
            background: gradient,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Number */}
          <div className={`mb-3 transition-transform duration-500 ${isHovered ? 'scale-110' : ''
            }`}>
            <span
              className={`font-black leading-none transition-all duration-500 block ${teko.className} ${isHovered ? 'drop-shadow-lg' : ''
                }`}
              style={{
                background: gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(3rem, 5vw, 4rem)',
              }}
            >
              {count}{suffix}
            </span>
          </div>

          {/* Label */}
          <p
            className={`text-gray-700 font-medium tracking-wide uppercase transition-all duration-500 ${outfit.className} ${isHovered ? 'translate-x-2 text-gray-900' : ''
              }`}
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
          className={`absolute bottom-0 left-0 h-1 rounded-full transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'
            }`}
          style={{ background: gradient }}
        />

        {/* Ring Effect */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500 ring-offset-2
    ${isHovered ? 'ring-2' : 'ring-0'} 
    ${isHovered ? (isOrangeGradient ? 'ring-[var(--color-primary-orange)]' : 'ring-[var(--color-secondary-darkblue)]') : ''}`}
        ></div>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats: StatData[] = [
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
          {stats.map((stat: StatData, index: number) => (
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
};

export default StatsSection;