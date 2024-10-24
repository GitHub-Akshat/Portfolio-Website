import { GoProjectRoadmap } from "react-icons/go";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useProjectStore from "../Store/projectStore";
import { useEffect } from "react";
import Loader from "./loading"

const Projects = () => {
  const { projects, getProjects, loading, message } = useProjectStore();

  useEffect(() => {
    getProjects(); 
  }, [getProjects]);

  if (loading) {
    return <div className="flex justify-center items-center h-full"><Loader/></div>;
  }
  
  
  if (message) {
    return <p className="text-red-500 font-bold">{message}</p>;
  }
  
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
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        pagination={{    
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-blue-700 dark:bg-gray-300 mt-12"></span>`; // Change the colors here
        }}}
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id}>
            <motion.div
              initial={{ x: -200, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay:0.3 }}
            >
              <div className="container mx-auto p-6">
                <div className="flex flex-col md:flex-row bg-blue-100 dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden md:w-[700px] md:h-[320px] lg:w-[1000px] lg:h-[350px] mx-auto transition-all duration-300 transform hover:scale-110"> {/* Adjusted width and height for desktop */}
                  
                  {/* Image Section */}
                  <div className="md:w-1/2 w-full h-48 md:h-full"> 
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain bg-white" /> 
                  </div>
                  
                  {/* Text Section */}
                  <div className="flex flex-col justify-between p-4 w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-2 text-black dark:text-neutral-200">
                      {project.title} 
                    </h2>
                    <p className="text-base text-gray-700 dark:text-neutral-400 mb-4">
                      <span className="text-gray-800 dark:text-neutral-300">Technologies Used :</span> {project.technologies.join(', ')}
                    </p>
                    <p className="text-sm text-gray-800 dark:text-neutral-300 mb-6">
                      {project.description}
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <button aria-label={`View source code for ${project.title}`} className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                          Source Code
                        </button>
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <button aria-label={`View live demo of ${project.title}`} className="w-full md:w-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                          Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Projects
