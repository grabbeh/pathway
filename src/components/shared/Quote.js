import React from 'react'
import { StandardSection as Section, Box } from '../general'
import { Text } from '../typography'

const Quote = ({ quote, bg }) => (
  <Section bg={bg}>
    <Box>
      <Text fontStyle='italic'>{quote}</Text>
    </Box>
  </Section>
)

export default Quote
