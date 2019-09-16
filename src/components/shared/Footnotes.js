import React from 'react'
import MarkdownText from '../general/MarkdownText'
import Box from '../general/Box'
import Flex from '../general/Flex'

const Footnotes = ({ footnotes }) => (
  <Flex justifyContent='center'>
    <Box
      mx={3}
      width={[null, null, 1000]}
      maxWidth={[null, 800, 1000]}
      pb={[4, 5]}
    >
      <MarkdownText html={footnotes} />
    </Box>
  </Flex>
)

export default Footnotes
