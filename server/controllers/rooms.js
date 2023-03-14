import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res) => {

    const hotelId = req.params.hotelId;
    try {
        const newRoom = await Room.create(req.body);
        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: newRoom._id },
        });
        res.status(200).json(newRoom);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


export const updateRoom = async (req, res) => {

    try {
        if(req.user.isAdmin){
            const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updatedRoom); 
        } else {
            res.status(403).json("Not authorized");
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateRoomAvailability = async (req, res) => {

    try {
        
        await Room.updateOne(
            {"roomNumbers._id": req.params.id},
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.date
                }
            }
        )
        res.status(200).json("Room status has been updated");
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteRoom = async (req, res) => {

    const hotelId = req.params.hotelId;
    try {
        if(req.user.isAdmin){
            await Room.findByIdAndRemove(req.params.id);
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id}
            })
            res.status(200).json("Room deleted");
        } else {
            res.status(403).json("Not authorized");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room); 
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getRooms = async (req, res) => {

    try {
        const rooms = await Room.find({});
        res.status(200).json(rooms); 
    } catch (error) {
        res.status(500).json(error);
    }
}