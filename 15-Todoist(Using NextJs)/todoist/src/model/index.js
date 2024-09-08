import mongoose from "mongoose";
const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false, // Make it optional if needed
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt
  }
);

const Task = model("Task", taskSchema);
export default Task;
