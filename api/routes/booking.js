import express from "express";
import Booking from "../models/Booking.js";
import { createBooking } from "../controllers/booking.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createBooking);

export default router;
