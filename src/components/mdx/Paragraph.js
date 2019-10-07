import React from 'react'
import { Text } from '../typography'

export const Paragraph = props => (
  <Text.p color='grey' fontSize={[2, 3]} lineHeight='text'>
    {props.children}
  </Text.p>
)

export default Paragraph
