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

const PricingPlans = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
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
        "Newsfeed Integration",
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
    <div className="min-h-screen mx-auto py-5" style={{ background: "linear-gradient(135deg, #FAFAFA 0%, #f0f0f0 100%)" }}>
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

      <div className="max-w-7xl mx-auto">
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.slice(0, 3).map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              isHovered={hoveredPlan === index}
              onHover={() => setHoveredPlan(index)}
              onLeave={() => setHoveredPlan(null)}
            />
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.slice(3, 6).map((plan, index) => (
            <PlanCard
              key={index + 3}
              plan={plan}
              isHovered={hoveredPlan === index + 3}
              onHover={() => setHoveredPlan(index + 3)}
              onLeave={() => setHoveredPlan(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

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

const PlanCard: React.FC<PlanCardProps> = ({ plan, isHovered, onHover, onLeave }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 border transition-all duration-500 hover:scale-105 shadow-lg ${outfit.className} ${
        plan.popular
          ? 'shadow-2xl ring-2'
          : 'hover:shadow-xl'
      } ${isHovered ? 'transform -translate-y-2' : ''}`}
      style={{
        borderColor: plan.popular ? 'var(--color-primary-orange)' : '#e5e7eb',
        ringColor: plan.popular ? 'var(--color-primary-orange)' : 'transparent',
        boxShadow: plan.popular 
          ? '0 25px 50px -12px rgba(219, 70, 25, 0.25)' 
          : isHovered 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div 
            className={`text-white px-6 py-2 rounded-full font-bold text-sm ${outfit.className}`}
            style={{ 
              background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))"
            }}
          >
            ⭐ MOST POPULAR ⭐
          </div>
        </div>
      )}

      <div className="relative z-10">
        {/* Plan Header */}
        <div className="text-center mb-8">
          <div 
            className={`inline-flex p-4 rounded-2xl mb-6 text-white transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
            style={{ 
              background: plan.popular 
                ? "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))" 
                : "linear-gradient(to right, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support))"
            }}
          >
            {plan.icon}
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${outfit.className}`} style={{ color: "var(--color-text-secondary)" }}>
            {plan.name}
          </h3>
          <p className={`text-gray-600 text-sm mb-4 ${outfit.className}`}>{plan.description}</p>
          <div className="flex items-baseline justify-center">
            <span 
              className={`text-5xl font-bold ${outfit.className}`}
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
        <div className="space-y-3 mb-8 max-h-72 overflow-y-auto overflow-x-hidden scroll-smooth">
          <style jsx>{`
            .space-y-3::-webkit-scrollbar {
              width: 6px;
            }
            .space-y-3::-webkit-scrollbar-track {
              background: rgba(229, 231, 235, 0.3);
              border-radius: 10px;
            }
            .space-y-3::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, var(--color-primary-orange), var(--color-primary-orange-support));
              border-radius: 10px;
            }
            .space-y-3::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(to bottom, var(--color-primary-orange-support), var(--color-primary-orange));
            }
          `}</style>
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 transition-all duration-300 ${
                isHovered ? 'translate-x-2' : ''
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <IoCheckmarkCircle 
                className="w-5 h-5 mt-0.5 flex-shrink-0" 
                style={{ 
                  color: plan.popular 
                    ? "var(--color-primary-orange)" 
                    : "var(--color-secondary-darkblue)"
                }}
              />
              <span className={`text-gray-700 text-sm leading-relaxed hover:text-gray-900 transition-colors ${outfit.className}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
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
    </div>
  );
};

export default PricingPlans;