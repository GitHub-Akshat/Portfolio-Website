import express from "express";
import { checkAuth, Login, LogOut } from "../controller/admin.js";
import verifyToken from "../Middleware/checkToken.js";
const adminRoutes = express.Router();

adminRoutes.get("/check-auth" , verifyToken, checkAuth);
adminRoutes.post("/login", Login);
adminRoutes.post("/logout", LogOut);

export default adminRoutes;