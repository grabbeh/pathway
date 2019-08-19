import React from 'react'
import Text from './Text'

const SectionTitle = props => (
  <Text {...props} lineTitle='tagline' fontWeight='bold' color={props.color} fontSize={5}>
    {props.children}
  </Text>
)

export default SectionTitle
