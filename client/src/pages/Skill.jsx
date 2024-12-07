import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";

const Skills = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-10">
      <SectionTitle
        smallHeading="MY EXPERIENCE"
        largeWhiteHeading="Experience and"
        largeGreenHeading={"Skills"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem."
        }
      />
      <div className="text-[--white] flex gap-10">
        <ExperienceCard
          date="2022"
          heading="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem."
        />
        <ExperienceCard
          date="2022"
          heading="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem."
        />
        <ExperienceCard
          date="2022"
          heading="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem."
        />
        <ExperienceCard
          date="2022"
          heading="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem."
        />
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
