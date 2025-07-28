import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-lime-400/10 to-neutral-400/5 border-2 border-transparent rounded-3xl p-8 cursor-pointer transition-all duration-500 ease-out backdrop-blur-sm hover:border-lime-400 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/30 ${outfit.className}`}
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Service Icon */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-lime-400 to-neutral-400 rounded-2xl flex items-center justify-center mb-6 text-black transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 overflow-hidden">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {service.icon}
      </div>

      {/* Service Title */}
      <h3 className="text-lime-400 text-2xl font-bold mb-4 leading-tight">
        {service.title}
      </h3>

      {/* Service Description */}
      <p className="text-neutral-400 text-base leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
        {service.description}
      </p>

      {/* Service Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-neutral-400 text-sm flex items-center group-hover:text-white transition-colors duration-300"
          >
            <span className="text-lime-400 font-bold mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="relative bg-gradient-to-r from-lime-400 to-neutral-400 text-black font-bold py-3 px-6 rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/40 overflow-hidden group/btn">
        {/* Button Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500" />
        <span className="relative z-10">{service.cta}</span>
      </button>
    </div>
  );
};

export default ServiceCard;
