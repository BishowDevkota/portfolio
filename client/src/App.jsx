import "./App.css";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Skills from "./pages/Skill";
const App = () => {
  return (
    <div className="w-full bg-[--background] h-auto">
      <div className="mx-auto">
        <Header />
        <div className="flex flex-col gap-20">
          <div className=" bg-cover bg-[url('/image/wlc-bg1.jpg')] ">
            <Home />
          </div>
          <About />
          <Skills />
          <Services />
          <Project />
          <Blogs />
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default App;
