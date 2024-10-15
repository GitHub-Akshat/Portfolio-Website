import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
const Logo = "/src/assets/bb.png";

const NavforAdmin = () => {
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

  return (
    <nav className="fixed backdrop-blur-xl top-0 w-full z-50 left-0 h-auto bg-opacity-100 flex justify-between text-black dark:text-neutral-200 px-6 py-3 lg:px-20 lg:py-2">
        {/* Logo Section */}
        <div className="flex items-center flex-1">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="p-2 rounded-full center flex items-center justify-center">
        <button onClick={darkModeHandler} aria-label="Toggle dark mode">
          {dark ? <IoSunny /> : <IoMoon />}
        </button>
      </div>
    </nav>
  )
}

export default NavforAdmin