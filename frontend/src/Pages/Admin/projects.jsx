import { useNavigate } from "react-router-dom"; 
import NavforAdmin from "../../Components/NavforAdmin";
import useProjectStore from "../../Store/projectStore";
import { useEffect } from "react";

const Projects = () => {
  const { projects, getProjects, loading, message, deleteProject } = useProjectStore();
  const navigate = useNavigate(); 

  useEffect(() => {
    getProjects(); 
  }, [getProjects]);

  const handleAddProject = () => {
    navigate("/add-project"); 
  };

  return (
    <>
      <NavforAdmin />
      <div className="p-24">
        <h2 className="text-3xl font-semibold mb-8 text-black dark:text-neutral-200">Your Projects</h2>
        { loading ? ( <p>Loading...</p> ) : 
        ( <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            { projects.map((project) => (
              <div key={project._id} className="border p-4 rounded-lg shadow-md border-neutral-600 dark:border-neutral-100">
                <h3 className="text-xl font-semibold text-black dark:text-neutral-200 p-1">{project.title}</h3>
                <p className="text-black dark:text-neutral-200 p-1">{project.description}</p>
                <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover mt-2 p-1" />
                <button 
                  className="bg-red-500 text-white py-1 px-4 rounded mt-4"
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        { message && <p className="text-green-500 mt-4">{message}</p>}
      </div>
      <div className= "pl-24">
        <button onClick={handleAddProject} className="bg-blue-500 text-white py-2 px-4 rounded transition-transform duration-200 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-none">
          Add Project
        </button>
      </div>
    </>
  );
};

export default Projects;
