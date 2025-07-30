'use client'
import React, {useState} from 'react'
import { Outfit, Teko } from 'next/font/google';
import { FaArrowRight } from "react-icons/fa6";


const teko = Teko({ subsets: ['latin'] });

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});


const CaseStudy = () => {
    const [hover, setHover] = useState(false)

    

    return (
        <div className='w-full h-screen py-50'>


            <div className='w-[90%] mx-auto flex justify-center items-center py-5'>

                <div
                    className={`text-[5rem] font-bold leading-20 text-[#E6F620] ml-4 ${teko.className}`}
                >
                    Our Exclusive <br /> Case Study
                </div>
                <p className={`text-[#939393] text-xl max-w-2xl mx-auto mt-2 ${outfit.className}`}>
                    Lets transform your vision into reality. Partner with us to create exceptional digital experiences that drive results and exceed expectations.
                </p>

                <div className='w-fit px-10 '>
                        <div  
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className='w-[65px] h-[65px] rounded-full border-[1px] border-[#939393] flex items-center justify-center cursor-pointer'
                        style={hover ? { backgroundColor: '#9BEC19', transition: 'background-color 0.10 ease', border: 'none' } : { backgroundColor: 'transparent', transition: 'background-color 0.3s ease' }}
                        >
                            <FaArrowRight  size={25} color={hover ? 'black' : '#939393'}  />
                            
                            
                    
                        </div>
                </div>


            </div>
        </div>





    )
}

export default CaseStudy