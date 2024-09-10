import { NextResponse } from "next/server";
import Tasklist from "@/app/model";
import createConnection from "@/app/db";

export async function POST(req) {
  try {
    // Establish a connection to the database
    await createConnection(process.env.MONGO_URI);

    // Parse the request body
    const { title, description } = await req.json();

    // Validate the title
    if (!title) {
      return NextResponse.json(
        {
          status: "error",
          msg: "Title is required",
        },
        { status: 400 }
      );
    }

    // Create a new task
    const task = await Tasklist.create({ title, description });

    // Respond with success
    return NextResponse.json({
      status: "success",
      msg: "Task created successfully",
    });
  } catch (err) {
    // Respond with error details
    return NextResponse.json(
      {
        status: "error",
        msg: `Something went wrong: ${err.message}`,
      },
      { status: 500 }
    );
  }
}
