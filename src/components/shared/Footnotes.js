import React from 'react'
import { Box, MarkdownText, StandardSection as Section } from '../general/index'
import { Subtitle } from '../typography/index'

const Footnotes = ({ footnotes, bg }) => (
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
