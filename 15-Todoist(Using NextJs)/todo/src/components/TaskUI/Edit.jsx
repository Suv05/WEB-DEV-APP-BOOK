import { Cross } from "lucide-react";
import { getSingleTask, updateForm } from "@/actions";
import { useState } from "react";

function Edit({ taskId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  async function handelEdit(id) {
    const taskData = await getSingleTask(id);

    const { title, des } = taskData;

    setTitle(title);
    setDes(des);

    setIsOpen(true);
  }

  //handel submission forms
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    await updateForm(formData, taskId);
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="text-yellow-500 mr-2"
        onClick={() => handelEdit(taskId)}
      >
        Edit
      </button>

      {/* edit form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              <Cross />
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Edit Task
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="mb-2 font-medium">Task Name</label>
              <input
                name="title" // This matches the 'title' field in your action
                className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task name"
                defaultValue={title}
              />

              <label className="mb-2 font-medium">Task Description</label>
              <textarea
                name="des" // This matches the 'des' field in your action
                className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter task description"
                rows={3}
                defaultValue={des}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit;
