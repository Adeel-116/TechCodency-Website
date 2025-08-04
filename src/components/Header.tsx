'use client'
import React, { useState } from 'react';
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import GetStartedButton from './GetStartedButton';
import { HiMenu, HiX } from 'react-icons/hi';
const outfit = Outfit({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const serviceItems = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'SEO Services',
    'Brand Identity'
  ];

  return (
    <>
      <header className={`xl:w-[90%] w-full px-8 mx-auto py-4 relative z-50 ${outfit.className}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center relative group">
            <div className="relative w-[70px] h-[70px]">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col -ml-3 leading-none">
              <span
                className="text-xl sm:text-2xl font-black text-left tracking-wide text-white bg-clip-text group-hover:from-[#8BB33F] group-hover:via-white group-hover:to-[#8BB33F] transition-all duration-500"
                style={{
                  lineHeight: '1.5',
                  marginBottom: '-0.25rem',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                TECH
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#DAF220] text-center sm:text-left leading-none">
                CODENCY
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6 text-[15px] text-white">
            <a href="#" className="relative group py-2 transition-all duration-300">
              <span className="relative z-10 hover:text-[#DAF220] transition-colors duration-300">HOME</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#" className="relative group py-2 transition-all duration-300">
              <span className="relative z-10 hover:text-[#DAF220] transition-colors duration-300">ABOUT US</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#" className="relative group py-2 transition-all duration-300">
              <span className="relative z-10 hover:text-[#DAF220] transition-colors duration-300">SERVICE</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#" className="relative group py-2 transition-all duration-300">
              <span className="relative z-10 hover:text-[#DAF220] transition-colors duration-300">CASE STUDY</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#" className="relative group py-2 transition-all duration-300">
              <span className="relative z-10 hover:text-[#DAF220] transition-colors duration-300">PORTFOLIO</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#" className="relative group py-2 transition-all duration-300">
              <span className="relative z-10 hover:text-[#DAF220] transition-colors duration-300">PACKAGES</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#" className="relative group py-2 transition-all duration-300">
              <span className="relative z-10 hover:text-[#DAF220] transition-colors duration-300">CONTACT US</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full transition-all duration-300"></div>
            </a>
          </nav>

          {/* Desktop Get Started Button */}
          <div className='flex items-center space-x-3'>


            <div className="hidden md:flex flex-shrink-0">
              <GetStartedButton buttonTitle='GET STARTED' />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="xl:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
              id="menu-button"
            >
                <HiMenu className="text-white w-10 h-10 transition-transform duration-300"
                />
            
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Circular Overlay */}
      <div
        className={`fixed inset-0 pointer-events-none z-[100] xl:hidden`}
        style={{
          background: 'radial-gradient(circle at var(--menu-x, 50%) var(--menu-y, 50%), rgba(26, 26, 26, 0.98) 0%, rgba(15, 15, 15, 0.99) 40%), linear-gradient(135deg, rgba(218, 242, 32, 0.1) 0%, rgba(139, 179, 63, 0.1) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          clipPath: isMenuOpen
            ? 'circle(150% at var(--menu-x, 50%) var(--menu-y, 50%))'
            : 'circle(0% at var(--menu-x, 50%) var(--menu-y, 50%))',
          transition: 'clip-path 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '--menu-x': 'calc(100% - 5rem)',
          '--menu-y': '4rem',
        } as React.CSSProperties}
      >
        <div className={`w-full h-full overflow-y-auto ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>

          <div className="flex flex-col items-center justify-center min-h-full px-8 py-20">

            <button
              onClick={toggleMenu}
              className={`absolute top-8 right-4 w-12 h-12 flex items-center justify-center transition-all duration-500 transform ${isMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-180 opacity-0'
                }`}
              style={{ transitionDelay: isMenuOpen ? '0.4s' : '0s' }}
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
              </div>
            </button>

            {/* Logo in Menu - Top Left */}
            <div
              className={`absolute top-8 left-4 flex items-center transition-all duration-700 transform ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: isMenuOpen ? '0.3s' : '0s' }}
            >
              <div className="flex items-center relative group">
                <div className="relative w-[70px] h-[70px]">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col -ml-3 leading-none">
                  <span
                    className="text-xl sm:text-2xl font-black text-left tracking-wide text-white bg-clip-text group-hover:from-[#8BB33F] group-hover:via-white group-hover:to-[#8BB33F] transition-all duration-500"
                    style={{
                      lineHeight: '1.5',
                      marginBottom: '-0.25rem',
                      textShadow:
                        '0 0 20px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    TECH
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#DAF220] text-center sm:text-left leading-none">
                    CODENCY
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Menu - Centered */}
            <div className="flex flex-col items-center justify-center  w-fit space-y-6">

              {[
                { name: 'HOME', hasDropdown: false },
                { name: 'ABOUT US', hasDropdown: false },
                { name: 'SERVICES', hasDropdown: true },
                { name: 'CASE STUDY', hasDropdown: false },
                { name: 'PORTFOLIO', hasDropdown: false },
                { name: 'PACKAGES', hasDropdown: false },
                { name: 'CONTACT US', hasDropdown: false }
              ].map((item, index) => (
                <div key={item.name} className="relative flex flex-col">
                  {item.hasDropdown ? (
                    // Services with dropdown
                    <div className="flex flex-col items-center w-full">
                      <button
                        className={`flex items-center justify-center text-2xl font-semibold text-white relative group transition-all duration-700 transform hover:text-[#DAF220] hover:scale-105 ${isMenuOpen
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-16 opacity-0'
                          }`}
                        style={{
                          transitionDelay: isMenuOpen ? `${0.5 + index * 0.1}s` : '0s',
                        }}
                      >
                        <span className="relative z-10 transition-all duration-300">
                          {item.name}
                        </span>
                        <svg
                          className={`ml-2 w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>


                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                      </button>

                    </div>
                  ) : (

                    <a
                      href="#"
                      className={`text-2xl font-semibold text-white relative group transition-all duration-700 transform hover:text-[#DAF220] hover:scale-105 ${isMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-16 opacity-0'
                        }`}
                      style={{
                        transitionDelay: isMenuOpen ? `${0.5 + index * 0.1}s` : '0s',
                      }}
                      onClick={toggleMenu}
                    >
                      <span className="relative z-10 transition-all duration-300">
                        {item.name}
                      </span>

                      {/* Bottom border on hover */}
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#DAF220] to-[#8BB33F] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                    </a>
                  )}
                </div>
              ))}

              {/* Get Started Button - Centered below menu */}
              <div className={`mt-8 transition-all duration-700 transform ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isMenuOpen ? '1.2s' : '0s' }}>
                <GetStartedButton buttonTitle='GET STARTED' />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Floating particles */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-[#DAF220] rounded-full transition-all duration-1000 ${isMenuOpen ? 'opacity-40 scale-100' : 'opacity-0 scale-0'
                    }`}
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    transitionDelay: isMenuOpen ? `${0.6 + Math.random() * 0.4}s` : '0s',
                    animationDelay: `${Math.random() * 3}s`,
                    animation: isMenuOpen ? 'float 3s ease-in-out infinite alternate' : 'none',
                  }}
                ></div>
              ))}

              {/* Animated rings */}
              <div className={`absolute top-1/2 left-1/2 w-96 h-96 border border-[#DAF220] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isMenuOpen ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? '0.7s' : '0s',
                  animation: isMenuOpen ? 'pulse 4s ease-in-out infinite' : 'none',
                }}></div>

              <div className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-[#8BB33F] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1200 ${isMenuOpen ? 'scale-100 opacity-10' : 'scale-0 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? '0.8s' : '0s',
                  animation: isMenuOpen ? 'pulse 5s ease-in-out infinite reverse' : 'none',
                }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.1; }
        }
      `}</style>
    </>
  );
}