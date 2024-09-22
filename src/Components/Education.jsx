import IIITR from "/src/assets/IIITR.png"
import DVM from "/src/assets/DVM.png"
import { motion } from "framer-motion"

const Education = () => 
{
    return (
        <div id="Education" className="Education-container min-h-screen">
            <motion.div 
                initial={{y:-100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.5, delay:0.3}}
                className="flex flex-col justify-center pb-8">
                <h2 className="text-black dark:text-neutral-200 text-xl sm:text-2xl lg:text-3xl font-semibold text-center">Educational Qualifications</h2>
                <span className="text-black dark:text-neutral-200 text-center">My Personal Journey</span>
            </motion.div>

            {/* LIST */}
            <div className="flex flex-col p-4">
                {/* Timeline Item 1 */}
                <div className="flex flex-col md:flex-row md:justify-center md:h-50 md:pl-12 mb-4 md:mb-0">
                    {/* Left Section */}
                    <motion.div 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.1}}
                        className="flex flex-row shadow-xl dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.3)] w-full md:w-1/2 bg-neutral-200 text-gray-800 dark:bg-white dark:text-black rounded-b-lg rounded-s-lg transform hover:scale-110 transition-transform duration-300">
                        <div className="w-1/4 py-12 pl-4">
                            <img src={IIITR} alt="Logo-College"/>
                        </div>
                        <div className="pl-6 lg:pl-16 sm:pl pt-3 pb-3 w-3/4">
                            <div className="font-semibold text-md sm:text-lg pb-3">Bachelor of Technology in Electronics and Communication </div>
                            <div className="text-sm sm:text-md pb-3">Indian Institute of Information Technology, Ranchi</div>
                            <div className="text-sm sm:text-md pb-3">CGPA: 9.08</div>
                            <div className="text-xs sm:text-sm italic ">
                                <div>2021-25</div>
                                <div>Ranchi, Jharkhand</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Line */}
                    <div className="hidden md:flex w-1 ml-8 mr-8">
                        <div className="w-1 h-full bg-blue-200 dark:bg-white rounded relative">
                        {/* Circle */}
                        <div className="absolute w-5 h-5 rounded-full ring ring-blue-200 bg-blue-500 -left-2"></div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:block w-1/2"></div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex flex-col md:flex-row md:justify-center md:h-50 md:pl-12 mb-4 md:mb-0">
                    {/* Empty Left Section */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Center Line */}
                    <div className="hidden md:flex w-1 ml-8 mr-8">
                        <div className="w-1 h-full bg-blue-200 dark:bg-white rounded relative">
                        {/* Circle */}
                        <div className="absolute w-5 h-5 rounded-full ring ring-blue-200 bg-blue-500 -left-2"></div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <motion.div 
                        initial={{x:100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.2}}
                        className="flex flex-row shadow-xl dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.3)] w-full md:w-1/2 bg-neutral-200 text-gray-800 dark:bg-white dark:text-black rounded-b-lg rounded-e-lg transform hover:scale-110 transition-transform duration-300">
                        <div className="w-1/4 py-12 pl-4">
                            <img src={DVM} alt="School-College"/>
                        </div>
                        <div className="pl-6 lg:pl-16 sm:pl-8 pt-3 pb-3 w-3/4">
                            <div className="font-semibold text-md sm:text-lg pb-3">Senior Secondary<br/> (Class 12th) (PCM) </div>
                            <div className="text-sm sm:text-md pb-3">Dashpur Vidyalaya Mandsaur, Mandsaur</div>
                            <div className="text-sm sm:text-md pb-3">Percentage: 92.8% </div>
                            <div className="text-xs sm:text-sm italic ">
                                <div>2019-20</div>
                                <div>Mandsaur, Madhya Pradesh</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                 {/* Timeline Item 3 */}
                 <div className="flex flex-col md:flex-row md:justify-center md:h-50 md:pl-12 mb-4 md:mb-0">
                    {/* Left Section */}
                    <motion.div 
                        initial={{x:-100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.3}}className="flex flex-row shadow-xl dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.3)] w-full md:w-1/2 bg-neutral-200 text-gray-800 dark:bg-white dark:text-black rounded-b-lg rounded-s-lg transform hover:scale-110 transition-transform duration-300">
                        <div className="w-1/4 py-12 pl-4">
                            <img src={DVM} alt="School-College"/>
                        </div>
                        <div className="pl-6 lg:pl-16 sm:pl-8 pt-3 pb-3 w-3/4">
                            <div className="font-semibold text-md sm:text-lg pb-3">Secondary<br/> (Class 10th) </div>
                            <div className="text-sm sm:text-md pb-3">Dashpur Vidyalaya Mandsaur, Mandsaur</div>
                            <div className="text-sm sm:text-md pb-3">Percentage: 82.2% </div>
                            <div className="text-xs sm:text-sm italic ">
                                <div>2017-18</div>
                                <div>Mandsaur, Madhya Pradesh</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center Line */}
                    <div className="hidden md:flex w-1 ml-8 mr-8">
                        <div className="w-1 h-full bg-blue-200 dark:bg-white rounded relative">
                        {/* Circle */}
                        <div className="absolute w-5 h-5 rounded-full ring ring-blue-200 bg-blue-500 -left-2"></div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:block w-1/2"></div>
                </div>

        </div>
    </div>
    );
}

export default Education