import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import dd from "/src/assets/dd.png"

const Footer = () => {
  return (
    <footer className="footer w-full bg-gray-200 dark:bg-neutral-900 p-6">
        <h1 className="flex justify-center text-black dark:text-neutral-200 text-xl md:text-2xl lg:text-4xl mb-4 underline">Akshat</h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mx-auto max-w-4xl">
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-black dark:text-neutral-200 ">
          <h2 className="mb-4 text-md md:text-lg lg:text-xl">Contact here:</h2>
          <div className="flex flex-col mb-4 text-sm md:text-md lg:text-lg ">
            <div className="flex items-center mb-2 hover:text-purple-500 dark:hover:text-purple-300  transition-all duration-300 transform hover:scale-125">
              <FaPhone className="mr-2" />
              <span className="px-1">+91 8109044092</span>
            </div>
            <div className="flex items-center mb-2 hover:text-purple-500 dark:hover:text-purple-300  transition-all duration-300 transform hover:scale-125">
              <MdOutlineEmail className="mr-2" />
              <span className="px-1">your-email@mail.com</span>
            </div>
            <div className="flex items-center mb-2 hover:text-purple-500 dark:hover:text-purple-300  transition-all duration-300 transform hover:scale-125">
              <FaMap className="mr-2" />
              <span className="px-1">Indore, Madhya Pradesh-452016</span>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="" target="_blank" rel="noopener noreferrer" className=" hover:text-purple-500 dark:hover:text-purple-300 transition-all duration-300 transform hover:scale-150">
              <FaWhatsapp size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="px-6 hover:text-purple-500 dark:hover:text-purple-300 transition-all duration-300 transform hover:scale-150">
              <FaTelegramPlane size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 md:mt-0 "> {/* Hidden on small screens */}
          <img src={dd} alt="visit again" className="bg-black dark:bg-neutral-900 pb-4 w-[107px] h-[111px] md:w-[200px] md:h-[200px]" />
        </div>
      </div>
      
      <span className="block mt-8 text-sm text-center text-gray-700 dark:text-neutral-400">
        &#169; Akshat Saxena. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
