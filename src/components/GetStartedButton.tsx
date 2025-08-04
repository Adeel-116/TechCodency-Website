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
        className=" px-5 py-3 font-semibold rounded-full flex items-center shadow-md transition-all duration-500 ease-out"
        style={{
          backgroundColor: hover ? 'var(--color-bg)' : 'var(--color-secondary)',
          color: hover ? 'var(--color-secondary)' : 'var(--color-bg)',
          border: hover ? '1px solid var(--color-secondary)' : '',
        }}
      >
        {buttonTitle}
      </button>

      <span
        className="relative z-[10] -left-[12px] w-12 h-12 rounded-full border-[2px] flex items-center justify-center text-xl transition-all duration-500 ease-out"
        style={{
          backgroundColor: hover ? 'var(--color-bg)' : 'var(--color-secondary)',
          color: hover ? 'var(--color-secondary)' : 'var(--color-bg)',
          borderColor: hover ? 'var(--color-secondary)' : 'var(--color-bg)',
        }}
      >
        <MdArrowOutward />
      </span>
    </div>
  );
};

export default GetStartedButton;
