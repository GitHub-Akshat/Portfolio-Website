import op from "/src/assets/op.jpg";

const About = () => {
  return (
    <div id="About" className="text-black dark:text-neutral-200 md:flex overflow-hidden items-center md:flex-wrap md:justify-center">
      {/* Left Section - Image */}
      <div className="md:w-1/2 p-4 flex justify-center md:justify-start">
        <img 
          className="md:h-80 object-cover rounded-lg" 
          src={op} 
          alt="About image"
        />
      </div>

      {/* Right Section - Text */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left mb-4">
          About Me
        </h2>
        <p className="text-md leading-relaxed">
          vdfhvdfsvh dhvd hdbhdfdfvhdvhdscjsdcjycsdcygscsdgydvdfvgydfvuefvufvdfvhhbdfhvfdhvdfdfdbhdfhdfhyyffyhhyygygf
        </p>
      </div>
    </div>
  );
};

export default About;
