import "./App.css";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Services from "./pages/Services";
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
          <Services />
          <Blogs />
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default App;
