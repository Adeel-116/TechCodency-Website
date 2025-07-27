import { Outfit } from 'next/font/google';
import GetStartedButton from './GetStartedButton';

const outfit = Outfit({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className={`w-full py-4  ${outfit.className}`}>
      <div className="container  flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-14 h-auto group-hover:scale-110 transition-transform duration-300"
          />
       
            <span
              className="text-2xl font-black tracking-wide bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-[#8BB33F] group-hover:via-white group-hover:to-[#8BB33F] transition-all duration-500"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              TECH
              <span className="ml-1 text-[#DAF220]">
                CODENCY
              </span>
            </span>
            <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#32370F] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
    
        </div>

        <nav className="flex-grow flex justify-center space-x-10 text-white">
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">HOME</a>
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">SERVICE</a>
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">ABOUT</a>
          <a href="#" className="hover:text-[#6B7F2F] transition-colors">PORTFOLIO</a>
        </nav>

        <div className="text-white">
          <GetStartedButton />
        </div>
      </div>
    </header>
  );
}
