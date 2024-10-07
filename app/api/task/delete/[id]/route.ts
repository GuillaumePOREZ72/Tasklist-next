import Task from "@app/models/tasks";
import { connectToDB } from "@app/utils/database";
import { NextResponse } from "next/server";
import {IDeleteTaskRequestParams} from "@app/types/index"


export const DELETE = async (request: Request, { params }: IDeleteTaskRequestParams) => {
    try {
        await connectToDB();
        await Task.findByIdAndDelete(params.id);
        return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to delete task" }, { status: 500 });
    }
}