import React from 'react'
import ServiceItem from './ServiceItem';

const servicesData = [
  {
    number: "01",
    title: "WEB DESIGN",
    description: "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
    buttonText: "See Our Services",
    imageSrc: "/images/service-1.webp",
    imageAlt: "Web Design Service",
    tags: ["UI/UX", "Website Design", "E-commerce", "Motion Graphics"]
  },
  {
    number: "02", 
    title: "DEVELOPMENT",
    description: "From responsive web applications to complex enterprise solutions, we build robust, scalable, and user-friendly digital products that drive results and enhance your business growth.",
    buttonText: "View Projects",
    imageSrc: "/images/service-1.webp",
    imageAlt: "Development Service",
    tags: ["Frontend", "Backend", "Mobile Apps", "API Integration"]
  },
  {
    number: "03",
    title: "MARKETING",
    description: "Boost your brand visibility with our comprehensive digital marketing strategies. From SEO optimization to social media campaigns, we help you reach your target audience effectively.",
    buttonText: "Get Started",
    imageSrc: "/images/service-1.webp", 
    imageAlt: "Marketing Service",
    tags: ["SEO", "Social Media", "Content Marketing", "PPC Advertising"]
  },
  {
    number: "04",
    title: "CONSULTING",
    description: "Navigate the digital landscape with confidence. Our expert consultants provide strategic guidance to optimize your business processes and implement the right technology solutions.",
    buttonText: "Book Consultation",
    imageSrc: "/images/service-1.webp",
    imageAlt: "Consulting Service", 
    tags: ["Strategy", "Digital Transformation", "Process Optimization", "Technology Audit"]
  }
];

function Services() {
  return (
    <div className='w-full h-auto'>
      {servicesData.map((service, index) => (
        <ServiceItem
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
          buttonText={service.buttonText}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          tags={service.tags}
        />
      ))}
    </div>
  )
}

export default Services