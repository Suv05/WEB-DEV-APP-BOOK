import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import NotFoundError from "../Errors/NotFoundError.js";
import JobList from "../models/Job.model.js";

//route="/"
export const getAllJobs = async (req, res, next) => {
  const job = await JobList.find({});
  res.status(StatusCodes.OK).json({ msg: "get all jobs", job });
};
export const createJobs = async (req, res, next) => {
  const job = await JobList.create({
    ...req.body,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Job created successfully", job });
};

//route="/:id"
export const getSingleJob = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    throw new NotFoundError("Invalid Id");
  }
  const job = await JobList.findById( id );
  if (!job) {
    throw new NotFoundError("Job not found");
  }
  res.status(StatusCodes.OK).json({ msg: "get a single job", job });
};
export const deleteJob = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    throw new NotFoundError("Invalid Id");
  }
  const job = await JobList.findByIdAndDelete( id );
  if (!job) {
    throw new NotFoundError("Job not found");
  }
  res.status(StatusCodes.OK).json({ msg: "delete a job", job });
};
export const updateJob = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    throw new NotFoundError("Invalid Id");
  }
  const { title, company } = req.body;
  if (!title || !company) {
    throw new NotFoundError("Invalid Feild", StatusCodes.BAD_REQUEST);
  }
  const job = await JobList.findByIdAndUpdate(
    id,
    { title, company },
    { new: true }
  );
  if (!job) {
    throw new NotFoundError("Job not found");
  }
  res.status(StatusCodes.OK).json({ msg: "update a job", job });
};
