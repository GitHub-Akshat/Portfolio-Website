import { useEffect, useRef, useState } from "react";
import NavforAdmin from "../../Components/NavforAdmin";
import useProjectStore from "../../Store/projectStore";
import toast from "react-hot-toast";

const AddProject = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    technologies: '',
    description: '',
    deployLink: '',
    githubLink: ''
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name == "image") 
    {
      setFormData({ ...formData, image: files[0] });
    }
    else{
      setFormData({ ...formData, [name]: value });
    }
    
  };

  const { addProject, message, resetMessage } = useProjectStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('image', formData.image);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('technologies', formData.technologies);
    data.append('deployLink', formData.deployLink);
    data.append('githubLink', formData.githubLink);

    await addProject(data);

    setFormData({
      title: '',
      technologies: '',
      description: '',
      deployLink: '',
      githubLink: '',
      image: null
    });


  if (fileInputRef.current) {
    fileInputRef.current.value = ''; 
  }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      const timeout = setTimeout(() => {
        resetMessage();
      }, 3000); 

      return () => clearTimeout(timeout);
    }
  }, [message, resetMessage]);

  return (
    <>
      <NavforAdmin />
      <div className="text-white pt-20 px-28">
        <h1 className="font-semibold text-4xl text-gray-800 dark:text-neutral-200 underline text-center">Add New Project</h1>
        <form onSubmit={handleSubmit} className="mt-2 p-16 bg-gray-700 dark:bg-slate-800 rounded-xl">
          <div>
            <label className="block mb-2">Upload Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              ref={fileInputRef}
              required
              className="rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border text-black rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Technologies Used:</label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              required
              className="border text-black rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border  text-black rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Deploy Link:</label>
            <input
              type="url"
              name="deployLink"
              value={formData.deployLink}
              onChange={handleChange}
              required
              className="border text-black rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">GitHub Link:</label>
            <input
              type="url"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              required
              className="border text-black rounded p-2 w-full"
            />
          </div>
          <button type="submit" className="mt-6 bg-purple-700 text-white p-4 rounded transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
