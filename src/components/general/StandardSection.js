import React from 'react'
import Box from './Box'
import Flex from './Flex'

const StandardSection = ({ bg, children }) => (
  <section>
    <Box bg={bg}>
      <Flex justifyContent='center'>
        <Box mx={[3, 3, 6]} maxWidth={[null, 800, 1000]} py={[4, 5]}>
          {children}
        </Box>
      </Flex>
    </Box>
  </section>
)

export default StandardSection
