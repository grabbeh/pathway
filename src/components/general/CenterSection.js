import React from 'react'
import Flex from './Flex'
import Box from './Box'

const CenterSection = ({ children }) => (
  <section>
    <Flex justifyContent='center'>
      <Box px={[3, 3, 0]} py={[4, 5]} maxWidth={[800, 1000]}>
        {children}
      </Box>
    </Flex>
  </section>
)

export default CenterSection
