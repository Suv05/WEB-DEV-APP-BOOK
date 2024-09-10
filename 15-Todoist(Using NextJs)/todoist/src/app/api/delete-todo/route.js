import Tasklist from "@/app/model";
import { NextResponse } from "next/server";
import createConnection from "@/app/db";

export async function DELETE(req) {
  try {
    await createConnection(process.env.MONGO_URI);

    const { searchPrama } = new URL(req.url);
    const id = searchPrama.get("id");

    if (!id) {
      return NextResponse.json({
        status: "error",
        msg: "can't find the task",
      });
    }

    const deleteTask = await Tasklist.findByIdAndDelete(id);
    return NextResponse.json({
      status: "success",
      msg: "task deleted sucessefuly",
    });
  } catch (err) {
    return NextResponse.json({
      status: "error",
      msg: "something went worng",
    });
  }
}
