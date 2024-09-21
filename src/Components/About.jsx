import op from "/src/assets/op.jpg";

const About = () => {
  return (
    <div id="About" className="about-container">
      <h2 className=" text-black dark:text-neutral-200 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
        About Me
      </h2>
      <div  className="min-h-screen flex flex-col md:flex-row text-black dark:text-neutral-200 overflow-x-hidden ">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img 
            className="md:h-80 object-cover rounded-lg" 
            src={op} 
            alt="About image"
          />
        </div>

        {/* Right Section - Text */}
        <div className="md:w-1/2 p-4">
          <p className="text-md leading-relaxed">
            vdfhvdfsvh dhvd hdbhdfdfvhdvhdscjsdcjycsdcygscsdgydvdfvgydfvuefvufvdfvhhbdfhvfdhvdfdfdbhdfhdfhyyffyhhyygygf
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
