import React from 'react';
import GetStartedButton from "./GetStartedButton";
import { Outfit, Teko } from "next/font/google";
import Cube from './Cube';

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function HeroLeftSection() {
    return (
        <>
            <div className='2xl:w-[55%] xl:w-[60%] lg:w-[55%] w-full flex justify-center items-center'>
                <div className="relative z-[50] flex flex-col 2xl:gap-y-6 gap-y-2 lg:py-0 justify-center items-center" >

                    <div className='w-full h-auto'>
                        <div className="flex items-center">
                            <h1 className={`w-fit h-auto font-bold leading-[0.9] ${teko.className} 2xl:[8rem] xl:text-[clamp(5.5rem,10vw,6.5rem)]  lg:text-[5rem] text-[clamp(3.5rem,8vw,6.5rem)]`}>
                                Beyond <span className='text-secondary-darkblue'>Digital</span>
                            </h1>
                        </div>

                        <div className='flex items-center'>
                            <h1 className={`w-fit h-auto font-bold leading-[0.9] ${teko.className} 2xl:[8rem] xl:text-[clamp(5.5rem,10vw,6.5rem)] lg:text-[5rem] text-[clamp(3.5rem,8vw,6.5rem)]`}>
                                Strategies
                            </h1>
                            <div className='sm:ml-5 ml-2'>
                                <Cube />
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-auto'>
                        <p className={`text-text-primary lg:w-[80%] md:w-[90%] xl:text-[18px] text-[15px] mb-2 ${outfit.className}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A excepturi esse ducimus nisi blanditiis qui, maiores necessitatibus iure culpa dolor. Eligendi voluptatum, repudiandae distinctio animi quidem quam similique odio architecto ipsum inventore atque rem quisquam quibusdam minus optio nulla velit, laboriosam dicta. Quam magnam facere impedit corporis, mollitia animi veniam?</p>
                    </div>

                    <div className="w-full">
                        <div className='w-fit'>
                        <GetStartedButton buttonTitle='GET STARTED' />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}