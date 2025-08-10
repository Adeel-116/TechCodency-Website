import React from 'react';
import GetStartedButton from "./GetStartedButton";
import { Outfit, Teko } from "next/font/google";

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
        <div className="max-w-1/2 relative z-[50] flex flex-col gap-y-6  justify-center">


            <div className='w-full h-auto'>
                <h1 className={`w-full h-auto font-bold leading-[0.9] ${teko.className} text-[clamp(8rem,10vw,10rem)]`}>
                    Digital
                </h1>
                <h1 className={`w-full h-auto font-bold  leading-[0.9] ${teko.className} text-[clamp(8rem,10vw,10rem)]`}>
                    Agency
                </h1>
            </div>

            <div className='w-full h-auto'>
                    <p className="text-text-secondary w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A excepturi esse ducimus nisi blanditiis qui, maiores necessitatibus iure culpa dolor. Eligendi voluptatum, repudiandae distinctio animi quidem quam similique odio architecto ipsum inventore atque rem quisquam quibusdam minus optio nulla velit, laboriosam dicta. Quam magnam facere impedit corporis, mollitia animi veniam?</p>
            </div>

            <div className="">
                <GetStartedButton buttonTitle='GET STARTED'/>
            </div>

        </div>
    );
}