import { 
  Image,
  Text, 
  Heading } from "@chakra-ui/react"

const Feature = ({ icon, title, text }) => {
  return (
    <div>
      <Image boxSize="64px" src={icon} alt="icon" />
      <Heading fontSize='xl' mb={3} as="h2">{title}</Heading>
      <Text color='purple.400'>{text}</Text>
    </div>
  )
}

export default Feature
