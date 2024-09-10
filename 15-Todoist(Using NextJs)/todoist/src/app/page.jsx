import AddTodo from "@/components/To-do/AddTodo";
import TaskCard from "@/components/To-do/TaskCard";

async function getAllTask() {
  try {
    const res = await fetch("http://localhost:3000/api/get-todo", {
      cache: "no-store", // Optional: to avoid cached responses
    });
    if (!res.ok) {
      throw new Error("can't find items");
    }

    const result = await res.json();
    return result?.tasks; // Assuming tasks is an array in the result
  } catch (error) {
    console.error("can't get the tasks", error);
    return [];
  }
}

export default async function Home() {
  const tasks = await getAllTask(); // Fetch the tasks
  return (
    <>
      <div className="mx-auto text-center">
        <AddTodo />
        <TaskCard tasks={tasks} />
      </div>
    </>
  );
}
