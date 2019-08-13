import React from 'react'
import MarkdownText from './MarkdownText'
import Box from '../general/Box'
import Text from '../general/Text'

const Subtitle = ({ html, color, children }) => (
  <Box>
    {html ? (
      <MarkdownText
        fontSize={4}
        fontWeight='subtitle'
        color={color}
        html={html}
      />
    ) : (
      <Text fontSize={4} fontWeight='subtitle' color={color}>
        {children}
      </Text>
    )}
  </Box>
)

export default Subtitle
