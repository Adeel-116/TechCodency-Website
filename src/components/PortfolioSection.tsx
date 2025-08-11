'use client'
import React, { useState } from 'react'
import { Teko, Outfit } from 'next/font/google'
import Image from 'next/image'

const teko = Teko({ subsets: ['latin'] })
const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

// Portfolio data
type typeFilterCategory = {
  id: string;
  label: string; 
};
type portfolioDataType = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};
type filterType = 'all' | 'interactive' | 'logo' | 'branding' | 'website' | 'uiux' | 'mobile' | 'illustration';


const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    category: "website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand identity for tech startup",
    category: "branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure and user-friendly banking application",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Interactive Dashboard",
    description: "Real-time analytics dashboard with animations",
    category: "interactive",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Logo Collection",
    description: "Modern logo designs for various industries",
    category: "logo",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "UI/UX Design System",
    description: "Comprehensive design system for SaaS platform",
    category: "uiux",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 7,
    title: "Digital Illustrations",
    description: "Custom illustrations for marketing campaigns",
    category: "illustration",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 8,
    title: "Restaurant Website",
    description: "Elegant website design for fine dining restaurant",
    category: "website",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 9,
    title: "Fitness App UI",
    description: "Modern fitness tracking mobile application",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 10,
    title: "Corporate Branding",
    description: "Professional branding for consulting firm",
    category: "branding",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 11,
    title: "Interactive Portfolio",
    description: "Creative portfolio with smooth animations",
    category: "interactive",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=600&fit=crop&crop=center"
  },
  {
    id: 12,
    title: "Minimalist Logo",
    description: "Clean and simple logo design approach",
    category: "logo",
    image: "https://images.unsplash.com/photo-1599305445651-ac62972637c3?w=600&h=600&fit=crop&crop=center"
  }
]

// Portfolio Card Component
const PortfolioCard = ({ project }: { project: portfolioDataType }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-[#BBBBB9] text-sm mb-4">{project.description}</p>
            <span className="inline-block px-4 py-2 bg-[#C9F31D] text-black text-sm font-semibold rounded-full">
              {project.category.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-[#C9F31D] text-black text-xs font-bold rounded-full">
          {project.category.toUpperCase()}
        </span>
      </div>
    </div>
  )
}


const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleItems, setVisibleItems] = useState(6)

  const filterCategories:typeFilterCategory[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'interactive', label: 'Interactive' },
    { id: 'logo', label: 'Logo' },
    { id: 'branding', label: 'Branding' },
    { id: 'website', label: 'Website' },
    { id: 'uiux', label: 'UI/UX' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'illustration', label: 'Illustration' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter)

  const visibleProjects = filteredProjects.slice(0, visibleItems)
  const hasMoreItems = visibleItems < filteredProjects.length

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 6)
  }

  const handleFilterChange = (filterType:filterType) => {
    setActiveFilter(filterType)
    setVisibleItems(6) 
  }

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="w-[90%]  mx-auto">
        
        {/* Portfolio Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center">
            <div className="w-14 h-2 bg-[#C9F31D] rounded-2xl"></div>
            <div className={`text-[5rem] font-bold text-black ml-4 ${teko.className}`}
            style={{lineHeight:'1'}}
            >
              Our Portfolio
            </div>
          </div>
          <p className={`text-black text-xl max-w-2xl mx-auto mt-6 ${outfit.className}`}>
            Explore our creative works and successful projects that showcase our expertise across various digital domains
          </p>
        </div>

        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((category:typeFilterCategory) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id as filterType)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-[#C9F31D] text-black border-black border-2'
                  : 'bg-transparent border-2 border-black text-black hover:border-[#C9F31D] hover:text-[#C9F31D]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
          
          {hasMoreItems && (
            <div className="text-center">
              <div className="flex-shrink-0">
                <button 
                  onClick={handleLoadMore}
                  className="px-8 py-4 bg-[#C9F31D] text-black font-bold rounded-full hover:bg-[#9FEC1C] transition-all duration-300 hover:scale-105"
                >
                  LOAD MORE
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default PortfolioSection