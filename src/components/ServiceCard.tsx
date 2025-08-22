"use client"
import React from "react"
import Image from "next/image"
import GetStartedButton from "./GetStartedButton"
import { Outfit, Teko } from "next/font/google"

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
})

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

interface ServiceCardProps {
  number: number | string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
}

function ServiceCard({ number, title, description, buttonText, imageSrc, imageAlt, tags }: ServiceCardProps) {
  return (
    <div className="w-full h-auto" >
      <div className="max-w-[min(95%,1600px)] mx-auto h-auto">
        <div
          className="w-full grid gap-1 lg:[grid-template-columns:0.9fr_1.9fr_1.3fr] md:[grid-template-columns:0.4fr_1.9fr_1fr] sm:grid-cols-1"
          style={{
            paddingTop: "max(3%, 1rem)",
            paddingBottom: "max(3%, 1rem)",
          }}
        >
          {/* Number Section */}
          <div>
            <p
              className={`font-medium text-[clamp(2.2rem,5vw,3.5rem)] md:text-center text-bg-black ${teko.className}`}
              style={{ lineHeight: "1" }}
            >
              {number}
            </p>
          </div>

          {/* Content Section */}
          <div>
            <div
              className="w-full h-auto flex-col"
              style={{ paddingBottom: "max(5%, 1.5rem)" }}
            >
              <h1
                className={`font-medium text-[clamp(3.2rem,5vw,4.2rem)] ${teko.className}`}
                style={{ lineHeight: "0.7" }}
              >
                {title}
              </h1>

              <p
                className={`2xl:w-[90%] sm:w-[95%] w-full text-[clamp(0.9rem,1.4vw,1.1rem)] md:mt-5 mt-0 ${outfit.className} text-text-primary`}
              >
                {description}
              </p>

              <div className="w-full h-auto xl:py-15 md:py-10 sm:py-5 py-4">
                <GetStartedButton buttonTitle={buttonText} />
              </div>

              {/* Tags Section */}
              <div className="md:w-[80%] w-full flex flex-wrap justify-start md:gap-x-3 sm:gap-x-2 sm:gap-y-3 gap-2 md:gap-y-5">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`text-[clamp(0.875rem,1.2vw,1rem)] text-black px-6 py-1.5 border-[0.2px] border-text-primary rounded-full text-center ${outfit.className}`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full xl:h-[450px] h-[370px] sm:h-[500px] lg:h-[400px] md:h-[310px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServiceCard
