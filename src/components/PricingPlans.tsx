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
        "100% Money Back Guarantee",
      ],
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
        "CMS (+$250)",
      ],
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
        "Mobile Responsive (+$200)",
      ],
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
        "Complete Deployment",
      ],
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
        "100% Ownership Rights",
      ],
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
        "100% Ownership Rights",
      ],
    },
  ];

  return (
    <div className="min-h-screen mx-auto max-w-[1400px] py-10 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className={`flex items-center justify-center gap-4 mb-5 ${outfit.className}`}>
          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[var(--color-primary-orange)] to-[var(--color-primary-orange-support)]" />
          <span
            className="font-black text-base uppercase tracking-[0.2em]"
            style={{
              background: "linear-gradient(to right, var(--color-primary-orange), var(--color-primary-orange-support))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            OUR PRICING PLANS
          </span>
          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[var(--color-primary-orange-support)] to-[var(--color-primary-orange)]" />
        </div>

        <h1
          className={`${teko.className} font-black text-[clamp(2.5rem,6vw,4rem)] leading-tight text-black`}
        >
          Affordable Plans Tailored{" "}
          <span style={{ color: "var(--color-secondary-darkblue)" }}>For Your Needs</span>
        </h1>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

const PlanCard: React.FC<PlanCardProps> = ({ plan, isHovered, onHover, onLeave }) => (
  <div
    className={`relative rounded-2xl transition-all duration-500 hover:scale-105 shadow-lg cursor-pointer ${outfit.className} ${
      plan.popular ? 'shadow-2xl ring-2 p-6' : 'hover:shadow-xl p-5'
    } ${isHovered ? 'transform -translate-y-2' : ''}`}
    style={{
      borderColor: plan.popular ? 'var(--color-primary-orange)' : '#e5e7eb',
      boxShadow: plan.popular
        ? '0 20px 40px -10px rgba(219,70,25,0.25)'
        : isHovered
          ? '0 12px 24px rgba(0,0,0,0.1)'
          : '0 6px 12px rgba(0,0,0,0.08)',
      minHeight: '560px',
    }}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="relative z-10 h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <div
          className={`inline-flex rounded-2xl p-4 mb-4 transition-all duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}
          style={{
            background: plan.popular
              ? "linear-gradient(135deg, var(--color-primary-orange), var(--color-primary-orange-support))"
              : "linear-gradient(135deg, var(--color-secondary-darkblue), var(--color-secondary-darkblue-support))",
          }}
        >
          <div className="text-white text-4xl">{plan.icon}</div>
        </div>
        <h3 className="font-bold text-xl mb-1 text-gray-800">{plan.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
        <div className="flex justify-center items-baseline">
          <span
            className="font-bold text-4xl"
            style={{
              color: plan.popular
                ? "var(--color-primary-orange)"
                : "var(--color-secondary-darkblue)",
            }}
          >
            ${plan.price}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="flex-grow overflow-x-hidden space-y-2 mb-6 pr-1 max-h-64">
        {plan.features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-start transition-all duration-300 ${
              isHovered ? 'translate-x-2' : ''
            }`}
            style={{ transitionDelay: `${index * 30}ms` }}
          >
            <IoCheckmarkCircle
              className="flex-shrink-0 w-5 h-5 mt-0.5"
              style={{
                color: plan.popular
                  ? "var(--color-primary-orange)"
                  : "var(--color-secondary-darkblue)",
              }}
            />
            <span className="text-sm text-gray-700 ml-3 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-auto">
        <GetStartedButton buttonTitle="GET STARTED" />
      </div>
    </div>
  </div>
);

export default PricingPlans;
