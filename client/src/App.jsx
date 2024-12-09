import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Skills from "./pages/Skill";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="w-full bg-[--background] h-auto">
      <div className="mx-auto">
        <Header />
        <div className="flex flex-col">
          <div id="home" className="bg-cover bg-[url('/image/wlc-bg1.jpg')] max-lg:py-10">
            <Home />
          </div>
          <div id="about" className="bg-cover bg-[url('/image/project-bg.jpg')] py-14">
            <About />
          </div>
          <div id="skills" className="py-14">
            <Skills />
          </div>
          <div id="services" className="py-14">
            <Services />
          </div>
          <div id="projects" className="bg-cover bg-[url('/image/project-bg.jpg')] py-14">
            <Project />
          </div>
          <div id="blog" className="py-14">
            <Blogs />
          </div>
          <div className="bg-cover bg-[url('/image/map.png')]" id="contact">
            <Contact />
          </div>
          <div className="bg-cover bg-[url('/image/footer-bg.png')]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;




