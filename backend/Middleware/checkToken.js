import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token)
    {
        return res.status(401).json({ success: false, message: "Unauthorised - NO token provided"});
    }
    try {
       const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
       if(!decodedToken) 
       {
        return res.status(401).json({ success: false, message: "Unauthorised - Invalid token"});
       }
       req.adminID = decodedToken.adminID;
       next();
    } 
    catch (error) {
        console.error(error)
        res.status(403).json({success:false, message : error.message});
    }
}

export default verifyToken;