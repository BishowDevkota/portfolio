import ActionButton from "../components/ActionButton";
import { MdArrowForwardIos } from "react-icons/md";

const Home = () => {
    return (
        <div className="w-[80%] mx-auto h-full">
            <div className="flex flex-nowrap items-center">
                <div className="flex flex-col justify-center min-h-[600px]">
                    <div className="flex flex-col gap-y-10 max-md:items-center max-md:text-center">
                        <h2 className="max-md:text-4xl max-sm:text-4xl text-6xl w-full font-bold text-white ">
                            <span className="text-[--green]">IMAGINATION</span> IS MORE IMPORTANT THAN KNOWLEDGE
                        </h2>
                        <div className="border-l-4 border-[--green] pl-2">
                            <span className="text-white text-lg inline-block font-bold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.
                            </span>
                        </div>
                        <ActionButton text="GETTING STARTED" IconComponent={MdArrowForwardIos} />
                    </div>
                </div>
                <div className="max-lg:hidden flex w-full justify-center">
                    <img
                        src="/image/author1.png"
                        alt="Author illustration"
                        className="min-w-[350px] h-auto object-contain"
                    />
                </div>
                <div className="flex flex-col gap-2 relative left-[5%] top-[40%] ">
                    <span className="flex items-center justify-center  bg-[--background] border-2 border-[--green] rounded-full h-8 w-8 text-[--green] font-bold text-sm">01</span>
                    <span className="flex items-center justify-center bg-[--background] border-2 border-[--green] rounded-full h-8 w-8  text-[--green] font-bold text-sm">02</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
