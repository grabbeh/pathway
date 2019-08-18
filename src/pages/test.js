import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import CircleWord from '../components/general/CircleWord'
import Circle from '../svg/CircleTwo'

const Test = () => (
  <Wrapper>
    <CircleWord style={{ transform: 'rotate(100deg)' }} word='Key fact' />

    <Circle />
  </Wrapper>
)

export default Test
