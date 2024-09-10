"use client";

import { AiOutlineEdit } from "react-icons/ai";
import DeleteTodo from "./DeleteTodo";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function TaskCard({ tasks, onEdit }) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  });
  return (
    <div className="grid grid-cols-1 gap-4 px-5">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task._id}
            className="bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Task Title */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {task.title}
            </h3>

            {/* Task Description */}
            <p className="text-gray-400 mb-6">{task.description}</p>

            {/* Buttons: Edit and Delete */}
            <div className="flex justify-between items-center">
              {/* Edit Button */}
              <button
                onClick={() => onEdit(task)}
                className="flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                <AiOutlineEdit className="text-xl" />
                <span>Edit</span>
              </button>

              {/* Delete Button */}
              <DeleteTodo deleteID={task._id} />
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No tasks available</p>
      )}
    </div>
  );
}

export default TaskCard;
