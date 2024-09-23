import { GoProjectRoadmap } from "react-icons/go";
import { motion } from "framer-motion";
import p1 from "/src/assets/p1.png";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';

const Projects = () => {
  return (
    <div id="Projects" className="Projects-container min-h-screen">
      <motion.div 
        initial={{y:-100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.3}}
        className="flex flex-col justify-center pb-8"
        >
        <div className="flex justify-center items-center space-x-4">
          <GoProjectRoadmap size={27} className="dark:text-neutral-200" />
            <h2 className="text-black dark:text-neutral-200 text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                Projects
            </h2>
        </div>
        <span className="text-black dark:text-neutral-200 text-center">My Learings & Creativity</span>
      </motion.div>
      
      <Swiper
        effect={'coverflow'}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5
        }}
      >
      <SwiperSlide>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row bg-blue-100 dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden md:w-[700px] md:h-[320px] lg:w-[1000px] lg:h-[350px] mx-auto"> {/* Adjusted width and height for desktop */}
            
            {/* Image Section */}
            <div className="md:w-1/2 w-full h-48 md:h-full"> {/* Full height image on larger screens */}
              <img src={p1} alt="Project" className="w-full h-full object-contain bg-white" /> {/* Responsive image */}
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col justify-between p-4 w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2 text-black dark:text-neutral-200">
                Personal Portfolio Website 
              </h2>
              <p className="text-base text-gray-700 dark:text-neutral-400 mb-4">
                <span className="text-gray-800 dark:text-neutral-300">Technologies Used :</span> MERN Stack [React, Node.js, MongoDB, Express], Tailwind CSS 
              </p>
              <p className="text-sm text-gray-800 dark:text-neutral-300 mb-6">
                This is my Personal Portfolio Website, it showcases my web development skills. Its a full stack project involving MongoDB as database with express server and react frontend styled with tailwind css.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a href="source-code-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                    Source Code
                  </button>
                </a>
                <a href="deployed-link-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row bg-blue-100 dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden md:w-[700px] md:h-[320px] lg:w-[1000px] lg:h-[350px] mx-auto"> {/* Adjusted width and height for desktop */}
            
            {/* Image Section */}
            <div className="md:w-1/2 w-full h-48 md:h-full"> {/* Full height image on larger screens */}
              <img src={p1} alt="Project" className="w-full h-full object-contain bg-white" /> {/* Responsive image */}
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col justify-between p-4 w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2 text-black dark:text-neutral-200">
                Personal Portfolio Website 
              </h2>
              <p className="text-base text-gray-700 dark:text-neutral-400 mb-4">
                <span className="text-gray-800 dark:text-neutral-500">Technologies Used :</span> MERN Stack [React, Node.js, MongoDB, Express], Tailwind CSS 
              </p>
              <p className="text-sm text-gray-800 dark:text-neutral-300 mb-6">
                This is my Personal Portfolio Website, it showcases my web development skills. Its a full stack project involving MongoDB as database with express server and react frontend styled with tailwind css.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a href="source-code-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                    Source Code
                  </button>
                </a>
                <a href="deployed-link-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row bg-blue-100 dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden md:w-[700px] md:h-[320px] lg:w-[1000px] lg:h-[350px] mx-auto"> {/* Adjusted width and height for desktop */}
            
            {/* Image Section */}
            <div className="md:w-1/2 w-full h-48 md:h-full"> {/* Full height image on larger screens */}
              <img src={p1} alt="Project" className="w-full h-full object-contain bg-white" /> {/* Responsive image */}
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col justify-between p-4 w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2 text-black dark:text-neutral-200">
                Personal Portfolio Website 
              </h2>
              <p className="text-base text-gray-700 dark:text-neutral-400 mb-4">
                <span className="text-gray-800 dark:text-neutral-500">Technologies Used :</span> MERN Stack [React, Node.js, MongoDB, Express], Tailwind CSS 
              </p>
              <p className="text-sm text-gray-800 dark:text-neutral-300 mb-6">
                This is my Personal Portfolio Website, it showcases my web development skills. Its a full stack project involving MongoDB as database with express server and react frontend styled with tailwind css.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a href="source-code-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                    Source Code
                  </button>
                </a>
                <a href="deployed-link-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row bg-blue-100 dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden md:w-[700px] md:h-[320px] lg:w-[1000px] lg:h-[350px] mx-auto"> {/* Adjusted width and height for desktop */}
            
            {/* Image Section */}
            <div className="md:w-1/2 w-full h-48 md:h-full"> {/* Full height image on larger screens */}
              <img src={p1} alt="Project" className="w-full h-full object-contain bg-white" /> {/* Responsive image */}
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col justify-between p-4 w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2 text-black dark:text-neutral-200">
                Personal Portfolio Website 
              </h2>
              <p className="text-base text-gray-700 dark:text-neutral-400 mb-4">
                <span className="text-gray-800 dark:text-neutral-500">Technologies Used :</span> MERN Stack [React, Node.js, MongoDB, Express], Tailwind CSS 
              </p>
              <p className="text-sm text-gray-800 dark:text-neutral-300 mb-6">
                This is my Personal Portfolio Website, it showcases my web development skills. Its a full stack project involving MongoDB as database with express server and react frontend styled with tailwind css.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <a href="source-code-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                    Source Code
                  </button>
                </a>
                <a href="deployed-link-url" target="_blank" rel="noopener noreferrer">
                  <button className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>



    </div>
  )
}

export default Projects