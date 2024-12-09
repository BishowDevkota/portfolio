import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SectionTitleWithArrow = ({
  smallHeading,
  largeWhiteHeading,
  largeGreenHeading,
  description,
  setCurrentIndex,
  blogs,
}) => {
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="flex justify-between items-center max-md:flex-col gap-4">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-[--green] text-lg font-semibold">{smallHeading}</h2>
          <h2 className="text-[--white] text-4xl font-bold">
            {largeWhiteHeading}{" "}
            <span className="text-[--green]">{largeGreenHeading}</span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center gap-12 max-md:flex-col">
        <p className="text-[--white] border-l-4 border-[--green] pl-10 text-xl">
          {description}
        </p>
        <div className="flex gap-2">
          <button
            className="h-12 flex justify-center items-center w-12 rounded bg-black text-white border-[1px] border-[--green] hover:bg-[--green] hover:text-white"
            onClick={handleBack}
          >
            <FaArrowLeft />
          </button>
          <button
            className="h-12 flex justify-center items-center w-12 rounded bg-black text-white border-[1px] border-[--green] hover:bg-[--green] hover:text-white"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleWithArrow;
