import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false, // Make it optional if needed
      default: "No descrption added",
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt
  }
);

const Tasklist = models.Tasklist || model("Tasklist", taskSchema);
export default Tasklist;
