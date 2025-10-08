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
    const [slideWidth, setSlideWidth] = useState(820)
    const [slideMargin, setSlideMargin] = useState(10) // Add state for margin

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

    useEffect(() => {
        const updateSlideWidth = () => {
            if (typeof window !== 'undefined') {
                const screenWidth = window.innerWidth;
                if (screenWidth >= 1024) {
                    setSlideWidth(820);
                    setSlideMargin(10); // Set margin for large screens
                } else if (screenWidth >= 768) {
                    setSlideWidth(520);
                    setSlideMargin(6); // Set margin for medium screens
                } else {
                    setSlideWidth(320);
                    setSlideMargin(4); // Set margin for small screens
                }
            }
        };

        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);
        return () => window.removeEventListener('resize', updateSlideWidth);
    }, []);

    const goToSlide = React.useCallback((index: number) => {
        if (isTransitioning || index < 0 || index >= caseStudyImages.length) return;

        setIsTransitioning(true);
        setCurrentIndex(index);

        const slider = sliderRef.current;
        if (!slider) return;

        gsap.to(slider, {
            x: -index * slideWidth,
            duration: 1,
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
        }, 2000);

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
        <div className='w-full h-auto py-10'>
            <div className='w-[90%] mx-auto flex lg:flex-row flex-col justify-between items-center py-5'>
                {/* Left side - Heading */}
                <div className='flex-1'>
                    <div
                        className={`justify-center items-center font-bold leading-20 text-secondary-darkblue ${teko.className}`}
                        style={{fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: '1'}}                
                    >
                        Our Exclusive <br /> Case Study
                    </div>
                </div>

                {/* Right side - Paragraph and Buttons */}
                <div className='flex-1 flex flex-col lg:items-end items-center mt-2'>
                    <p className={`text-[#939393] sm:max-w-2xl w-full mb-4 text-center lg:text-right ${outfit.className} text-[clamp(1rem, 2.2vw, 1.3rem)]`}>
                        Lets transform your vision into reality. Partner with us to create exceptional digital experiences that drive results and exceed expectations.
                    </p>

                    <div className='flex items-center gap-4'>
                        <div
                            onMouseEnter={() => setLeftHover(true)}
                            onMouseLeave={() => setLeftHover(false)}
                            onClick={prevSlide}
                            className='sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] rounded-full border-[1px] border-[#939393] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out'
                            style={leftHover ? {
                                backgroundColor: 'var(--color-primary-orange)',
                                borderColor: 'var(--color-primary-orange)',
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
                            className='sm:w-[65px] sm:h-[65px] w-[50px] h-[50px] rounded-full border-[1px] border-[#939393] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out'
                            style={rightHover ? {
                                backgroundColor: 'var(--color-primary-orange)',
                                borderColor: 'var(--color-primary-orange)',
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
                </div>
            </div>

            {/* Slider Container */}
            <div className='w-full overflow-hidden'>
                <div
                    className='w-fit h-[50vh] md:h-[60vh] sm:h-[40vh] relative cursor-grab select-none mx-auto'
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
                        className='flex h-full'
                        style={{
                            width: `${caseStudyImages.length * slideWidth}px`,
                            transform: `translateX(-${currentIndex * slideWidth}px)`
                        }}
                    >
                        {caseStudyImages.map((image, index) => (
                            <div
                                key={image.id}
                                className='relative group cursor-pointer flex-shrink-0 lg:mr-10 md:mr-6 mr-4'
                                style={{ 
                                    width: `${slideWidth - slideMargin}px`,// Use slideMargin state instead of window.innerWidth
                                    height: '100%' 
                                }}
                            > 
                                <Image
                                    src={"/images/project-1.webp"}
                                    alt={image.alt}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority={index <= 1}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy