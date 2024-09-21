import { FaGithub, FaLinkedin, FaInstagramSquare} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion";

const container = (delay) =>
    ({ hidden : {x:-100, opacity:0},
      visible : { x : 0, opacity:1,
      transition : { duration : 0.5 , delay : delay}
      },
    })

const Socials = () => {
  return (
    <motion.div variants={container(0.9)} initial="hidden" animate="visible" className="fixed mt-5 left-3 md:left-4 lg:left-4 top-1/3 flex flex-col space-y-4 md:space-y-6 text-xl sm:text-2xl md:text-3xl text-black dark:text-neutral-200">
        <a href="https://www.linkedin.com/in/akshat-saxena-5a2098223/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
            <FaLinkedin/> 
        </a>
        <a href="https://github.com/GitHub-Akshat" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
            <FaGithub/> 
        </a>
        <a href="https://x.com/AkshatS05004078?t=iBSCxb01jeUTGIqbwoOswQ&s=08" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
            <FaSquareXTwitter/> 
        </a>
        <a href="https://www.instagram.com/aksh_at_03?igsh=dWdrazF2OHU4NWVy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-purple-300 transition-all duration-300 transform hover:scale-125">
            <FaInstagramSquare/> 
        </a>
    </motion.div>
  )
}

export default Socials
