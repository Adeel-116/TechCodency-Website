import React from 'react';
import GetStartedButton from "./GetStartedButton";
import { Outfit, Teko } from "next/font/google";
import Cube from './Cube';
import TextWrapper from './TextWrapper';

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
        <div className="max-w-[70%] relative z-[50] flex flex-col gap-y-6 justify-center">

            <div className='w-full h-auto'>
                <div className="flex items-center">
                    <h1 className={`w-fit h-auto font-bold leading-[0.9] ${teko.className} text-[clamp(6rem,8vw,8rem)]`}>
                       Creative <span>Digital</span> 
                    </h1>
                </div>

                <div className='flex items-center'>
                <h1 className={`w-fit h-auto font-bold leading-[0.9] ${teko.className} text-[clamp(6rem,8vw,8rem)]`}>
                    Solutions
                </h1>
                <div>
                   <TextWrapper />
                </div>
                </div>
            </div>

            <div className='w-full h-auto'>
                <p className={`text-text-secondary w-[80%] ${outfit.className}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A excepturi esse ducimus nisi blanditiis qui, maiores necessitatibus iure culpa dolor. Eligendi voluptatum, repudiandae distinctio animi quidem quam similique odio architecto ipsum inventore atque rem quisquam quibusdam minus optio nulla velit, laboriosam dicta. Quam magnam facere impedit corporis, mollitia animi veniam?</p>
            </div>

            <div className="w-fit">
                <GetStartedButton buttonTitle='GET STARTED'/>
            </div>

        </div>
    );
}