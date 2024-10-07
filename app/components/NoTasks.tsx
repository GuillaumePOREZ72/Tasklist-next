import {Flex, Alert, AlertIcon } from '@chakra-ui/react'

const NoTasks = () => {
  return (
    <Flex>
        <Alert status='warning'>
            <AlertIcon />
            Pas de tâche ici, ajoutez-en une !
        </Alert>
    </Flex>
  )
}

export default NoTasks