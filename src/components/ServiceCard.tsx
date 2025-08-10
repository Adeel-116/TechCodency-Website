import { Outfit } from "next/font/google";
import GetStartedButton from "./GetStartedButton";

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  cta: string;
};

type ServiceCardProps = {
  service: Service;
  index: number;
  isActive?: boolean;
};

const ServiceCard = ({ service, index, isActive = false }: ServiceCardProps) => {
  return (
    <div
      className={`group relative text-white rounded-3xl p-8 cursor-pointer transition-all duration-500 ease-out ${outfit.className} ${
        isActive ? 'scale-105 -translate-y-4 shadow-2xl shadow-[#E6F620]/40' : 'hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#E6F620]/30'
      }`}
      style={{
        background: isActive 
          ? "linear-gradient(145deg, #2a2a2a, #1a1a1a)" 
          : "linear-gradient(145deg, #1a1a1a, #2a2a2a)",
        border: isActive 
          ? "1px solid rgba(230, 246, 32, 0.3)" 
          : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Card Number Badge */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-[#E6F620]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#E6F620] text-sm font-bold border border-[#E6F620]/30">
        {index + 1}
      </div>

      {/* Enhanced Service Icon */}
      <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-black transition-all duration-500 overflow-hidden ${
        isActive ? 'rotate-3 scale-110' : 'group-hover:rotate-6 group-hover:scale-110'
      }`} style={{
        background: isActive 
          ? 'linear-gradient(135deg, #E6F620 0%, #9FEC1C 50%, #E6F620 100%)'
          : 'linear-gradient(135deg, #E6F620 0%, #9FEC1C 100%)'
      }}>
        {/* Icon Shine Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ${
          isActive ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
        }`} />
        
        {/* Icon Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
        
        <div className="relative z-10">
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-[#E6F620] text-2xl font-bold mb-4 leading-tight transition-all duration-300 ${
        isActive ? 'text-[#E6F620] scale-105' : ''
      }`}>
        {service.title}
      </h3>

      {/* Description */}
      <p className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-[#BBBBB9] group-hover:text-white'
      }`}>
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className={`text-sm flex items-center transition-all duration-300 ${
              isActive ? 'text-white translate-x-1' : 'text-[#BBBBB9] group-hover:text-white group-hover:translate-x-1'
            }`}
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <span className={`font-bold mr-3 text-lg transition-all duration-300 ${
              isActive ? 'text-[#E6F620] scale-110' : 'text-[#E6F620]'
            }`}>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className={`flex-shrink-0 transition-all duration-300 ${
        isActive ? 'scale-105' : ''
      }`}>
        <GetStartedButton buttonTitle={service.cta.toUpperCase()} />
      </div>
    </div>
  );
};



export default ServiceCard;