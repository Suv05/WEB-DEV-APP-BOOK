import mongoose from "mongoose";
import TaskList from "../models/Task.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const allTask = await TaskList.find({});
    res.status(200).json({ msg: "get all tasks", allTask });
  } catch (error) {
    res.status(500).json({ msg: "can't get all tasks", error: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    const task = req.body;
    const newTask = await TaskList.create({
      task: task.task,
    });
    console.log(newTask);
    res.status(200).json({ msg: "Task created successfully", newTask });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ msg: "Can't create tasks", error: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid task ID" });
    }
    // Await the deletion process
    const deletedTask = await TaskList.findByIdAndDelete(id);

    if (!deleteTasks) {
      return res.status(404).json({ msg: "Task not found" });
    }

    console.log("Deleted task:", deletedTask);
    res.status(200).json({ msg: "Task deleted successfully", deletedTask });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ msg: "Can't delete task", error: error.message });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const { task, complete } = req.body;

    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ msg: "No task find with this id" });
    }

    const updatedTask = await TaskList.findByIdAndUpdate(
      id,
      {
        task,
        complete,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    console.log("Updated Task:", updatedTask);
    res.status(200).json({ msg: " task updated sucessfuly", updatedTask });
  } catch (error) {
    res.status(500).json({ msg: "can't update task", error: error.message });
  }
};
