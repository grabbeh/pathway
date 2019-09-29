import React from 'react'
import { Box, MarkdownText, StandardSection as Section } from '../general/index'
import { Subtitle } from '../typography/index'

const Footnotes = ({ footnotes, bg }) => (
  <section>
    <Box bg={bg}>
      <Section px={0} pt={0}>
        <Subtitle>Footnotes</Subtitle>
        <MarkdownText html={footnotes} />
      </Section>
    </Box>
  </section>
)

export default Footnotes
