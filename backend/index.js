import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import path from "path";

import adminRoutes from "./Routes/adminRoutes.js";
import Database from "./db/dbconnection.js"; 
import projectRoutes from "./Routes/projectRoutes.js";

const __dirname = path.resolve();

const app = express();

app.use(cors({ origin:"http://localhost:5173", credentials: true}))
app.use(express.json());
app.use(cookieParser());

Database();

app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 4000

if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (_, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});