import React from 'react'
import Text from './Text'

const MarkdownText = props => (
  <Text
    {...props}
    dangerouslySetInnerHTML={{
      __html: props.html
    }}
  />
)

export default MarkdownText
