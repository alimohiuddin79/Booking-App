import express from "express";
import { createRoom, deleteRoom, getRoomById, getRooms, updateRoom } from "../controllers/rooms.js";

import protect from "../middleware/authentication.js";


const router = express.Router();

//CREATE
router.post("/:hotelId", protect, createRoom);
//UPDATE
router.put("/:id", protect, updateRoom);

//DELTE
router.delete("/:id/:hotelId", protect, deleteRoom);

//GET
router.get("/:id", getRoomById);

//GET ALL
router.get("/", getRooms);

export default router;