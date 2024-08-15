import User from "../models/User.model.js";
import UnauthError from "../Errors/UnauthError.js";
import Jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const auth = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = Jwt.verify(token.split(" ")[1], process.env.JWT_PASSKEY);

    console.log("Token decoded:", decoded);

    const user = await User.findById(decoded.userID).select("-password");
    console.log("User found:", user);

    if (!user) {
      throw new UnauthError("User not found", StatusCodes.UNAUTHORIZED);
    }

    req.user = { userID: user._id, name: user.name };
    next();
  } catch (err) {
    console.log("Authentication error:", err.message);
    throw new UnauthError("Invalid Authentication", StatusCodes.UNAUTHORIZED);
  }
};

export default auth;
