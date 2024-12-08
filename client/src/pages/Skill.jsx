import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import ProgressCircle from "../components/ProgressCircle";
import SectionTitle from "../components/SectionTitle";

const Skills = () => {
  return (
    <div className="text-[--white] flex flex-col gap-10 w-[90%] sm:w-[80%] mx-auto">
      <SectionTitle
        smallHeading="MY EXPERIENCE"
        largeWhiteHeading="EXPERIENCE AND"
        largeGreenHeading="SKILLS"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem."
      />

      {/* Experience Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <ExperienceCard
          date="2022-2024 (Ui designer)"
          heading="Google Corporation."
          description="All you need to do your best work together in one package works seamlessly computer."
        />
        <ExperienceCard
          date="2022-2024 (Ui designer)"
          heading="Google Corporation."
          description="All you need to do your best work together in one package works seamlessly computer."
        />
        <ExperienceCard
          date="2022-2024 (Ui designer)"
          heading="Google Corporation."
          description="All you need to do your best work together in one package works seamlessly computer."
        />
        <ExperienceCard
          date="2022-2024 (Ui designer)"
          heading="Google Corporation."
          description="All you need to do your best work together in one package works seamlessly computer."
        />
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <ProgressCircle percent={100} skills={"HTML"} />
        <ProgressCircle percent={90} skills={"CSS"} />
        <ProgressCircle percent={85} skills={"JavaScript"} />
        <ProgressCircle percent={70} skills={"React"} />
        <ProgressCircle percent={95} skills={"Node.js"} />
        <ProgressCircle percent={80} skills={"MongoDB"} />
      </div>
    </div>
  );
};

export default Skills;
