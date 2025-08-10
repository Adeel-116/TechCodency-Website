'use client';
import React, {useState, useEffect, useRef} from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
export default function Home() {

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="w-full h-auto bg-white relative overflow-hidden">

     <header className='w-full h-auto' ref={headerRef}>
        <Header />
     </header>

      <HeroSection getHeaderHeight={headerHeight}/>
    
    </div>
  );
}
