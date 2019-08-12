import React from 'react'
import Box from './general/Box'
import Flex from './general/Flex'

const StandardSection = ({ children, bg }) => (
  <Box bg={bg}>
    <Flex justifyContent='center'>
      <Box mx={[3, 6]} maxWidth={800} py={5}>
        {children}
      </Box>
    </Flex>
  </Box>
)

export default StandardSection
