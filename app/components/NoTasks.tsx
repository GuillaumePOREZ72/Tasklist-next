import { Flex, Alert, AlertIcon } from "@chakra-ui/react";

const NoTasks = () => (
  <Alert status="warning" flexDirection="row" alignItems="center">
    <AlertIcon />
    Pas de tache ici, ajoutez-en une !
  </Alert>
);

export default NoTasks;
