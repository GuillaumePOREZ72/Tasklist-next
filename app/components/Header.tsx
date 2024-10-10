import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

const Header = () => (
  <Flex p="2rem" direction="column" alignItems="center">
    <Heading as="h1" size="4xl" className="tasklist-title">
      TaskList.io
    </Heading>
    <Text fontSize="xl" mt="2rem" className="tasklist-slogan">
      TaskList est un outil open-source pour la gestion de tâches qui simplifie
      votre quotidien.
    </Text>
  </Flex>
);

export default Header;
