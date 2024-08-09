import express from "express";
import {
  createTasks,
  deleteTasks,
  updateTasks,
  getAllTasks,
} from "../Controllers/tasks.control.js";

const router = express.Router();

// Route for tasks collection
router.route("/tasks").get(getAllTasks).post(createTasks);
// Route for individual task by ID
router.route("/tasks/:id").delete(deleteTasks).patch(updateTasks);

export default router;
