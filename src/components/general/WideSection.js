import React from 'react'
import Box from './Box'
import Flex from './Flex'

const WideSection = ({ id, children, bg }) => (
  <section id={id}>
    <Box bg={bg}>
      <Flex justifyContent='center'>
        <Box mx={[3, 3, 6]} maxWidth={1200} py={5}>
          {children}
        </Box>
      </Flex>
    </Box>
  </section>
)

export default WideSection
