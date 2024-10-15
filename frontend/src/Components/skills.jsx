import { motion } from "framer-motion"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoCPlusPlus } from "react-icons/bi"
import { BiLogoHtml5 } from "react-icons/bi"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoCss3 } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import { BiLogoGit } from "react-icons/bi"
import { BiLogoGithub } from "react-icons/bi"
import ChatGptIcon from "/src/assets/cg.png"
import Gemini from "/src/assets/g.png"
import aws from "/src/assets/aws.png"
import cdnary from "/src/assets/cdnary.png"
import r from "/src/assets/r.jpg"
import v from "/src/assets/v.png"
import n from "/src/assets/n.jpg"
import GC from "/src/assets/gc.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const iconVariants = (duration) => ({
  initial : { y:-10 },
  animate : {
    y :[10, -10],
    transition : {
      type : "spring",
      duration : duration,
      repeat : Infinity,
      ease : "linear",
      repeatType : "reverse"
    }
  }
})

const Skills = () => {
  return (
    <div id="Skills" className="Skills-container min-h-screen mt-12">
      <motion.h2 
        initial={{y:-100 , opacity:0}}
        whileInView={{y:0 , opacity:1}}
        transition={{duration:0.5 , delay:0.3}}
        className="my-16 md:my-20 pt-3 pb-3 text-black dark:text-neutral-200 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
        My Skills
      </motion.h2>
      <span className="flex justify-center text-center mb-12 text-md dark:text-neutral-200"> Swipe for More &raquo;</span>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{    
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-blue-700 dark:bg-gray-300 my-4"></span>`; // Change the colors here
        }}}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
      <div className="swiper-button-prev text-blue-700 dark:text-gray-300 md:p-16"></div>
      <div className="swiper-button-next text-blue-700 dark:text-gray-300 md:p-16"></div>
      <SwiperSlide className="p-4">
        <div className="flex flex-col justify-center">
          <h2 className="mb-10 md:mb-16 pt-3 pb-3 text-black dark:text-neutral-200 text-lg sm:text-xl lg:text-2xl font-normal text-center">Technology</h2>
          <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5, delay:0.2}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <TbBrandNextjs className="text-7xl dark:text-white"/>
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
              variants={iconVariants(6)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <SiExpress className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
              variants={iconVariants(7)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoTailwindCss className=" items-center text-7xl text-sky-400"/>
            </motion.div>
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-4">
        <div className="flex flex-col justify-center">
          <h2 className="mb-10 md:mb-16 pt-3 pb-3 text-black dark:text-neutral-200 text-lg sm:text-xl lg:text-2xl font-normal text-center">Programming Language</h2>
          <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5, delay:0.2}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoHtml5 className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoJavascript className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoCss3 className="text-7xl text-sky-500"/>
            </motion.div>
            <motion.div 
              variants={iconVariants(6)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoCPlusPlus className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoTypescript className="text-7xl text-green-500"/>
            </motion.div>
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-4">
        <div className="flex flex-col justify-center">
          <h2 className="mb-10 md:mb-16 pt-3 pb-3 text-black dark:text-neutral-200 text-lg sm:text-xl lg:text-2xl font-normal text-center">Version Control</h2>
          <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5, delay:0.2}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoGit className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <BiLogoGithub className="text-7xl dark:text-white"/>
            </motion.div>
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-4">
        <div className="flex flex-col justify-center">
          <h2 className="mb-10 md:mb-16 pt-3 pb-3 text-black dark:text-neutral-200 text-lg sm:text-xl lg:text-2xl font-normal text-center">Ai Tools</h2>
          <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5, delay:0.2}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <img src={ChatGptIcon} className="h-20 w-20 text-7xl bg-white"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <img src={Gemini} className="h-20 w-20 text-7xl dark:text-white"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <img src={GC} className="h-20 w-20 text-7xl dark:text-white dark:bg-white"/>
            </motion.div>
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-4">
        <div className="flex flex-col justify-center">
          <h2 className="mb-10 md:mb-16 pt-3 pb-3 text-black dark:text-neutral-200 text-lg sm:text-xl lg:text-2xl font-normal text-center">Cloud Services</h2>
          <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5, delay:0.2}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <img src={aws} className="h-20 w-20 text-7xl bg-white"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4 ">
              <img src={cdnary} className="h-20 w-20 text-7xl dark:text-white dark:bg-white"/>
            </motion.div>
          </motion.div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-4">
        <div className="flex flex-col justify-center">
          <h2 className="mb-10 md:mb-16 pt-3 pb-3 text-black dark:text-neutral-200 text-lg sm:text-xl lg:text-2xl font-normal text-center">Hosting Platforms</h2>
          <motion.div
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5, delay:0.2}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <img src={r} className="h-20 w-20 text-7xl bg-white"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <img src={v} className="h-20 w-20 text-7xl dark:text-white dark:bg-white"/>
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate" 
              whileHover={{scale:1.1}} 
              className="p-4 rounded-2xl border-neutral-600 dark:border-neutral-100 border-4">
              <img aria-label="netlify" src={n} className="h-20 w-20 text-7xl dark:text-white"/>
            </motion.div>
          </motion.div>
        </div>
      </SwiperSlide>
    </Swiper> 
    </div>
  )
}

export default Skills