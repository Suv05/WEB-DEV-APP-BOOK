import express from "express";
import { register,login } from "../Controllers/auth.control.js";

const router = express.Router();

// Route for authntication
router.post("/signup", register);
router.post("/signin", login);

export default router;
