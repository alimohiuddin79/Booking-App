import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.findOne({email: email});
        if(user) return res.status(400).json({ message: "User already exists"});

        const salt = await bcrypt.genSalt(12);

        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({username, email, password: hashPassword});

        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({username: username});
        if(!user) return res.status(400).json({ message: "User not exists"});

        const checkPassword = await bcrypt.compare(password, user.password);

        if(checkPassword){
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '30d'});

            res.cookie("access_token", token, { 
                // set cookie expire time for 30days
                expires: new Date(Date.now() + 900000*60*30),
                httpOnly: true,
            }).status(200).json(token);
        } else {
            res.status(400).json({message: "Incorrect Password"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}