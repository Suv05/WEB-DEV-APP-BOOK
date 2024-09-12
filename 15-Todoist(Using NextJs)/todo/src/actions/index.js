"use server";

import Task from "@/model";
import createConnection from "@/db";
import { revalidatePath } from "next/cache";

// Action to create a new task
export async function createNewTask(formData) {
  try {
    await createConnection();

    const title = formData.get("title");
    const des = formData.get("des");

    const newTask = await Task.create({ title, des });

    const serializedTask = {
      id: newTask._id.toString(), // Convert ObjectId to string
      title: newTask.title,
      des: newTask.des,
    };

    revalidatePath("/");
    return serializedTask; // Return a plain object
  } catch (err) {
    console.error("can't create task");
    throw new Error("Error creating the task");
  }
}

//delete task
export async function deleteTask(id) {
  try {
    await createConnection();
    const deletedTask = await Task.findByIdAndDelete(id).lean(); // Use .lean() to get plain JavaScript object
    revalidatePath("/");
    return {
      id: deletedTask._id.toString(), // Convert ObjectId to string
      title: deletedTask.title,
      des: deletedTask.des,
    };
  } catch (err) {
    console.error("Can't delete task");
    throw new Error("Error deleting the task");
  }
}

//update task
//step-1 fetch indivisual task data
export async function getSingleTask(id) {
  try {
    await createConnection();
    if (!id) {
      throw new Error("Id not found");
    }

    const taskData = await Task.findById(id).lean(); // Use .lean() to get plain JavaScript object
    const serializedData = {
      id: taskData._id.toString(), // Convert ObjectId to string
      title: taskData.title,
      des: taskData.des,
    };

    return serializedData;
  } catch (error) {
    console.error(error);
  }
}

//step-2 now update the task data
// Step-2 now update the task data
export async function updateForm(formData, taskId) {
  try {
    await createConnection();


    const title = formData.get("title");
    const des = formData.get("des");

    // Find the task by ID and update it
    const editedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, des },
      { new: true } // Return the updated document
    ).lean(); // Use .lean() to get a plain JavaScript object

    if (!editedTask) {
      throw new Error("Task not found");
    }

    const serializedTask = {
      id: editedTask._id.toString(), // Convert ObjectId to string
      title: editedTask.title,
      des: editedTask.des,
    };

    revalidatePath("/");


    return serializedTask; // Return a plain object
  } catch (err) {
    console.error("Something went wrong:", err);
    throw new Error("Check what went wrong");
  }
}


//fetch task
export async function getAllTask() {
  try {
    await createConnection();
    const findAllTask = await Task.find({}).lean(); // Use .lean() to get plain JavaScript objects
    const serializedTasks = findAllTask.map((task) => ({
      id: task._id.toString(), // Convert ObjectId to string
      title: task.title,
      des: task.des,
    }));
    revalidatePath("/");
    return serializedTasks; // Return plain objects
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}
