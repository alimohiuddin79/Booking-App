import express from "express";
import { updateUser, deleteUser, getUserById, getUsers } from "../controllers/users.js";
import protect from "../middleware/authentication.js";


const router = express.Router();

//UPDATE
router.put("/:id", protect, updateUser);

//DELTE
router.delete("/:id", protect, deleteUser);

//GET
router.get("/:id", protect, getUserById);

//GET ALL
router.get("/", protect , getUsers);


export default router;