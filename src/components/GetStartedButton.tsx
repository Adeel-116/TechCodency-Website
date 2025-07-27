// components/GetStartedButton.js
import React from 'react';

const GetStartedButton = () => {
  return (
    <div className='flex'>
      <button className="bg-[#C9F31D] text-black py-2.5 px-6 text-[16px] rounded-full flex items-center space-x-2 shadow-md hover:bg-lime-600 transition duration-300 ease-in-out">
        GET STARTED
      </button>
      <span className='bg-[#C9F31D] text-black w-10 h-10 rounded-full border-2 border-[#0000] flex items-center justify-center text-xl'>
        →
      </span>
    </div>
  );
};

export default GetStartedButton;
