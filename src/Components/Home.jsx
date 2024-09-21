import Socials from "./Socials";
import { ReactTyped } from "react-typed";
import me from "/src/assets/me.jpg";
import {motion} from "framer-motion";

const container = (delay) =>
({ hidden : {x:-100, opacity:0},
  visible : { x : 0, opacity:1,
  transition : {duration : 0.5 , delay:delay}
  },
})


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content container */}
      <div className="hero-content container mx-auto px-6 py-12 sm:px-10 md:px-12 lg:px-8 lg:mx-4 my-12 md:mx-4 lg:pr-12 sm:my-16 md:my-12">
        <div className="flex flex-col-reverse md:flex-row text-black dark:text-neutral-200 items-center">
          
          {/* Text Section */}
          <div className="text-section mt-12 md:mt-8 lg:mt-16 text-center md:text-left md:px-2 md:ml-8 lg:ml-16 xl:ml-56 md:w-1/2">
            <motion.h1 variants={container(0.2)} initial="hidden" animate="visible" className="text-3xl sm:text-4xl lg:text-6xl leading-tight"> Akshat Saxena </motion.h1><br/>
            <ReactTyped
              className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight"
              strings={[
                "Full Stack Developer",
                "Software Developer",
                "A Programmer",
                "Frontend Developer",
                "Backend Developer",
                "React Developer",
                "An Engineer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              loop
            />
            <motion.p variants={container(0.5)} initial="hidden" animate="visible" className="text-sm md:text-md lg:text-base text-center md:text-left leading-relaxed mt-6">
              I&apos;m a developer based in India, and<br />
              I&apos;m very passionate and dedicated to my work.
            </motion.p>
            <motion.a
              initial={{y:100, opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.9, ease: "easeInOut" ,delay:0.9}}
              href={"https://www.google.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg transition-all hover:rounded-2xl duration-300
              text-sm md:text-md lg:text-lg"
            >
              Resume/CV 
            </motion.a>
          </div>

          {/* Image Section */}
          <div className="image-section mt-12 md:mt-24 md:ml-0 w-full md:w-1/2 flex justify-center lg:ml-0">
            <motion.img
              initial={{ x :100, opacity:0}}
              animate={{x:0,opacity:1,borderRadius: [
                '60% 40% 30% 70%/60% 30% 70% 40%', // initial
                '30% 60% 70% 40%/50% 60% 30% 60%', // middle
                '60% 40% 30% 70%/60% 30% 70% 40%', // end
              ],}}
              transition={{
                x: { duration: 1,delay:1.2 }, // Sliding animation for 1 second
                opacity: { duration: 1 , delay:1.2}, 
                borderRadius: {
                  duration: 10, // Blob morph animation for 8 seconds
                  ease: 'easeInOut',
                  repeat: Infinity, // Loop the morphing animation infinitely
                  repeatType: 'mirror',
                }
              }}
              src={me}
              alt="Akshat Saxena's profile picture"
              className="rounded-full w-52 h-auto md:w-80 object-cover shadow-inset-custom1 dark:shadow-inset-custom"
              srcSet={`${me}?w=210 210w, ${me}?w=330 330w`}
              sizes="(max-width: 640px) 210px, (min-width: 641px) 330px"
            />
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="socials-container">
        <Socials />
      </div>
    </div>
  );
};

export default Home;
