'use client';

import React, { useRef, useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      position: "CEO & Founder",
      company: "TechVision Solutions",
      avatar: "MC",
      rating: 5,
      text: "Working with this agency has been transformative for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital solutions is unmatched."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Director", 
      company: "Growth Dynamics",
      avatar: "SJ",
      rating: 5,
      text: "Working with this agency has been transformative for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital solutions is unmatched."
    },
    {
      id: 3,
      name: "David Rodriguez",
      position: "Operations Manager",
      company: "Elite Enterprises", 
      avatar: "DR",
      rating: 5,
      text: "Working with this agency has been transformative for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital solutions is unmatched."
    },
    {
      id: 4,
      name: "Emily Williams",
      position: "Business Owner",
      company: "Innovative Retail Co.",
      avatar: "EW", 
      rating: 5,
      text: "Working with this agency has been transformative for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital solutions is unmatched."
    },
    {
      id: 5,
      name: "James Thompson",
      position: "Creative Director",
      company: "Nexus Media Group",
      avatar: "JT",
      rating: 5,
      text: "Working with this agency has been transformative for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital solutions is unmatched."
    },
    {
      id: 6,
      name: "Amanda Lee", 
      position: "VP of Marketing",
      company: "Summit Solutions",
      avatar: "AL",
      rating: 5,
      text: "Working with this agency has been transformative for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital solutions is unmatched."
    }
  ];

  const handleScroll = (direction: 'prev' | 'next') => {
    if (trackRef.current) {
      const container = trackRef.current;
      const scrollAmount = container.offsetWidth * 0.9;
      container.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-[var(--color-bg-white)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[3px] bg-gradient-to-r from-[var(--color-primary-orange)] to-[var(--color-primary-orange-support)] rounded-full" />
            <span
              className="font-black text-xs sm:text-sm md:text-base uppercase tracking-[0.25em]"
              style={{
                background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Client Success Stories
            </span>
            <div className="w-10 h-[3px] bg-gradient-to-r from-[var(--color-primary-orange-support)] to-[var(--color-primary-orange)] rounded-full" />
          </div>

          <h1 className="font-black text-[clamp(1.8rem,5vw,3.2rem)] leading-tight text-black">
            Trusted by Businesses Who{" "}
            <span style={{ color: "var(--color-secondary-darkblue)" }}>
              Believe in Our Work
            </span>
          </h1>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory no-scrollbar pb-6"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[400px] snap-start relative transition-all duration-700 ease-out"
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div
                  className={`relative bg-white rounded-2xl p-6 sm:p-8 transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer ${
                    hoveredCard === testimonial.id ? 'shadow-2xl scale-105 -translate-y-2' : 'shadow-lg'
                  }`}
                  style={{
                    boxShadow: hoveredCard === testimonial.id
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                      : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Gradient Background Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-700 transform ${
                      hoveredCard === testimonial.id ? 'opacity-10 rotate-1' : 'opacity-0'
                    }`}
                    style={{
                      background: "linear-gradient(135deg, var(--color-primary-orange-support), var(--color-primary-orange))",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`flex gap-1 mb-4 transition-transform duration-500 ${hoveredCard === testimonial.id ? 'scale-110' : ''}`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span 
                          key={i} 
                          className="text-lg sm:text-xl transition-all duration-300"
                          style={{
                            background: "linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className={`text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic mb-6 transition-all duration-500 ${
                      hoveredCard === testimonial.id ? 'text-gray-900' : ''
                    }`}>
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-base sm:text-lg font-bold text-white border-4 border-white shadow-md"
                        style={{
                          background: "linear-gradient(135deg, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support))",
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 
                          className="text-base sm:text-lg font-bold mb-1"
                          style={{ color: "var(--color-secondary-darkblue)" }}
                        >
                          {testimonial.name}
                        </h4>
                        <div className="text-gray-600 text-xs sm:text-sm font-medium">{testimonial.position}</div>
                        <div className="text-gray-500 text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 rounded-full transition-all duration-700 ${
                      hoveredCard === testimonial.id ? 'w-full' : 'w-0'
                    }`}
                    style={{ background: "linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))" }}
                  />

                  {/* Ring Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ring-offset-2 ${
                      hoveredCard === testimonial.id ? 'ring-2 ring-[var(--color-primary-orange)]' : 'ring-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => handleScroll('prev')}
              className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-[var(--color-secondary-darkblue)] bg-transparent rounded-full text-[var(--color-secondary-darkblue)] text-xl sm:text-2xl hover:bg-[var(--color-secondary-darkblue)] hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              ‹
            </button>

            <button
              onClick={() => handleScroll('next')}
              className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-[var(--color-secondary-darkblue)] bg-transparent rounded-full text-[var(--color-secondary-darkblue)] text-xl sm:text-2xl hover:bg-[var(--color-secondary-darkblue)] hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;