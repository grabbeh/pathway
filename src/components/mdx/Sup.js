import React from 'react'
import Text from '../typography/Text'

export const Sup = props => (
  <Text.sup fontSize={3} color='white'>
    {props.children}
  </Text.sup>
)

export default Sup
