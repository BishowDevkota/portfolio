import React, { useState } from 'react';
import SectionTitleWithArrow from '../components/SectionTitleWithArrow';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  const [offset, setOffset] = useState(0);
  const totalProjects = 8; // Total number of ProjectCard components
  const cardWidth = 380; // The width of each project card
  const visibleCards = 4; // Number of visible cards at once

  // Function to handle slide logic for arrows
  const handleSlide = (direction) => {
    if (direction === 'left') {
      setOffset((prev) => {
        // Loop back to the last card
        if (prev === 0) {
          return -(totalProjects - 1); // go to the last card
        }
        return prev + 1;
      });
    } else if (direction === 'right') {
      setOffset((prev) => {
        // Loop back to the first card
        if (prev === -(totalProjects - 1)) {
          return 0; // go to the first card
        }
        return prev - 1;
      });
    }
  };

  return (
    <div className="w-[80%] mx-auto mb-12">
      <SectionTitleWithArrow
        smallHeading={"WORKING PROCESS"}
        largeWhiteHeading={"LATEST WORKING"}
        largeGreenHeading={"PROJECTS"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit"
        }
        handleSlide={handleSlide}
      />
      <div className="overflow-hidden mt-8 relative">
        <div
          className="flex gap-10 transition-transform duration-300"
          style={{
            transform: `translateX(${offset * cardWidth}px)`, // Shift based on offset
            width: `${(totalProjects + 2) * cardWidth}px`, // Width includes cloned items
          }}
        >

          <ProjectCard image={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"} projectDescription={"this is my first project"} />

          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          {/* Clone the first card at the end */}
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
