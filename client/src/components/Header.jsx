import React, { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io5";




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconMenuOpen, setIsIconMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { text: "Home", path: "home" },
    { text: "About", path: "about" },
    { text: "Skills", path: "skills" },
    { text: "Service", path: "services" },
    { text: "Projects", path: "projects" },
    { text: "Blog", path: "blog" },
    { text: "Contact", path: "contact" }, // Added
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better accuracy
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.path);
          if (element) {
            return {
              id: item.path,
              offsetTop: element.offsetTop,
              offsetBottom: element.offsetTop + element.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      const currentSection = sections.find(
        (section) =>
          scrollPosition >= section.offsetTop &&
          scrollPosition <= section.offsetBottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (path) => {
    const section = document.getElementById(path);
    if (section) {
      const yOffset = -80; // Adjust based on your header height
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth", // Enables smooth scrolling
      });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="sticky top-0 mx-auto z-50 border-cyan-400 border-b bg-black">
      <div className="mx-auto p-4 flex justify-between items-center font-rubik w-[80%]">
        {/* Logo */}
        <div className="text-center rounded-full bg-[--green] p-4 h-16 w-16 text-2xl font-bold text-white">
          B
        </div>

        {/* Desktop Navigation */}
        <div className="flex gap-5 max-md:hidden">
          {navItems.map((item, index) => (
            <span
              key={index}
              className={`text-xl cursor-pointer ${
                activeSection === item.path
                  ? "text-[--green] font-bold"
                  : "text-white hover:text-[--green]"
              }`}
              onClick={() => handleNavClick(item.path)}
            >
              {item.text}
            </span>
          ))}
        </div>

        {/* Icon Menu */}
        <div
          onClick={() => setIsIconMenuOpen(!isIconMenuOpen)}
          className="text-white text-2xl cursor-pointer transition-all z-50 max-md:hidden"
        >
          {isIconMenuOpen ? (
            <RiCloseLargeLine className="w-8 h-8" />
          ) : (
            <img src="/image/icon.svg" alt="menu icon" className="w-8 h-8" />
          )}
        </div>

        {/* Sidebar for Icon Menu */}
        <div
          className={`fixed right-0 h-screen w-full top-0 bg-[#2E3D44] bg-opacity-50 transform transition-transform duration-300 ease-in-out ${
            isIconMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-10`}
        >
<div className="absolute right-0 top-0 w-[25%] h-full bg-black text-white p-4 z-20 opacity-100">
  <div className="flex flex-col items-center justify-center mt-20 gap-6">
    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    <p className="text-justify text-sm text-gray-400">
  Feel free to reach out to me through any of the platforms below. I'm always happy to connect and discuss opportunities, projects, or simply have a chat!
</p>
    {/* WhatsApp */}
    <a
      href="https://wa.me/yourwhatsappnumber"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-[--green] transition-colors"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span>WhatsApp</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-[--green] transition-colors"
    >
      <CiLinkedin className="w-6 h-6" />
      <span>LinkedIn</span>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-[--green] transition-colors"
    >
<FiGithub className="w-6 h-6" />
      <span>GitHub</span>
    </a>

    {/* Email */}
    <a
      href="mailto:youremail@example.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-[--green] transition-colors"
    >
      <BiLogoGmail className="w-6 h-6" />
      <span>Email</span>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-[--green] transition-colors"
    >
    <IoLogoInstagram className="w-6 h-6" />
      <span>Instagram</span>
    </a>
  </div>
</div>

        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="text-white text-2xl md:hidden cursor-pointer transition-all z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RiCloseLargeLine className="w-8 h-8" />
          ) : (
            <GiHamburgerMenu className="w-8 h-8" />
          )}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed right-0 h-screen w-[50%] top-0 bg-[--background] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-5">
            {navItems.map((item, index) => (
              <span
                key={index}
                className={`text-xl cursor-pointer ${
                  activeSection === item.path
                    ? "text-[--green] font-bold"
                    : "text-white hover:text-[--green]"
                }`}
                onClick={() => handleNavClick(item.path)}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
