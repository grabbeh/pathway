import React from 'react'
import Box from './Box'
import Flex from './Flex'

const StandardSection = ({ bg, children, pt = [4, 5], pb = [4, 5] }) => (
  <section>
    <Box bg={bg}>
      <Flex justifyContent='center'>
        <Box px={3} width={[null, 800, 1000]} pb={pb} pt={pt}>
          {children}
        </Box>
      </Flex>
    </Box>
  </section>
)

export default StandardSection
