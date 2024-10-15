import express from "express";
import {checkAuth} from "../controller/admin.js";
import verifyToken from "../Middleware/checkToken.js";
const projectRoutes = express.Router();
import upload from "../Middleware/multer.js";
import { AddProject, DeleteProject, GetProjects } from "../controller/project.js";

projectRoutes.get("/check-auth" , verifyToken, checkAuth);
projectRoutes.get("/getprojects", GetProjects);
projectRoutes.post("/addprojects", verifyToken, upload.single('image'), AddProject);
projectRoutes.delete("/deleteproject/:id", verifyToken, DeleteProject); 

export default projectRoutes