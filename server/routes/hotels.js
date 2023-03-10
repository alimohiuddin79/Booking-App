import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controllers/hotels.js";
import protect from "../middleware/authentication.js";


const router = express.Router();

//CREATE
router.post("/", protect, createHotel);
//UPDATE
router.put("/:id", protect, updateHotel);

//DELTE
router.delete("/:id", protect, deleteHotel);

//GET
router.get("/find/:id", getHotelById);

//GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

export default router;