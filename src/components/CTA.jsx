// components/CTASection.js
'use client';
import { Teko, Outfit } from 'next/font/google';
import GetStartedButton from './GetStartedButton';

const teko = Teko({ subsets: ['latin'] });

const outfit = Outfit({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
});


export default function CTA() {
  return (
    <section className="w-full bg-[#0A090F] py-5">
      <div className="w-[90%] mx-auto text-center">
        {/* Heading using your existing style */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="w-10 h-2 bg-[#C9F31D] rounded-2xl"></div>
            <div
              className={`text-[5rem] font-bold text-[#E6F620] ml-4 ${teko.className}`}
            >
              Ready to Get Started?
            </div>
          </div>
          <p className={`text-white text-xl max-w-2xl mx-auto mt-2 ${outfit.className}`}>
            Let's transform your vision into reality. Partner with us to create exceptional digital experiences that drive results and exceed expectations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E6F620] to-[#C9F31D] mx-auto text-white text-xl  mt-8 rounded-full"></div>
        </div>

    
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-5">
            <div className="flex-shrink-0">
              <GetStartedButton buttonTitle="CHAT WITH US" />
            </div>
            <div className="flex-shrink-0">
              <GetStartedButton buttonTitle="CONTACT US" />
            </div>
          </div>

        </div>
    
    </section>
  );
}