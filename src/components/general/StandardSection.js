import React from 'react'
import Box from './Box'
import Flex from './Flex'

const StandardSection = ({ children, bg }) => (
  <section>
    <Box bg={bg}>
      <Flex justifyContent='center'>
        <Box mx={[3, 6]} maxWidth={[null, 800, 1000]} py={5}>
          {children}
        </Box>
      </Flex>
    </Box>
  </section>
)

export default StandardSection
