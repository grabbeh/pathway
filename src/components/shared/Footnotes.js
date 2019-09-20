import React from 'react'
import MarkdownText from '../general/MarkdownText'
import Box from '../general/Box'
import Flex from '../general/Flex'
import Subtitle from '../typography/Subtitle'

const Footnotes = ({ footnotes }) => (
  <Flex justifyContent='center'>
    <Box
      width={[1, 800, 1000]}
      maxWidth={[null, 800, 1000]}
      px={[3, 0]}
      pb={[4, 5]}
    >
      <Subtitle>Footnotes</Subtitle>
      <MarkdownText html={footnotes} />
    </Box>
  </Flex>
)

export default Footnotes
