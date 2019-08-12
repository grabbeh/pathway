import React from 'react'
import MarkdownText from './MarkdownText'

const BodyText = ({ html, color }) => (
  <MarkdownText fontSize={3} color={color} html={html} />
)

export default BodyText
