import Task from "@app/models/tasks";
import { connectToDB } from "@app/utils/database";
import { NextResponse } from "next/server";
import { IDeleteTaskRequestParams } from "@app/types/index";

export const PATCH = async (
  request: Request,
  { params }: IDeleteTaskRequestParams
) => {
  try {
    await connectToDB();
    const existingTask = await Task.findById(params.id);

    if (!existingTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    existingTask.completed = true;

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete task" },
      { status: 500 }
    );
  }
};
