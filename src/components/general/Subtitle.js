import React from 'react'
import MarkdownText from './MarkdownText'

const Subtitle = ({ html, color }) => (
  <MarkdownText fontSize={4} fontWeight='subtitle' color={color} html={html} />
)

export default Subtitle
