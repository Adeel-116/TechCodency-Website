import { Outfit } from "next/font/google";
import GetStartedButton from "./GetStartedButton"; // Adjust the import path as needed

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const ServiceCard = ({ service, index }) => {

  return (
    <div
      className={`group relative bg-gradient-to-br from-[#E6F620]/10 to-[#9FEC1C]/5 border-2 border-transparent rounded-3xl p-8 cursor-pointer transition-all duration-500 ease-out backdrop-blur-sm hover:border-[#E6F620] hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#E6F620]/30 ${outfit.className}`}
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F620]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Service Icon */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-[#E6F620] to-[#9FEC1C] rounded-2xl flex items-center justify-center mb-6 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 overflow-hidden">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {service.icon}
      </div>

      {/* Service Title */}
      <h3 className="text-[#E6F620] text-2xl font-bold mb-4 leading-tight">
        {service.title}
      </h3>

      {/* Service Description */}
      <p className="text-[#BBBBB9] text-base leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
        {service.description}
      </p>

      {/* Service Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-[#BBBBB9] text-sm flex items-center group-hover:text-white transition-colors duration-300"
          >
            <span className="text-[#E6F620] font-bold mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button using your custom component */}
      <div className="flex-shrink-0">
        <GetStartedButton buttonTitle={service.cta.toUpperCase()} />
      </div>
    </div>
  );
};

export default ServiceCard;