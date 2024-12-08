import React from "react";

const ProgressCircle = ({ percent, skills }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40 rounded-full flex items-center justify-center font-bold">
        {/* Masked background */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(var(--green) 0% ${percent}%, white ${percent}% 100%)`,
            maskImage: "radial-gradient(circle, transparent 60%, white 60%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 60%, white 60%)",
          }}
        ></div>
        {/* Text */}
        <span className="z-20 text-[--green]" style={{ pointerEvents: "none" }}>
          {percent}%
        </span>
      </div>

      {/* Skills text */}
      <div className="text-center mt-2 text-[--white]">{skills}</div>
    </div>
  );
};

export default ProgressCircle;
