// components/HeroSection.js
'use client';
import GetStartedButton from './GetStartedButton';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin'],
});

export default function HeroSection() {
    return (
        <div className={`w-[90%] py-5 mx-auto flex ${outfit.className}`}>


            <div className="w-1/2">
                <h1 className='w-full text-[11rem] text-white font-bold tracking-tighter'>DIGITAL</h1>
                <div className='w-full h-auto flex items-center py-2'>
                    <p className='w-[40%] py-2 text-[#939493]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .
                    </p>
                    <h1 className='absolute left-[30%]  w-fit text-[11rem] tracking-tighter text-[#E6F620] font-bold'>AGENCY</h1>
                </div>

                <div className="flex-shrink-0 mt-9">
                    <GetStartedButton buttonTitle="OUR PORTFOLIO" />
                </div>
            </div>

            {/* Right Side - 50% */}
            <div className="w-1/2 py-5 ">
                <div className="w-full py-7 mt-8 flex items-center justify-between px-8">

                    {/* Left Text */}
                    <p className="w-[40%] py-2 text-[#939493] text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Right Box with Circles */}
                    <div className="relative">
                        {/* Main container */}
                        <div className="w-fit flex items-center px-3 py-2 border border-[#b1b1b1] rounded-full relative z-10">

                            {/* Circle 1 */}
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src="/images/man.jpg" alt="User 1" className="w-full h-full object-cover" />
                            </div>

                            {/* Circle 2 */}
                            <div className="w-12 h-12 rounded-full overflow-hidden -ml-3">
                                <img src="/images/female.jpg" alt="User 2" className="w-full h-full object-cover" />
                            </div>

                            {/* Circle 3 */}
                            <div className="w-12 h-12 rounded-full overflow-hidden -ml-3">
                                <img src="/images/female3.jpg" alt="User 3" className="w-full h-full object-cover" />
                            </div>

                            {/* Circle 4 - Green with text */}
                            <div className="w-12 h-12 rounded-full bg-[#C9F31D] flex items-center justify-center text-black font-bold text-[16px] -ml-3">
                                20+
                            </div>
                        </div>

                        {/* Animated glow effect */}
                        <div
                            className="absolute inset-0 rounded-full opacity-70 spinning-border"
                            style={{
                                background: `
              conic-gradient(
                from 0deg,
                transparent 340deg,
                white 360deg,
                white 20deg,
                transparent 40deg
              )
            `,
                                padding: '2px',
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-transparent"></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
