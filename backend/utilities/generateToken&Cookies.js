import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (res, adminID) => { 
    const token = jwt.sign({adminID}, process.env.JWT_SECRET, { expiresIn: "1d"})

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    });

    return token;
}

export default generateTokenAndSetCookies
