import React from "react";

const About = () => {
  return (
    <div className="h-screen w-[80%] mx-auto flex flex-wrap justify-between items-center bg-[--background] gap-10 text-white max-md:flex-col">
      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center max-w-full">
        <div className="flex w-[450px]">
          <img src="/image/about1.png" alt="About" className="w-full h-full" />
        </div>
      </div>

      {/* Left Section: Text */}
      <div className="flex-1 flex-wrap text-center md:text-left">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          Failure is the condiment That Gives{" "}
          <span className="text-[--green]">Success</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-lg">
          Spend more time focusing on the important aspects of your business.
          Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an
          advanced virtual HR company, we are offering online HR systems that
          can be customized depending on your business needs.
        </p>
        <button className="w-32 h-10 mt-5 rounded bg-[--green] text-white font-bold hover:bg-[--background] hover:text-[--green] hover:border-2 hover:border-[--green]">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
