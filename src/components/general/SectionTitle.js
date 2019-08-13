import React from 'react'
import Text from './Text'

const SectionTitle = ({ color, children }) => (
  <Text fontWeight='bold' color={color} fontSize={5}>
    {children}
  </Text>
)

export default SectionTitle
