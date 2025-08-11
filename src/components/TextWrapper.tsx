import React from 'react';
import { Outfit, Teko } from "next/font/google";
import Image from 'next/image';
const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const services = [
    {
        text: "Web Development",
        icon: "🚀"
    },
    {
        text: "App Development",
        icon: "📱"
    },
    {
        text: "Digital Marketing",
        icon: "📈"
    },
    {
        text: "Custom Solutions",
        icon: "⚡"
    },
    {
        text: "UI/UX Design",
        icon: "🎨"
    },
    {
        text: "E-Commerce",
        icon: "🛒"
    }
];

function TextWrapper() {
    return (
        <div
            className=" h-auto ml-4 px-2 2xl:py-4.5 lg:py-4 py-2 rounded-[50px] flex items-center justify-center overflow-hidden relative transform-gpu"
            style={{
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-support))', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 15px rgba(0, 0, 0, 0.2)', 
                transform: 'translateZ(0)', 
                width: "clamp(10rem, 30vw, 18rem)",
            }}
        >
            {/* Animated slider container */}
            <div className="flex items-center gap-6 animate-slide">

                {services.map((service, index) => (
                    <div
                        key={`second-${index}`}
                        className="flex items-center text-4xl font-bold gap-3 whitespace-nowrap min-w-max text-white drop-shadow-lg">
                        <span className="text-5xl filter drop-shadow-sm">{service.icon}</span>
                        <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-black">
                            {service.text}
                        </span>
                    </div>
                ))}

            </div>

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black/20 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black/20 to-transparent z-10"></div>

            <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}

export default TextWrapper;