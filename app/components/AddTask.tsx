import { Flex, Input, Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

import { AddTaskProps } from "../types/index";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => (
  <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
    <Input
      placeholder="Nouvelle tâche..."
      size="lg"
      onChange={({ target: { value } }) => setTask(value)}
      value={task}
      style={{ background: "#fff" }}
    />
    <Button colorScheme="blue" size="lg" onClick={handleCreateTask}>
      <SmallAddIcon />
    </Button>
  </Flex>
);

export default AddTask;
