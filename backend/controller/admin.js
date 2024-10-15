import bcrypt from "bcryptjs";
import Admin from "../model/admin.js";
import generateTokenAndSetCookies from "../utilities/generateToken&Cookies.js";

const Login = async(req,res)=> {
    const { username , password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if(!admin)
        {
            return res.status(401).json({ message:"Admin not found" })
        }
        const passmatch = await bcrypt.compare(password, admin.password);
        if(!passmatch)
        {
            return res.status(401).json({ message:"Invalid Credentials"});
        }
        generateTokenAndSetCookies(res, admin._id);
        return res.status(201).json({ 
            success: true, 
            message: "Logged in successfully", 
            admin :{ ...admin._doc, password : undefined},
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: `Server error :  ${error.message}` });
    }

};

const LogOut = (req,res)=> {
    res.clearCookie("token");
    return res.status(200).json({ success: true, message: "Logged out successfully" });
};

const checkAuth = async (req, res) => {
    try {
        const admin = await Admin.findById(req.adminID);
        if(!admin)
        {
            return res.status(401).json({ success: false, message: "User not Found"});
        }
        return res.status(201).json({ success: true, admin:{ ...admin._doc, password: undefined}});
    } 
    catch (error) {
        console.error(error)
        return res.status(401).json({success:false, message : error.message});
    }
}

export { LogOut, Login, checkAuth};