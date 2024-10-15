import { useState } from "react";
import { Loader, Lock, User } from "lucide-react"
import Input from "../../Components/Input";
import authStore from "../../Store/authStore";
import NavforAdmin from "../../Components/NavforAdmin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogInPage = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const{ error, isLoading, login } = authStore();
    const navigate = useNavigate();
  
    const handleLogin = async(e) => {
      e.preventDefault();
      await login(username, password)
      navigate("/admin-home");
      toast.success("LoggedIn Successfully");
    }
    
    return (
      <>
        <NavforAdmin/>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-gray-900 dark:bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                Welcome Back Admin!
              </h2>
              <form onSubmit={handleLogin}>
                <Input 
                  icon={User}
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange= { (e) => setUserName(e.target.value)}
                />
                <Input 
                  icon={Lock}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange= { (e) => setPassword(e.target.value)}
                /> 
                { error && <p className="text-red-500 font-semibold mb-2">{error}</p> }

                <button className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform duration-200 transform hover:scale-105 active:scale-95 "
                  type="submit"
                  disabled={isLoading}
                >
                  { isLoading ? <Loader className="w-6 h-6 animate-spin text-center mx-auto"/> : "Login" }
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default LogInPage

