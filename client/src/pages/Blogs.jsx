import React, { useState } from 'react';
import SectionTitleWithArrow from '../components/SectionTitleWithArrow';
import ProjectCard from '../components/ProjectCard';
import Blog from '../components/Blog';


const Blogs = () => {
    const [offset, setOffset] = useState(0);
    const totalProjects = 4;
    const cardWidth = 380;
    const visibleCards = 4;

    const handleSlide = (direction) => {
        if (direction === 'left') {
            setOffset((prev) => {
                if (prev === 0) {
                    return -(totalProjects - 1);
                }
                return prev + 1;
            });
        } else if (direction === 'right') {
            setOffset((prev) => {
                if (prev === -(totalProjects - 1)) {
                    return 0;
                }
                return prev - 1;
            });
        }
    };

    return (
        <div className="w-[80%] mx-auto">
            <SectionTitleWithArrow
                smallHeading={"RECENT NEWS DESK"} largeWhiteHeading={"LATEST NEWS &"} largeGreenHeading={"BLOGS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident"}
                handleSlide={handleSlide}
            />
            <div className="overflow-hidden mt-8 relative">
                <div
                    className="flex gap-8 transition-transform duration-300"
                    style={{
                        transform: `translateX(${offset * cardWidth}px)`,
                        width: `${(totalProjects + 2) * cardWidth}px`,
                    }}
                >
                    <Blog pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
                    <Blog pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
                    <Blog pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
                    <Blog pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
                    <Blog pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />

                </div>
            </div>
        </div>
    );
};

export default Blogs;
