import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    const token = req.cookies.access_token;

    if(!token) return res.status(401).json("You are not authenticated");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.status(403).json("Invalid token");

        req.user = user;
        console.log("found cookie");
        next();
    });
}

export default protect;