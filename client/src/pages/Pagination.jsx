import React, { useState } from "react";

const BlogSlider = () => {
    // Sample blog data
    const blogs = [
        { id: 1, title: "Blog Post 1", content: "Content for Blog Post 1" },
        { id: 2, title: "Blog Post 2", content: "Content for Blog Post 2" },
        { id: 3, title: "Blog Post 3", content: "Content for Blog Post 3" },
        { id: 4, title: "Blog Post 4", content: "Content for Blog Post 4" },
        { id: 5, title: "Blog Post 5", content: "Content for Blog Post 5" },
        { id: 6, title: "Blog Post 6", content: "Content for Blog Post 6" },
        { id: 7, title: "Blog Post 7", content: "Content for Blog Post 7" },
        { id: 8, title: "Blog Post 8", content: "Content for Blog Post 8" },
        { id: 9, title: "Blog Post 9", content: "Content for Blog Post 9" },
        { id: 10, title: "Blog Post 10", content: "Content for Blog Post 10" },
    ];

    // State to manage current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate visible blogs
    const visibleBlogs = [
        blogs[currentIndex],
        blogs[(currentIndex + 1) % blogs.length],
        blogs[(currentIndex + 2) % blogs.length],
    ];

    // Handlers for next and back
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    };

    const handleBack = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length
        );
    };

    return (
        <div className="w-[80%] mx-auto py-8">
            <div className="flex space-x-4 w-full overflow-hidden">
                {visibleBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex-shrink-0 w-full sm:w-1/3 p-4 bg-white shadow-md rounded-md"
                    >
                        <h3 className="text-lg font-bold">{blog.title}</h3>
                        <p className="text-gray-600">{blog.content}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogSlider;
