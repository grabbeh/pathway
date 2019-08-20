import React from 'react'
import Text from './Text'

const SectionTitle = props => (
  <Text.h1
    {...props}
    lineTitle='tagline'
    fontWeight='bold'
    color={props.color || 'grey'}
    fontSize={5}
    my={0}
  >
    {props.children}
  </Text.h1>
)

export default SectionTitle
