import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {

    const newHotel = await Hotel.create(req.body);
    try {
        const savedHotel = await newHotel;
        res.status(200).json(savedHotel); 
    } catch (error) {
        console.log(error);
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

    // using this route we will find all user search hotels and home featured hotels
    const { min, max, city, ...others } = req.query;
    try {

        let query = {
            cheapestPrice: { $gte: min || 1, $lte: max || 999},
            ...others,
        };

        if(city){
            query.city = city;
        }

        const hotels = await Hotel.find(query).limit(req.query.limit);
        res.status(200).json(hotels); 
    } catch (error) {
        res.status(500).json(error);
    }
}


export const countByCity = async (req, res) => {

    const cities = req.query.cities.split(",");

    try {  
        const list = await Promise.all(cities.map(city => (
            Hotel.countDocuments({city: city})
        )));
        res.status(200).json(list); 
    } catch (error) {
        res.status(500).json(error);
    }
}


export const countByType = async (req, res) => {

    try {  
        const hotelCount = await Hotel.countDocuments({type: "hotel"});
        const villaCount = await Hotel.countDocuments({type: "villa"});
        const resortCount = await Hotel.countDocuments({type: "resort"});
        const apartmentCount = await Hotel.countDocuments({type: "apartment"});
        const cabinCount = await Hotel.countDocuments({type: "cabin"});

        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "apartments", count: apartmentCount},
            {type: "resorts", count: resortCount},
            {type: "villas", count: villaCount},
            {type: "cabins", count: cabinCount},
        ]); 
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}