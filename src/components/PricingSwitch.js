import {Switch, Text, Box, FormControl, FormLabel} from '@chakra-ui/react'

const PricingSwitch = ({ onChange }) => {
  return (
    <div>

<FormControl display="flex" alignItems="center" justifyContent='center' mb={6}>
  <FormLabel htmlFor="pricing-option" mb="0">
    Enable <Text as='span' textTransform='uppercase'>monthly</Text> pricing
  </FormLabel>
  <Switch id="pricing-option" colorScheme='teal' onChange={onChange}/>
</FormControl>
    </div>
  )
}

export default PricingSwitch
