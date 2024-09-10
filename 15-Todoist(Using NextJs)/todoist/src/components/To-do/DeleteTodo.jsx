import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";

async function delTodo(id) {
  try {
    const res = await fetch(`/api/delete-todo?id:${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("can't delete task now");
    }

    const data = await res.json();

    if (data?.status === "success") {
      console.log("delete task sucessfuly");
    }
  } catch (err) {
    console.error(err);
  }
}

function DeleteTodo({ deleteID }) {
  const router = useRouter();
  const onDelete = (deleteID) => {
    delTodo(deleteID);
    router.refresh();
  };
  return (
    <>
      <button
        onClick={() => onDelete(deleteID)}
        className="flex items-center justify-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
      >
        <AiOutlineDelete className="text-xl" />
        <span>Delete</span>
      </button>
    </>
  );
}

export default DeleteTodo;
