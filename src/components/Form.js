import { useState } from "react"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react"

const Form = ({isOpen, onClose}) => {
  const [sampleRequest, setSampleRequest] = useState(false)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    // get the data
    // do sth with the data
    setSampleRequest(true)
  }
  return (
    
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {!sampleRequest ? (
        <FormControl onSubmit={handleFormSubmit} mb={4}>
          <FormLabel htmlFor="name">Your name</FormLabel>
          <Input mb={4} id="name" placeholder="Joe Doe" required />

          <FormLabel htmlFor="email">Your email</FormLabel>
          <Input mb={4} id="email" type="email" placeholder="joe@doe.com" required />

          <Button type="submit" mb={4}>Submit</Button>
        </FormControl>
      ) : (
        <Alert status="success">
          <AlertIcon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription display="block">
                Thank you! You will receive your sample soon!
              </AlertDescription>
           <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
      )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
     
  )
}

export default Form
