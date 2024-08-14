import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "This feild is required"],
    set: (value) =>
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    minLength: 3,
    maxLength: 25,
  },
  email: {
    type: String,
    required: [true, "This feild is required"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Enter a valid email addrese",
    ],
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
    minLength: 6,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model("User", UserSchema);

export default User;
