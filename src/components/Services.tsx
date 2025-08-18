"use client"
import React, { useEffect, useRef } from "react"
import ServiceItem from "./ServiceItem"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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
  },
]

function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const cards = cardsRef.current
    const container = containerRef.current

    cards.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          zIndex: cards.length - index,
          position: "sticky",
          top: "10vh",
        })
      }
    })

    cards.forEach((card, index) => {
      if (index === 0 || !card) return


      ScrollTrigger.create({
        trigger: card,
        start: "top bottom-=100",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          gsap.to(card, {
            y: -(progress * 50),
            duration: 0.3,
            ease: "power2.out"
          })
        },
        onLeave: () => {
          gsap.set(card, { y: -50 })
        },
        onEnterBack: () => {
          gsap.set(card, { y: 0 })
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current[index]) {
      cardsRef.current[index] = el
    }
  }

  return (
    <div className="w-full h-auto">
      <div ref={containerRef} className="w-full relative">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full h-auto relative"
            style={{
              position: "sticky",
              top: "10vh",
            }}
          >
            <div
              ref={(el) => addToRefs(el, index)}
              style={{
                zIndex: servicesData.length - index,
              }}
            >
              <ServiceItem
                number={service.number}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tags={service.tags}
              />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Services