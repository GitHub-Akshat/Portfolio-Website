/* eslint-disable react/prop-types */
import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/homepage";
import LogInPage from "./Pages/Admin/Login";
import AdminHome from "./Pages/Admin/Home";
import authStore from "./Store/authStore";
import Projects from "./Pages/Admin/projects";
import { useEffect } from "react";
import AddProject from "./Pages/Admin/AddProjects";

const ProtectedRoute = ({ children }) => {

  const { isAuthenticated, isCheckingAuth } = authStore(); 

  if (isCheckingAuth) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; 
  }

  return children; 

};

const App = () => {
  
  const { checkAuth } = authStore();
  
  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  return (
  <div className="overflow-x-hidden antialiased">
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950"/>
    </div>
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage/>
          }
        />
        <Route
          path="/login"
          element={
            <LogInPage/>
          }
        />
        <Route
          path="/admin-home"
          element={
            <ProtectedRoute>
              <AdminHome/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-project"
          element={
            <ProtectedRoute>
              <AddProject/>
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Toaster/>
    </div>
  </div>
  );
};

export default App;
