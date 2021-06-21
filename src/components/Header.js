import monitor from "../assets/monitor.svg"
import {Container, Heading, Box, Text } from "@chakra-ui/layout"
import {Button, Image, Stack} from "@chakra-ui/react"

const Header = () => {
  return (
    <Container as='header' maxW='container.lg' mb={6} pt="28" pb="18">
      <Stack direction={["column-reverse", null, "row"]} sx={{gap: '2rem'}}>
        <Box>
      <Heading as='h1'  mb={6}>
        Welcome to <Text as ='span' color='teal'>AlyraKit.</Text> Develop anything.
      </Heading>
      <Text fontSize="2xl"  mb={6}>Build a beautiful, modern website with React and Chakra UI.</Text>

      <Button as ='a' href="#buy-now" size='lg' colorScheme='teal'>Buy it now</Button>
      </Box>
      <Box>
      <Image
        src={monitor}
        alt="Illustration with a computer on the desk"
        width="500"
        height="378"
      />
      </Box>
      </Stack>
    </Container>
  )
}

export default Header
