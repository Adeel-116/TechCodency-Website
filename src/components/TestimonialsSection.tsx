// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP plugins
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const trackRef = useRef(null);
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const cardsRef = useRef([]);
//   const navRef = useRef(null);
//   const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Michael Chen",
//       position: "CEO & Founder",
//       company: "TechVision Solutions",
//       avatar: "MC",
//       rating: 5,
//       text: "Working with this agency has been transformative for our business. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital solutions is unmatched."
//     },
//     {
//       id: 2,
//       name: "Sarah Johnson",
//       position: "Marketing Director", 
//       company: "Growth Dynamics",
//       avatar: "SJ",
//       rating: 5,
//       text: "Exceptional service and outstanding results! The team delivered beyond our expectations. Our new website not only looks stunning but has significantly improved our conversion rates. Highly recommended for any business looking to elevate their digital presence."
//     },
//     {
//       id: 3,
//       name: "David Rodriguez",
//       position: "Operations Manager",
//       company: "Elite Enterprises", 
//       avatar: "DR",
//       rating: 5,
//       text: "Professional, creative, and results-driven. The agency transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Our customer engagement has increased dramatically since the launch."
//     },
//     {
//       id: 4,
//       name: "Emily Williams",
//       position: "Business Owner",
//       company: "Innovative Retail Co.",
//       avatar: "EW", 
//       rating: 5,
//       text: "From concept to execution, every step was handled with utmost professionalism. The team's ability to understand our vision and translate it into a powerful digital solution was remarkable. Our ROI has doubled since working with them."
//     },
//     {
//       id: 5,
//       name: "James Thompson",
//       position: "Creative Director",
//       company: "Nexus Media Group",
//       avatar: "JT",
//       rating: 5,
//       text: "Outstanding creativity and technical expertise! The agency delivered a comprehensive digital solution that exceeded all our expectations. Their ongoing support and dedication to our success sets them apart from the competition."
//     },
//     {
//       id: 6,
//       name: "Amanda Lee", 
//       position: "VP of Marketing",
//       company: "Summit Solutions",
//       avatar: "AL",
//       rating: 5,
//       text: "The best investment we've made for our business! Their strategic approach and flawless execution resulted in a 250% increase in leads. The team's dedication and expertise are truly impressive. We couldn't be happier with the results."
//     }
//   ];

//   const cardWidth = 440;
//   const visibleCards = typeof window !== 'undefined' ? Math.floor(window.innerWidth / cardWidth) : 3;
//   const maxIndex = Math.max(0, testimonials.length - visibleCards);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const initAnimations = () => {
//       // Header animation
//       gsap.fromTo(headerRef.current, 
//         { opacity: 0, y: 50 }, 
//         { 
//           opacity: 1, 
//           y: 0, 
//           duration: 1, 
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: headerRef.current,
//             start: 'top 80%',
//             end: 'bottom 60%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );

//       // Cards animation
//       gsap.fromTo(cardsRef.current, 
//         { opacity: 0, y: 100, scale: 0.8 }, 
//         { 
//           opacity: 1, 
//           y: 0,
//           scale: 1,
//           duration: 0.8, 
//           ease: "back.out(1.7)",
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: trackRef.current,
//             start: 'top 70%',
//             end: 'bottom 30%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );

//       // Navigation animation
//       gsap.fromTo(navRef.current, 
//         { opacity: 0, y: 30 }, 
//         { 
//           opacity: 1, 
//           y: 0, 
//           duration: 0.6, 
//           delay: 0.8,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: navRef.current,
//             start: 'top 90%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );

//       // Floating particles animation
//       gsap.to('.floating-particle', {
//         y: -20,
//         rotation: 360,
//         duration: 6,
//         ease: "sine.inOut",
//         repeat: -1,
//         yoyo: true,
//         stagger: 2
//       });
//     };

//     initAnimations();

//     // Auto-scroll
//     autoScrollRef.current = setInterval(() => {
//       setCurrentIndex(prevIndex => {
//         const newIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
//         scrollToIndex(newIndex);
//         return newIndex;
//       });
//     }, 4000);

//     return () => {
//       if (autoScrollRef.current) {
//         clearInterval(autoScrollRef.current);
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [maxIndex]);

//   const scrollToIndex = (index: number) => {
//     const targetX = -index * cardWidth;
//     gsap.to(trackRef.current, {
//       x: targetX,
//       duration: 0.8,
//       ease: "power2.out"
//     });
//     setCurrentIndex(index);
//   };

//   const handlePrev = () => {
//     const newIndex = Math.max(0, currentIndex - 1);
//     scrollToIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = Math.min(maxIndex, currentIndex + 1);
//     scrollToIndex(newIndex);
//   };

//   const handleDotClick = (index: number) => {
//     scrollToIndex(index * visibleCards);
//   };

