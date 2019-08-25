import React from 'react'
import Text from './Text'

const SectionTitle = props => (
  <Text.h1
    {...props}
    lineHeight={['medium', 'tagline']}
    fontWeight='bold'
    color={props.color || 'grey'}
    fontSize={[5, 6]}
    my={0}
  >
    {props.children}
  </Text.h1>
)

export default SectionTitle
