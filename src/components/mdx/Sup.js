import React from 'react'
import Text from '../typography/Text'

export const Sup = props => (
  <Text fontSize={1} color='grey'>
    {props.children}
  </Text>
)

export default Sup
