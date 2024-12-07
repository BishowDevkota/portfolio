import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SectionTitleWithArrow = ({
  smallHeading,
  largeWhiteHeading,
  largeGreenHeading,
  description,
  handleSlide,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        
        <div>
          <h2 className="text-[--green] text-lg font-semibold">{smallHeading}</h2>
          <h2 className="text-[--white] text-4xl font-bold">
            {largeWhiteHeading}{' '}
            <span className="text-[--green]">{largeGreenHeading}</span>
          </h2>
        </div>
      </div>
      <div className='flex justify-center gap-12'>
      <p className="text-[--white] border-l-4 border-[--green] pl-10 text-xl max-w-[60%]">
        {description}
      </p>
      <div className='flex gap-2'>
      <button
          className="h-12 flex justify-center items-center w-12 rounded bg-black text-white border-[1px]  border-[--green] hover:bg-[--green] hover:text-white"
          onClick={() => handleSlide('left')}
        >
          <FaArrowLeft />
        </button>
        <button
          className="h-12 flex justify-center items-center w-12 rounded bg-black text-white border-[1px]  border-[--green] hover:bg-[--green] hover:text-white"
          onClick={() => handleSlide('right')}
        >
          <FaArrowRight />
        </button>
        </div>
        </div>
    </div>
  );
};

export default SectionTitleWithArrow;
