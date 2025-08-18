"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Practice() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".card")
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())

        // Initial positions: Card1 visible, others hidden below
        cards.forEach((card, i) => {
            gsap.set(card, { yPercent: i === 0 ? 0 : 100, zIndex: i })
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => "+=" + (cards.length - 1) * window.innerHeight,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
            }
        })

        cards.forEach((card, i) => {
            if (i === 0) return
            tl.to(card, {
                yPercent: 10,
                zIndex: cards.length + i,
                duration: 1,
                ease: "power2.inOut"
            }, i - 1)
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className="w-full min-h-screen">
            {/* Before cards */}
            <div className="h-screen bg-gray-100 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800">
                    Scroll down to see the card stack animation
                </h1>
            </div>

            {/* Cards */}
            <div ref={containerRef} className="w-full h-screen bg-gray-900 flex items-center justify-center">
                <div className="w-[80%] max-w-md relative h-[60vh]">
                    <div className="card absolute inset-0 h-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl rounded-2xl shadow-2xl">
                        Card 1
                    </div>
                    <div className="card absolute inset-0 h-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl rounded-2xl shadow-2xl">
                        Card 2
                    </div>
                    <div className="card absolute inset-0 h-full bg-yellow-500 flex items-center justify-center text-white font-bold text-2xl rounded-2xl shadow-2xl">
                        Card 3
                    </div>
                    <div className="card absolute inset-0 h-full bg-purple-500 flex items-center justify-center text-white font-bold text-2xl rounded-2xl shadow-2xl">
                        Card 4
                    </div>
                    <div className="card absolute inset-0 h-full bg-pink-500 flex items-center justify-center text-white font-bold text-2xl rounded-2xl shadow-2xl">
                        Card 5
                    </div>
                </div>
            </div>

            {/* After cards */}
            <div className="h-screen bg-gray-100 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-gray-800">Animation Complete!</h2>
            </div>
        </div>
    )
}
