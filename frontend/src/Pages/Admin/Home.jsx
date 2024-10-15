import { useNavigate } from "react-router-dom";
import authStore from "../../Store/authStore";
import NavforAdmin from "../../Components/NavforAdmin";
import ad from "../../assets/ad.jpg";
import toast from "react-hot-toast";

const AdminHome = () => {
    const { logout } = authStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login"); 
        toast.success("Logged Out Successfully");
    };


    return (
        <>
            <NavforAdmin/>            
            <div className="flex flex-col items-center justify-center pt-24">
                <h1 className="text-xl lg:text-5xl md:text-3xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200 mb-8">Welcome Admin Akshat,</h1>
                <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-8xl">
                    {/* Picture Section */}
                    <div className="flex-1 flex justify-center mt-4 pb-12 px-12 md:mr-24">
                        <img 
                            src={ad} // Replace with your image URL
                            alt="Admin"
                            className="mt-8 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover shadow-inset-custom1 dark:shadow-inset-custom"
                        />
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col flex-1 space-y-6">
                        {/* Project Button */}
                        <div className="flex flex-col justify-center items-center space-y-4 md:space-x-6 md:space-y-0 md:flex-row">
                            <div className="md:p-8">
                                <button 
                                    onClick={() => navigate("/projects")} 
                                    className="bg-blue-500 text-white text-md sm:text-lg md:text-2xl font-semibold py-4 px-6 sm:px-8 lg:py-6 lg:px-16 rounded-lg shadow hover:bg-blue-600 transition duration-200"
                                >
                                    Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    {/* Logout Button */}
                    <button 
                        onClick={handleLogout} 
                        className="bg-red-500 text-white text-sm sm:text-md md:text-xl font-semibold py-2 px-6 sm:px-8 lg:py-4 lg:px-12 rounded shadow hover:bg-red-600 transition duration-200 self-center md:self-start"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdminHome

