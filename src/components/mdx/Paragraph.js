import React from 'react'
import Text from '../typography/Text'



export const Paragraph = (props) => (
  <Text.p fontSize={3} fontWeight='text' lineHeight='text'>{props.children}</Text.p>
)



export default Paragraph
