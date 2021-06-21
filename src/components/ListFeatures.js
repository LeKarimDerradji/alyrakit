import working from "../assets/working.svg"
import {
  Image,
  Heading,
  Container,
  Stack,
  Center,
  SimpleGrid,
  List,
  ListItem,
  ListIcon, 
  Box,
} from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ]
  return (
    <Container 
    bg='gray.50' 
    maxW='100%' 
    mb={6} 
    pt="28" 
    pb="18">
      <Center>
      <Stack direction={["column", null, "row"]} sx={{gap: '2rem'}} cv={3}>
        <Box>
      <Image
        src={working}
        alt="Illustration with a computer on the desk"
        width="400"
        height="295"
      />
      </Box>
      <Box>
      <Heading fontSize='4xl'  maxW="30ch" mt={9} mb={7}>The most useful resource ever created for designers</Heading>
      <List fontSize='1xl'>
        <SimpleGrid columns={2}>
        {list.map((el, index) => {
          return <ListItem key={index}> 
          <ListIcon as={CheckCircleIcon} color="teal.300"/>
          {el} 
          </ListItem>
        })}
        </SimpleGrid>
      </List>
      </Box>
    </Stack>
    </Center>
    </Container>
  )
}

export default ListFeatures
