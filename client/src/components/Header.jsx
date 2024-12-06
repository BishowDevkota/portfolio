import React from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky">
      <div className="w-[80%] bg-[--background] mx-auto p-4 flex justify-between items-center font-rubik">
        <div className="text-center rounded-full bg-[--green] p-4 h-16 w-16 text-2xl font-bold text-white ">
          B
        </div>
        <div className="flex gap-5 max-md:hidden">
          <div className="text-white hover:text-[--green] cursor-pointer text-xl">
            Home
          </div>
          <div className="text-white hover:text-[--green] cursor-pointer text-xl">
            About
          </div>
          <div className="text-white hover:text-[--green] cursor-pointer text-xl">
            Skills
          </div>
          <div className="text-white hover:text-[--green] cursor-pointer text-xl">
            Service
          </div>
          <div className="text-white hover:text-[--green] cursor-pointer text-xl">
            Projects
          </div>
          <div className="text-white hover:text-[--green] cursor-pointer text-xl">
            Blog
          </div>
        </div>
        <div className="max-md:hidden">
          <img src="/image/hamburger.svg" alt="" />
        </div>
        <div className="text-white text-2xl md:hidden">=</div>

      </div>
    </header>
  );
};

export default Header;
