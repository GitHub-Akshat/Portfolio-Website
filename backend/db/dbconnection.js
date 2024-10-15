import mongoose from "mongoose";

const Database = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
    } 
    catch (error) {
        console.log("Error Connecteing to DB : ", error);
    }
}

export default Database;
