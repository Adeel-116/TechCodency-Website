'use client'
import React, { useState } from 'react'
import { Outfit, Teko } from 'next/font/google';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Image from 'next/image';

const teko = Teko({ subsets: ['latin'] });

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});


const CaseStudy = () => {
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)


    const caseStudyImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop&crop=entropy&q=80",
            alt: "Digital Analytics Dashboard"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&crop=entropy&q=80",
            alt: "Data Visualization"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop&crop=entropy&q=80",
            alt: "Team Collaboration"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=800&fit=crop&crop=entropy&q=80",
            alt: "Product Design"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=800&fit=crop&crop=entropy&q=80",
            alt: "Digital Strategy"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop&crop=entropy&q=80",
            alt: "Business Growth"
        }
    ]



    return (
        <div className='w-full h-auto py-50'>
            <div className='w-[90%] mx-auto flex justify-between items-center py-5'>

                {/* Left side - Heading */}
                <div className='flex-1 ' >
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

                    {/* Buttons Container */}
                    <div className='flex items-center gap-4'>
                        {/* Left Arrow Button */}
                        <div
                            onMouseEnter={() => setLeftHover(true)}
                            onMouseLeave={() => setLeftHover(false)}
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
                </div>
            </div>



            <div className='w-full h-[70vh] overflow-x-auto relative'>
  <div className='flex h-full gap-x-10'>
    {caseStudyImages.map((image) => (
      <div
        key={image.id}
        className='relative group cursor-pointer min-w-[800px] h-full flex-shrink-0'
      >
        <Image
          src={"/images/project-1.webp"}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-103"
        />

      </div>
    ))}
  </div>
</div>

        </div>
    )
}

export default CaseStudy