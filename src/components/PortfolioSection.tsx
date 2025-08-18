'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Teko, Outfit } from 'next/font/google'
import Image from 'next/image'
import GetStartedButton from './GetStartedButton'

// Extend Window interface for scrollTimeout
declare global {
  interface Window {
    scrollTimeout?: NodeJS.Timeout;
  }
}

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});

const teko = Teko({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

// Portfolio data types
type TypeFilterCategory = {
  id: string;
  label: string;
  icon?: string;
};

type PortfolioDataType = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};

type FilterType = 'all' | 'interactive' | 'logo' | 'branding' | 'website' | 'uiux' | 'mobile' | 'illustration' | 'Design';

const portfolioData: PortfolioDataType[] = [
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
const PortfolioCard: React.FC<{ project: PortfolioDataType }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-gray-900 aspect-square cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:rotate-1 hover:shadow-2xl ${outfit.className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#C9F31D] transition-all duration-500"></div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className={`text-center transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-white text-2xl font-bold mb-3 transform transition-all duration-300">{project.title}</h3>
            <p className="text-[#BBBBB9] text-sm mb-6 opacity-90 leading-relaxed">{project.description}</p>
            <span className="inline-block px-6 py-3 bg-[#C9F31D] text-black text-sm font-bold rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
              VIEW PROJECT
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-6 left-6 transform transition-all duration-300 group-hover:scale-110">
        <span className="px-4 py-2 bg-[#C9F31D] text-black text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
          {project.category.toUpperCase()}
        </span>
      </div>
    </div>
  )
}

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [visibleItems, setVisibleItems] = useState<number>(6)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const filterCategories: TypeFilterCategory[] = [
    { id: 'all', label: 'All Projects', icon: '✨' },
    { id: 'interactive', label: 'Interactive', icon: '⚡' },
    { id: 'logo', label: 'Logo', icon: '🎯' },
    { id: 'branding', label: 'Branding', icon: '🎨' },
    { id: 'website', label: 'Website', icon: '💻' },
    { id: 'uiux', label: 'UI/UX', icon: '📱' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📲' },
    { id: 'illustration', label: 'Illustration', icon: '🖼️' },
    { id: 'Design', label: 'Design', icon: '🖼️' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(project => project.category === activeFilter)

  const visibleProjects = filteredProjects.slice(0, visibleItems)
  const hasMoreItems = visibleItems < filteredProjects.length

  const handleLoadMore = (): void => {
    setVisibleItems(prev => prev + 6)
  }

  const handleFilterChange = (filterType: FilterType): void => {
    setActiveFilter(filterType)
    setVisibleItems(6)
  }

  // Auto-scroll effect for desktop tabs
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = (): void => {
      setIsScrolling(true)
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout)
      }
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout)
      }
    }
  }, [])

  return (
    <section className="h-auto py-20 relative overflow-hidden max-w-[min(95%,1600px)] mx-auto ">

      {/* Desktop Filter - Horizontal Scroll */}
      <div className="block mb-16">
        <div className="flex justify-center">
          <div
            ref={scrollRef}
            className={`flex overflow-x-auto gap-2 w-full mx-auto transition-all duration-300 custom-scrollbar ${isScrolling ? 'shadow-inner' : ''}`}
          >
            <style jsx>{`
    .custom-scrollbar {
      padding-bottom: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar {
      height: 8px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #C9F31D;
      border-radius: 10px;
      transition: background 0.3s ease;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #b8e01a;
    }
    
    /* Firefox scrollbar */
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #C9F31D #f1f1f1;
    }
    
    /* Mobile custom scrollbar */
    .mobile-custom-scrollbar {
      padding-bottom: 8px;
    }
    
    .mobile-custom-scrollbar::-webkit-scrollbar {
      height: 6px;
    }
    
    .mobile-custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 8px;
    }
    
    .mobile-custom-scrollbar::-webkit-scrollbar-thumb {
      background: #C9F31D;
      border-radius: 8px;
      transition: background 0.3s ease;
    }
    
    .mobile-custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #b8e01a;
    }
    
    /* Mobile Firefox scrollbar */
    .mobile-custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #C9F31D #f1f1f1;
    }
  `}</style>

            {filterCategories.map((category: TypeFilterCategory, index: number) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id as FilterType)}
                className={`group relative flex-shrink-0 flex items-center sm:gap-3 gap-1 2xl:px-8 2xl:py-4 lg:px-6 lg:py-3 px-2.5 py-2  font-bold transition-all duration-500 transform hover:scale-110  ${outfit.className}  ${activeFilter === category.id  
                    ? 'bg-[#C9F31D] text-black  scale-105'
                    : 'bg-transparent text-black hover:bg-[#C9F31D]/20'
                  }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon with animation */}
                <span className={`sm:text-lg text-sm transition-all duration-300 ${activeFilter === category.id ? 'animate-bounce' : 'group-hover:scale-125'}`}>
                  {category.icon}
                </span>

                {/* Label */}
                <span className="whitespace-nowrap sm:text-sm text-[12.5px]">
                  {category.label}
                </span>

              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Portfolio Grid with staggered animation */}
      <div className='max-w-[min(95%,1600px)] mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visibleProjects.map((project: PortfolioDataType, index: number) => (
            <div
              key={project.id}
              className="opacity-0 animate-slideUp"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>

        <style jsx>{`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            
            .animate-slideUp {
              animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            }
          `}</style>

          <div className="text-center">
            <div className="flex-shrink-0 flex justify-center items-center transform hover:scale-105 transition-transform duration-300">
              <GetStartedButton buttonTitle='Load More' />
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection