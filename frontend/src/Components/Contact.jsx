import { RiContactsBookFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Swal from 'sweetalert2';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB_3_ID);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    }
    else {
      Swal.fire({
        title: "Error",
        text: "There was an error sending your message. Please try again.",
        icon: "error"
      });
    }
  };

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

      <div className="container mx-auto flex justify-center p-4">
        <form onSubmit={onSubmit} className="w-full max-w-3xl bg-gray-300 dark:bg-neutral-800 shadow-lg rounded-lg p-6 space-y-6">
          {/* Row 1: Name and Email */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2">
              <label className="block text-black dark:text-neutral-200 mb-2">
                Full Name
              </label>
              <input type="text" placeholder="Enter Your Full Name" className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" required/>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label className="block text-black dark:text-neutral-200 mb-2">
                Email
              </label>
              <input type="email" placeholder="abc@mail.com" className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" required/>
            </div>
          </div>

          {/* Row 2: Mobile No. and Subject */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-1/2">
              <label className="block text-black dark:text-neutral-200 mb-2">
                Mobile No.
              </label>
              <input type="number" placeholder="1234567890 (Optional)" className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="contact"/>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label className="block text-black dark:text-neutral-200 mb-2">
                Subject
              </label>
              <input type="text" placeholder="Subject of Email" className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="subject" required/>
            </div>
          </div>

          {/* Row 3: Description */}
          <div>
            <label className="block text-black dark:text-neutral-200 mb-2">
              Description
            </label>
            <textarea cols={25} rows={5} type="text" placeholder="Message for Akshat" className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="Message" required/>
          </div>

          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
            Send Message
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contact;
