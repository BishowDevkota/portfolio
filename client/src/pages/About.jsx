import React from "react";
import ActionButton from "../components/ActionButton";
import { IoPlaySharp } from "react-icons/io5";


const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[--background] gap-10 text-white h-max px-5 md:px-10 lg:px-20">
      {/* Left Section: Image with Background */}
      <div className="flex-1 w-full relative flex flex-col items-center">
        {/* Background Shape */}
        <div
          className="absolute w-[50%] h-[45%] bg-no-repeat bg-cover top-[65%] left-[-25%]"
          style={{
            backgroundImage: "url('/image/about-shape.svg')",
          }}
        ></div>

        {/* Foreground Image */}
        <div className="relative z-10 w-full h-72 sm:h-80 md:h-96 lg:h-[445px]">
          <img
            src="/image/about1.png"
            alt="About"
            className="w-full h-full object-cover"
          />

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[--green] h-[100px] w-[100px] rounded-full flex justify-center items-center">
              <IoPlaySharp size={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Text */}
      <div className="flex-1 flex flex-col gap-3 items-center lg:items-start lg:text-left text-justify">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Failure is the condiment That Gives{" "}
          <span className="text-[--green]">Success</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-lg lg:text-lg text-justify">
          Spend more time focusing on the important aspects of your business.
          Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an
          advanced virtual HR company, we are offering online HR systems that
          can be customized depending on your business needs.
        </p>
        <div>
          <ActionButton text="Download CV" />
        </div>
      </div>
    </div>
  );
};

export default About;
