import Task from "@app/models/tasks";
import { connectToDB } from "@app/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const tasks = await Task.find({});

    return NextResponse.json(tasks, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed to fetch tasks" }, { status: 500 })
  }
};
