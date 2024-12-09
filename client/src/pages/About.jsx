import React, { useState } from "react";
import ActionButton from "../components/ActionButton";
import { IoPlaySharp } from "react-icons/io5";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-16 items-center bg-[--background] text-white h-max relative">
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
          <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
  onClick={() => setIsVideoOpen(true)}
>
  <div className="relative flex justify-center items-center">
    {/* Wavy Effect */}
    <div className="absolute h-[150px] w-[150px] rounded-full bg-[--green] opacity-20 animate-ping"></div>

    {/* Play Button */}
    <div className="bg-[--green] h-[100px] w-[100px] rounded-full flex justify-center items-center">
      <IoPlaySharp size={40} />
    </div>
  </div>
</div>




        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#000000cc] z-50 flex justify-center items-center fade-in"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 h-auto bg-black rounded-md scale-up"
            onClick={(e) => e.stopPropagation()} // Prevents modal close when clicking on video
          >
            <video
              className="w-full h-auto rounded-md"
              src="/video/sample.mp4" // Replace with your video file path
              controls
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
              onClick={() => setIsVideoOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Right Section: Text */}
      <div className="flex-1 flex flex-col gap-3 items-center lg:items-start lg:text-left text-justify">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          FAILURE IS THE CONDIMENT THAT GIVES
          <span className="text-[--green]"> SUCCESS</span>
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
