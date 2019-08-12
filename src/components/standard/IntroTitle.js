import React from 'react'
import Text from './Text'

const Intro = ({ color, children }) => (
  <Text fontSize={3} color={color}>
    {children}
  </Text>
)

export default Intro
