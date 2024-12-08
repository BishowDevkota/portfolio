import Blog from '../components/Blog'
import SectionTitle from '../components/SectionTitle'
const Blogs = () => {
    return (
        <div className='flex flex-col gap-10 w-[80%] mx-auto'>
            <SectionTitle smallHeading={"RECENT NEWS DESK"} largeWhiteHeading={"LATEST NEWS &"} largeGreenHeading={"BLOGS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident"} />


            <div className='mx-auto flex flex-row flex-wrap gap-10 mb-10' >
            <Blog  pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
            <Blog  pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
            <Blog  pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
            <Blog  pubDate="September 28, 2024" title="HOW TO HARNESS FULL POTENTIAL asdfsda asfadsf sdfsdaf" />
            </div>
        </div>
    )
}

export default Blogs
