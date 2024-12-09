import React, { useState } from "react";
import SectionTitleWithArrow from "../components/SectionTitleWithArrow";
import Blog from "../components/Blog";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [

    { id: 1, desc: "S, 2024", img: "./image/about1.png " },
    { id: 2, desc: "eCOMMERCE WEBSITE 25, 2024", img: "./image/about1.png " },
    { id: 3, desc: "Mobile application 25, 2024", img: "./image/about1.png" },
    { id: 4, desc: "Desktop Application", img: "./image/about1.png" },
    { id: 5, desc: "September 25, 2024", img: "./image/about1.png" },
    { id: 6, desc: "September 25, 2024", img: "./image/about1.png" },
    { id: 7, desc: "September 25, 2024", img: "./image/about1.png" },


  ];

  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  // Determine the visible blog count based on screen size
  const getVisibleBlogCount = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3; // default to 3 for large screens
  };

  const visibleProjects = Array.from({ length: getVisibleBlogCount() }, (_, index) => {
    const projectIndex = (currentIndex + index) % projects.length;
    return projects[projectIndex];
  });

  return (
    <div className="w-[80%] mx-auto py-8">
      <SectionTitleWithArrow
        smallHeading={"WORKING PROCESS"}
        largeWhiteHeading={"LATEST WORKING"}
        largeGreenHeading={"PROJECTS"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit"
        }
        setCurrentIndex={setCurrentIndex} // Pass the state updater
        blogs={projects} // Pass blogs
      />

      <div className="flex justify-between gap-z overflow-hidden">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} projectDesc={project.desc} proImg={project.img} />
        ))}
      </div>


    </div>
  );
};

export default Project;
