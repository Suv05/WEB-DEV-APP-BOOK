"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Form from "./Form";
import { getAllTask, deleteTask } from "@/actions/index.js";
import Edit from "./Edit";

function CreateTask() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getAllTask();
      setTasks(tasks); // No need to map _id to string anymore, as we're using id now
    }
    fetchTasks();
  }, []);

  // for delete action
  async function handleDelete(id) {
    await deleteTask(id);
    const tasks = await getAllTask();
    setTasks(tasks); // Again, just use tasks directly
  }

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="text-center">
        <Button className="mt-5 text-lg" onClick={toggleIsOpen}>
          Create Task
        </Button>
      </div>
      <Form isOpen={isOpen} onClose={toggleIsOpen} />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
        <ul>
          {Array.isArray(tasks) && tasks.length > 0 ? (
            tasks.map((task) => (
              <li
                key={task.id} // Use id instead of _id
                className="border-b py-2 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-xl capitalize">{task.title}</h3>
                  <p>{task.des}</p>
                </div>
                <div>
                  <Edit taskId={task.id}/> {/* Use id instead of _id */}
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(task.id)} // Use id instead of _id
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default CreateTask;
