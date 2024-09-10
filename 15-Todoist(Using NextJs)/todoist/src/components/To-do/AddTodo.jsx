"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function AddTodo({}) {
  const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data) => {
    console.log(data); // Handle task creation
    try {
      const res = await fetch("/api/post-todo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

      reset(); // Reset form after submission
      setIsOpen(false);
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };
  return (
    <>
      <div className="my-4">
        <button
          type="button"
          className="rounded-lg py-2 px-3 text-white border border-yellow-500 font-light text-lg hover:bg-yellow-400 active:scale-75 hover:scale-105 hover:font-semibold"
          onClick={() => setIsOpen(true)}
        >
          Add New Task
        </button>
      </div>

      {/* modal ui */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-slate-900 rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 focus:outline-none"
            >
              <AiOutlineClose className="text-2xl" />
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-6 text-white">Create Task</h2>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Title Input */}
              <div>
                <label className="block text-base font-medium text-white mb-1">
                  Title
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-transparent text-white"
                  placeholder="Enter task title"
                />
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-base font-medium text-white mb-1">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows="4"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-transparent text-white"
                  placeholder="Enter task description"
                />
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-transparent border border-yellow-300 text-white rounded-lg text-lg hover:bg-yellow-500 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTodo;
