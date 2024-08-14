import User from "../models/User.model.js";
import { StatusCodes } from "http-status-codes";

export const register = async (req, res, next) => {
  const user = await User.create({ ...req.body });

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "You registerd sucessfully", user });
};
export const login = async (req, res, next) => {
  res.statusCode(200).json({ msg: "You loged in sucessfully" });
};
