import { Cross } from "lucide-react";
import { createNewTask } from "@/actions";

const Form = ({ isOpen, onClose }) => {
  async function handelCreateNewTaskAction(formData) {
    await createNewTask(formData);
  }

  if (!isOpen) return null; // Render nothing if the popup is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <Cross />
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add New Task
        </h2>
        <form action={handelCreateNewTaskAction} className="flex flex-col">
          <label className="mb-2 font-medium">Task Name</label>
          <input
            name="title" // This matches the 'title' field in your action
            className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task name"
          />

          <label className="mb-2 font-medium">Task Description</label>
          <textarea
            name="des" // This matches the 'des' field in your action
            className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
            rows={3}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
