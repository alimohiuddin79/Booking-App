import User from "../models/User.js";

export const updateUser = async (req, res) => {

    try {
        if(req.user.id === req.params.id || req.user.isAdmin){
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(user); 
        } else {
            res.status(403).json("Not authorized");
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        if(req.user.id === req.params.id || req.user.isAdmin){
            await User.findByIdAndRemove(req.params.id);
            res.status(200).json("User deleted");
        } else {
            res.status(403).json("Not authorized");
        }
         
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUserById = async (req, res) => {

    try {
        if(req.user.id === req.params.id || req.user.isAdmin){
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } else {
            res.status(403).json("Not authorized");
        }
         
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUsers = async (req, res) => {

    try {
        if(req.user.isAdmin){
            const user = await User.find({});
            res.status(200).json(user); 
        } else {
            res.status(403).json("Not authorized");
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
}