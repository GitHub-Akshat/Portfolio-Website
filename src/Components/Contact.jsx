import { RiContactsBookFill } from "react-icons/ri";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div id="Contact" className="Contact-container min-h-screen">
      <motion.div 
        initial={{y:-100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.3}}
        className="flex flex-col justify-center pb-8"
        >
        <div className="flex justify-center items-center space-x-4">
          <RiContactsBookFill size={35} className="dark:text-neutral-200" />
            <h2 className="text-black dark:text-neutral-200 text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
              Get in touch
            </h2>
        </div>
        <span className="text-black dark:text-neutral-200 text-center">Contact me</span>
      </motion.div>
    </div>
  )
}

export default Contact