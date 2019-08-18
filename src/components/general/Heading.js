import React from 'react'
import Text from '../typography/Text'

const H1 = Text.withComponent('h1')

const Heading = ({ children, color = 'green' }) => (
  <H1 fontSize={[6, 7]} lineHeight='68px' m={0} color={color} mb={3}>
    {children}
  </H1>
)

export default Heading
