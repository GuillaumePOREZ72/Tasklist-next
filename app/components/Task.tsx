import React from "react";
import { Card, Flex, Text, Button } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

import { TaskProps } from "../types/index";

const TaskCard = ({ individualTask, onComplete, onDelete }: TaskProps) => {
  const { _id, completed, task: taskName } = individualTask;

  return (
    <Card p="2rem" mb="0.5rem" variant="outline" key={_id}>
      <Flex alignItems="center">
        {individualTask.completed ? (
          <Text flexGrow="1" as="del">
            {taskName}
          </Text>
        ) : (
          <Text flexGrow="1">{taskName}</Text>
        )}
        <Flex>
          <Button
            ml="1rem"
            colorScheme="green"
            onClick={() => onComplete(individualTask._id)}
            isDisabled={completed}
          >
            <CheckIcon />
          </Button>
          <Button
            ml="1rem"
            colorScheme="red"
            onClick={() => onDelete(individualTask._id)}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default TaskCard;
