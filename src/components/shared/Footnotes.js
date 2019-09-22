import React from 'react'
import MarkdownText from '../general/MarkdownText'
import Box from '../general/Box'
import Section from '../general/StandardSection'
import Subtitle from '../typography/Subtitle'

const Footnotes = ({ footnotes, bg }) => (
  <section>
    <Box bg={bg}>
      <Section pt={0} px={[3, 0]}>
        <Subtitle>Footnotes</Subtitle>
        <MarkdownText html={footnotes} />
      </Section>
    </Box>
  </section>
)

export default Footnotes
