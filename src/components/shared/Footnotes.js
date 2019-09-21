import React from 'react'
import MarkdownText from '../general/MarkdownText'
import Box from '../general/Box'
import Section from '../general/StandardSection'
import Subtitle from '../typography/Subtitle'

const Footnotes = ({ footnotes, bg }) => (
  <Box bg={bg}>
    <Section pt={0} px={0}>
      <Subtitle>Footnotes</Subtitle>
      <MarkdownText html={footnotes} />
    </Section>
  </Box>
)

export default Footnotes
