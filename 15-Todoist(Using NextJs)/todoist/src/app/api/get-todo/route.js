import Tasklist from "@/app/model";
import { NextResponse } from "next/server";
import createConnection from "@/app/db";

export async function GET() {
  try {
    await createConnection(process.env.MONGO_URI);

    const tasks = await Tasklist.find({});
    return NextResponse.json({
      status: "success",
      tasks,
    });
  } catch (err) {
    return NextResponse.json({
      status: "error",
      msg: "Can't find any task",
    });
  }
}
