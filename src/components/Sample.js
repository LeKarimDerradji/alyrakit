import {Button, Container, Text} from "@chakra-ui/react"
import {Center, useDisclosure} from '@chakra-ui/react'
import Form from "./Form"


const Sample = () => {
  const {onOpen, isOpen, onClose} = useDisclosure()
  return (
    <Container id="sample" py="24">
      <Text fontSize='xl' textAlign='center' nb='6'>
        Using AlyraKit to build your site means never worrying about designing
        another page or cross browser compatibility. Our ever-growing library of
        components and pre-designed layouts will make your life easier.
      </Text>
      <Center>
        <Button colorScheme='teal' size='lg' onClick={onOpen}>Download a Sample</Button>
      </Center>
      <Form isOpen={isOpen} onClose={onClose}/>
    </Container>
  )
}

export default Sample
