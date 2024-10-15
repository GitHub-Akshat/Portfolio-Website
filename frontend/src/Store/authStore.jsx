import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:4000/api/admin";

axios.defaults.withCredentials = true;

const authStore = create((set) => ({
    admin: null,
    isAuthenticated: false,
    error:null,
    isLoading:false,
    isCheckingAuth:true,
    message:null,

    login:async(username, password)=>{
        set({isLoading:true, error:null});
        try{
            const response = await axios.post(`${API_URL}/login`, {username, password});
            set({ admin:response.data.admin, isAuthenticated:true, isLoading:false, error:null});
        }
        catch(error)
        {
            set({error:error.response?.data?.message || "Error Logging in", isLoading: false})
            throw error;
        }
    },

    logout:async()=>{
        set({isLoading:true, error:null});
        try{
            await axios.post(`${API_URL}/logout`);
            set({ admin:null, isAuthenticated:false, error:null, isLoading:false});
        }
        catch(error)
        {
            set({ error:"Error Logging Out", isLoading: false})
            throw error;
        }
    },

    checkAuth:async()=>{
        set({ isCheckingAuth:true, error:null });
        try{
            const response = await axios.get(`${API_URL}/check-auth`);
            set({ admin:response.data.admin, isAuthenticated:true, isCheckingAuth:false});
        }
        catch(error)
        {
            console.log("Auth Check Failed:", error);
            set({error:null, isCheckingAuth:false,isAuthenticated:false})
        }
    }, 

}));

export default authStore