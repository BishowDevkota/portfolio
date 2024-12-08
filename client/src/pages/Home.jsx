import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import ActionButton from "../components/ActionButton";

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            id: 0,
            heading: "IMAGINATION IS MORE IMPORTANT THAN KNOWLEDGE",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.",
            image: "/image/author1.png",
        },
        {
            id: 1,
            heading: "IMAGINATION IS MORE IMPORTANT THAN KNOWLEDGE",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.",
            image: "/image/author2.png",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSlideChange = (id) => {
        setActiveSlide(id);
    };

    return (
        <div className="w-[80%] mx-auto h-full">
            <div
                className="relative overflow-hidden"
                style={{ minHeight: "600px" }}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className="flex flex-nowrap items-center w-full min-w-full"
                        >
                            <div className="flex flex-col justify-center">
                                <div className="flex flex-col gap-y-10 max-md:items-center max-md:text-center">
                                    <h2
                                        className={`max-md:text-4xl max-sm:text-4xl text-6xl w-full font-bold text-white ${activeSlide === index
                                            ? "animate-[slideDown_0.6s_ease-out]"
                                            : ""
                                            }`}
                                    >
                                        <span className="text-[--green]">
                                            {slide.heading.split(" ")[0]}
                                        </span>{" "}
                                        {slide.heading.split(" ")
                                            .slice(1)
                                            .join(" ")}
                                    </h2>
                                    <div
                                        className={`border-l-4 border-[--green] pl-2 ${activeSlide === index
                                            ? "animate-[slideDownB_1s_ease-out]"
                                            : ""
                                            }`}
                                    >
                                        <span className="text-white text-lg inline-block font-bold">
                                            {slide.text}
                                        </span>
                                    </div>
                                    <div className={`${activeSlide === index
                                        ? "animate-[slideDownB_1s_ease-out]"
                                        : ""
                                        }`}>
                                        <ActionButton
                                            text="GETTING STARTED"
                                            IconComponent={MdArrowForwardIos}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="max-lg:hidden flex w-full justify-center">
                                <img
                                    src={slide.image}
                                    alt="Author illustration"
                                    className="min-w-[350px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 absolute right-4 top-[40%]">
                    {slides.map((slide) => (
                        <span
                            key={slide.id}
                            onClick={() => handleSlideChange(slide.id)}
                            className={`flex items-center justify-center bg-[--background] border-2 border-[--green] rounded-full h-8 w-8 font-bold text-sm cursor-pointer ${activeSlide === slide.id
                                ? "bg-[--green] text-white"
                                : "text-[--green]"
                                }`}
                        >
                            {`0${slide.id + 1}`}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Home;
