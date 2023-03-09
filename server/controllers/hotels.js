import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {

    const newHotel = await Hotel.create(req.body);
    try {
        const savedHotel = await newHotel;
        res.status(200).json(savedHotel); 
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateHotel = async (req, res) => {

    try {
        if(req.user.isAdmin){
            const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updatedHotel); 
        } else {
            res.status(403).json("Not authorized");
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteHotel = async (req, res) => {
    try {
        if(req.user.isAdmin){
            await Hotel.findByIdAndRemove(req.params.id);
            res.status(200).json("Hotel deleted");
        } else {
            res.status(403).json("Not authorized");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel); 
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getHotels = async (req, res) => {

    try {
        const hotels = await Hotel.find({});
        res.status(200).json(hotels); 
    } catch (error) {
        res.status(500).json(error);
    }
}