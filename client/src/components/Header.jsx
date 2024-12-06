import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);

  // Navigation items with links
  const navItems = [
    { text: "Home", path: "home" },
    { text: "About", path: "about" },
    { text: "Skills", path: "skills" },
    { text: "Service", path: "services" },
    { text: "Projects", path: "projects" },
    { text: "Blog", path: "blog" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="w-[80%] bg-[--background] mx-auto p-4 flex justify-between items-center font-rubik">
        {/* Logo */}
        <div className="text-center rounded-full bg-[--green] p-4 h-16 w-16 text-2xl font-bold text-white ">
          B
        </div>

        {/* Desktop Navigation */}
        <div className="flex gap-5 max-md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.path}`}
              className="text-white hover:text-[--green] cursor-pointer text-xl"
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Icon Menu */}
        <div
          onClick={() => setIsIconMenuOpen(!isIconMenuOpen)}
          className="text-white text-2xl cursor-pointer transition-all z-50 max-md:hidden"
        >
          {isIconMenuOpen ? "X": <img src="/image/icon.svg" alt="" className="w-8 h-8" />}
          
        </div>

        {/* Animated Icon Menu */}
        <div
  className={`fixed right-0 h-screen w-full top-0 bg-[#2E3D44] bg-opacity-50 transform transition-transform duration-300 ease-in-out ${
    isIconMenuOpen ? "translate-x-0" : "translate-x-full"
  } z-10`}
>
  {/* Sidebar */}
  <div
    className="absolute right-0 top-0 w-[25%] h-full bg-black text-white p-4 z-20 opacity-100"
  >
    <div className="flex flex-col items-center justify-center mt-20  "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae repellat libero ducimus nihil sint, voluptas eaque architecto eum nesciunt et, deleniti nulla delectus harum accusantium. Iste dolor exercitationem maxime delectus, tenetur animi esse commodi expedita saepe sed beatae reprehenderit, odit sint quia repudiandae! Numquam unde doloremque ratione tempore velit aperiam.</div>
  </div>
</div>

        {/* Mobile Hamburger Icon */}
        <div
          className="text-white text-2xl md:hidden cursor-pointer transition-all z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "X" : "☰"}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed right-0 h-screen w-[40%] top-0 bg-[#2E3D44] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-5">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.path}`}
                className="text-white hover:text-[--green] cursor-pointer text-xl"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
