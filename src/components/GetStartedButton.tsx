'use client';

import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";

interface GetStartedButtonProps {
  buttonTitle?: string;
}
const GetStartedButton = ({buttonTitle}:GetStartedButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className='flex items-center'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button 
        className="py-3 px-6 text-[16px] font-semibold rounded-full flex items-center shadow-md transition-all duration-500 ease-out"
        style={{
          backgroundColor: hover ? '#000000' : '#C9F31D',
          color: hover ? '#C9F31D' : '#000000',
        }}
      >
        {buttonTitle}
      </button>

      <span
        className="relative z-[10] -left-[12px] w-12 h-12 rounded-full border-[2px] flex items-center justify-center text-xl transition-all duration-500 ease-out"
        style={{
          backgroundColor: hover ? '#000000' : '#C9F31D',
          color: hover ? '#C9F31D' : '#000000',
          borderColor: hover ? '#C9F31D' : '#000000',
        }}
      >
        <MdArrowOutward />
      </span>
    </div>
  );
};

export default GetStartedButton;
