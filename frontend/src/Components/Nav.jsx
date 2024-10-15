import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoSunny, IoMoon } from "react-icons/io5";
import Logo from "../assets/bb.png";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark((prevDark) => {
      const newDarkMode = !prevDark;
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem("darkMode", newDarkMode);
      return newDarkMode;
    });
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const content = (
    <div
      className={`bg-white dark:bg-black lg:hidden block absolute top-16 w-full left-0 right-0 transition-transform ${
        click ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} offset={-80} to="Home" onClick={() => setClick(false)}>
          <li className="my-4 py-4 border-b hover:bg-slate-200 dark:hover:bg-gray-700 hover:rounded">
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} offset={-80} to="About" onClick={() => setClick(false)}>
          <li className="my-4 py-4 border-b hover:bg-slate-200 dark:hover:bg-gray-700 hover:rounded">
            About
          </li>
        </Link>
        <Link spy={true} smooth={true} offset={-80} to="Education" onClick={() => setClick(false)}>
          <li className="my-4 py-4 border-b hover:bg-slate-200 dark:hover:bg-gray-700 hover:rounded">
            Education
          </li>
        </Link>
        <Link spy={true} smooth={true} offset={-80} to="Skills" onClick={() => setClick(false)}>
          <li className="my-4 py-4 border-b hover:bg-slate-200 dark:hover:bg-gray-700 hover:rounded">
            Skills
          </li>
        </Link>
        <Link spy={true} smooth={true} offset={-80} to="Projects" onClick={() => setClick(false)}>
          <li className="my-4 py-4 border-b hover:bg-slate-200 dark:hover:bg-gray-700 hover:rounded">
            Projects
          </li>
        </Link>
        <Link spy={true} smooth={true} offset={-80} to="Contact" onClick={() => setClick(false)}>
          <li className="my-4 py-4 border-b hover:bg-slate-200 dark:hover:bg-gray-700 hover:rounded">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    <nav className="fixed backdrop-blur-xl top-0 w-full z-50 left-0 h-auto bg-opacity-100 flex justify-between text-black dark:text-neutral-200 lg:py-2 px-20 py-2">
      {/* Logo Section */}
      <div className="flex items-center flex-1">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="lg:flex md:flex lg:flex-1 font-medium items-center justify-end hidden">
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <Link spy={true} smooth={true} offset={-80} to="Home">
              <li className="hover:text-black dark:hover:text-white transition border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer">
                Home
              </li>
            </Link>
            <Link spy={true} smooth={true} offset={-80} to="About">
              <li className="hover:text-black dark:hover:text-white transition border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} offset={-80} to="Education">
              <li className="hover:text-black dark:hover:text-white transition border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer">
                Education
              </li>
            </Link>
            <Link spy={true} smooth={true} offset={-80} to="Skills">
              <li className="hover:text-black dark:hover:text-white transition border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer">
                Skills
              </li>
            </Link>
            <Link spy={true} smooth={true} offset={-80} to="Projects">
              <li className="hover:text-black dark:hover:text-white transition border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer">
                Projects
              </li>
            </Link>
            <Link spy={true} smooth={true} offset={-80} to="Contact">
              <li className="hover:text-black dark:hover:text-white transition border-b-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div>{click && content}</div>

      {/* Menu Icon for Mobile */}
      <button className="block md:hidden transition" onClick={() => setClick(!click)} aria-label="Toggle menu">
        {click ? <FaTimes /> : <CiMenuFries />}
      </button>

      {/* Dark Mode Toggle */}
      <div className="p-2 rounded-full center flex items-center justify-center">
        <button onClick={darkModeHandler} aria-label="Toggle dark mode">
          {dark ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
