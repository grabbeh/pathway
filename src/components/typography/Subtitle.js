import React from 'react'
import MarkdownText from '../general/MarkdownText'
import Box from '../general/Box'
import Text from './Text'

const Subtitle = ({ html, color, children }, props) => (
  <Box>
    {html ? (
      <MarkdownText
        {...props}
        fontSize={4}
        lineHeight='subtitle'
        fontWeight='subtitle'
        color={color}
        html={html}
      />
    ) : (
      <Text fontSize={4} lineHeight='subtitle' fontWeight='subtitle' color={color}>
        {children}
      </Text>
    )}
  </Box>
)

export default Subtitle
