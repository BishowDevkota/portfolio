import ActionButton from "../components/ActionButton"


const Home = () => {
    return (
        <div className="">
            <div className="flex">
                <div className="flex flex-col flex-wrap justify-center gap-10 max-md:items-center">
                    <h2 className="md:text-6xl font-bold text-white"><span className=" text-[--green]">IMAGINATION</span> IS MORE IMPORTANT THAN KNOWLEDGE</h2>
                    <div className="border-l-4 border-[--green]">
                        <span className="text-white text-lg ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit.</span>
                    </div>
                    <ActionButton />
                </div>
                <div className="max-md:hidden">
                    <img src="/image/author1.png" alt="" className="w-auto h-full" />
                </div>
            </div>
        </div>
    )
}

export default Home
