import React, { useState } from 'react';
import { FaStar, FaRocket, FaCrown, FaBuilding, FaGem, FaTrophy } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
import { Teko, Outfit } from 'next/font/google';
const GetStartedButton = ({ buttonTitle }) => (
  <button className="group relative overflow-hidden bg-gradient-to-r from-[#C9F31D] to-[#9FEC1C] text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2">
    <span>{buttonTitle}</span>
    <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
  </button>
);


  const outfit = Outfit({
      weight: ["100", "300", "400", "700", "900"],
      subsets: ["latin"],
  });
  
  const teko = Teko({
      weight: ["400", "500", "600", "700"],
      subsets: ["latin"],
  });

const PricingPlans = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

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
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-2 bg-[#C9F31D] rounded-2xl"></div>
            <div className={`text-5xl font-bold text-black ml-4 ${teko.className}`}>
              Packages And Pricing Plans!
            </div>
          </div>
          <p className ={`text-black text-xl max-w-4xl mx-auto leading-relaxed ${outfit.className}`}>
            Explore our range of budget-friendly packages and pricing plans designed to suit your specific needs and requirements. Choose the perfect plan that fits your budget and unlocks the full potential of our services. Get started on your journey to success with our competitive pricing options.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9F31D] to-[#BBBBB9] mx-auto mt-8 rounded-full"></div>
        </div>

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

const PlanCard = ({ plan, isHovered, onHover, onLeave }) => {
  return (
    <div
      className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
        plan.popular
          ? 'border-[#C9F31D] shadow-2xl shadow-[#C9F31D]/20 ring-2 ring-[#C9F31D]/30'
          : 'border-gray-700/50 hover:border-[#9FEC1C]/60'
      } ${isHovered ? 'transform -translate-y-2' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-[#C9F31D] to-[#9FEC1C] text-black px-6 py-2 rounded-full font-bold text-sm animate-pulse">
            ⭐ MOST POPULAR ⭐
          </div>
        </div>
      )}

      {/* Glowing Border Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } bg-gradient-to-r from-[#C9F31D] to-[#9FEC1C] p-[2px]`}>
        <div className="w-full h-full bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Plan Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r from-[#C9F31D] to-[#9FEC1C] text-black transition-all duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            {plan.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-[#BBBBB9] text-sm mb-4">{plan.description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-[#C9F31D] text-5xl font-bold">${plan.price}</span>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8 max-h-72 overflow-y-auto overflow-x-hidden scroll-smooth">
          <style jsx>{`
            .space-y-3::-webkit-scrollbar {
              width: 6px;
            }
            .space-y-3::-webkit-scrollbar-track {
              background: rgba(55, 65, 81, 0.3);
              border-radius: 10px;
            }
            .space-y-3::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #C9F31D, #9FEC1C);
              border-radius: 10px;
            }
            .space-y-3::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(to bottom, #9FEC1C, #C9F31D);
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
              <IoCheckmarkCircle className="w-5 h-5 text-[#9FEC1C] mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm leading-relaxed hover:text-white transition-colors">
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

      {/* Animated Background Particles */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C9F31D] rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#9FEC1C] rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-60"></div>
        </div>
      )}
    </div>
  );
};

export default PricingPlans;