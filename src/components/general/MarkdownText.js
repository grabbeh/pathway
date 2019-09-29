import React from 'react'
import { Text } from '../typography/index'

const MarkdownText = props => (
  <Text
    {...props}
    dangerouslySetInnerHTML={{
      __html: props.html
    }}
  />
)

export default MarkdownText
