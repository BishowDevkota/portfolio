import ActionButton from "../components/ActionButton";

const Home = () => {
<<<<<<< HEAD
    return (
        <div className="h-max w-full">
            <div className="flex">
                <div className="flex flex-col justify-center gap-y-10">
                    <h2 className="md:text-4xl font-bold text-white">
                        <span className=" text-[--green]">IMAGINATION</span> IS MORE
                        IMPORTANT THAN KNOWLEDGE
                    </h2>
                    <div className=" border-l-4 border-[--green]">
                        <span className="text-white text-lg ml-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                            consectetur adipisicing elit.
                        </span>
                    </div>
                    <ActionButton />
                </div>
                <div>
                    <img src="/image/author1.png" alt="" />
                </div>
            </div>
=======
  return (
    <div className="h-max w-full">
      <div className="flex">
        <div className="flex flex-col">
          <h2 className="md:text-4xl font-bold text-white">
            <span className=" text-[--green]">IMAGINATION</span> IS MORE
            IMPORTANT THAN KNOWLEDGE
          </h2>
          <div className=" border-l-4 border-[--green]">
            <span className="text-white text-lg ml-z">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              consectetur adipisicing elit.
            </span>
          </div>
          <ActionButton text={"GETTING STARTED"}/>
>>>>>>> c6c8e9e064340d089abc02fc3d2215a5e2bb751d
        </div>
    );
};

export default Home;
