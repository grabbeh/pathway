import React from 'react'
import Flex from './Flex'
import Box from './Box'

const CenterSection = ({ children }) => (
  <section>
    <Flex justifyContent='center'>
      <Box px={[3, 0, 0]} py={5} maxWidth={800}>
        {children}
      </Box>
    </Flex>
  </section>
)

export default CenterSection
