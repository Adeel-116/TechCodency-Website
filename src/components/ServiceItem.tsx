import React from 'react'
import { Outfit, Teko } from 'next/font/google';
import GetStartedButton from './GetStartedButton';
import Image from 'next/image';

const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

type ServiceItemProps = {
  number: number;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  tags?: string[];
};

function ServiceItem({
  number,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  tags = []
}: ServiceItemProps) {
  return (
    <div className="w-full h-auto" style={{ borderTop: '1px dashed gray' }}>
      <div className="max-w-[min(95%,1600px)] mx-auto h-auto">
        <div
          className="w-full grid gap-1 lg:[grid-template-columns:0.9fr_1.9fr_1.3fr] md:[grid-template-columns:0.4fr_1.9fr_1fr] sm:grid-cols-1"
          style={{
            paddingTop: 'max(4%, 1.9rem)',
            paddingBottom: 'max(3.5%, 1.4rem)',
          }}
        >
          {/* Number Section */}
          <div>
            <p
              className={`font-medium text-[clamp(2.2rem,5vw,3.5rem)] md:text-center ${teko.className}`} style={{ lineHeight: '1' }}
            >
              {number}.
            </p>
          </div>

          {/* Content Section */}
          <div>
            <div
              className="w-full h-auto flex-col"
              style={{ paddingBottom: 'max(5%, 1.5rem)' }}
            >
              <h1
                className={`font-medium text-[clamp(3.2rem,5vw,4rem)] ${teko.className}`}
                style={{ lineHeight: '1' }}
              >
                {title}
              </h1>

              <p
                className={`2xl:w-[90%] sm:w-[95%] w-full text-[clamp(0.9rem,1.4vw,1.1rem)] md:mt-5 mt-0 ${outfit.className} text-[#7f807f]`}
              >
                {description}
              </p>

              <div
                className="w-full h-auto xl:py-15 md:py-10 sm:py-5 py-4"
              >
                <GetStartedButton buttonTitle={buttonText} />
              </div>

              {/* Tags Section */}
              <div className="md:w-[80%] w-full flex flex-wrap justify-start md:gap-x-3 sm:gap-x-2 sm:gap-y-3 gap-2 md:gap-y-5">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`text-[clamp(0.875rem,1.2vw,1rem)] text-black px-6 py-1.5 border-[0.2px] border-[#7F807Fa2] rounded-full text-center ${outfit.className}`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
       <div className="relative w-full" style={{ height: 'clamp(250px, 80vw, 500px)' }}>
  <Image
    src={imageSrc}
    alt={imageAlt}
    fill
    sizes="100vw"
    className="object-cover"
    priority
  />
</div>
        </div >
      </div >
    </div >
  );
}

export default ServiceItem;
