import React from 'react'
import MarkdownText from '../general/MarkdownText'
import Box from '../general/Box'

const Footnotes = ({ footnotes }) => {
  return (
    <Box mx={[3, 3, 6]} maxWidth={[null, 800, 1000]} pb={[4, 5]}>
      <MarkdownText html={footnotes} />
    </Box>
  )
}

export default Footnotes
