import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Blog = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative">
            <div
                className="flex flex-col flex-wrap  h-auto items-center bg-white group"

            >
                <img
                    src="./image/team__3.png"
                    alt="service"
                    className="w-full h-full"
                />
                <div className="flex flex-col p-5 max-w-[320px] space-y-5">
                    <span className="text-black text-lg">{props.pubDate}</span>
                    
                        <h2 className={`text-black text-xl line-clamp-2 font-bold  group-hover:text-[--green] transition-all`}>
                            {props.title}
                        </h2>
                    



                    <div className="inline-flex  items-center gap-2 mb-5 cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <FaArrowRight
                            color="var(--green)"
                        />
                        <span className={`text-[--green] font-semibold ${isHovered ? 'ml-2' : ''} transition-all`}>
                            READ MORE
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
