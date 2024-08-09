import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TaskListSchema = new Schema({
  task: {
    type: String,
    required: [true, "Must Provied Name"],
    trim: true,
    maxLength: [30, "Name can't be less than 30 characters"],
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

const TaskList = model("Tasklist", TaskListSchema);

export default TaskList;
