import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// Routes
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";

dotenv.config();

const app = express();

// Middle ware
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));

// MONGODB Connection
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGODB_URL).then(() => {
            app.listen(5000, () => console.log(`server is running on port: 5000`));
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

connectDB();
mongoose.connection.on("disconnected", () => console.log("mongoDB disconnected"));
mongoose.connection.on("connected", () => console.log("mongoDB connected"));


// Routes middleware

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/hotels", hotelsRoutes);
app.use("/rooms", roomsRoutes);