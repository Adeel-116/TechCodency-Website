import React, { useState } from 'react';
import { FaStar, FaRocket, FaCrown, FaBuilding, FaGem, FaTrophy } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { Teko, Outfit } from 'next/font/google';
import GetStartedButton from './GetStartedButton';

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

type Plan = {
  name: string;
  price: number;
  icon: React.ReactNode;
  popular: boolean;
  description: string;
  features: string[];
};

type PlanCardProps = {
  plan: Plan;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
};

const PricingPlans: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans: Plan[] = [
    {
      name: "Basic",
      price: 195,
      icon: <FaStar className="w-12 h-12" />,
      popular: false,
      description: "Perfect for small businesses getting started online",
      features: [
        "2 Stock Images",
        "3 Page Website",
        "1 jQuery Slider Banner",
        "Contact/Query Form",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "Complete Deployment",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee"
      ]
    },
    {
      name: "Startup",
      price: 399,
      icon: <FaRocket className="w-12 h-12" />,
      popular: false,
      description: "Ideal for growing startups with expanded needs",
      features: [
        "5 Stock Photos",
        "5 Page Website",
        "3 Banner Design",
        "1 jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
        "Mobile Responsive (+$200)",
        "CMS (+$250)"
      ]
    },
    {
      name: "Professional",
      price: 699,
      icon: <FaCrown className="w-12 h-12" />,
      popular: true,
      description: "Most popular choice for established businesses",
      features: [
        "10 Unique Pages Website",
        "CMS / Admin Panel Support",
        "5 GB Bandwidth",
        "8 Stock images",
        "5 Banner Designs",
        "1 jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "Complete Deployment",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
        "Mobile Responsive (+$200)"
      ]
    },
    {
      name: "Elite",
      price: 1199,
      icon: <FaGem className="w-12 h-12" />,
      popular: false,
      description: "Advanced features for dynamic business needs",
      features: [
        "Up to 15 Unique Pages Website",
        "Conceptual and Dynamic Website",
        "Mobile Responsive",
        "Online Reservation/Appointment Tool",
        "Online Payment Integration",
        "Custom Forms",
        "Lead Capturing Forms",
        "Striking Hover Effects",
        "Newsletter Subscription",
        "News feed Integration",
        "Social Media Integration",
        "Search Engine Submission",
        "5 Stock Photos",
        "3 Unique Banner Design",
        "1 jQuery Slider Banner",
        "Complete W3C Certified HTML",
        "Complete Deployment"
      ]
    },
    {
      name: "Corporate",
      price: 2599,
      icon: <FaBuilding className="w-12 h-12" />,
      popular: false,
      description: "Enterprise-grade solutions for large organizations",
      features: [
        "15 to 20 Pages Website",
        "Custom Interactive & Dynamic Design",
        "Custom WP or PHP Development",
        "1 jQuery Slider Banner",
        "Up to 10 Custom Banner Designs",
        "10 Stock Images",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content Management System",
        "Online Appointment/Scheduling",
        "Online Payment Integration",
        "Multi Lingual Support",
        "Custom Dynamic Forms",
        "Newsletter Signup Area",
        "Search Bar",
        "Social Networks Integration",
        "Mobile Responsive",
        "FREE 5 Years Domain Name",
        "Free Google Friendly Sitemap",
        "Dedicated Account Manager",
        "100% Ownership Rights"
      ]
    },
    {
      name: "Business",
      price: 3299,
      icon: <FaTrophy className="w-12 h-12" />,
      popular: false,
      description: "Complete business solution with video content",
      features: [
        "15 Seconds 2D Explainer Video",
        "Voice-Over & Sound Effects",
        "Professional Script Writing",
        "Storyboard Creation",
        "SEO Meta Tags",
        "15 to 20 Pages Website",
        "Custom Interactive Design",
        "Custom WP or PHP Development",
        "1 jQuery Slider Banner",
        "Up to 10 Custom Banner Designs",
        "10 Stock Images",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content Management System",
        "Online Appointment/Scheduling",
        "Online Payment Integration",
        "Multi Lingual Support",
        "Custom Dynamic Forms",
        "Newsletter Signup Area",
        "Social Networks Integration",
        "Mobile Responsive",
        "FREE 5 Years Domain Name",
        "Industry Expert Team",
        "Dedicated Account Manager",
        "100% Ownership Rights"
      ]
    }
  ];

  return (
    <>
      {/* Global Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(229, 231, 235, 0.2);
          border-radius: 12px;
          margin: 2px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support));
          border-radius: 12px;
          border: 2px solid transparent;
          background-clip: padding-box;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, var(--color-primary-orange-support), var(--color-secondary-darkblue));
          transform: scale(1.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
        
        /* Custom scrollbar for popular cards */
        .custom-scrollbar-popular::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support));
        }
        
        .custom-scrollbar-popular::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support));
        }
        
        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary-orange) rgba(229, 231, 235, 0.2);
        }
      `}</style>

      <div className="min-h-screen mx-auto max-w-[min(96%,1400px)] py-5">
        {/* Header Section - Centered */}
        <div className="w-full flex flex-col justify-center items-center text-center mb-2">
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
              OUR PRICING PLANS
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
            Affordable Plans Tailored <span style={{ color: "var(--color-secondary-darkblue)" }}>For Your Needs</span>
          </h1>
        </div>

        <div className="2xl:max-w-8xl sm:max-w-7xl max-w-[360px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 md:gap-8 gap-6">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                plan={plan}
                isHovered={hoveredPlan === index}
                onHover={() => setHoveredPlan(index)}
                onLeave={() => setHoveredPlan(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const PlanCard: React.FC<PlanCardProps> = ({ plan, isHovered, onHover, onLeave }) => {
  return (
    <div
      className={`relative rounded-2xl transition-all duration-500 hover:scale-105 shadow-lg cursor-pointer ${outfit.className} ${
        plan.popular
          ? 'shadow-2xl ring-2 2xl:p-10 xl:p-0 lg:p-4 sm:p-7 p-4'
          : 'hover:shadow-xl 2xl:p-8 xl:p-7 lg:p-4 sm:p-6 p-4'
      } ${isHovered ? 'transform -translate-y-2' : ''}`}
      style={{
        borderColor: plan.popular ? 'var(--color-primary-orange)' : '#e5e7eb',
        boxShadow: plan.popular
          ? '0 25px 50px -12px rgba(219, 70, 25, 0.25)'
          : isHovered
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        minHeight: '600px'
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Popular Badge */}
        {plan.popular && (
          <div className="absolute -top-13 left-1/2 transform -translate-x-1/2 z-20">
            <div 
              className="px-3 py-2 rounded-full text-white text-[12px] font-bold shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))"
              }}
            >
              MOST POPULAR
            </div>
          </div>
        )}

        {/* Plan Header */}
        <div className="text-center 2xl:mb-7 xl:mb-4 mb-6">
          <div
            className={`inline-flex rounded-2xl transition-all duration-300 ${
              isHovered ? 'scale-110' : ''
            } 2xl:p-5 xl:p-4 lg:p-2 sm:p-4 p-3 2xl:mb-5 xl:mb-3 lg:mb-3 mb-3`}
            style={{
              background: plan.popular
                ? "linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))"
                : "linear-gradient(135deg, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support))"
            }}
          >
            <div className="text-white bg-red-300 2xl:text-5xl xl:text-4xl lg:text-3.5xl text-4xl">
              {plan.icon}
            </div>
          </div>
          
          <h3 className={`font-bold mb-1 ${outfit.className} 2xl:text-3xl xl:text-2xl text-xl`} 
              style={{ color: "var(--color-text-secondary)" }}>
            {plan.name}
          </h3>
          
          <p className={`text-text-primary mb-2 ${outfit.className} 2xl:text-base xl:text-sm text-sm 2xl:leading-relaxed`}>
            {plan.description}
          </p>
          
          <div className="flex items-baseline justify-center">
            <span
              className={`font-bold ${outfit.className} 2xl:text-6xl xl:text-4xl text-3xl`}
              style={{
                color: plan.popular
                  ? "var(--color-primary-orange)"
                  : "var(--color-secondary-darkblue)"
              }}
            >
              ${plan.price}
            </span>
          </div>
        </div>

        {/* Features List */}
        <div className={`flex-grow scroll-smooth custom-scrollbar ${
          plan.popular ? 'custom-scrollbar-popular' : ''
        } 2xl:space-y-4 xl:space-y-3 lg:space-y-2 space-y-2 2xl:mb-10 xl:mb-8 lg:mb-5 mb-6 
        2xl:max-h-80 xl:max-h-72 lg:max-h-60 sm:max-h-65 max-h-55 2xl:pr-2 pr-1`}>
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start transition-all duration-300 ${
                isHovered ? 'translate-x-2' : ''
              } 2xl:space-x-4 xl:space-x-3 space-x-3`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <IoCheckmarkCircle
                className="flex-shrink-0 2xl:w-6 2xl:h-6 xl:w-5 xl:h-5 w-5 h-5 mt-0.5"
                style={{
                  color: plan.popular
                    ? "var(--color-primary-orange)"
                    : "var(--color-secondary-darkblue)"
                }}
              />
              <span className={`text-text-primary leading-relaxed hover:text-gray-900 transition-colors ${outfit.className} 
                2xl:text-base xl:text-sm text-sm`}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-auto">
          <GetStartedButton buttonTitle="GET STARTED" />
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-5 pointer-events-none"
        style={{
          background: plan.popular
            ? "linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))"
            : "linear-gradient(135deg, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support))"
        }}
      ></div>

      {/* Animated border effect on hover */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: plan.popular 
            ? 'linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))'
            : 'linear-gradient(135deg, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support))',
          padding: '2px',
          margin: '-1px'
        }}
      >
        <div className="bg-white rounded-2xl w-full h-full"></div>
      </div>
    </div>
  );
};

export default PricingPlans;