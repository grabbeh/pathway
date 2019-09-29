import React from 'react'
import Text from './Text'

const Intro = props => (
  <Text {...props} fontSize={3} color={props.color}>
    {props.text}
  </Text>
)

export default Intro
