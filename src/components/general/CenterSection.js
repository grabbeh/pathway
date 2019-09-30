import React from 'react'
import Flex from './Flex'
import Box from './Box'

const CenterSection = ({ children }) => (
  <section>
    <Flex justifyContent='center'>
      <Box mx={3} py={[4, 5]} width={1} maxWidth={1024}>
        {children}
      </Box>
    </Flex>
  </section>
)

export default CenterSection
