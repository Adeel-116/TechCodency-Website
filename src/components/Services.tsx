"use client"
import React from "react"
import { Outfit, Teko } from "next/font/google"
import PortfolioSection from "./PortfolioSection"
import ServiceCard from "./ServiceCard"


const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const servicesData = [
  {
    number: "01",
    title: "WEB DESIGN",
    description:
      "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
    buttonText: "See Our Services",
    imageSrc: "/images/service-1.webp",
    imageAlt: "Web Design Service",
    tags: ["UI/UX", "Website Design", "E-commerce", "Motion Graphics"],
    top: 10,
    
  },
  {
    number: "02",
    title: "DEVELOPMENT",
    description:
      "From responsive web applications to complex enterprise solutions, we build robust, scalable, and user-friendly digital products that drive results and enhance your business growth.",
    buttonText: "View Projects",
    imageSrc: "/images/service-1.webp",
    imageAlt: "Development Service",
    tags: ["Frontend", "Backend", "Mobile Apps", "API Integration"],
     top: 10,
  },
  {
    number: "03",
    title: "MARKETING",
    description:
      "Boost your brand visibility with our comprehensive digital marketing strategies. From SEO optimization to social media campaigns, we help you reach your target audience effectively.",
    buttonText: "Get Started",
    imageSrc: "/images/service-1.webp",
    imageAlt: "Marketing Service",
    tags: ["SEO", "Social Media", "Content Marketing", "PPC Advertising"],
     top: 10,
  },
  {
    number: "04",
    title: "CONSULTING",
    description:
      "Navigate the digital landscape with confidence. Our expert consultants provide strategic guidance to optimize your business processes and implement the right technology solutions.",
    buttonText: "Book Consultation",
    imageSrc: "/images/service-1.webp",
    imageAlt: "Consulting Service",
    tags: [
      "Strategy",
      "Digital Transformation",
      "Process Optimization",
      "Technology Audit",
    ],
     top: 10,
  },
]

function Services() {

  return (

    <>
      <div className="w-full h-auto flex flex-col justify-center items-center text-center">
        <div
          className={`flex items-center gap-4 w-fit mb-5 ${outfit.className} relative`}
        >
          {/* Left Line */}
          <div
            className="w-16 h-[3px] rounded-full relative"
            style={{
              background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))",
            }}
          >
          </div>

          {/* Text with gradient */}
          <span
            className="font-black text-base uppercase tracking-[0.2em] relative px-4 py-2"
            style={{
              background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            OUR SERVICES
          </span>

          {/* Right Line */}
          <div
            className="w-16 h-[3px] rounded-full relative"
            style={{
              background: "linear-gradient(to right, var(--color-primary-orange-support), var(--color-primary-orange))",
            }}
          >
          </div>
        </div>

        <h1
          className={`font-black leading-[0.9] w-[80%] mb-8 ${teko.className}`}
          style={{
            fontSize: "clamp(4rem, 11vw, 5rem)",
            color: "#000000",
            textShadow: "0 4px 12px rgba(0,0,0,0.1)",
            fontWeight: 800,
          }}
        >
          Our approach to <span className="text-secondary-darkblue">your brand!</span>
        </h1>


        <p className="leading-relaxed text-gray-700 xl:w-[70%] sm:w-[90%] w-[95%]  text-center mb-5"
          style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            fontWeight: 400,
          }}>We don,t just deliver services—we create transformative experiences. Our philosophy blends vision, innovation, and a relentless pursuit of excellence. Every project we undertake is an opportunity to push boundaries, think creatively, and challenge the status quo.</p>

      </div>
      
      <div className="w-full h-auto">
        <div className="w-full relative 2xl:h-[250vh] xl:h-[370vh] h-auto py-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full h-auto bg-bg-white lg:sticky"
              style={{
                top: `${service.top}vh`,
                borderTop: "1px dashed gray",
                zIndex: index + 1, 
              }}
            >
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tags={service.tags}
              />
            </div>
          ))}
        </div>
        
      </div>
      
      <PortfolioSection />
    </>
  )
}

export default Services