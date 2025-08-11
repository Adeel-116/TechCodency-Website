'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Outfit, Teko } from 'next/font/google';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Image from 'next/image';
import { gsap } from 'gsap';

const teko = Teko({ subsets: ['latin'] });

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const CaseStudy = () => {
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentX = useRef(0);
    const dragThreshold = 100;

    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const caseStudyImages = [
        {
            id: 1,
            src: "/images/project-1.webp",
            alt: "Digital Analytics Dashboard"
        },
        {
            id: 2,
            src: "/images/project-2.webp",
            alt: "Data Visualization"
        },
        {
            id: 3,
            src: "/images/project-3.webp",
            alt: "Team Collaboration"
        },
        {
            id: 4,
            src: "/images/project-4.webp",
            alt: "Product Design"
        },
        {
            id: 5,
            src: "/images/project-5.webp",
            alt: "Digital Strategy"
        },
        {
            id: 6,
            src: "/images/project-6.webp",
            alt: "Business Growth"
        },
         {
            id: 7,
            src: "/images/project-6.webp",
            alt: "Business Growth"
        }
    ]

    const slideWidth = 820;

    const goToSlide = React.useCallback((index: number) => {
        if (isTransitioning || index < 0 || index >= caseStudyImages.length) return;

        setIsTransitioning(true);
        setCurrentIndex(index);

        const slider = sliderRef.current;
        if (!slider) return;

        gsap.to(slider, {
            x: -index * slideWidth,
            duration: 1.5,
            ease: 'power2.out',
            onComplete: () => setIsTransitioning(false)
        });
    }, [isTransitioning, caseStudyImages.length, slideWidth]);

    const nextSlide = React.useCallback(() => {
        const nextIndex = currentIndex === caseStudyImages.length - 1 ? 0 : currentIndex + 1;
        goToSlide(nextIndex);
    }, [currentIndex, caseStudyImages.length, goToSlide]);

    const prevSlide = () => {
        const prevIndex = currentIndex === 0 ? caseStudyImages.length - 1 : currentIndex - 1;
        goToSlide(prevIndex);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging.current && !isTransitioning) {
                nextSlide();
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isTransitioning, nextSlide]);

    // Touch/Mouse drag handlers
    const handleStart = (clientX: number) => {
        if (isTransitioning) return;

        isDragging.current = true;
        startX.current = clientX;
        currentX.current = clientX;

        const container = containerRef.current;
        if (container) {
            container.style.cursor = 'grabbing';
        }
    };

    const handleMove = (clientX: number) => {
        if (!isDragging.current) return;

        currentX.current = clientX;
        const diff = currentX.current - startX.current;

        const slider = sliderRef.current;
        if (!slider) return;

        // Real-time drag feedback
        gsap.set(slider, {
            x: -currentIndex * slideWidth + diff * 0.3
        });
    };

    const handleEnd = () => {
        if (!isDragging.current) return;

        isDragging.current = false;
        const container = containerRef.current;
        if (container) {
            container.style.cursor = 'grab';
        }

        const diff = currentX.current - startX.current;

        // Determine slide direction based on drag distance
        if (Math.abs(diff) > dragThreshold) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            // Snap back to current slide
            goToSlide(currentIndex);
        }
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleEnd();
    };

    const handleMouseLeave = () => {
        handleEnd();
    };

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleEnd();
    };

    return (
        <div className='w-full h-auto py-50'>
            <div className='w-[90%] mx-auto flex justify-between items-center py-5'>
                {/* Left side - Heading */}
                <div className='flex-1'>
                    <div
                        className={`text-[5rem] justify-center items-center font-bold leading-20 text-[#E6F620] ${teko.className}`}
                    >
                        Our Exclusive <br /> Case Study
                    </div>
                </div>

                {/* Right side - Paragraph and Buttons */}
                <div className='flex-1 flex flex-col items-start pl-8'>
                    <p className={`text-[#939393] text-xl max-w-2xl mb-4 ${outfit.className}`}>
                        Lets transform your vision into reality. Partner with us to create exceptional digital experiences that drive results and exceed expectations.
                    </p>

                    <div className='flex items-center gap-4'>

                        <div
                            onMouseEnter={() => setLeftHover(true)}
                            onMouseLeave={() => setLeftHover(false)}
                            onClick={prevSlide}
                            className='w-[65px] h-[65px] rounded-full border-[1px] border-[#939393] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out'
                            style={leftHover ? {
                                backgroundColor: '#9BEC19',
                                borderColor: '#9BEC19',
                                transform: 'scale(1.05)'
                            } : {
                                backgroundColor: 'transparent',
                                borderColor: '#939393',
                                transform: 'scale(1)'
                            }}
                        >
                            <FaArrowLeft size={25} color={leftHover ? 'black' : '#939393'} />
                        </div>

                        {/* Right Arrow Button */}
                        <div
                            onMouseEnter={() => setRightHover(true)}
                            onMouseLeave={() => setRightHover(false)}
                            onClick={nextSlide}
                            className='w-[65px] h-[65px] rounded-full border-[1px] border-[#939393] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out'
                            style={rightHover ? {
                                backgroundColor: '#9BEC19',
                                borderColor: '#9BEC19',
                                transform: 'scale(1.05)'
                            } : {
                                backgroundColor: 'transparent',
                                borderColor: '#939393',
                                transform: 'scale(1)'
                            }}
                        >
                            <FaArrowRight size={25} color={rightHover ? 'black' : '#939393'} />
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className='flex items-center gap-2 mt-6'>
                        {caseStudyImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-[#9BEC19] scale-125'
                                    : 'bg-[#939393] hover:bg-[#9BEC19] hover:scale-110'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>


            <div
                className='w-fit h-[60vh] overflow-hidden relative cursor-grab select-none px-5 bg-blue-300'
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    ref={sliderRef}
                    className='flex h-full bg-yellow-300'
                    style={{
                        width: `${caseStudyImages.length * slideWidth}px`,
                        transform: `translateX(-${currentIndex * slideWidth}px)`
                    }}
                >
                    {caseStudyImages.map((image, index) => (
                        <div
                            key={image.id}
                            className='relative group cursor-pointer flex-shrink-0 mr-10'
                            style={{ width: '810px', height: '100%' }}
                        >
                            <Image
                                src={'/images/project-1.webp'}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                priority={index <= 1}
                            />


                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default CaseStudy