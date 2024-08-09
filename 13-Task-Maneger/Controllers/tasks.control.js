import mongoose from "mongoose";
import TaskList from "../models/Task.model.js";
import { asyncWrapper } from "../Middleware/asyncWarp.js";
import NotFoundError from "../Error/NotFoundError.js";
import AppError from "../Error/AppError.js";

export const getAllTasks = asyncWrapper(async (req, res, next) => {
  const allTask = await TaskList.find({});
  if (!allTask.length) {
    throw new NotFoundError("No tasks found");
  }
  res.status(200).json({ msg: "get all tasks", allTask });
});

export const createTasks = asyncWrapper(async (req, res, next) => {
  const task = req.body;
  const newTask = await TaskList.create({
    task: task.task,
  });
  res.status(200).json({ msg: "Task created successfully", newTask });
});

export const deleteTasks = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid task ID", 400);
  }
  // Await the deletion process
  const deletedTask = await TaskList.findByIdAndDelete(id);

  if (!deletedTask) {
    throw new NotFoundError("Task not found");
  }

  res.status(200).json({ msg: "Task deleted successfully", deletedTask });
});

export const updateTasks = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const { task, complete } = req.body;

  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid task ID", 400);
  }

  const updatedTask = await TaskList.findByIdAndUpdate(
    id,
    {
      task,
      complete,
    },
    { new: true, runValidators: true }
  );

  if (!updatedTask) {
    throw new NotFoundError("Task not found");
  }
  res.status(200).json({ msg: " task updated sucessfuly", updatedTask });
});
