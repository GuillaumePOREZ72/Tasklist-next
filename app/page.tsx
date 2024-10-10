"use client";
import { useState, useEffect } from "react";
import {
  Input,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Alert,
  AlertIcon,
  Heading,
  Text,
  Card,
  Spinner,
} from "@chakra-ui/react";

import { ITask } from "./types/index";

import TaskCard from "../app/components/Task";
import NoTask from "../app/components/NoTasks";
import Loading from "../app/components/Loading";
import Header from "../app/components/Header";
import AddTask from "../app/components/AddTask";

export default function Home() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Create a new Task
  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: task,
        }),
      });
      if (response.ok) {
        setTask("");
        await fetchTasks();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // Fetch all the tasks
  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  // Delete a task
  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllTasks((prevTasks) =>
          prevTasks.filter((task: ITask) => task._id !== id)
        );
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Complete a task
  const handleCompleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/complete/${id.toString()}`, {
        method: "PATCH",
      });
      if (response.ok) {
        await fetchTasks();
      } else {
        console.log("Error editing task.");
      }
    } catch (error) {
      console.log("Error editing task:", error);
    }
  };

  // Fetch all the tasks when the component is loaded
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Flex direction="column" p="2rem">
            {allTasks.length > 0 ? (
              allTasks.map((individualTask: ITask) => (
                <TaskCard
                  key={individualTask._id}
                  individualTask={individualTask}
                  onComplete={handleCompleteTask}
                  onDelete={handleDeleteTask}
                />
              ))
            ) : (
              <NoTask />
            )}
          </Flex>
        </>
      )}
    </>
  );
}
