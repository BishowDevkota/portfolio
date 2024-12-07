import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
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
        </div>
      </div>
    </div>
  );
};

export default App;
