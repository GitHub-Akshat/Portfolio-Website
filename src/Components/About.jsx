import op from "/src/assets/op.jpg";
import{ motion } from "framer-motion"

const About = () => {
  return (
    <div id="About" className="about-container">
      <motion.h2 
        initial={{y:-100 , opacity:0}}
        whileInView={{y:0 , opacity:1}}
        transition={{duration:0.5 , delay:0.3}}
        className="my-12 md:my-20 pt-3 pb-3 text-black dark:text-neutral-200 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
        About Me
      </motion.h2>
      <div  className="ml-8 min-h-screen flex flex-col md:flex-row text-black dark:text-neutral-200 overflow-x-hidden ">
        {/* Left Section - Image */}
        <div className="md:w-1/2 p-4 flex justify-center mb-8 md:mb-0">
          <motion.img 
            initial={{x:-100 , opacity:0}}
            whileInView={{x:0 , opacity:1}}
            transition={{duration:0.5}}
            className="rounded-lg w-full max-w-xs md:max-w-lg md:h-80 shadow-lg" 
            src={op} 
            alt="About image"
          />
        </div>

 {/* Right Section - Text */}
        <div className="md:w-1/2 p-4">
          <motion.div 
            initial={{x:100 , opacity:0}}
            whileInView={{x:0 , opacity:1}}
            transition={{duration:0.5}}
            className="text-sm md:text-md lg:text-lg text-center md:text-left leading-relaxed">
            <p className="mb-4">
              Hi, I&apos;m <span className="font-semibold">Akshat</span>, a Full Stack Web Developer specializing in the <span className="font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js). I love creating seamless and dynamic web applications that enhance user experience.
            </p>
            <p>
              In addition to my web development skills, I enjoy exploring new technologies and finding innovative solutions. Let&apos;s connect and create something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
