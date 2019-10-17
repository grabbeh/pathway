import React from 'react'
import { Box, MarkdownText, StandardSection as Section } from '../general'
import { Subtitle } from '../typography'

const Footnotes = ({ footnotes, bg = 'white' }) => (
  <section>
    <Box bg={bg}>
      <Section pt={0}>
        <Subtitle text='Footnotes' />
        <MarkdownText html={footnotes} />
      </Section>
    </Box>
  </section>
)

export default Footnotes
