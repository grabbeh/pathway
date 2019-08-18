import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import CircleWord from '../components/general/CircleWord'
import Arc from '../svg/Arc'
import Box from '../components/general/Box'

const Test = () => (
  <Wrapper>
    <CircleWord style={{ transform: 'rotate(100deg)' }} word='Key fact' />
    <Box ml={200} mb={200}>
      <Arc size={300} />
    </Box>
  </Wrapper>
)

export default Test
