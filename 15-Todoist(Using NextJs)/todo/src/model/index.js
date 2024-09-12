import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
});

const Task = models.Task || model("Task", taskSchema);

export default Task;