//   const handleCardHover = (index: number, isEntering: boolean) => {
//     const card = cardsRef.current[index];
//     if (card) {
//       gsap.to(card, {
//         y: isEntering ? -8 : 0,
//         scale: isEntering ? 1.02 : 1,
//         duration: 0.3,
//         ease: "power2.out"
//       });
//     }
//   };

//   return (
//     <section 
//       ref={sectionRef}
//       className="min-h-screen bg-black py-20 px-4 relative overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: "black"
//         }}
//       />

//       {/* Floating Particles */}
//       <div className="floating-particle absolute w-2 h-2 bg-[#C9F31D] rounded-full opacity-60 top-[20%] left-[10%]" />
//       <div className="floating-particle absolute w-1.5 h-1.5 bg-[#C9F31D] rounded-full opacity-60 top-[60%] right-[15%]" />
//       <div className="floating-particle absolute w-2.5 h-2.5 bg-[#C9F31D] rounded-full opacity-60 bottom-[30%] left-[20%]" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div ref={headerRef} className="text-center mb-20 opacity-0">
//           <div className="flex items-center justify-center mb-6">
//             <div className="w-10 h-2 bg-[#C9F31D] rounded-2xl" />
//             <h2 className="text-5xl lg:text-6xl font-black text-[#C9F31D] ml-4 uppercase tracking-tight">
//               Client Success Stories
//             </h2>
//           </div>
//           <p className="text-xl max-w-4xl mx-auto leading-relaxed text-[#BBBBB9]">
//             Discover how we ve transformed businesses with our innovative solutions. 
//             Read what our valued clients have to say about their journey with us.
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#C9F31D] to-[#BBBBB9] mx-auto mt-8 rounded-full" />
//         </div>

//         {/* Testimonials Container */}
//         <div className="relative overflow-hidden py-10">
//           <div 
//             ref={trackRef}
//             className="flex gap-10 will-change-transform"
//             style={{ transform: `translateX(${-currentIndex * cardWidth}px)` }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 ref={el => { (cardsRef.current as HTMLDivElement[])[index] = el!; }}
//                 className="min-w-[400px] bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-white/10 rounded-3xl p-10 relative cursor-pointer transition-all duration-400 hover:border-[#C9F31D]/30 hover:shadow-2xl hover:shadow-[#C9F31D]/10"
//                 onMouseEnter={() => handleCardHover(index, true)}
//                 onMouseLeave={() => handleCardHover(index, false)}
//               >
//                 {/* Hover Background Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#C9F31D]/5 to-transparent rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-400" />
                
//                 {/* Quote Icon */}
//                 <div className="absolute -top-4 right-8 w-16 h-16 bg-gradient-to-br from-[#C9F31D] to-[#9FEC1C] rounded-full flex items-center justify-center text-2xl font-bold text-black shadow-lg shadow-[#C9F31D]/30">
              
//                 </div>

//                 <div className="relative z-10">
//                   {/* Rating */}
//                   <div className="flex gap-1 mb-5">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <span key={i} className="text-[#C9F31D] text-xl">★</span>
//                     ))}
//                   </div>

//                   {/* Testimonial Text */}
//                   <p className="text-gray-200 text-lg leading-relaxed italic mb-8">
//                     {testimonial.text}
//                   </p>

//                   {/* Author Info */}
//                   <div className="flex items-center gap-4">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#C9F31D] to-[#9FEC1C] rounded-full flex items-center justify-center text-xl font-bold text-black border-4 border-[#C9F31D]/20">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <h4 className="text-white text-xl font-semibold mb-1">
//                         {testimonial.name}
//                       </h4>
//                       <div className="text-[#BBBBB9] text-sm mb-1">
//                         {testimonial.position}
//                       </div>
//                       <div className="text-[#C9F31D] text-sm font-semibold">
//                         {testimonial.company}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation */}
//         <div ref={navRef} className="flex justify-center items-center gap-8 mt-16 opacity-0">
//           <button
//             onClick={handlePrev}
//             className="w-16 h-16 border-2 border-[#C9F31D] bg-transparent rounded-full text-[#C9F31D] text-2xl hover:bg-[#C9F31D] hover:text-black transition-all duration-300 hover:scale-110 flex items-center justify-center"
//           >
//             ‹
//           </button>

//           <div className="flex gap-3">
//             {[...Array(Math.ceil(testimonials.length / visibleCards))].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   Math.floor(currentIndex / visibleCards) === index
//                     ? 'bg-[#C9F31D] scale-125'
//                     : 'bg-[#C9F31D]/30 hover:bg-[#C9F31D]/60'
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={handleNext}
//             className="w-16 h-16 border-2 border-[#C9F31D] bg-transparent rounded-full text-[#C9F31D] text-2xl hover:bg-[#C9F31D] hover:text-black transition-all duration-300 hover:scale-110 flex items-center justify-center"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;