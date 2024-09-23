import { GoProjectRoadmap } from "react-icons/go";
import { motion } from "framer-motion";
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
    </div>
  )
}

export default Projects