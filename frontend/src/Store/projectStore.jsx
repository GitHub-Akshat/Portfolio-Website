import { create } from 'zustand';
import axios from 'axios';

const API_URL = "http://localhost:4000/api/projects";

const useProjectStore = create((set) => ({
  projects: [],
  message: '',
  loading: false,
  errorMessage: '',
 
  addProject: async (formData) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${API_URL}/addprojects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        set((state) => ({
          projects: [...state.projects, response.data.project], 
          message: 'Project added successfully!',
          errorMessage: '',
          loading: false,
        }));
      }
    } 
    catch (error) {
      console.error('Error adding project:', error);
      set({ 
        message: 'Error adding project',
        errorMessage: error.response ? error.response.data.message : error.message,
        loading: false,
     });
    }
  },
  
  resetMessage: () => set({ message: '', errorMessage: '' }), 

  // Fetch projects from backend
  getProjects: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${API_URL}/getprojects`);
      if (response.data.success) {
        set({
          projects: response.data.projects, // Set the fetched projects to state
          message: '',
          loading: false,
        });
      }
    }
    catch (error) {
      set({
        message: 'Error fetching projects',
        errorMessage: error.response ? error.response.data.message : error.message,
        loading: false,
      });
    }
  },

  deleteProject: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${API_URL}/deleteproject/${id}`);
      set((state) => ({
        projects: state.projects.filter((project) => project._id !== id), 
        message: 'Project deleted successfully!',
        loading: false,
      }));
    } 
    catch (error) {
      set({
        message: 'Error deleting project',
        errorMessage: error.response ? error.response.data.message : error.message,
        loading: false,
      });
    }
  }
    

}));

export default useProjectStore;
