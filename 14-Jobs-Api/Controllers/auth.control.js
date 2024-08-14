import User from "../models/User.model.js";
import { StatusCodes } from "http-status-codes";
import AppError from "../Errors/AppError.js";
import UnauthError from "../Errors/UnauthError.js";

//registre
export const register = async (req, res, next) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

//login
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  //check if email and password in empty or not
  if (!email || !password) {
    throw new AppError(
      "Please provied your email and password",
      StatusCodes.BAD_REQUEST
    );
  }

  //if email provided then find user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthError(
      "Invalid Candidentals,please try to signup first",
      StatusCodes.UNAUTHORIZED
    );
  }

  //if email found then match password
  const isPasswordCorrect = await user.matchPassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthError(
      "Invalid Candidentals,wrong password",
      StatusCodes.UNAUTHORIZED
    );
  }
  // Create JWT token
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    msg: "You logged in sucessfully",
    user: { name: user.name },
    token,
  });
};
