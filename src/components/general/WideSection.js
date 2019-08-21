import React from 'react'
import Box from './Box'
import Flex from './Flex'

const StandardSection = ({ children, bg }) => (
  <Box bg={bg}>
    <Flex justifyContent='center'>
      <Box mx={[3, 3, 6]} maxWidth={1200} py={5}>
        {children}
      </Box>
    </Flex>
  </Box>
)

export default StandardSection
