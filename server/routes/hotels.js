import express from "express";
import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controllers/hotels.js";
import protect from "../middleware/authentication.js";


const router = express.Router();

//CREATE
router.post("/", protect, createHotel);
//UPDATE
router.put("/:id", protect, updateHotel);

//DELTE
router.delete("/:id", protect, deleteHotel);

//GET
router.get("/:id", getHotelById);

//GET ALL
router.get("/", getHotels);
export default router;
