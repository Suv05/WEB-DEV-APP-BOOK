import express from "express";
import {
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  createJobs,
} from "../Controllers/jobs.control.js";

const router = express.Router();

router.route("/").get(getAllJobs).post(createJobs);
router.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

export default router;
