import React from 'react'
import Text from '../typography/Text'

const MarkdownSpan = props => (
  <Text.span
    {...props}
    dangerouslySetInnerHTML={{
      __html: props.html
    }}
  />
)

export default MarkdownSpan
