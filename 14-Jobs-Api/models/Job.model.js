import mongoose from "mongoose";
const { Schema, model } = mongoose;

const JobsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Job title can't be empty"],
      minLength: 3,
      maxLength: 50,
    },
    description: {
      type: String,
      required: [true, "Job description can't be empty"],
      minLength: 50,
      maxLength: 300,
    },
    company: {
      type: String,
      required: [true, "Company name can't be empty"],
      minLength: 5,
      maxLength: 30,
    },
    location: {
      type: String,
      required: [true, "Location can't be empty"], // Added validation
      minLength: 20,
      maxLength: 50,
    },
  },
  { timestamps: true } // Enable timestamps
);

const JobList = model("JobList", JobsSchema); // Changed model name to singular form

export default JobList;
