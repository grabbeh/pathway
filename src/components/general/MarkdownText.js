import React from 'react'
import Text from '../typography/Text'

const MarkdownText = props => (
  <Text
    lineHeight='text'
    fontSize={3}
    {...props}
    dangerouslySetInnerHTML={{
      __html: props.html
    }}
  />
)

export default MarkdownText
