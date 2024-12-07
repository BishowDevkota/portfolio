import React from "react";

const ExperienceCard = ({ date, heading, description }) => {
  return (
    <div className="bg-[--background] text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[--green]">
      {/* Date */}
      <div className="text-[--green] font-semibold text-lg mb-2">{date}</div>

      {/* Heading */}
      <div className="text-2xl font-bold mb-4">{heading}</div>

      {/* Description */}
      <div className="text-gray-300">{description}</div>
    </div>
  );
};

export default ExperienceCard;
