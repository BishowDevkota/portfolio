import React, { useState } from "react";
import SectionTitleWithArrow from "../components/SectionTitleWithArrow";
import Blog from "../components/Blog";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs = [
    { id: 2, pubDate: "September 25, 2024", title: "Blog Post gfdsuyhfd fgdsjh fgds sdfghjg dfsdgfs sdf " },
    { id: 1, pubDate: "September 25, 2024", title: "dfdf dfdsaf a sf asdfasfa sfasfsdf asdfasf " },
    { id: 3, pubDate: "September 25, 2024", title: "fasdf sdfas asdfsdf asfsdf asdfas sfasdf  Post 3" },
    { id: 4, pubDate: "September 25, 2024", title: "Blog Post 4" },
    { id: 5, pubDate: "September 25, 2024", title: "Blog Post 5" },
    { id: 6, pubDate: "September 25, 2024", title: "Blog Post 6" },
    { id: 7, pubDate: "September 25, 2024", title: "Blog Post 7" },
    { id: 8, pubDate: "September 25, 2024", title: "Blog Post 8" },
    { id: 9, pubDate: "September 25, 2024", title: "Blog Post 9" },
    { id: 10, pubDate: "September 25, 2024", title: "Blog Post 10" },
  ];

  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

  // Determine the visible blog count based on screen size
  const getVisibleBlogCount = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3; // default to 3 for large screens
  };

  const visibleBlogs = Array.from({ length: getVisibleBlogCount() }, (_, index) => {
    const blogIndex = (currentIndex + index) % blogs.length;
    return blogs[blogIndex];
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
        blogs={blogs} // Pass blogs
      />

      <div className="flex justify-between gap-4 overflow-hidden">
        {visibleBlogs.map((blog) => (
          <Blog key={blog.id} pubDate={blog.pubDate} title={blog.title} />
        ))}
      </div>


    </div>
  );
};

export default Blogs;
